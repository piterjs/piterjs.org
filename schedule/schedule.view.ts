namespace $.$$ {

	export class $piterjs_schedule extends $.$piterjs_schedule {

		@ $mol_mem
		speeches() {
			return this.meetup().speeches().map( ( _ , index )=> this.Speech( index ) )
		}

		speech_interval( index : number ) {
			const interval = this.meetup().speeches()[ index ].interval()
			return `${ interval.start.toString( 'hh:mm' ) } - ${ interval.end.shift({ minute : -10 }).toString( 'hh:mm' ) }`
		}

		speech_title( index : number ) {
			return this.meetup().speeches()[ index ].title()
		}

		speech_speaker( index : number ) {
			return this.meetup().speeches()[ index ].speaker().title()
		}

	}

}
