namespace $.$$ {

	interface ArchiveItem {
		id: string
		category: string
		eventLabel: string
		title: string
		dateLabel: string
		viewers: number
	}

	const archive_data: ArchiveItem[] = [
		{
			id: 'piterjs-55',
			category: 'piterjs',
			eventLabel: 'PITERJS #55',
			title: 'Rust-базированные бандлеры в продакшене',
			dateLabel: '12 Июня 2026',
			viewers: 420,
		},
		{
			id: 'piterjs-54',
			category: 'piterjs',
			eventLabel: 'PITERJS #54',
			title: 'Micro-frontends в масштабных порталах',
			dateLabel: '24 Апреля 2026',
			viewers: 380,
		},
		{
			id: 'piterjs-53',
			category: 'piterjs',
			eventLabel: 'PITERJS #53',
			title: 'Canvas 2D vs WebGL для финансовых графиков',
			dateLabel: '10 Февраля 2026',
			viewers: 510,
		},
		{
			id: 'piterux-12',
			category: 'piterux',
			eventLabel: 'PITERUX #12',
			title: 'Дизайн-системы и токены в инженерном контуре',
			dateLabel: '18 Мая 2026',
			viewers: 290,
		},
		{
			id: 'conf-19',
			category: 'conf',
			eventLabel: 'PITERJS CONF',
			title: 'Большая конференция веб-разработчиков в Санкт-Петербурге',
			dateLabel: 'Сентябрь 2019',
			viewers: 950,
		},
	]

	export class $piterjs_landing extends $.$piterjs_landing {

		@ $mol_mem
		dom_node() {
			const node = super.dom_node()
			$mol_fiber_defer( () => {
				const video = node.querySelector( 'video' ) as HTMLVideoElement | null
				if( video ) {
					video.muted = true
					video.defaultMuted = true
					video.volume = 0
					video.play().catch( () => {} )
				}
			} )
			return node
		}

		@ $mol_mem
		now_moment() {
			new $mol_after_timeout( 1000, () => this.now_moment( new $mol_time_moment() ) )
			return new $mol_time_moment()
		}

		@ $mol_mem
		target_timestamp() {
			// Target date: 15 August 2026 19:00:00 MSK (UTC+3)
			return new Date( '2026-08-15T19:00:00+03:00' ).getTime()
		}

		@ $mol_mem
		countdown_diff() {
			this.now_moment()
			const diff = Math.max( 0, this.target_timestamp() - Date.now() )
			const days = Math.floor( diff / ( 1000 * 60 * 60 * 24 ) )
			const hours = Math.floor( ( diff % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) )
			const minutes = Math.floor( ( diff % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )
			const seconds = Math.floor( ( diff % ( 1000 * 60 ) ) / 1000 )
			return { days, hours, minutes, seconds }
		}

		days_str() {
			return String( this.countdown_diff().days ).padStart( 2, '0' )
		}

		hours_str() {
			return String( this.countdown_diff().hours ).padStart( 2, '0' )
		}

		mins_str() {
			return String( this.countdown_diff().minutes ).padStart( 2, '0' )
		}

		secs_str() {
			return String( this.countdown_diff().seconds ).padStart( 2, '0' )
		}

		// Archive Filtering
		@ $mol_mem
		category_filter( next?: string ) {
			return next ?? 'all'
		}

		filter_all_click() {
			this.category_filter( 'all' )
		}

		filter_piterjs_click() {
			this.category_filter( 'piterjs' )
		}

		filter_piterux_click() {
			this.category_filter( 'piterux' )
		}

		filter_conf_click() {
			this.category_filter( 'conf' )
		}

		@ $mol_mem
		filtered_archive() {
			const cat = this.category_filter()
			if( cat === 'all' ) return archive_data
			return archive_data.filter( item => item.category === cat )
		}

		@ $mol_mem
		archive_cards() {
			return this.filtered_archive().map( item => this.Archive_card( item.id ) )
		}

		archive_item( id: string ) {
			return archive_data.find( it => it.id === id )
		}

		card_event_tag( id: string ) {
			return this.archive_item( id )?.eventLabel ?? ''
		}

		card_title( id: string ) {
			return this.archive_item( id )?.title ?? ''
		}

		card_date( id: string ) {
			return this.archive_item( id )?.dateLabel ?? ''
		}

		card_viewers( id: string ) {
			const count = this.archive_item( id )?.viewers ?? 0
			return `👁 ${count} зрителей`
		}

		// Modal CFP
		@ $mol_mem
		modal_open( next?: boolean ) {
			return next ?? false
		}

		cfp_open() {
			this.modal_open( true )
		}

		cfp_close() {
			this.modal_open( false )
		}

		// Toast Notification System
		@ $mol_mem
		toast_message( next?: string ) {
			if( next ) {
				new $mol_after_timeout( 4000, () => {
					if( this.toast_message() === next ) {
						this.toast_message( '' )
					}
				} )
			}
			return next ?? ''
		}

		rsvp_click() {
			this.toast_message( '✅ Вы успешно зарегистрированы на PiterJS #56! До встречи на Петроградской.' )
		}

		cfp_submit() {
			if( !this.cfp_name() || !this.cfp_title() || !this.cfp_contact() ) {
				this.toast_message( '⚠️ Пожалуйста, заполните обязательные поля формы' )
				return
			}
			this.modal_open( false )
			this.toast_message( '⚡ Заявка на доклад принята! Программный комитет PiterJS свяжется с вами.' )
			this.cfp_email( '' )
			this.cfp_contact( '' )
			this.cfp_name( '' )
			this.cfp_company( '' )
			this.cfp_title( '' )
			this.cfp_desc( '' )
		}

		@ $mol_mem
		burger_open( next?: boolean ) {
			return next ?? false
		}

		burger_toggle() {
			this.burger_open( !this.burger_open() )
		}

		nav_mobile_close() {
			this.burger_open( false )
		}

		@ $mol_mem
		sub() {
			return [
				this.Header(),
				this.Main(),
				... this.modal_open() ? [ this.Cfp_modal() ] : [],
				... this.toast_message() ? [ this.Toast() ] : [],
			]
		}

	}

}
