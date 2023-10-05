namespace $.$$ {
	export class $piterjs_speech_poster extends $.$piterjs_speech_poster {
		
		@ $mol_mem
		override photo_uri() {
			return $mol_wire_sync( this.$ ).$mol_blob_uri( this.speaker().photo_blob() )
		}

		override speaker_name() {
			return this.speaker().title()
		}

	}
}
