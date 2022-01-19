namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speech_snippet , {

		display: 'flex',
		padding: rem(.25),
		alignItems: 'flex-start',

		Photo: {
			width: rem(6),
			margin: $mol_gap.block,
		},

		Info: {
			flex: {
				grow: 1,
				shrink: 1,
				basis: rem(16),
			},
			padding: rem(.75),
		},

		Title: {
			display: 'block',
			padding: [ rem(.25), rem(.5) ],
		},

		Addon: {
			display: 'flex',
		},

		Speaker_title: {
			padding: [ rem(.25), rem(.5) ],
			color: $mol_theme.text,
			flex: {
				grow: 1,
				shrink: 1,
				basis: 'auto',
			},
		},

		Time: {
			padding: [ rem(.25), rem(.5) ],
			color: $mol_theme.text,
			whiteSpace: 'nowrap',
		},

	} )

}
