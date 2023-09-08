namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speech_page , {

		flex: {
			grow: 1000,
			shrink: 0,
			basis: rem(40),
		},

		Tools: {
			flex: {
				grow: 0,
			},
		},
		
		Description: {
			boxShadow: 'none',
			margin: rem(.75),
			flex: {
				grow: 0,
			},
		},
		
		Links: {
			
			margin: {
				top : rem(-1),
				right : 0,
				bottom : 0,
				left : 0,
			},
			padding: rem(.75),
			fontWeight: '600',
			flex: 'none',

			'>': {
				$mol_view: {
					margin: 0,
				}
			}

		},
		
	} )

}
