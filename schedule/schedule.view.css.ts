namespace $.$$ {

	const { vw , em , vmin } = $mol_style_unit

	$mol_style_define( $piterjs_schedule , {

		flex: 'auto',
		flexWrap: 'wrap',
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '4vmin',

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

		Speech_interval: {
			fontWeight: 'bolder',
		},

		Speech_title: {
			padding: [ 0 , em(.5) ],
			margin: {
				left: vmin(10),
			},
		},

		Speech_speaker: {
			padding: [ 0 , em(.5) ],
			margin : {
				left: vmin(10),
			},
			color: $mol_theme.shade,
		},

	})

}
