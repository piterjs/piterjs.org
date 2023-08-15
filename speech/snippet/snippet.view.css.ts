namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speech_snippet , {

		display: 'flex',
		padding: $mol_gap.block,
		alignItems: 'flex-start',

		Photo: {
			width: rem(6),
		},

		Info: {
			flex: {
				grow: 1,
				shrink: 1,
				basis: rem(16),
			},
		},

		Title: {
			display: 'block',
			padding: $mol_gap.text,
		},

		Addon: {
			display: 'flex',
		},

		Speaker_title: {
			padding: $mol_gap.text,
			color: $mol_theme.text,
			flex: {
				grow: 1,
				shrink: 1,
				basis: 'auto',
			},
		},

		Time: {
			padding: $mol_gap.text,
			color: $mol_theme.text,
			whiteSpace: 'nowrap',
		},

	} )

}
