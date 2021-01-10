import { SET_STICKERS, SET_STICKER } from '../actions/stickers'

const initialState = {
    list: [],
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case SET_STICKERS: return {...state, list: payload}

        case SET_STICKER: return {...state, list: state.list.map((item) => item.id === payload.id ? payload : item)}

        default: return state
    }
}