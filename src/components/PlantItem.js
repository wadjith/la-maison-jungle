import '../styles/PlantItem.css';
import CareScale from './CareScale';


function PlantItem(props) {

    const {id, name, cover, light, water} = props;
    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
        </li>
    );

}

export default PlantItem;