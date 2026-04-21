namespace $.$$ {
	export class $piterjs_meetup_guests extends $.$piterjs_meetup_guests {

		@ $mol_mem_key
		person_name_safe( id: $mol_int62_string ) {
			try {
				return this.person( id )
			} catch( error ) {
				if( $mol_promise_like( error ) ) return id
				throw error
			}
		}

		@ $mol_mem
		joined_list_unique() {
			return [ ... new Set( this.meetup().joined_list() ) ]
		}

		@ $mol_mem
		person_list() {
			const moments = this.meetup().joined_moments()
			return this.joined_list_unique()
				.filter( $mol_match_text( this.filter(), person => [ this.person_name_safe( person ), person ] ) )
				.sort( ( a, b )=> ( moments[ a ]?.valueOf() ?? 0 ) - ( moments[ b ]?.valueOf() ?? 0 ) )
				.map( person => this.Person( person ) )
		}

		@ $mol_mem_key
		person( person: $mol_int62_string ) {
			return this.meetup().joined_name( person ) || person
		}

		@ $mol_mem
		dump_blob() {
			const text = this.joined_list_unique()
				.map( person => this.person_name_safe( person ) )
				.sort()
				.join( '\n' )
			return new $mol_blob( [ text ], { type: 'text/plain' } )
		}

		@ $mol_mem_key
		person_join_moment( id: $mol_int62_string ) {
			const moment = this.meetup().joined_moments()[ id ]
			return moment ? moment.toString( `DD WD hh:mm` ) : ''
		}

	}
}
