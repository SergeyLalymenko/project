import React, { useEffect } from 'react'
import { fetchStickers, clearCart, toggleStickerCart, addStickerAmount, subtractStickerAmount } from '../../store/actions/stickers'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CartItem from '../CartItem/CartItem'
import ContactForm from '../ContactForm/ContactForm'
import './CartList.css'



function CartList({list, fetchStickers, clearCart, toggleStickerCart, addStickerAmount, subtractStickerAmount}) {

    useEffect(fetchStickers, [])

    function getResultSum(arr){
        const costsArr = arr.map((item) => item.cost * item.amount);
        const resultSum = costsArr.reduce((acc, item) => acc + item);
        return resultSum
    }

    function renderList(){
        return (
            <Grid container justify="center" className="cart-list-render-container" spacing={3}>
                {list.map((item) => <CartItem key={item.id} sticker={item} onDeleteClick={toggleStickerCart} onAddAmountClick={addStickerAmount} onSubtractAmountClick={subtractStickerAmount}/>)}
                <Grid item xs={12} md={12}>
                    <Grid container justify="center">
                        <Grid item xs={11} md={3}>
                            <Paper>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={12}>
                                        <ContactForm onSubmitClick={clearCart} onGetResultSum={getResultSum} list={list}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container className="cart-list-main-container" justify="center">
            {list == false ? 'Корзина пуста!' :  renderList()}
        </Grid>
    )
}

const mapStateToProps = ({list}) => ({list: list.filter((item) => item.inCart === true)})

const mapDispatchToProps = {
    fetchStickers,
    clearCart,
    toggleStickerCart,
    addStickerAmount,
    subtractStickerAmount,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartList))