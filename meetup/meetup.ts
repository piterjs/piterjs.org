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

		@ $mol_mem
		joined_node() {
			return this.sub( 'joined', $hyoo_crowd_counter )
		}

		@ $mol_mem
		joined( next?: boolean ) {
			return this.joined_node().counted( next ) ?? false
		}

		@ $mol_mem
		joined_list() {
			const Person = this.world()!.Fund( $piterjs_person )
			return this.joined_node().list().map( id => Person.Item( id ) )
		}

		@ $mol_mem
		joined_count() {
			return this.joined_node().total()
		}

	}

}
