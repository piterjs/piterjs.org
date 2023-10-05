namespace $ {

	export class $piterjs_person extends $piterjs_model {

		@ $mol_mem
		name_real( next?: string ) {
			return this.sub( 'name_real', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		name_first( next?: string ) {
			return this.sub( 'name_first', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		name_last( next?: string ) {
			return this.sub( 'name_last', $hyoo_crowd_reg ).str( next )
		}

	}

}
