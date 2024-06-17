namespace $.$$ {
	export class $piterjs_meetup_guests extends $.$piterjs_meetup_guests {
		
		@ $mol_mem
		person_list() {
			const moments = this.meetup().joined_moments()
			return this.meetup().joined_list()
				.filter( $mol_match_text( this.filter(), person => [ this.person( person ), person ] ) )
				.sort( ( a, b )=> moments[ a ].valueOf() - moments[ b ].valueOf() )
				.map( person => this.Person( person ) )
		}

		@ $mol_mem_key
		person( person: $mol_int62_string ) {
			return this.meetup().joined_name( person ) || person
		}

		@ $mol_mem
		dump_blob() {
			const text = this.meetup().joined_list()
				.map( person => this.person( person ) )
				.sort()
				.join( '\n' )
			return new $mol_blob( [ text ], { type: 'text/plain' } )
		}

		@ $mol_mem_key
		person_join_moment( id: $mol_int62_string ) {
			return this.meetup().joined_moments()[ id ].toString( `DD WD hh:mm` )
		}
		
	}
}
