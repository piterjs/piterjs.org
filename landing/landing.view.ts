namespace $.$$ {

	export class $piterjs_landing extends $.$piterjs_landing {

		@ $mol_mem
		meetup_current() {
			return this.meetup() || this.meetups()[0]
		}

		// Header & Dynamic Meetup Details
		@ $mol_mem
		meetup_title() {
			return this.meetup_current()?.title() || 'PITERJS #56'
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

		// Registration modal
		@ $mol_mem
		rsvp_open( next?: boolean ) {
			return next ?? false
		}

		rsvp_click() {
			this.burger_open( false )
			this.rsvp_open( true )
		}

		rsvp_close() {
			this.rsvp_open( false )
		}

		@ $mol_mem
		rsvp_slot() {
			return this.rsvp_open() ? [ this.Rsvp_modal() ] : []
		}

		@ $mol_mem
		rsvp_modal_title() {
			return `РЕГИСТРАЦИЯ НА ${ this.meetup_title().toUpperCase() }`
		}

		@ $mol_mem
		rsvp_modal_meta() {
			return `${ this.next_event_time() } // ${ this.next_event_place() }`
		}

		@ $mol_mem
		rsvp_modal_note() {
			return this.visitor_joined()
				? 'ВЫ В СПИСКЕ УЧАСТНИКОВ'
				: this.free_slots()
		}

		// CFP modal (восстановлено из 1d6495d)
		@ $mol_mem
		modal_open( next?: boolean ) {
			return next ?? false
		}

		cfp_open() {
			this.burger_open( false )
			this.modal_open( true )
		}

		cfp_close() {
			this.modal_open( false )
		}

		cfp_backdrop_click( event?: Event ) {
			// Cfp_modal сам является затемняющим оверлеем, поэтому закрываем
			// только по клику мимо Cfp_modal_box
			if( event && event.target !== event.currentTarget ) return
			this.cfp_close()
		}

		@ $mol_mem
		cfp_slot() {
			return this.modal_open() ? [ this.Cfp_modal() ] : []
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

		// Toast
		@ $mol_mem
		toast_message( next?: string ) {
			if( next ) {
				new $mol_after_timeout( 4000, () => {
					if( this.toast_message() === next ) this.toast_message( '' )
				} )
			}
			return next ?? ''
		}

		@ $mol_mem
		toast_slot() {
			return this.toast_message() ? [ this.Toast() ] : []
		}

		@ $mol_mem
		nav_links() {
			return Object.keys( this.nav_titles() ).map( id => this.Nav_link( id ) )
		}

		// отдельные инстансы: один и тот же $mol_view не может жить в двух родителях
		@ $mol_mem
		nav_mobile_links() {
			return Object.keys( this.nav_titles() ).map( id => this.Nav_m_link( id ) )
		}

		nav_uri( id: string ) {
			return `#${id}`
		}

		nav_title( id: string ) {
			return this.nav_titles()[ id as keyof typeof this.nav_titles ]
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

		// Hero & Countdown
		@ $mol_mem
		free_slots() {
			const free = this.free_slots_num()
			// без известной вместимости нельзя утверждать, что мест нет
			if( free === null ) return 'РЕГИСТРАЦИЯ ОТКРЫТА'
			return free > 0 ? `${free} МЕСТ СВОБОДНО` : 'РЕГИСТРАЦИЯ ЗАКРЫТА'
		}

		// Та же формула, что на странице митапа ($piterjs_meetup_page.free_space):
		// capacity_max - joined_count. Считать по visitors_list() нельзя — это узел
		// 'visitors2' (кто пришёл), а не 'joined' (кто записался).
		@ $mol_mem
		free_slots_num() {
			const meetup = this.meetup_current()
			const capacity = meetup?.place()?.capacity_max() || 0
			if( !capacity ) return null
			return Math.max( 0, capacity - ( meetup?.joined_count() ?? 0 ) )
		}

		// Ближайший митап в домене — meetups()[0]. Когда его дата прошла,
		// «следующего» ещё нет: показываем номер+1 со статусом SOON,
		// а карточка становится рассказом о прошедшем событии.
		@ $mol_mem
		meetup_passed() {
			const start = this.meetup_current()?.start()?.valueOf()
			if( !start ) return false
			return start < this.now_time()
		}

		@ $mol_mem
		hero_badge() {
			if( this.meetup_passed() ) {
				return `PITERJS #${ Number( this.meetup_num() ) + 1 } // SOON`
			}
			return `${this.meetup_title().toUpperCase()} // ${this.free_slots()}`
		}

		@ $mol_mem
		event_badge() {
			return this.meetup_passed() ? 'LAST EVENT' : 'NEXT EVENT'
		}

		@ $mol_mem
		now_time() {
			return $mol_state_time.now( 1000 )
		}

		@ $mol_mem
		target_timestamp() {
			const start = this.meetup_current()?.start()?.valueOf()
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

		@ $mol_mem
		timer_units() {
			return [ this.Unit( 'days' ), this.Unit( 'hours' ), this.Unit( 'mins' ), this.Unit( 'secs' ) ]
		}

		unit_str( id: string ) {
			const diff = this.countdown_diff()
			let val = 0
			if( id === 'days' ) val = diff.days
			if( id === 'hours' ) val = diff.hours
			if( id === 'mins' ) val = diff.minutes
			if( id === 'secs' ) val = diff.seconds
			return String( val ).padStart( 2, '0' )
		}

		unit_title( id: string ) {
			if( id === 'days' ) return 'Дней'
			if( id === 'hours' ) return 'Часов'
			if( id === 'mins' ) return 'Минут'
			return 'Секунд'
		}

		// Registration
		@ $mol_mem
		visitor_name( next?: string ) {
			return this.$.$mol_state_local.value( 'name_real', next ) ?? ''
		}

		@ $mol_mem
		visitor_joined( next?: boolean ) {
			const peer = this.meetup_current()?.land.peer_id()
			if( !peer ) return false
			
			if( next === true ) this.meetup_current()?.joined_name( peer, this.visitor_name() )
			if( next === false ) this.meetup_current()?.joined_name( peer, '' )
			return Boolean( this.meetup_current()?.joined_name( peer ) )
		}

		// Next Event Card
		@ $mol_mem
		next_event_title() {
			const m = this.meetup_current()
			if( m?.title() ) {
				const desc = m.description()
				return desc ? `${m.title()}: ${desc}` : m.title()
			}
			return 'PiterJS #56: WebGPU, Next-Gen Bundlers & AI Architecture'
		}

		@ $mol_mem
		next_event_time() {
			const start = this.meetup_current()?.start()
			if( start ) return start.toString( 'D Month YYYY', 'ru' ).toUpperCase() + ' // ' + start.toString( 'hh:mm' )
			return '15 АВГУСТА 2026 // 19:00'
		}

		@ $mol_mem
		next_event_place() {
			const place = this.meetup_current()?.place()?.title()
			if( place ) return place.toUpperCase() + ', САНКТ-ПЕТЕРБУРГ'
			return 'ИТ-ХАБ, САНКТ-ПЕТЕРБУРГ'
		}

		@ $mol_mem
		next_event_map_uri() {
			const addr = this.meetup_current()?.place()?.address() || 'Санкт-Петербург, Аптекарский проспект, 4'
			return 'https://yandex.ru/maps/?text=' + encodeURIComponent( addr )
		}

		// Manifesto Stats
		@ $mol_mem
		stats() {
			return [ this.Stat( 'meetups' ), this.Stat( 'visitors' ), this.Stat( 'speeches' ), this.Stat( 'source' ) ]
		}

		stat_val( id: string ) {
			if( id === 'meetups' ) return `${this.meetups().length}+`
			// статичные цифры сообщества, как и в 1d6495d: считать их из домена значило бы
			// подтянуть speeches()/visitors_list() для всех митапов сразу
			if( id === 'visitors' ) return '3,500+'
			if( id === 'speeches' ) return '130+'
			if( id === 'source' ) return '100%'
			return '0'
		}

		stat_lbl( id: string ) {
			if( id === 'meetups' ) return 'Проведенных Митапов'
			if( id === 'visitors' ) return 'Участников Сообщества'
			if( id === 'speeches' ) return 'Хардкорных Докладов'
			if( id === 'source' ) return 'Open Source & Community'
			return ''
		}

		// Schedule & Speeches
		@ $mol_mem
		schedule_heading() {
			return 'ПРОГРАММА ' + this.meetup_title().toUpperCase()
		}

		@ $mol_mem
		schedule_intro() {
			return this.meetup_current()?.description() || 'Три больших инспекции современного стека: от графических пайплайнов до высокопроизводительного инструментария на Rust.'
		}

		@ $mol_mem
		speeches_list() {
			return this.meetup_current()?.speeches() ?? []
		}

		@ $mol_mem
		talks() {
			return this.speeches_list().map( s => this.Talk( s.id() ) )
		}

		speech_item( id: string ) {
			return this.speeches_list().find( s => s.id() === id )
		}

		talk_tag( id: string ) {
			return 'Tech Talk'
		}

		talk_time( id: string ) {
			const s = this.speech_item( id )
			if( s?.start() ) return s.start().toString( 'hh:mm' )
			return '19:00'
		}

		talk_title( id: string ) {
			return this.speech_item( id )?.title() || 'Тема доклада'
		}

		talk_abstract( id: string ) {
			return this.speech_item( id )?.description() || 'Тезисы и подробности доклада формируются'
		}

		// Описание клипается в 6 строк, кнопка показывается только если текст
		// реально не влез. Порогом по числу символов это не решить: ширина
		// карточки меняется с раскладкой, на 530px в строку входит ~63 знака,
		// на мобильном вдвое меньше. Поэтому меряем DOM после отрисовки.
		@ $mol_mem_key
		talk_expanded( id: string, next?: boolean ) {
			return next ?? false
		}

		talk_clamped( id: string ) {
			return !this.talk_expanded( id )
		}

		talk_toggle( id: string ) {
			this.talk_expanded( id, !this.talk_expanded( id ) )
		}

		talk_toggle_title( id: string ) {
			return this.talk_expanded( id ) ? '[ Скрыть ]' : '[ Показать больше ]'
		}

		@ $mol_mem_key
		talk_overflow( id: string, next?: boolean ) {
			return next ?? false
		}

		@ $mol_mem_key
		talk_content( id: string ) {
			return [
				this.Talk_top( id ),
				this.Talk_title( id ),
				this.Talk_abstract( id ),
				... this.talk_overflow( id ) ? [ this.Talk_more( id ) ] : [],
				this.Talk_speaker( id ),
			]
		}

		@ $mol_mem
		auto() {
			// size() делает пересчёт реактивным на ресайз: при другой ширине
			// карточки текст переносится иначе и переполнение может исчезнуть
			this.$.$mol_window.size()
			// id забираем здесь, внутри фибры: speeches_list() тянет данные из
			// домена и бросает промис, если они ещё не приехали, а колбэк
			// $mol_after_frame выполняется вне фибры и поймать его некому
			const ids = this.speeches_list().map( speech => speech.id() )
			new this.$.$mol_after_frame( () => this.talks_measure( ids ) )
			return super.auto()
		}

		talks_measure( ids: readonly string[] ) {
			for( const id of ids ) {
				// в раскрытом виде клипа нет, мерить нечего — оставляем прошлый вердикт,
				// иначе кнопка «Скрыть» исчезла бы сразу после раскрытия
				if( this.talk_expanded( id ) ) continue
				try {
					const node = this.Talk_abstract( id ).dom_node()
					this.talk_overflow( id, node.scrollHeight > node.clientHeight + 1 )
				} catch {}
			}
		}

		speaker_name( id: string ) {
			return this.speech_item( id )?.speaker()?.title() || 'Спикер PiterJS'
		}

		speaker_role( id: string ) {
			const s = this.speech_item( id )
			return s?.speaker()?.description() || s?.speaker()?.contact() || 'Инженер-разработчик'
		}

		speaker_photo( id: string ) {
			const uri = this.speech_item( id )?.speaker()?.photo_uri()
			return uri || ''
		}

		// Venue
		@ $mol_mem
		venue_title() {
			return this.meetup_current()?.place()?.title() || 'ИТ-Хаб Санкт-Петербург'
		}

		@ $mol_mem
		venue_meta1() {
			return '📍 ' + ( this.meetup_current()?.place()?.address() || 'Аптекарский проспект, 4 (СПб, 197022)' )
		}

		@ $mol_mem
		venue_meta2() {
			return '🚇 ' + ( this.meetup_current()?.place()?.route() || 'Метро «Петроградская» (10 минут пешком)' )
		}

		@ $mol_mem
		venue_meta3() {
			return '🚶 ' + ( this.meetup_current()?.place()?.notes() || 'Вход со стороны набережной Карповки' )
		}

		@ $mol_mem
		venue_map_uri() {
			return 'https://yandex.ru/maps/?text=' + encodeURIComponent( this.meetup_current()?.place()?.address() || 'Санкт-Петербург, Аптекарский проспект, 4' )
		}

		// Archive Filtering & Pagination (6 per page)
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

		filter_click( id: string ) {
			this.category_filter( id )
			this.archive_limit( 6 )
		}

		filter_active( id: string ) {
			return this.category_filter() === id
		}

		filter_title( id: string ) {
			return this.filter_titles()[ id as keyof typeof this.filter_titles ]
		}

		@ $mol_mem_key
		items_for_category( cat: string ) {
			const meetups = this.meetups()
			if( !meetups ) return []
			if( cat === 'all' ) return meetups
			if( cat === 'piterjs' ) return meetups.filter( m => !m.title().includes('UX') && !m.title().includes('Conf') )
			if( cat === 'piterux' ) return meetups.filter( m => m.title().includes('UX') )
			if( cat === 'conf' ) return meetups.filter( m => m.title().includes('Conf') )
			return []
		}

		@ $mol_mem
		filter_buttons() {
			const buttons: any[] = []
			for( const cat of Object.keys( this.filter_titles() ) ) {
				if( this.items_for_category( cat ).length > 0 ) buttons.push( this.Filter_btn( cat ) )
			}
			return buttons
		}

		@ $mol_mem
		all_filtered_items() {
			return this.items_for_category( this.category_filter() ).map( m => m.id() )
		}

		@ $mol_mem
		visible_archive_ids() {
			return this.all_filtered_items().slice( 0, this.archive_limit() )
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
		
		card_id( id: string ) { return id }

		card_event_tag( id: string ) {
			return this.meetups()?.find( item => item.id() === id )?.title() || 'PITERJS'
		}

		card_title( id: string ) {
			const m = this.meetups()?.find( item => item.id() === id )
			if( m ) return m.speeches()?.[0]?.title() || m.description() || m.title() || 'Встреча сообщества'
			return ''
		}

		card_date( id: string ) {
			const start = this.meetups()?.find( item => item.id() === id )?.start()
			if( start ) return start.toString( 'D Month YYYY', 'ru' )
			return ''
		}

		// Community Cards
		comms() { return [ this.Comm( 'tg' ), this.Comm( 'vk' ) ] }

		comm_badge( id: string ) { return id === 'tg' ? 'TELEGRAM COMMUNITY' : 'VK COMMUNITY' }
		comm_title( id: string ) { return id === 'tg' ? '@piterjs // Чат и Анонсы' : 'vk.com/piterjs // Записи и Медиа' }
		comm_text( id: string ) {
			return id === 'tg' ? 'Более 2000 инженеров в крупнейшем js-сообществе Санкт-Петербурга. Обсуждения, вакансии и оперативные новости.'
				: 'Видеозаписи докладов, фотоотчёты со встреч и анонсы новых митапов.'
		}
		comm_uri( id: string ) { return id === 'tg' ? 'https://t.me/piterjs' : 'https://vk.com/piterjs' }
		comm_btn_text( id: string ) { return id === 'tg' ? '[ Вступить в Telegram-канал ]' : '[ Открыть группу VK ]' }

		socs() { return [ this.Soc( 'gh' ), this.Soc( 'tg' ), this.Soc( 'yt' ), this.Soc( 'vk' ) ] }
		soc_uri( id: string ) {
			if( id === 'gh' ) return 'https://github.com/piterjs'
			if( id === 'tg' ) return 'https://t.me/piterjs'
			if( id === 'yt' ) return 'https://youtube.com'
			if( id === 'vk' ) return 'https://vk.com/piterjs'
			return ''
		}
		soc_hint( id: string ) {
			if( id === 'gh' ) return 'GitHub'
			if( id === 'tg' ) return 'Telegram'
			if( id === 'yt' ) return 'YouTube'
			if( id === 'vk' ) return 'VK Video'
			return ''
		}
		soc_icon( id: string ) {
			if( id === 'gh' ) return 'piterjs/landing/assets/github.webp'
			if( id === 'tg' ) return 'piterjs/landing/assets/telegram.webp'
			if( id === 'yt' ) return 'piterjs/landing/assets/youtube.webp'
			if( id === 'vk' ) return 'piterjs/landing/assets/vk.webp'
			return ''
		}

		@ $mol_mem
		sub() {
			return [
				this.Header(),
				this.Nav_mobile(),
				this.Main(),
				... this.rsvp_slot(),
				... this.cfp_slot(),
				... this.toast_slot(),
			]
		}

	}

}
