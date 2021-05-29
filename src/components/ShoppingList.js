import { useState } from 'react';
import '../styles/ShoppingList.css';
import {plantList} from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';

function ShoppingList({ cart, updateCart }) {
    // charge les catégories dans le tableau categories
    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
            []
    );
    const [catSelected, updateCatSelected] = useState("");
    function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
    return (
        <div className='lmj-shopping-list'>
            <span>Sélectionner la catégorie </span>
            <Categories categoryList={categories} catSelected={catSelected} updateCatSelected={updateCatSelected} />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, category, cover, name, water, light, price }) => (
                    (catSelected === "") ?
                    (<div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>) : 
                    ((catSelected === category) && (<div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>))
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;