namespace $.$$ {
	export class $piterjs_meetup_guests extends $.$piterjs_meetup_guests {

		@ $mol_mem
		joined_list_unique() {
			return [ ... new Set( this.meetup().joined_list() ) ]
		}

		@ $mol_mem
		person_list() {
			const moments = this.meetup().joined_moments()
			return this.joined_list_unique()
				.filter( $mol_match_text( this.filter(), person => [ this.person( person ), person ] ) )
				.sort( ( a, b )=> ( moments[ a ]?.valueOf() ?? 0 ) - ( moments[ b ]?.valueOf() ?? 0 ) )
				.map( person => this.Person( person ) )
		}

		@ $mol_mem_key
		person( id: $mol_int62_string ) {
			try {
				return this.meetup().joined_name( id ) || id
			} catch( error ) {
				if( $mol_promise_like( error ) ) return id
				throw error
			}
		}

		@ $mol_mem
		dump_blob() {
			const text = this.joined_list_unique()
				.map( person => this.person( person ) )
				.sort()
				.join( '\n' )
			return new $mol_blob( [ text ], { type: 'text/plain' } )
		}

		@ $mol_mem_key
		person_join_time( id: $mol_int62_string ) {
			return this.meetup().joined_moments()[ id ]?.toString( `DD WD hh:mm` ) ?? ''
		}

	}
}
