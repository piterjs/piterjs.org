namespace $.$$ {

	export class $piterjs_video_page extends $.$piterjs_video_page {

		uri() {
			return this.source()
				.replace( '/watch?v=' , '/embed/' )
				.replace( 'https://youtu.be/' , 'https://youtube.com/embed/' )
		}

	}

}
