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

		// Dynamic Meetup Details
		@ $mol_mem
		meetup_title() {
			return this.meetup()?.title() || 'PITERJS #56'
		}

		@ $mol_mem
		free_slots() {
			const capacity = this.meetup()?.place()?.capacity_max() || 300
			const visitors = this.meetup()?.visitors_list()?.length || 287
			const free = Math.max( 0, capacity - visitors )
			return free > 0 ? `${free} МЕСТ СВОБОДНО` : 'РЕГИСТРАЦИЯ ЗАКРЫТА'
		}

		@ $mol_mem
		hero_badge() {
			return `${this.meetup_title().toUpperCase()} // ${this.free_slots()}`
		}

		@ $mol_mem
		now_moment() {
			new $mol_after_timeout( 1000, () => this.now_moment( new $mol_time_moment() ) )
			return new $mol_time_moment()
		}

		@ $mol_mem
		target_timestamp() {
			const start = this.meetup()?.start()?.valueOf()
			if( start && start > Date.now() ) return start
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

		// Next Event Card
		@ $mol_mem
		next_event_title() {
			const m = this.meetup()
			if( m?.title() ) {
				const desc = m.description()
				return desc ? `${m.title()}: ${desc}` : m.title()
			}
			return 'PiterJS #56: WebGPU, Next-Gen Bundlers & AI Architecture'
		}

		@ $mol_mem
		next_event_time() {
			const start = this.meetup()?.start()
			if( start ) return start.toString( 'DD Month YYYY // hh:mm' ).toUpperCase()
			return '15 АВГУСТА 2026 // 19:00'
		}

		@ $mol_mem
		next_event_place() {
			const place = this.meetup()?.place()?.title()
			if( place ) return place.toUpperCase() + ', САНКТ-ПЕТЕРБУРГ'
			return 'ИТ-ХАБ, САНКТ-ПЕТЕРБУРГ'
		}

		@ $mol_mem
		next_event_map_uri() {
			const addr = this.meetup()?.place()?.address() || 'Санкт-Петербург, Аптекарский проспект, 4'
			return 'https://yandex.ru/maps/?text=' + encodeURIComponent( addr )
		}

		// Schedule & Speeches
		@ $mol_mem
		schedule_heading() {
			return 'ПРОГРАММА ' + this.meetup_title().toUpperCase()
		}

		@ $mol_mem
		schedule_intro() {
			return this.meetup()?.description() || 'Три больших инспекции современного стека: от графических пайплайнов до высокопроизводительного инструментария на Rust.'
		}

		@ $mol_mem
		speeches_list() {
			return this.meetup()?.speeches() ?? []
		}

		@ $mol_mem
		talks() {
			const list = this.speeches_list()
			if( list.length > 0 ) return list.map( s => this.Talk( s.id() ) )
			return [ this.Talk( 'default_1' ), this.Talk( 'default_2' ) ]
		}

		speech_item( id: string ) {
			return this.speeches_list().find( s => s.id() === id )
		}

		talk_tag( id: string ) {
			if( id === 'default_1' ) return 'WebGPU & Graphics'
			if( id === 'default_2' ) return 'Architecture & AI'
			return 'Tech Talk'
		}

		talk_time( id: string ) {
			const s = this.speech_item( id )
			if( s?.start() ) return s.start().toString( 'hh:mm' )
			if( id === 'default_1' ) return '19:15'
			if( id === 'default_2' ) return '20:00'
			return '19:00'
		}

		talk_title( id: string ) {
			const s = this.speech_item( id )
			if( s?.title() ) return s.title()
			if( id === 'default_1' ) return 'Реалистичный рендеринг в браузере: рендерим миллионы объектов с WebGPU в 2026'
			if( id === 'default_2' ) return 'Автономные AI-агенты внутри React-приложений: Паттерны и Безопасность'
			return 'Тема доклада'
		}

		talk_abstract( id: string ) {
			const s = this.speech_item( id )
			if( s?.description() ) return s.description()
			if( id === 'default_1' ) return 'Разбираем практический опыт перевода сложных визуализаций с WebGL2 на WebGPU. Compute-шейдеры, оптимизация пайплайн-кэша и минимизация GPU stalling.'
			if( id === 'default_2' ) return 'Как интегрировать агентные системы напрямую в клиентский интерфейс, сохраняя реактивность state management, изоляцию вызовов и защиту данных пользователя.'
			return 'Тезисы и подробности доклада формируются'
		}

		speaker_name( id: string ) {
			const s = this.speech_item( id )
			if( s?.speaker()?.title() ) return s.speaker().title()
			if( id === 'default_1' ) return 'Александр Громов'
			if( id === 'default_2' ) return 'Мария Соколова'
			return 'Спикер PiterJS'
		}

		speaker_role( id: string ) {
			const s = this.speech_item( id )
			const desc = s?.speaker()?.description() || s?.speaker()?.contact()
			if( desc ) return desc
			if( id === 'default_1' ) return 'Lead Graphics Engineer // VK'
			if( id === 'default_2' ) return 'Staff Frontend Architect // JetBrains'
			return 'Инженер-разработчик'
		}

		speaker_photo( id: string ) {
			const s = this.speech_item( id )
			try {
				const uri = s?.speaker()?.photo_uri()
				if( uri ) return uri
			} catch( e ) {}
			if( id === 'default_2' ) return '/piterjs/landing/assets/speaker_maria.png'
			return '/piterjs/landing/assets/speaker_alex.png'
		}

		// Venue
		@ $mol_mem
		venue_title() {
			return this.meetup()?.place()?.title() || 'ИТ-Хаб Санкт-Петербург'
		}

		@ $mol_mem
		venue_meta1() {
			return '📍 ' + ( this.meetup()?.place()?.address() || 'Аптекарский проспект, 4 (СПб, 197022)' )
		}

		@ $mol_mem
		venue_meta2() {
			return '🚇 ' + ( this.meetup()?.place()?.route() || 'Метро «Петроградская» (10 минут пешком)' )
		}

		@ $mol_mem
		venue_meta3() {
			return '🚶 ' + ( this.meetup()?.place()?.notes() || 'Вход со стороны набережной Карповки' )
		}

		@ $mol_mem
		venue_map_uri() {
			return 'https://yandex.ru/maps/?text=' + encodeURIComponent( this.meetup()?.place()?.address() || 'Санкт-Петербург, Аптекарский проспект, 4' )
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
			const meetups = this.meetups()
			if( meetups && meetups.length > 0 ) {
				const cat = this.category_filter()
				let list = meetups
				if( cat === 'piterjs' ) list = meetups.filter( m => !m.title().includes('UX') && !m.title().includes('Conf') )
				else if( cat === 'piterux' ) list = meetups.filter( m => m.title().includes('UX') )
				else if( cat === 'conf' ) list = meetups.filter( m => m.title().includes('Conf') )
				return list.map( m => this.Archive_card( m.id() ) )
			}
			return this.filtered_archive().map( item => this.Archive_card( item.id ) )
		}

		archive_item( id: string ) {
			return archive_data.find( it => it.id === id )
		}

		card_event_tag( id: string ) {
			const m = this.meetups()?.find( item => item.id() === id )
			if( m ) return m.title() || 'PITERJS'
			return this.archive_item( id )?.eventLabel ?? ''
		}

		card_title( id: string ) {
			const m = this.meetups()?.find( item => item.id() === id )
			if( m ) return m.speeches()?.[0]?.title() || m.description() || m.title() || 'Встреча сообщества'
			return this.archive_item( id )?.title ?? ''
		}

		card_date( id: string ) {
			const m = this.meetups()?.find( item => item.id() === id )
			if( m ) return m.start()?.toString( 'DD Month YYYY' ) || ''
			return this.archive_item( id )?.dateLabel ?? ''
		}

		card_viewers( id: string ) {
			const m = this.meetups()?.find( item => item.id() === id )
			if( m ) {
				const count = m.visitors_list()?.length || 0
				return `👁 ${count} участников`
			}
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
			const title = this.meetup_title()
			this.toast_message( `✅ Вы успешно зарегистрированы на ${title}! До встречи на Петроградской.` )
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
				this.Nav_mobile(),
				this.Main(),
				... this.modal_open() ? [ this.Cfp_modal() ] : [],
				... this.toast_message() ? [ this.Toast() ] : [],
			]
		}

	}

}
