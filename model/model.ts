namespace $ {
	
	export class $piterjs_model extends $hyoo_meta_model {

		@ $mol_mem
		description_node() {
			return this.sub( 'description', $hyoo_crowd_text )
		}
		@ $mol_mem
		description( next?: string ) {
			return this.description_node().str( next )
		}
		@ $mol_mem
		description_selection( next?: number[] ) {
			return this.description_node().selection( this.land.peer().id, next )
		}

	}

}
