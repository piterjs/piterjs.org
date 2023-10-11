namespace $.$$ {
	export class $piterjs_meetup_stats extends $.$piterjs_meetup_stats {

		@ $mol_mem
		joins_stat() {
			return $mol_array_groups(
				Object.entries( this.joined_moments() ),
				([ id, moment ])=> moment.toString( 'MM-DD' ),
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
		
	}
}
