import '../styles/PlantItem.css'
import CareScale from './CareScale';

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({ name, cover, light, water }) {
    return (
        <li className='tjh-plant-item' onClick={() => { handleClick(name) }}>
            <img className='tjh-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;