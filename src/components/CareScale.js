import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)
        
    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>
                        {scaleType}
                    </span>
                ) : null
            )}
        </div>
    )
}

function handleClick(scaleVal, careT) {
    let scale, care;
    care = (careT === 'light') ? 'de lumière' : 'd\'arrosage';
    switch (scaleVal) {
        case 1:
            scale = 'peu'
            break;
        case 2:
            scale = 'modérement'
            break;
        case 3:
            scale = 'beaucoup'
            break;    
    
        default:
            break;
    } 
    alert(`Cette plante requiert ${scale} ${care} 🌱✨`)
    //console.log(scale + ' et ' + care)
}
export default CareScale