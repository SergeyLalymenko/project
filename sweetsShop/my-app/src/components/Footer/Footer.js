import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import logo from '../../images/logo.png'
import './Footer.css'



function Footer() {
    return (
        <Grid container color="secondary" className="footer-main-container" alignItems="center">
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={2} md={2}>
                <img src={logo} alt="logo" className="footer-logo"/>
            </Grid>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={8} md={8}>
                <Typography className="footer-typography">Наши контакты:</Typography>
                <Typography className="footer-typography">Телефон: 050 555 55 55</Typography>
                <Typography className="footer-typography">г. Днепр, улица Новая 155</Typography>
            </Grid>
        </Grid>
    )
}

export default Footer