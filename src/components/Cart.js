import '../styles/Cart.css';

function Cart() {
    const prixMonstera = 8;
    const prixLierre = 10;
    const prixBouquetFleur = 15;
    return (
        <div className = 'lmj-cart'>
            <h2>Votre panier</h2>
            <ul>
                <li>Monstera: {prixMonstera} FCFA</li>
                <li>Lierre: {prixLierre} FCFA</li>
                <li>Bouquet de fleur: {prixBouquetFleur} FCFA</li>
            </ul>
            Total du panier: {prixMonstera + prixLierre + prixBouquetFleur} FCFA.
        </div>
    );

}

export default Cart;