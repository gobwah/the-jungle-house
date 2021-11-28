import { useState } from 'react'
import '../styles/Footer.css'

function handleBlur(inputValue) {
	inputValue && !inputValue.includes('@') && alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='tjh-footer'>
			<div className='tjh-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='tjh-footer-elem'>
				<label for='email-address' >Laissez-nous votre mail :</label>
				<input type='text' name='email-address' defaultValue={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={ (e) => { handleBlur(e.target.value) }}/>
    			<button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
			</div>
		</footer>
	)
}

export default Footer
