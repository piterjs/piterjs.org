namespace $ {

	export class $piterjs_speech extends $piterjs_model {

		@ $mol_mem
		meetup( next?: $piterjs_meetup ) {
			const id = $mol_int62_string_ensure( this.sub( 'meetup', $hyoo_crowd_reg ).str( next?.id() ) )
			return id ? this.world()!.Fund( $piterjs_meetup ).Item( id ) : null
		}

		@ $mol_mem
		slides( next?: string ) {
			return this.sub( 'slides', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		video( next?: string ) {
			return this.sub( 'video', $hyoo_crowd_reg ).str( next )
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

		@ $mol_mem
		reviews_node() {
			return this.meetup()?.reviews_node()?.sub( 'speech', $hyoo_crowd_struct ).sub( this.id(), $hyoo_crowd_dict )
		}

		@ $mol_mem
		review( next?: string ) {
			return this.reviews_node()?.sub( this.land.peer_id(), $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		reviews() {
			const regs = this.reviews_node()?.nodes( $hyoo_crowd_reg ) ?? []
			const reviews = regs.map( reg => reg.str() ?? '' )
			return reviews.filter( Boolean ).join( '\n---\n' )
		}

		@ $mol_mem
		post_template( next?: string ) {
			return this.sub( 'post_template', $hyoo_crowd_text ).text( next )
				|| $piterjs_post_template.speech
		}

		@ $mol_mem
		post_text() {

			const title = this.title()
			const descr = this.description()
			const speaker = this.speaker().title()
			const meetup = this.$.$mol_state_arg.make_link({ meetup: this.meetup()!.id() })
			const date = this.start()?.toString( 'DD Month' ) ?? 'скоро'
			const time = this.start()?.toString( 'hh:mm' ) ?? ''

			return this.post_template()
				.replaceAll( '{title}', title )
				.replaceAll( '{descr}', descr )
				.replaceAll( '{date}', date )
				.replaceAll( '{time}', time )
				.replaceAll( '{speaker}', speaker )
				.replaceAll( '{meetup}', meetup )
			
		}

	}

}
