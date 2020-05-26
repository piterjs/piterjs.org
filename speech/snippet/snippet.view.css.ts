namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $piterjs_speech_snippet , {

		display: 'flex',
		padding: rem(.25),
		alignItems: 'flex-start',

		'@' : {
			mol_link_current: {
				true: {
					background: 'none',
					Title: {
						background: {
							color: $mol_theme.current,
						},
					},
				},
			},
		},

		Photo: {
			width: rem(6),
			margin: rem(.5),
		},

		Info: {
			flex: {
				grow: 1,
				shrink: 1,
				basis: rem(16),
			},
			padding: [ rem(.75) , 0 ],
		},

		Title: {
			display: 'block',
			padding: [ rem(.25), rem(.5) ],
			fontWeight: '600',
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
