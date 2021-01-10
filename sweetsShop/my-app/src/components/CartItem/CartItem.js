import React from 'react'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import './CartItem.css'



function CartItem({sticker, onDeleteClick, onAddAmountClick, onSubtractAmountClick}) {

    const {push} = useHistory();

    return (
        <Grid item xs={11} md={11}>
            <Paper>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={2} md={3}>
                        <img src={sticker.url} alt="img" className="cart-item-img" onClick={() => push('/item/' + sticker.id)}/>
                    </Grid>
                    <Grid item xs={2} md={3}>
                        <Typography variant="h6" className="cart-item-typography-title">{sticker.title}</Typography>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Grid container justify="center">
                            <Grid item>
                                <AddIcon onClick={() => onAddAmountClick(sticker)} className="cart-item-icon"/>
                            </Grid>
                            <Grid item>
                                <div className="cart-item-amount-container">{sticker.amount}</div>
                            </Grid>
                            <Grid item>
                                <RemoveIcon onClick={() => onSubtractAmountClick(sticker)} className="cart-item-icon"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <Typography variant="h6" className="cart-item-typography-cost">{sticker.cost * sticker.amount + ' грн'}</Typography>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <ClearIcon className="cart-item-clear-icon" onClick={() => onDeleteClick(sticker)}/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default CartItem