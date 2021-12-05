import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(e, scaleValue, careType) {
	e.stopPropagation()
	const range = ['few', 'moderately', 'a lot of']
	alert(`This plant needs ${range[scaleValue-1]} ${careType === 'light' ? 'light' : "water"}`)
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];
	const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon'/>) : (<img src={Water} alt='water-icon'/>);

	return (
		<div onClick={(e) => { handleClick(e, scaleValue, careType) }}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={`${rangeElem.toString()}`}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
