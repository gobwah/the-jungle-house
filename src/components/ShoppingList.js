import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
import { plantList } from '../data/plantList'

function ShoppingList() {
    const categories = plantList.reduce((acc, plant) => ( acc.includes(plant.category) ? acc : acc.concat(plant.category) ), []);

    return (
        <div>
            <ul>
                {categories.sort().map((category, index) => ( <li key={`${category}-${index}`}>{category}</li> ))}
            </ul>
            <ul className='tjh-plant-list'>
                {
                plantList
                .sort((plant1, plant2) => ( plant1.name.localeCompare(plant2.name) ))
                .map((plant) => ( 
                    <PlantItem 
                        key={plant.id}
                        name={plant.name}
                        cover={plant.cover}
                        light={plant.light}
                        water={plant.water}
                    />
                )).sort()
                }
            </ul>
        </div>
    )
}

export default ShoppingList