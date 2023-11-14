namespace $.$$ {
	export class $piterjs_meetup_stats extends $.$piterjs_meetup_stats {

		@ $mol_mem
		joins_stat() {
			return $mol_array_groups(
				Object.entries( this.joined_moments() ),
				([ id, moment ])=> moment.toString( 'DD WD' ),
			)
		}
		
		@ $mol_mem
		days() {
			return Object.keys( this.joins_stat() )
		}
		
		@ $mol_mem
		joins_per_days() {
			return Object.values( this.joins_stat() ).map( pairs => pairs!.length )
		}

		@ $mol_mem
		joins_title() {
			return super.joins_title() + ` (${ Object.keys( this.joined_moments() ).length })`
		}
		
		@ $mol_mem
		visits_per_days() {
			return Object.values( this.joins_stat() ).map( pairs => pairs!.filter( ([ id ])=> this.visitor( id ) ).length )
		}

		@ $mol_mem
		visits_title() {
			return super.visits_title() + ` (${ this.visitors_list().length })`
		}

		@ $mol_mem
		joins_new_per_days() {
			if( !this.meetup_prev() ) return [0]
			const prev = new Set( this.joined_list_prev().map( person => person.id() ) )
			return Object.values( this.joins_stat() ).map( pairs => pairs!.filter( ([ peer ])=> !prev.has( peer as $mol_int62_string ) ).length )
		}

		@ $mol_mem
		joins_new_title() {
			return super.joins_new_title() + ` (${ this.joins_new_per_days().reduce( (a,b)=> a+b ) })`
		}
		
		@ $mol_mem
		visits_new_per_days() {
			if( !this.meetup_prev() ) return [0]
			const prev = new Set( this.visitors_list_prev().map( person => person.id() ) )
			return Object.values( this.joins_stat() ).map( pairs => pairs!.filter( ([ id ])=> this.visitor( id ) && !prev.has( id as $mol_int62_string ) ).length )
		}
	
		@ $mol_mem
		visits_new_title() {
			return super.visits_new_title() + ` (${ this.visits_new_per_days().reduce( (a,b)=> a+b ) })`
		}
		
		
	}
}
