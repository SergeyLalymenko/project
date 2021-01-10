import api from '../../api'



export const SET_STICKERS = 'SET_STICKERS'
export const fetchStickers = () => (dispatch) => {
    api.get('/').then(({data}) => dispatch({type: SET_STICKERS, payload: data}))
}

export const SET_STICKER = 'SET_STICKER'
export const toggleStickerCart = (sticker) => (dispatch) => {
    const newSticker = {
        ...sticker,
        inCart: !sticker.inCart,
        amount: '1',
    }
    api.put('/' + sticker.id, newSticker).then(({data}) => dispatch({type: SET_STICKER, payload: data}))
}

export const clearCart = (list) => (dispatch) => {
    const idList = list.map((item) => +item.id);
    idList.forEach((id) => {
        const selectedSticker = list.find((item) => item.id === id);
        const newSticker = {
            ...selectedSticker,
            inCart: false,
            amount: '1',
        }
        api.put('/' + id, newSticker).then(({data}) => dispatch({type: SET_STICKER, payload: data}));
    })
}

export const addStickerAmount = (sticker) => (dispatch) => {
    if(+sticker.amount <= 9){
        const newSticker = {
            ...sticker,
            amount: +sticker.amount + 1,
        }
        api.put('/' + sticker.id, newSticker).then(({data}) => dispatch({type: SET_STICKER, payload: data}))
    }
}

export const subtractStickerAmount = (sticker) => (dispatch) => {
    if(+sticker.amount >= 2){
        const newSticker = {
            ...sticker,
            amount: +sticker.amount - 1,
        }
        api.put('/' + sticker.id, newSticker).then(({data}) => dispatch({type: SET_STICKER, payload: data}))
    }
}