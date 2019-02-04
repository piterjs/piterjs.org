namespace $.$$ {

	export class $piterjs_app extends $.$piterjs_app {

		@ $mol_mem
		meetups() {
			
			// https://api.airtable.com/v0/app23d1bSu43arYuu/Events?fields[]=Date%20from&fields[]=Event%20number&fields[]=Place&fields[]=Speakers&fields[]=Speeches&api_key=
			const data = this.$.$mol_http.resource( 'piterjs/meetup/meetup.data.json' ).json() as { records : Array<{
				id : string
				fields : {
					'Date from' : string
					'Event number' : number
					'Place' : string[]
					'Speakers' : string[]
					'Speeches' : string[]
				}
			}> }

			return data.records
			.filter( ({ fields }) => fields[ 'Event number' ] && fields[ 'Speeches' ] )
			.map( ({ id , fields }) => ({
				id ,
				start : fields[ 'Date from' ] ,
				title : '#' + fields[ 'Event number' ] ,
				description : '' ,
				speeches : fields[ 'Speeches' ] ,
			}) )
			.sort( ( a , b )=> new $mol_time_moment( b.start ).valueOf() - new $mol_time_moment( a.start ).valueOf() )

		}
		
		@ $mol_mem
		speeches() {
			
			// https://api.airtable.com/v0/app23d1bSu43arYuu/Speeches?fields[]=Description&fields[]=Name&fields[]=Slides&fields[]=Speakers&fields[]=Topics&api_key=
			const data = this.$.$mol_http.resource( 'piterjs/speech/speech.data.json' ).json() as { records : Array<{
				id : string
				fields : {
					'Description' : string
					'Name' : string
					'Slides' : string
					'Speakers' : string[]
					'Topics' : string[]
				}
			}> }

			return data.records
			.map( ({ id , fields }) => ({
				id ,
				title : fields[ 'Name' ] ,
				description : fields[ 'Description' ] || '' ,
				speaker : fields[ 'Speakers' ][0] ,
				duration : 'PT40m' ,
			}) )

		}
		
		@ $mol_mem
		speakers() {
			
			// https://api.airtable.com/v0/app23d1bSu43arYuu/Speakers?fields[]=Company%20%26%20position&fields[]=Name&fields[]=Notes&fields[]=Photo&api_key=
			const data = this.$.$mol_http.resource( 'piterjs/speaker/speaker.data.json' ).json() as { records : Array<{
				id : string
				fields : {
					'Company & position' : string
					'Name' : string
					'Notes' : string
					'Photo' : Array<{
						id : string
						url : string
						thumbnails : {
							full : {
								width : number
								height : number
								url : string
							}
							large : {
								width : number
								height : number
								url : string
							}
							small : {
								width : number
								height : number
								url : string
							}
						}
					}>
				}
			}> }

			return data.records
			.map( ({ id , fields }) => ({
				id ,
				title : fields[ 'Name' ] ,
				description : fields[ 'Notes' ] || '' ,
				photo : fields[ 'Photo' ] && fields[ 'Photo' ][0].thumbnails.large.url || 'piterjs/logo/logo_512.png' ,
			}) )

		}
		
		@ $mol_mem
		now( next? : string ) { return this.$.$mol_state_arg.value( 'now' , next ) }

		@ $mol_mem
		meetup_id( next? : string ) { return this.$.$mol_state_arg.value( 'meetup' , next ) }
		meetup( id : string ) { return this.meetups().find( meetup => meetup.id === id ) }
		
		speech_id( next? : string ) { return this.$.$mol_state_arg.value( 'speech' , next ) }
		speech( id : string ) { return this.speeches().find( speech => speech.id === id ) }
		
		speaker_id( next? : string ) { return this.$.$mol_state_arg.value( 'speaker' , next ) }
		speaker( id : string ) { return this.speakers().find( speaker => speaker.id === id ) }

		@ $mol_mem
		pages() {
			return [
				this.Menu() ,
				... !this.meetup_id() ? [ this.Now() ] : [] ,
				... this.meetup_id() ? [ this.Meetup( this.meetup_id() ) ] : [] ,
				... this.speech_id() ? [ this.Speech( this.speech_id() ) ] : [] ,
			]
		}

		menu_meetups() { return this.meetups().map( meetups => this.Menu_meetup( meetups.id ) ) }
		menu_meetup( id : string ) { return this.meetups().find( meetup => meetup.id === id ) }

	}

}
