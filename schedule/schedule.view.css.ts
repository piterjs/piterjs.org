namespace $.$$ {

	const { vw , em , vmin } = $mol_style_unit

	$mol_style_define( $piterjs_schedule , {

		flex: 'auto',
		flexWrap: 'wrap',
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '3vmin',
		lineHeight: '3vmin',

		Speeches: {
			margin: 'auto',
			display: 'flex',
			flexDirection: 'column',
			padding: [ em(.5) , vw(5) ],
			alignContent: 'center',
			alignItems: 'flex-start',
		},

		Speech: {
			margin: em(.5),
		},

		Speech_start: {
			fontWeight: 'bolder',
			padding: `.5em`,
		},

		Speech_title: {
			padding: `.5em`,
		},

		Speech_speaker: {
			padding: `.5em`,
			margin : {
				left: vmin(9.5),
			},
			color: $mol_theme.shade,
		},

	})

}
