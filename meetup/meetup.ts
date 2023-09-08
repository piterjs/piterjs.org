namespace $ {

	export class $piterjs_meetup extends $piterjs_model {

		@ $mol_mem
		start( next?: $mol_time_moment ) {
			const str = this.sub( 'start', $hyoo_crowd_reg ).str( next?.toString() )
			return str ? new $mol_time_moment( str ) : null!
		}
		
		@ $mol_mem
		video() {
			return this.sub( 'video', $hyoo_crowd_reg ).str()
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

		@ $mol_action
		speech_make() {
			const speech = this.world()!.Fund( $piterjs_speech ).make()!
			this.speeches_node().add( speech.id() )
			return speech
		}

		@ $mol_mem
		place() {
			return this.sub( 'place', $piterjs_place )
		}

		@ $mol_mem
		afterparty() {
			return this.sub( 'afterparty', $hyoo_crowd_reg ).str()
		}

	}

}
