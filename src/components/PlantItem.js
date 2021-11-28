import '../styles/PlantItem.css'
import CareScale from './CareScale';

function PlantItem({ id, name, cover, light, water }) {
    return (
        <li key={id} className='tjh-plant-item'>
            <img className='tjh-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale id={id} careType='water' scaleValue={water} />
                <CareScale id={id} careType='light' scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;