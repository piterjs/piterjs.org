namespace $.$$ {
	export class $piterjs_person_snippet extends $.$piterjs_person_snippet {
		
		@ $mol_mem
		haystack() {
			const person = this.person()
			return person.name_real() || person.name_first() + ' ' + person.name_last()
		}
		
	}
}
