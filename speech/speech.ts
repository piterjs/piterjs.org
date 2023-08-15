namespace $ {

	export class $piterjs_speech extends $piterjs_model {

		@ $mol_mem
		meetup( next?: $piterjs_meetup ) {
			const id = $mol_int62_string_ensure( this.sub( 'meetup', $hyoo_crowd_reg ).str( next?.id() ) )
			return id ? this.world()!.Fund( $piterjs_place ).Item( id ) : null
		}

		@ $mol_mem
		slides() {
			return this.sub( 'slides', $hyoo_crowd_reg ).str()
		}

		@ $mol_mem
		video() {
			return this.sub( 'video', $hyoo_crowd_reg ).str()
		}
		
		@ $mol_mem
		start( next?: $mol_time_moment ) {
			return new $mol_time_moment( this.sub( 'start', $hyoo_crowd_reg ).str( next?.toString() ) )
		}

		@ $mol_mem
		interval() : $mol_time_interval {
			
			return new $mol_time_interval({
				start : this.start() ,
				duration : this.duration() ,
			})

		}

		@ $mol_mem
		duration() {
			return new $mol_time_duration( this.sub( 'duration', $hyoo_crowd_reg ).str() || 'PT30m' )
		}
		
		@ $mol_mem
		speaker() {
			return this.sub( 'speaker', $piterjs_speaker )
		}

	}

}
