import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useHistory } from 'react-router-dom'
import './StickerItem.css'



function Sticker({sticker, onAddBtnClick}) {

    const {push} = useHistory();

    return (
        <Grid item xs={6} md={3}>
            <Grid container direction="row" className="sticker-item-main-container">
                <Grid item xs={12} md={12}>
                    <img src={sticker.url} className="sticker-item-img" alt="img" onClick={() => push('/item/' + sticker.id)}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container direction="column" justify="center" alignItems="center" className="sticker-item-cost-block">
                        <Grid item xs={12} md={12} className="sticker-item-title-container">
                            <Typography className="sticker-item-title">{sticker.title}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography>{sticker.cost + ' грн'}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            {sticker.inCart == false ? 
                            <Button variant="contained" color="primary" startIcon={<AddIcon/>} size="small" onClick={() => onAddBtnClick(sticker)}><Typography className="sticker-item-btn-text">В КОРЗИНУ</Typography></Button>
                            : <Button variant="contained" color="secondary" startIcon={<RemoveIcon/>} size="small" onClick={() => onAddBtnClick(sticker)}><Typography className="sticker-item-btn-text">УБРАТЬ</Typography></Button>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Sticker