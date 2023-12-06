namespace $ {

	export class $piterjs_meetup extends $piterjs_model {

		@ $mol_mem
		start( next?: $mol_time_moment ) {
			const str = this.sub( 'start', $hyoo_crowd_reg ).str( next?.toString() )
			return str ? new $mol_time_moment( str ) : null!
		}
		
		@ $mol_mem
		video( next?: string ) {
			return this.sub( 'video', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		speeches_node() {
			return this.sub( 'speeches', $hyoo_crowd_list )
		}

		@ $mol_mem
		speeches() {
			
			const ids = this.speeches_node().list()
			const fund = this.world()!.Fund( $piterjs_speech )
			const speeches = ids.map( id => fund.Item( $mol_int62_string_ensure( id )! ) )
			
			for( const speech of speeches ) speech.steal_rights( this )
			speeches.sort( ( a, b )=> a.start().valueOf() - b.start().valueOf() )
			
			return speeches
		}

		@ $mol_action
		speech_make() {
			const speech = this.world()!.Fund( $piterjs_speech ).make()!
			this.speeches_node().add( speech.id() )
			return speech
		}

		@ $mol_mem_key
		speech_public( id: $mol_int62_string, next?: boolean ) {
			return this.speeches_node().has( id, next )
		}

		@ $mol_mem
		place() {
			return this.sub( 'place', $piterjs_place )
		}

		@ $mol_mem
		afterparty( next?: string ) {
			return this.sub( 'afterparty', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem_key
		peer_secret( peer: $mol_int62_string ) {
			
			const priv = $piterjs_domain.secure_private()
			const land = this.joined_node()?.land
			if( !land ) return null

			if( priv ) {

				const pub = land.unit( peer, peer )?.data as string | undefined
				return pub ? $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub ) : null

			} else {

				const priv = land.peer().key_private_serial
				const pub = $piterjs_domain.secure_public()
				return $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub )

			}

		}

		@ $mol_mem
		joined_node() {
			return this.yoke( 'joined', $hyoo_crowd_dict, [ '' ], [], [ '0_0' ] )
		}

		@ $mol_mem_key
		joined_name( id: $mol_int62_string, next?: string ) {
			
			const secret = $mol_wire_sync( this.peer_secret( id )! )
			const salt = $mol_charset_encode( this.id() )

			if( next ) {
				const closed = secret.encrypt( $mol_charset_encode( next ), salt )
				this.joined_node()?.sub( id, $hyoo_crowd_reg ).value( new Uint8Array( closed ) )
				return next
			}
			
			if( next === '' ) this.joined_node()?.as( $hyoo_crowd_list ).has( id, false )
			if( !this.joined_node()?.has( id ) ) return ''
			
			const closed = this.joined_node()?.sub( id, $hyoo_crowd_reg ).value()
			if( !close ) return ''

			if( typeof closed === 'string' ) return closed

			try {
				return $mol_charset_decode( secret.decrypt( closed as Uint8Array, salt ) )
			} catch( error ) {
				$mol_fail_log( error )
				return ''
			}

		}

		@ $mol_mem
		joined_list() {
			return this.joined_node()?.keys() as $mol_int62_string[] ?? []
		}

		@ $mol_mem
		joined_moments() {
			return Object.fromEntries(
				( this.joined_node()?.units() ?? [] )
				.map( unit => [ unit.auth, new $mol_time_moment( $hyoo_crowd_time_stamp( unit.time ) ) ] )
			) as {
				[ key: $mol_int62_string ]: $mol_time_moment
			}
		}

		@ $mol_mem
		joined_count() {
			return this.joined_node()?.keys().length ?? 0
		}

		@ $mol_mem
		visitors_node() {
			return this.sub( 'visitors', $hyoo_crowd_list )
		}

		@ $mol_mem_key
		visitor( peer: $mol_int62_string, next?: boolean ) {
			return this.visitors_node().has( peer, next )
		}

		@ $mol_mem
		visitors_list() {
			return this.visitors_node().list()
				.map( $mol_int62_string_ensure )
				.filter( $mol_guard_defined )
		}

	}

}
