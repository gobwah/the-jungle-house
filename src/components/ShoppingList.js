import '../styles/ShoppingList.css'
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
                    <li key={`${plant.id}`} className='tjh-plant-item'>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer && <span className='tjh-sales'>On sales</span>}
                    </li>
                )).sort()
                }
            </ul>
        </div>
    )
}

export default ShoppingList