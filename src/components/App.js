import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='tjh-logo' />
				<h1 className='tjh-title'>La maison jungle</h1>
			</Banner>
			<div className='tjh-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App