import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Do you want to buy 1 ${plantName}? Good choice 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='tjh-plant-item' onClick={() => handleClick(name)}>
			<span className='tjh-plant-item-price'>{price}$</span>
			<img className='tjh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem