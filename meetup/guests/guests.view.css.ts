namespace $.$$ {
	
	$mol_style_define( $piterjs_meetup_guests, {
		
		flex: {
			basis: `30rem`,
		},

		Filter: {
			align: {
				self: `stretch`,
			}
		},

		Person: {
			justify: {
				content: `flex-end`,
			},
			flex: {
				wrap: `wrap`,
			},
		},

		Person_visitor: {
			flex: {
				grow: 1,
			},
			maxWidth: `100%`,
		},

		Person_snippet: {
			padding: 0,
		},

		Person_join_moment: {
			padding: $mol_gap.text,
			color: $mol_theme.shade,
		},
		
	} )
	
}
