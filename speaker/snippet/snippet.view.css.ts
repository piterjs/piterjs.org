namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speaker_snippet , {

		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		padding: rem(.75),

		Photo: {
			width: rem(16),
			height: rem(16),
			flex: {
				grow: 0,
				shrink: 1,
				basis: 'auto',
			},
			margin: rem(.5),
		},

		Info: {
			display: 'flex',
			flexDirection: 'column',
			flex: {
				grow: 2,
				shrink: 1,
				basis: rem(20),
			},
		},

		Title: {
			textShadow: '0 0',
		},

		Description: {
			margin: 0,
			padding: 0,
			boxShadow: 'none',
			font: {
				family: 'sans-serif',
			},
		},

		Upload: {
			overflow: 'hidden',
			align: {
				self: 'stretch',
			},
			justify: {
				self: 'stretch',
			},
		},

	} )

}
