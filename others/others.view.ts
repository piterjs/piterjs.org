namespace $.$$ {

	const Moment = $mol_data_pipe( $mol_data_string , $mol_time_moment )

	const Event = $mol_data_record({
		uid: $mol_data_string,
		start: Moment,
		end: Moment,
		allDay: $mol_data_optional( $mol_data_boolean ),
		location: $mol_data_optional( $mol_data_string ),
		summary: $mol_data_string,
		description: $mol_data_optional( $mol_data_string ),
	})

	const Event_list = $mol_data_array( Event )

	export class $piterjs_others extends $.$piterjs_others {

		list() {
			const uri = 'https://web-standards.ru/calendar.json'
			return Event_list( this.$.$mol_fetch.json( uri ) )
		}
		
		@ $mol_mem
		list_future() {

			const present = new $mol_time_moment().merge({
				hour: 0,
				second: 0,
			}).shift({ day : -2 }).toOffset(0).toString()
			
			const next = this.list().filter( event => {
				return event.start.toOffset(0).toString() >= present
			})

			return next
		}

		@ $mol_mem
		dict() {

			const next = new Map< string , typeof Event.Value >()

			for( const event of this.list_future() ) {
				next.set( event.uid , event )
			}

			return next
		}

		@ $mol_mem
		events() {
			return this.list_future().map( event => this.Event( event.uid ) )
		}

		event_title( uid : string ) {
			return this.dict().get( uid )!.summary
		}

		event_start( uid : string ) {
			return this.dict().get( uid )!.start as $mol_time_moment
		}

		event_uri( uid : string ) {
			return this.dict().get( uid )!.description ?? ''
		}

		event_location( uid : string ) {
			return this.dict().get( uid )!.location ?? 'Земля'
		}

	}

}
