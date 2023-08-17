namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speaker_snippet , {

		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		padding: rem(.75),

		Photo: {
			width: rem(20),
			flex: {
				grow: 0,
				shrink: 1,
				basis: 'auto',
			},
			padding: 0,
			margin: rem(.5),
			position: 'relative',
			overflow: 'visible',
			zIndex: 0,
			boxShadow: 'none',
			border: {
				radius: 0,
			},

			'::after': {
				content: '',
				position: 'absolute',
				zIndex: -1,
				right: rem(-.25),
				top: rem(-.25),
				width: rem(1),
				height: rem(1),
				background: {
					color: $mol_theme.current,
				},
			},

			'::before': {
				content: '',
				position: 'absolute',
				zIndex: -1,
				left: rem(-.25),
				bottom: rem(-.25),
				width: rem(1),
				height: rem(1),
				background: {
					color: $mol_theme.current,
				},
			},

			Content: {
				border: {
					width: rem(.25),
					style: 'solid',
					color: $mol_theme.back,
				},
			},

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
			padding: rem(.75),
			font: {
				size: rem(1.25),
			},
		},

		Description: {
			margin: 0,
			padding: 0,
			boxShadow: 'none',
		},

	} )

}
