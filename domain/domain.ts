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
			return this.world()!.Fund( $piterjs_meetup ).Item( id )
		}

		@ $mol_action
		meetup_make() {
			
			const meetup = this.world()!.Fund( $piterjs_meetup ).make()!
			meetup.steal_rights( this )

			this.meetups_node().add( meetup.id() )

			return meetup

		}

	}

}
