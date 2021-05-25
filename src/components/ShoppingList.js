import '../styles/ShoppingList.css';
import {plantList} from '../datas/plantList';
import CareScale from './CareScale';

function ShoppingList() {

    let catList = [];
    // charge une catégorie dans le tableau catList seulement s'il n'existe pas déjà
    plantList.map(plant => plant.category).forEach((cat) => { if(catList.indexOf(cat) === -1) catList.push(cat)});

    return (
        <div>
            <h3>Liste des catégories</h3>
            <ul>
                {catList.map((cat, index) => <li key={cat}>{cat}</li>)}
            </ul>
            <hr />
            <ul className='lmj-plant-list'>
                {plantList.map((plant, index) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        <CareScale scaleValue='0' careType='light' />
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;