namespace $.$$ {
	export class $piterjs_meetup_stats extends $.$piterjs_meetup_stats {

		@ $mol_mem
		joins_stat() {
			return $mol_array_groups(
				Object.values( this.joined_moments() ),
				moment => moment.toString( 'MM-DD' ),
			)
		}
		
		@ $mol_mem
		days() {
			return Object.keys( this.joins_stat() )
		}
		
		@ $mol_mem
		joins_per_days() {
			return Object.values( this.joins_stat() ).map( moments => moments!.length )
		}

		@ $mol_mem
		joins_title() {
			return super.joins_title() + ` (${ Object.keys( this.joins_stat() ).length })`
		}
		
	}
}
