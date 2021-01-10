import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchStickers, toggleStickerCart } from '../../store/actions/stickers'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import './Sticker.css'



function Sticker({sticker, fetchStickers, toggleStickerCart}) {

    useEffect(fetchStickers, [])

    return (
        <Grid container className="sticker-main-container" justify="center">
            {!sticker ? '' : 
                <Grid item xs={10} md={4}>
                    <Paper>
                        <Grid container direction="column" alignItems="center">
                            <Grid item xs={12} md={12} className="sticker-img-container">
                                <img src={sticker.url} alt="img" className="sticker-img"/>
                            </Grid>
                            <Grid item xs={12} md={12} className="sticker-grid-item">
                                <Typography variant="h5">{sticker.title}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} className="sticker-grid-item">
                                <Typography variant="h5">{sticker.cost + ' грн'}</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} className="sticker-grid-item">
                                {sticker.inCart ? 
                                <Button variant="contained" color="secondary" startIcon={<RemoveIcon/>} onClick={() => toggleStickerCart(sticker)}>УБРАТЬ</Button> :
                                <Button variant="contained" color="primary" startIcon={<AddIcon/>} onClick={() => toggleStickerCart(sticker)}>В КОРЗИНУ</Button>}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            }
        </Grid>
    )
}

const mapStateToProps = ({list}, {match: {params: {id}}}) => ({sticker: list.find((item) => item.id === id)})

const mapDispatchToProps = {
    fetchStickers,
    toggleStickerCart,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sticker))