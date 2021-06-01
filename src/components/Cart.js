import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, elem) => acc + elem.price * elem.amount, 
        0
    )
    
    function handleClick(e) {
        //Copie le cart actuel pour la modifier
        const cartUpdated = [...cart]
        //index de la plante pour laquelle on a cliqué sur le bouton
        let index = cartUpdated.findIndex((plant) => plant.name === e.target.value) 
        const {name, price, amount} = cartUpdated[index]
        if (amount === 1 ) {
            // Je déplace les éléments du tableau
            while(index < cart.length - 1) {
                cartUpdated[index] = cartUpdated[++index]

                console.log(index)
            }
            // j'enlève le dernier élément
            cartUpdated.pop()
            
        } else {
            // je diminue la quantité et je remplace dans le tableau
            let amountMinus = amount - 1
            cartUpdated[index] = {name, price, amount: amountMinus}
        }
        updateCart(cartUpdated)
    }

    useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
				<div key={`${name}-${index}`}>
					{name} {price}€ x {amount}
                    <button value={name} key={`${name}-${index}`} onClick={handleClick}>Enlever 1</button>
				</div>
			))}

			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart;