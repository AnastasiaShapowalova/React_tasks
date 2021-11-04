import { useState } from "react";
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';

let style={
    height: '300px',
    display: 'none',
}

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

        const link = {
            [true]: 'https://www.befunky.com/images/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=webp&format=jpg&width=1136&crop=16:9',
            [false]: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg'
        }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <FaLessThan onClick={ () => (slide <= 1) ? setSlider(slide = 2) : setSlider(slide - 1) }/>
            </div>
            <div> 
                {slides.map( item =>{

                    (item.id == slide)? style = {display: 'block', height: '300px'} : style = {display: 'none', height: '300px'};
                    return( <img id={item.id} style={style} src={item.img} alt={item.text}  /> )
                } )}
            </div>
            <div>
                <FaGreaterThan onClick={ () => (slide > slides.length-1) ? setSlider(slide = 1) : setSlider(slide + 1)}/>
            </div>
        </div>
    )

}

export default Slider