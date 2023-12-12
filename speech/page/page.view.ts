namespace $.$$ {

	export class $piterjs_speech_page extends $.$piterjs_speech_page {

		speaker() {
			return this.speech().speaker()
		}

		@ $mol_mem
		override links() {
			return [
				... ( this.editing() || this.slides() ) ? [ this.Slides() ] : [] ,
				... ( this.editing() || this.video() ) ? [ this.Video() ] : [] ,
			]
		}

		override Review_field() {
			return this.speech().meetup()?.review_allowed() ? super.Review_field() : null!
		}

		override Reviews() {
			return this.editing() ? super.Reviews() : null!
		}

		override foot() {
			if( !this.editable() ) return []
			return super.foot()
		}

		override poster_1_1_name() {
			return `${ this.speaker().title() } - ${ this.title() } 1-1.png`
		}

		override poster_16_9_name() {
			return `${ this.speaker().title() } - ${ this.title() } 16-9.png`
		}

		override poster_1_1_blob() {
			this.poster_aspect( `1:1` )
			const canvas = $mol_wire_sync( this.$ ).$mol_dom_capture_canvas( this.Poster().dom_tree() )
			const picture = $mol_picture.fit( canvas )
			const blob = picture.format( `image/png` )!
			return blob
		}
		
		override poster_16_9_blob() {
			this.poster_aspect( `16:9` )
			const canvas = $mol_wire_sync( this.$ ).$mol_dom_capture_canvas( this.Poster().dom_tree() )
			const picture = $mol_picture.fit( canvas )
			const blob = picture.format( `image/png` )!
			return blob
		}
		
	}

}
