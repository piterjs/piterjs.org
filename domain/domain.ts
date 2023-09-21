namespace $ {

	export class $piterjs_domain extends $hyoo_meta_model {

		@ $mol_mem
		meetups_node() {
			return this.sub( 'meetups', $hyoo_crowd_list )
		}
		
		@ $mol_mem
		meetups_ids() {
			return this.meetups_node().list().map( id => $mol_int62_string_ensure( id ) ).filter( $mol_guard_defined )
		}

		@ $mol_mem_key
		meetup( id: $mol_int62_string ) {
			const meetup = this.world()!.Fund( $piterjs_meetup ).Item( id )
			meetup.steal_rights( this )
			return meetup
		}

		@ $mol_mem
		meetups() {
			return this.meetups_ids().map( id => this.meetup( id ) )
				.sort( ( a, b )=>
					+( b.start()?.valueOf() ?? 0 )
					-( a.start()?.valueOf() ?? 0 )
				)
		}

		@ $mol_mem_key
		meetup_public( id: $mol_int62_string, next?: boolean ) {
			return this.meetups_node().has( id, next )
		}

		meetup_make() {
			return this.world()!.Fund( $piterjs_meetup ).make()!
		}

	}

}
