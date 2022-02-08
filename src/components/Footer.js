import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (typeof inputValue === 'string' && inputValue.trim() && !inputValue.includes('@')) {
			alert("There is no '@' in your email address 😥")
		}
	}

	return (
		<footer className='tjh-footer'>
			<div className='tjh-footer-elem'>
				For enthusiasts 🌿🌱🌵
			</div>
			<div className='tjh-footer-elem'>Give us your email address :</div>
			<input
				placeholder='Enter your email address'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer