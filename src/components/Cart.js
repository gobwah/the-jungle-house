import '../styles/Cart.css'

function Cart() {
    const monstera = 8;
    const ivy = 10;
    const flowers = 15;

    return (<div className='tjh-cart'>
        <h2>Cart</h2>
        <ul>
            <li>Monstera: {monstera}€</li>
            <li>Ivy: {ivy}€</li>
            <li>Flowers: {flowers}€</li>
        </ul>
        Total: {monstera+ivy+flowers}€
    </div>);
}

export default Cart