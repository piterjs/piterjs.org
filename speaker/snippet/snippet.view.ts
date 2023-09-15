namespace $.$$ {

	export class $piterjs_speaker_snippet extends $.$piterjs_speaker_snippet {

		photo() {
			return this.speaker().photo_uri()
		}

		@ $mol_action
		upload( next: File[] ) {

			if( !next ) return []
			
			const file = next[0]
			const pict = $mol_picture.fit( file, 320 )

			const blob = pict.format( 'image/webp' )
			if( !blob ) return []
			
			this.speaker().photo_blob( blob )
			
			return []

		}

		@ $mol_action
		take_files( files: FileList ) {
			return [ ... files ]
		}

		paste( event?: ClipboardEvent ) {
			const files = event?.clipboardData?.files
			if( files ) this.upload( this.take_files( files ) )
		}

	}

}
