namespace $.$$ {
	export class $piterjs_meetup_texts extends $.$piterjs_meetup_texts {
		
		@ $mol_mem_key
		speech_text( speech: $piterjs_speech ) {
			return super.speech_text( speech )
				.replaceAll( '{start}', speech.start().toString( 'hh:mm' ) )
				.replaceAll( '{speaker}', speech.speaker().title() )
				.replaceAll( '{title}', speech.title() )
		}

		@ $mol_mem
		init_text( next?: string ) {
			if( next ) return next

			const meetup = this.meetup()
			const title = meetup.title()
			const start = meetup.start()?.toString( 'DD Month hh:mm' ) ?? 'скоро'
			const place = meetup.place().title()
			const address = meetup.place().address()
			const register = this.$.$mol_state_arg.make_link({ meetup: meetup.id() })

			const program = meetup.speeches().map( speech => this.speech_text( speech ) ).join( '\n' ) || 'формируется'

			return super.init_text()
				.replaceAll( '{title}', title )
				.replaceAll( '{start}', start )
				.replaceAll( '{place}', place )
				.replaceAll( '{address}', address )
				.replaceAll( '{program}', program )
				.replaceAll( '{register}', register )
			
		}
		
	}
}
