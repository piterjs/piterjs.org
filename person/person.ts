namespace $ {

	export class $piterjs_person extends $piterjs_model {

		@ $mol_mem
		secret() {
			
			const priv = $piterjs_domain.secure_private()
			if( priv ) {

				const pub = this.land.unit( this.id(), this.id() )!.data as string
				return $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub )

			} else {

				const priv = this.land.peer().key_private_serial
				const pub = $piterjs_domain.secure_public()
				return $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub )

			}

		}

		@ $mol_mem
		name_real( next?: string ) {

			const secret = $mol_wire_sync( this.secret() )
			const reg = this.sub( 'name', $hyoo_crowd_reg )
			const salt = $mol_charset_encode( this.id() )

			if( next !== undefined ) {
				
				const closed = secret.encrypt( $mol_charset_encode( next ), salt )
				reg.value( new Uint8Array( closed ) )
				return next

			}

			const closed = reg.value() as Uint8Array | null
			if( !closed ) return ''

			return $mol_charset_decode( secret.decrypt( closed, salt ) )

		}
		
	}

}
