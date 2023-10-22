namespace $.$$ {
	
	$mol_style_define( $piterjs_speech_poster, {

		padding: 0,
		
		flex: {
			shrink: 0,
		},

		align: {
			items: 'center',
		},

		justify: {
			content: 'center',
		},

		font: {
			size: `3rem`,
			weight: `bolder`,
		},

		lineHeight: `4rem`,

		transition: `none`,

		width: `1000px`,
		height: `1000px`,
		
		'@': {
			piterjs_speech_poster_aspect: {
				'1:1': {
					width: `1000px`,
					height: `1000px`,
				},
				'16:9': {
					width: `1920px`,
					height: `1080px`,
				},
			},
		},

		$piterjs_screen_lines: {
			width: `20rem`,
		},

		Main: {
			flex: {
				shrink: 1,
				wrap: `nowrap`,
				direction: `column`,
			},
			padding: `3rem`,
		},

		Photo: {
			margin: `auto`,
			width: `25rem`,
			aspectRatio: 1,
		},

		Title: {
			margin: `auto`,
			padding: `3rem`,
			flex: {
				shrink: 1,
			},
			textAlign: `center`,
		},
		
		Name: {
			margin: `auto`,
			color: $mol_theme.shade,
			textAlign: `center`,
		},
		
	} )
	
}
