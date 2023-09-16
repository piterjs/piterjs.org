namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speech_page , {

		flex: {
			grow: 0,
			shrink: 0,
			basis: rem(60),
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
		
	} )

}
