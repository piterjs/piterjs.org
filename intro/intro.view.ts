namespace $.$$ {

	export class $piterjs_intro extends $.$piterjs_intro {

		page_ids() {
			return Object.keys( this.pages() )
		}

		Page() {
			return this.pages()[ this.page() || 'main' ]
		}

	}

}
