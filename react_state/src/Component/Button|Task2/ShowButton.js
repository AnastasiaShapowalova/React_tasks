import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

function ShowButton() {
    const [isShow, setIsShow] = useState(false)
    const showChange = () => setIsShow(!isShow)
		
    const buttonNameMap = {
        [true]: 'Unshow',
        [false]: 'Show'
    }

    return (
        <Fragment>
            <button onClick={showChange}>
                {buttonNameMap[isShow]}
            </button>
            {isShow && (
                <p>При нажатии на кнопку добавлем новый элемент задания в общий массив дел. 
                Все задания выводится списком, каждое задание можно перечеркнуть как 
                выполненое или полностью удалить (можно две кнопки вывести)После того как 
                сделаем функционал как в примере, добавьте возможность массовых действий 
                (добавляем чекбокс рядом с каждым заданием) и если хоть один элемент выбран, 
                то появляется две кнопки: "Сделать выполненным" и "удалить". Соответсвенно 
                мы можем выбрать как один, так и много чекбоксов и все отмеченные удалить 
                или сделать выполненными.</p>
            )
            }
        </Fragment>
    )

}

export default ShowButton