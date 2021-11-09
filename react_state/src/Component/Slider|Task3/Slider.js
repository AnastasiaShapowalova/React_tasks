import { useState } from "react";
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import '../../App.css';

const slides = [
    {
        img: "https://www.befunky.com/images/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=webp&format=jpg&width=1136&crop=16:9",
        text: 'Caption Text 1',
        id: '1'
    },
    {
        img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        text: 'Caption Text 1',
        id: '2'
    }
];

function Slider() {
	let [slide, setSlider] = useState(1)
	function useSetSliderRight() {
			(slide <= 1) ? setSlider(slide = 2) : setSlider(slide - 1)
	}
	function useSetSliderLeft() {
			(slide > slides.length-1) ? setSlider(slide = 1) : setSlider(slide + 1)
	}

	const shownSlide = slides.map(item =>{
		(item.id == slide) ? 
		item.className = "imgSliderBlock" : 
		item.className = "imgSliderNone";
		console.log(slide)
		return <img id={item.id} className={item.className} src={item.img} alt={item.text}/> 
		} 
	)

	return (
		<div className = 'sliderWrapper'>
			<div>
					<FaLessThan onClick={useSetSliderRight}/>
			</div>
			<div> 
					{shownSlide}
			</div>
			<div>
					<FaGreaterThan onClick={useSetSliderLeft}/>
			</div>
		</div>
	)
}

export default Slider