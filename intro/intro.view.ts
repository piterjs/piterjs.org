namespace $.$$ {

	export class $piterjs_intro extends $.$piterjs_intro {

		@ $mol_mem
		dom_node() {
			$mol_fiber_defer( ()=> this.focused( true ) )
			return super.dom_node()
		}

		page_ids() {
			return Object.keys( this.pages() )
		}

		Page() {
			return this.pages()[ this.page() || 'main' ]
		}

		place() {
			return this.meetup().place()
		}

		// @ $mol_mem
		// place_title() {
		// 	return super.place_title().replace( '{place}' , this.place().title() )
		// }

		place_notes() {
			return this.place().notes()
		}

		afterparty() {
			return this.meetup().afterparty()
		}

	}

}
