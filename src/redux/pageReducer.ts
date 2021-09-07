import {InferActionsTypes} from "./reduxStore";


const ADD_PROPERTIES = 'ADD_PROPERTIES';
const SHOW_PROPERTIES= 'SHOW_PROPERTIES'

export type modelType ={
    id: number
    meaning?: string
    result?: string | number
}

let initialState = {
    kerher :
        [
            {
                id: 1,
                meaning: 'название',
                result: 'kerher',

            },
            {
                id: 2,
                meaning: 'модель',
                result: 'пылесос'
            },
            {
                id:3 ,
                meaning: 'мощность',
                result: 20
            }
        ] as Array<modelType>,
    count: 4

}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>


const pageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type){
        case ADD_PROPERTIES: {
            let newProperty = {
                id: state.count,
                meaning: action.text1,
                result: action.text2,
            };

            return {...state,
                kerher: [...state.kerher, newProperty],
                count: state.count+1
            };
        }
        case SHOW_PROPERTIES: {
            let stateCopy = {...state}
            stateCopy.kerher = [...state.kerher]
            stateCopy.kerher.forEach(element => console.log(element))
            return state

        }
        default:
            return state;
    }


}


export const actions = {
    addPropertyActionCreator: (text1: string , text2: string | number) => ({
        type: ADD_PROPERTIES,
        text1,
        text2
    }as const),
    showPropertyActionCreator: () => ({
        type: SHOW_PROPERTIES,
    }as const)
}


export default pageReducer;