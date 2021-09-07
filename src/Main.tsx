import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/reduxStore";
import {actions, modelType} from '../src/redux/pageReducer'




let text1: any = React.createRef()
let text2: any = React.createRef()

export const Main: React.FC= () => {

    const dispatch = useDispatch()
    const kerh = useSelector((state: AppStateType)=> state.page.kerher)

    const showParams = () => {
        dispatch(actions.showPropertyActionCreator())
    }
    const addParams = () => {
            dispatch(actions.addPropertyActionCreator(text1.current.value, text2.current.value))
        text1.current.value = '';
        text2.current.value = '';
    }

    let values = kerh.map(el =>  <EachParam key={el.id} id={el.id} meaning={el.meaning} result={el.result}/>)
    return <div>
            <img className={'item'} src={'https://images.wbstatic.net/big/new/8710000/8714780-1.jpg'} alt={'пылесос'}/>
            <div>
                {values}
                <input ref={text1} placeholder={'meaning'}/>
                <input ref={text2} placeholder={'result'}/>
                <button onClick={addParams} > Добавить свойсво</button>
                <button onClick={showParams}> Вывести в консоль свойсва</button>
            </div>
    </div>

}



const EachParam: React.FC<modelType>= (props) => {
  return <div className={'items'}>
      <span className={'items'}>
      номер - <b>  {props.id}</b>
      </span>
      <span className={'items'}>
         характеристика -  <b>  {props.meaning}</b>
      </span>
      <span className={'items'}>
         значение - <b>  {props.result}</b>
      </span>

      </div>

}


