namespace $ {

	export let $piterjs_meetup_post_texts = {
		init: `
			Ура! Скоро **PiterJS {title}**
			
			{descr}
			
			⏰ Когда: **{date} {time}**
			📍 Где: {place} (**{address}**)
			
			📰 Программа
			
			{speeches}
			
			🎫 Регистрация: {meetup}
		`,
		init_speech: `
			🗣️ {start} {speaker}
			🎤 **{title}**
		`,
		place: `
			🎉 PiterJS {title} уже завтра в {place}: **{address}**
			
			🤗 Ждем тебя к {time}.
			🙏 Если придёщь — отмени регистрацию: {meetup}
			📽️ Но всё-равно смотри трансляцию!
		`,
		air: `
			🎬 PiterJS {title} начинается!
			📽️ Занимайте места и смотрите трансляцию: **{video}**
		`,
		afterparty: `
			✨ Вот и подошёл к концу очередной PiterJS..
			📢 Оставляйте свои отзывы — они нам очень интересны: {meetup}
			🎊 А кому не хватило, идём вместе на афтепати: **{afterparty}**
		`,
		retro: `
			👐 Спасибо всем, что были с нами!
			📸 Ищите себя на фоточках.
			🙌 Особенно докладчикам — без вас ничего бы не состоялось!
			🫶 Отдельное спасибо тем, кто оставил отзыв — вы помогаете нам становиться лучше: {meetup}
			🤝 И конечно же, огромное спасибо от всего сообщества площадке {place} за гостеприимство и партнёрам за подарки.
			👋 Не скучайте, мы скоро снова всех вас соберём вместе!
		`,
	}

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
			
			for( const speech of speeches ) {
				speech.steal_rights( this )
				speech.meetup( this )
			}
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

				const auth = this.land.peer()
				const pub = peer === auth.id ? auth.key_public_serial : land.unit( peer, peer )?.data as string | undefined
				return pub ? $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub ) : null

			} else {

				const priv = land.peer().key_private_serial
				const pub = $piterjs_domain.secure_public()
				return $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub )

			}

		}

		@ $mol_mem_key
		peer_secret_old( peer: $mol_int62_string ) {
			
			const priv = $piterjs_domain.secure_private()
			const land = this.joined_node()?.land
			if( !land ) return null

			if( priv ) {

				const auth = this.land.peer()
				const pub = peer === auth.id ? auth.key_public_serial : land.unit( peer, peer )?.data as string | undefined
				return pub ? $mol_wire_sync( $piterjs_secret ).derive( priv, pub ) : null

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
			
			$mol_wire_solid()
			
			const secret = $mol_wire_sync( this.peer_secret( id )! )
			const salt = $mol_crypto_hash( $mol_charset_encode( this.id() ) ).slice( 0, 16 )

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
				try {
					const secret = $mol_wire_sync( this.peer_secret_old( id )! )
					return $mol_charset_decode( secret.decrypt( closed as Uint8Array, $mol_charset_encode( this.id() ) ) )
				} catch( error ) {
					$mol_fail_log( error )
					return ''
				}
			}

		}

		@ $mol_mem
		joined_list() {
			if( !this.editable() ) $mol_fail( new Error( 'Access Denied' ) )
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
		join_allowed() {
			return ( this.start()?.valueOf() ?? 0 ) > $mol_state_time.now( 60 * 1000 )
		}

		@ $mol_mem
		visitors_node() {
			const node = this.yoke( 'visitors2', $hyoo_crowd_list )
			node?.land.steal_rights( this.land )
			return node
		}

		@ $mol_mem_key
		visitor( peer: $mol_int62_string, next?: boolean ) {
			return this.visitors_node()?.has( peer, next ) ?? false
		}

		@ $mol_mem
		visitors_list() {
			return ( this.visitors_node()?.list() ?? [] )
				.map( $mol_int62_string_ensure )
				.filter( $mol_guard_defined )
		}

		@ $mol_mem
		reviews_node() {
			const node = this.yoke( 'reviews', $hyoo_crowd_dict, [''], [], ['0_0'] )
			node?.land.steal_rights( this.land )
			return node
		}
		
		@ $mol_mem
		review( next?: string ) {
			return this.reviews_node()?.sub( 'meetup', $hyoo_crowd_dict ).sub( this.land.peer_id(), $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		reviews() {
			const regs = this.reviews_node()?.sub( 'meetup', $hyoo_crowd_dict ).nodes( $hyoo_crowd_reg ) ?? []
			const reviews = regs.map( reg => reg.str() ?? '' )
			return reviews.filter( Boolean ).join( '\n---\n' )
		}

		@ $mol_mem
		review_allowed()  {
			const start = this.start()?.valueOf() ?? 0
			const end = this.start()?.shift( 'P7D' ).valueOf() ?? 0
			const now = $mol_state_time.now( 60 * 1000 )
			return start < now && now < end
		}

		@ $mol_mem_key
		post_template( id: keyof typeof $piterjs_meetup_post_texts, next?: string ) {
			return this.sub( 'template', $hyoo_crowd_dict ).sub( id, $hyoo_crowd_text ).text( next )
				|| $piterjs_meetup_post_texts[ id ].replace( /\t/g, '' ).trim()
		}

		@ $mol_mem_key
		post_text( id: keyof typeof $piterjs_meetup_post_texts ) {

			const title = this.title()
			const descr = this.description()
			const date = this.start()?.toString( 'DD Month' ) ?? 'скоро'
			const time = this.start()?.toString( 'hh:mm' ) ?? ''
			const place = this.place().title()
			const address = this.place().address()
			const afterparty = this.afterparty()
			const meetup = this.$.$mol_state_arg.make_link({ meetup: this.id() })
			const video = this.video()

			const speeches = this.speeches().map(
				speech => this.post_template( 'init_speech' )
					.replaceAll( '{start}', speech.start().toString( 'hh:mm' ) )
					.replaceAll( '{speaker}', speech.speaker().title() )
					.replaceAll( '{title}', speech.title() )
			).join( '\n\n' ) || 'формируется'
			
			return this.post_template( id )
				.replaceAll( '{title}', title )
				.replaceAll( '{descr}', descr )
				.replaceAll( '{date}', date )
				.replaceAll( '{time}', time )
				.replaceAll( '{place}', place )
				.replaceAll( '{address}', address )
				.replaceAll( '{speeches}', speeches )
				.replaceAll( '{meetup}', meetup )
				.replaceAll( '{video}', video )
				.replaceAll( '{afterparty}', afterparty )
			
		}

	}

}
