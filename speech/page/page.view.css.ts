namespace $.$$ {

	$mol_style_define( $piterjs_speech_page , {

		flex: {
			grow: 0,
			shrink: 0,
			basis: `35rem`,
		},

		Tools: {
			flex: {
				grow: 0,
			},
		},
		
		Description: {
			boxShadow: 'none',
			flex: {
				grow: 0,
			},
			font: {
				family: 'sans-serif',
			},
		},

		Reviews: {
			padding: $mol_gap.block,
			background: {
				color: $mol_theme.card,
			},
		},
		
		Links: {
			
			// margin: {
			// 	top : rem(-1),
			// 	right : 0,
			// 	bottom : 0,
			// 	left : 0,
			// },
			flex: {
				wrap: 'wrap',
			},

			'>': {
				$mol_view: {
					flex: {
						grow: 1,
					},
				}
			}

		},

		Poster_zone: {
			position: `absolute`,
			width: 0,
			height: 0,
			overflow: `hidden`,
			zIndex: 1,
		},
		
	} )

}
