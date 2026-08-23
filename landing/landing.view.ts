namespace $.$$ {

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
		meetup_num() {
			const match = this.meetup_title().match( /\d+/ )
			return match ? match[0] : '56'
		}

		@ $mol_mem
		logo_version_tag() {
			return `v.${this.meetup_num()}.0`
		}

		@ $mol_mem
		rsvp_btn_text() {
			return `[ Зарегистрироваться #${this.meetup_num()} ]`
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
		now_time() {
			return $mol_state_time.now( 1000 )
		}

		@ $mol_mem
		target_timestamp() {
			const start = this.meetup()?.start()?.valueOf()
			if( start && start > Date.now() ) return start
			return new Date( '2026-08-15T19:00:00+03:00' ).getTime()
		}

		@ $mol_mem
		countdown_diff() {
			const now = this.now_time()
			const diff = Math.max( 0, this.target_timestamp() - now )
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

		format_ru_date( moment?: $mol_time_moment, with_time = false ) {
			if( !moment ) return ''
			const months = [
				'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
				'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
			]
			const day = moment.day !== undefined ? String( moment.day + 1 ) : ''
			const month = moment.month !== undefined ? ( months[ moment.month ] || '' ) : ''
			const year = moment.year !== undefined ? String( moment.year ) : ''
			let str = [ day, month, year ].filter( Boolean ).join( ' ' )
			if( with_time && moment.hour !== undefined ) {
				const h = String( moment.hour ).padStart( 2, '0' )
				const m = String( moment.minute ?? 0 ).padStart( 2, '0' )
				str += ` // ${h}:${m}`
			}
			return str
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
			if( start ) return this.format_ru_date( start, true ).toUpperCase()
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

		// Archive Filtering & Pagination (6 per page)
		@ $mol_mem
		archive_preset_data() {
			return [
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
				{
					id: 'piterjs-52',
					category: 'piterjs',
					eventLabel: 'PITERJS #52',
					title: 'WebAssembly и вычисления на стороне клиента',
					dateLabel: '15 Декабря 2025',
					viewers: 460,
				},
				{
					id: 'piterjs-51',
					category: 'piterjs',
					eventLabel: 'PITERJS #51',
					title: 'React Server Components: от теории к продакшену',
					dateLabel: '20 Октября 2025',
					viewers: 530,
				},
				{
					id: 'piterux-11',
					category: 'piterux',
					eventLabel: 'PITERUX #11',
					title: 'Интерфейсная анимация и микро-взаимодействия',
					dateLabel: '12 Сентября 2025',
					viewers: 310,
				},
				{
					id: 'piterjs-50',
					category: 'piterjs',
					eventLabel: 'PITERJS #50',
					title: 'Юбилейный митап: 10 лет сообществу PiterJS!',
					dateLabel: '15 Августа 2025',
					viewers: 820,
				},
				{
					id: 'piterjs-49',
					category: 'piterjs',
					eventLabel: 'PITERJS #49',
					title: 'Оптимизация Core Web Vitals в сверхнагруженных сервисах',
					dateLabel: '28 Июня 2025',
					viewers: 390,
				},
				{
					id: 'piterux-10',
					category: 'piterux',
					eventLabel: 'PITERUX #10',
					title: 'Доступность (a11y) в сложных веб-приложениях',
					dateLabel: '14 Мая 2025',
					viewers: 270,
				},
				{
					id: 'piterjs-48',
					category: 'piterjs',
					eventLabel: 'PITERJS #48',
					title: 'State Management в 2025: Signals vs Stores vs Atoms',
					dateLabel: '18 Апреля 2025',
					viewers: 480,
				},
			]
		}

		@ $mol_mem
		archive_limit( next?: number ) {
			return next ?? 6
		}

		archive_more_click() {
			this.archive_limit( this.archive_limit() + 6 )
		}

		@ $mol_mem
		category_filter( next?: string ) {
			return next ?? 'all'
		}

		filter_all_click() {
			this.category_filter( 'all' )
			this.archive_limit( 6 )
		}

		filter_piterjs_click() {
			this.category_filter( 'piterjs' )
			this.archive_limit( 6 )
		}

		filter_piterux_click() {
			this.category_filter( 'piterux' )
			this.archive_limit( 6 )
		}

		filter_conf_click() {
			this.category_filter( 'conf' )
			this.archive_limit( 6 )
		}

		@ $mol_mem_key
		items_for_category( cat: string ) {
			const meetups = this.meetups()
			if( meetups && meetups.length > 0 ) {
				if( cat === 'all' ) return meetups
				if( cat === 'piterjs' ) return meetups.filter( m => !m.title().includes('UX') && !m.title().includes('Conf') )
				if( cat === 'piterux' ) return meetups.filter( m => m.title().includes('UX') )
				if( cat === 'conf' ) return meetups.filter( m => m.title().includes('Conf') )
				return []
			}
			const data = this.archive_preset_data()
			if( cat === 'all' ) return data
			return data.filter( item => item.category === cat )
		}

		count_all() {
			return this.items_for_category( 'all' ).length
		}

		count_piterjs() {
			return this.items_for_category( 'piterjs' ).length
		}

		count_piterux() {
			return this.items_for_category( 'piterux' ).length
		}

		count_conf() {
			return this.items_for_category( 'conf' ).length
		}

		@ $mol_mem
		filter_buttons() {
			const buttons: any[] = []
			if( this.count_all() > 0 ) buttons.push( this.Filter_all() )
			if( this.count_piterjs() > 0 ) buttons.push( this.Filter_piterjs() )
			if( this.count_piterux() > 0 ) buttons.push( this.Filter_piterux() )
			if( this.count_conf() > 0 ) buttons.push( this.Filter_conf() )
			return buttons
		}

		filter_all_active() {
			return this.category_filter() === 'all'
		}

		filter_piterjs_active() {
			return this.category_filter() === 'piterjs'
		}

		filter_piterux_active() {
			return this.category_filter() === 'piterux'
		}

		filter_conf_active() {
			return this.category_filter() === 'conf'
		}

		@ $mol_mem
		filtered_archive() {
			const cat = this.category_filter()
			return this.items_for_category( cat )
		}

		@ $mol_mem
		all_filtered_items() {
			const cat = this.category_filter()
			const items = this.items_for_category( cat )
			const meetups = this.meetups()
			if( meetups && meetups.length > 0 ) {
				return ( items as $piterjs_meetup[] ).map( m => m.id() )
			}
			return ( items as any[] ).map( item => item.id )
		}

		@ $mol_mem
		visible_archive_ids() {
			const items = this.all_filtered_items()
			return items.slice( 0, this.archive_limit() )
		}

		@ $mol_mem
		archive_has_more() {
			return this.all_filtered_items().length > this.archive_limit()
		}

		@ $mol_mem
		archive_cards() {
			return this.visible_archive_ids().map( id => this.Archive_card( id ) )
		}

		@ $mol_mem
		archive_more_slot() {
			return this.archive_has_more() ? [ this.Archive_more_btn() ] : []
		}

		archive_item( id: string ) {
			return this.archive_preset_data().find( it => it.id === id )
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
			if( m?.start() ) return this.format_ru_date( m.start(), false )
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
