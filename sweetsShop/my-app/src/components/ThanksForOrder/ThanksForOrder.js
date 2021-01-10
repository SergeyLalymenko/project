import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import './ThanksForOrder.css'



function ThanksForOrder() {
    return (
        <Grid container direction="column" justify="center" alignItems="center" className="thanks-main-container" spacing={5}>
            <Grid item>
                <Typography variant="h3" className="thanks-typography">Заказ успешно оформлен! Ожидайте!</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" component={NavLink} to="/main/best">На главную</Button>
            </Grid>
        </Grid>
    )
}

export default ThanksForOrder