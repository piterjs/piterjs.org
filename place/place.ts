namespace $ {

	export class $piterjs_place extends $piterjs_model {

		@ $mol_mem
		notes( next?: string ) {
			return this.sub( 'notes', $hyoo_crowd_reg ).str( next )
		}

		// @ $mol_mem
		// site() {
		// 	return $mol_data_wrapper( $mol_data_string , URL )( this.data().site )
		// }

		@ $mol_mem
		capacity_max( next?: number ) {
			return this.sub( 'capacity_max', $hyoo_crowd_reg ).numb( next )
		}

		@ $mol_mem
		address( next?: string ) {
			return this.sub( 'address', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		route( next?: string ) {
			return this.sub( 'route', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		coords( next?: $mol_vector_2d< number > ) {
			const coords = ( this.sub( 'route', $hyoo_crowd_reg ).value( next ) ?? [ 0, 0 ] ) as [ number, number ]
			return new $mol_vector_2d( ... coords )
		}	

		@ $mol_mem
		colors() {
			return [ 'yellow', 'yellow' ] // $mol_data_array( $mol_data_string )( this.data().colors )
		}

	}

}
