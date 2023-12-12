namespace $ {

	export class $piterjs_speaker extends $piterjs_model {

		@ $mol_mem
		donate( next?: string ) {
			return this.sub( 'donate', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		contact( next?: string ) {
			return this.sub( 'contact', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		photo_blob( next?: Blob ) {
			return this.sub( 'photo', $hyoo_crowd_blob ).blob( next )
		}

		@ $mol_mem
		photo_uri() {
			
			return URL.createObjectURL( this.photo_blob() )
			
		}
		
		@ $mol_mem
		speeches_node() {
			return this.sub( 'speeches', $hyoo_crowd_list )
		}

		@ $mol_mem
		speeches() {
			const ids = this.speeches_node().list()
			const fund = this.world()!.Fund( $piterjs_speech )
			return ids.map( id => fund.Item( $mol_int62_string_ensure( id )! ) )
		}

	}

}
