import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import Categories from "./Categories";
import '../styles/ShoppingList.css'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {
	const [categoryFilter, setCategoryFilter] = useState('');

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	const filteredPlantList = categoryFilter.trim() ?
		plantList.filter(plant => plant.category === categoryFilter)
		:
		plantList;

	const categories = plantList
		.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []);

	return (
		<div className='tjh-shopping-list'>
			<Categories categories={categories} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
			<ul className='tjh-plant-list'>
				{filteredPlantList
					.sort((plant1, plant2) => plant1.name.localeCompare(plant2.name))
					.map(
						({ id, cover, name, water, light, price }) => (
							<div key={id}>
								<PlantItem
									cover={cover}
									name={name}
									water={water}
									light={light}
									price={price}
								/>
								<button className='tjh-add-button' onClick={() => addToCart(name, price)}>Add</button>
							</div>
						)
					)
				}
			</ul>
		</div>
	)
}

export default ShoppingList