namespace $.$$ {

	$mol_style_define( $piterjs_speaker_snippet , {

		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		padding: '.5rem',

		Photo: {
			width: '10rem',
			flex: '0 1 auto',
			padding: '0',
			margin: '.25rem',
			position: 'relative',
			overflow: 'visible',
			zIndex: '0',
			boxShadow: 'none',
			borderRadius: '0',

			'::after': {
				content: '',
				position: 'absolute',
				zIndex: '-1',
				right: '-.25rem',
				top: '-.25rem',
				width: '1rem',
				height: '1rem',
				background: $mol_theme.current,
			},

			'::before': {
				content: '',
				position: 'absolute',
				zIndex: '-1',
				left: '-.25rem',
				bottom: '-.25rem',
				width: '1rem',
				height: '1rem',
				background: $mol_theme.current,
			},

			Content: {
				border: `.25rem solid ${ $mol_theme.back }`,
			},

		},

		Info: {
			display: 'flex',
			flexDirection: 'column',
			flex: '2 1 20rem',
			padding: '.25rem',
		},

		Title: {
			padding: '.25rem',
			fontSize: '1.25em',
		},

		Description: {

			margin: '0',
			padding: '0',
			boxShadow: 'none',
			
			Row: {
				margin: '.25rem',
			},

		},

	} )

}
