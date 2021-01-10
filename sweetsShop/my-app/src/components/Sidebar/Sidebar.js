import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { NavLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import './Sidebar.css'



function Sidebar({sidebarOpened, toggleSidebar}) {
    return (
        <Drawer variant="persistent" open={sidebarOpened}>
            <Grid container className="sidebar-grid-container" direction="column" alignItems="center">
                <Grid item xs={12} md={12}>
                    <ChevronLeftIcon onClick={toggleSidebar} className="sidebar-chevron"/>
                </Grid>
                <Grid item xs={12} md={12} className="sibebar-divider-container">
                    <Divider className="sidebar-divider"/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component={NavLink} to={'/main/best'} color="secondary" onClick={toggleSidebar} className="sidebar-link">На главную</Typography>
                </Grid>
                <Grid item xs={12} md={12} className="sibebar-divider-container">
                    <Divider className="sidebar-divider"/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component={NavLink} to={'/main/cakes'} color="secondary" onClick={toggleSidebar} className="sidebar-link">Торты</Typography>
                </Grid>
                <Grid item xs={12} md={12} className="sibebar-divider-container">
                    <Divider className="sidebar-divider"/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component={NavLink} to={'/main/drinks'} color="secondary" onClick={toggleSidebar} className="sidebar-link">Напитки</Typography>
                </Grid>
                <Grid item xs={12} md={12} className="sibebar-divider-container">
                    <Divider className="sidebar-divider"/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component={NavLink} to={'/main/pastry'} color="secondary" onClick={toggleSidebar} className="sidebar-link">Выпечка</Typography>
                </Grid>
                <Grid item xs={12} md={12} className="sibebar-divider-container">
                    <Divider className="sidebar-divider"/>
                </Grid>
            </Grid>
        </Drawer>
    )
}

export default Sidebar