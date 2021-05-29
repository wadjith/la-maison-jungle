
function Categories({categoryList, catSelected, updateCatSelected}) {

    function handleChange(e) {
        let cat = e.target.options[e.target.selectedIndex].value;
        updateCatSelected(cat)
        console.log("catégorie sélectionnée: " + cat)
    }

    return (
        <select onChange={handleChange} defaultValue={catSelected}>
            <option value="">Tout</option>
            {categoryList.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    );

}

export default Categories;