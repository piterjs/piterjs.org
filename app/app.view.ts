namespace $.$$ {

	$mol_tree

	export class $piterjs_app extends $.$piterjs_app {

		@ $mol_mem
		meetups() {
			
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
			.filter( ({ fields }) => {

				const numb = fields[ 'Event number' ]
				
				if( !numb ) return false
				
				if( !fields[ 'Date from' ] ) {
					console.warn( `#${ numb } has no "Date from"` )
					return false
				}
				
				if( !fields[ 'Speeches' ] ) {
					console.warn( `#${ numb } has no "Speeches"` )
					return false
				}

				for( const id of fields[ 'Speeches' ] ) {
					const speech = this.speech( id.split('').slice(-3).join('') )

					if( !speech.description ) {
						console.warn( `#${ numb }/${ speech.id } has no "Description"` )
						return false
					}

					const speaker = this.speaker( speech.speaker )
					if( !speaker.photo ) {
						console.warn( `#${ numb }/${ speech.id } has no "Photo"` )
						return false
					}
				}
				
				return true
			} )
			.map( ({ id , fields }) => ({
				id : `${ fields[ 'Event number' ] }`,
				start : fields[ 'Date from' ] ,
				title : '#' + fields[ 'Event number' ] ,
				description : '' ,
				speeches : fields[ 'Speeches' ].map( id => id.split('').slice(-3).join('') ) ,
			}) )
			.sort( ( a , b )=> new $mol_time_moment( b.start ).valueOf() - new $mol_time_moment( a.start ).valueOf() )

		}
		
		@ $mol_mem
		speeches() {
			
			const data = this.$.$mol_http.resource( 'piterjs/speech/speech.data.json' ).json() as { records : Array<{
				id : string
				fields : {
					'Description' : string
					'Name' : string
					'Slides' : string
					'Video' : string
					'Speakers' : string[]
					'Topics' : string[]
				}
			}> }

			return data.records
			.map( ({ id , fields }) => ({
				id : id.split('').slice(-3).join('') ,
				title : fields[ 'Name' ] ,
				description : fields[ 'Description' ] || '' ,
				speaker : fields[ 'Speakers' ][0] ,
				duration : 'PT40m' ,
				slides : fields[ 'Slides' ] ,
				video : fields[ 'Video' ] ,
			}) )

		}
		
		@ $mol_mem
		speakers() {
			
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
				photo : fields[ 'Photo' ] && fields[ 'Photo' ][0].thumbnails.large.url , // || 'piterjs/logo/logo_512.png' ,
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
				... !this.meetup( this.meetup_id() ) ? [ this.Now() ] : [] ,
				... this.meetup( this.meetup_id() ) ? [ this.Meetup( this.meetup_id() ) ] : [] ,
				... this.speech( this.speech_id() ) ? [ this.Speech( this.speech_id() ) ] : [] ,
			]
		}

		menu_meetups() { return this.meetups().map( meetups => this.Menu_meetup( meetups.id ) ) }
		menu_meetup( id : string ) { return this.meetups().find( meetup => meetup.id === id ) }

	}

}
