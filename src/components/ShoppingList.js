import '../styles/ShoppingList.css';
import {plantList} from '../datas/plantList';

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
            <ul>
                {plantList.map((plant, index) => (
                    <li key={plant.id}>
                        {plant.name}{plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;