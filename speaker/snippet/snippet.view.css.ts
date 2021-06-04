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
			borderRadius: '0',

			'::after': {
				content: '',
				position: 'absolute',
				zIndex: -1,
				right: '-.25rem',
				top: '-.25rem',
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
				left: '-.25rem',
				bottom: '-.25rem',
				width: rem(1),
				height: rem(1),
				background: {
					color: $mol_theme.current,
				},
			},

			Content: {
				//border: `.25rem solid ${ $mol_theme.back }`,
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
			padding: rem(.5),
		},

		Title: {
			padding: rem(.25),
			fontSize: '1.25em',
		},

		Description: {

			margin: 0,
			padding: 0,
			boxShadow: 'none',
			
			Row: {
				margin: rem(.25),
			},

		},

	} )

}
