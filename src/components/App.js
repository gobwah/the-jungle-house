import Banner from './Banner.js'
import Cart from "./Cart.js";
import ShoppingList from './ShoppingList.js';

import logo from '../assets/logo.png'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='tjh-logo' />
				<h1 className='tjh-title'>La maison jungle</h1>
			</Banner>
			<Cart />
			<ShoppingList />
		</div>
	)
}

export default App;
