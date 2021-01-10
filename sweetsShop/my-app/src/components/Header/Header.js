import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { fetchStickers } from '../../store/actions/stickers'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Grid from '@material-ui/core/Grid'
import logo from '../../images/logo.png'
import MenuIcon from '@material-ui/icons/Menu'
import BrightnessIcon from '@material-ui/icons/Brightness6'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import './Header.css'



function Header({list, length, onToggleThemeClick, toggleSidebar, fetchStickers}) {

    const {push} = useHistory();
    const [inputValue, setInputValue] = useState('');

    useEffect(fetchStickers, []);

    function pushToSticker(value){
        const selectedSticker = list.find((item) => item.title === value);
        push('/item/' + selectedSticker.id);
    }

    return (
        <AppBar position="fixed" color="primary" className="header-appbar">
            <Grid container alignItems="center">
                <Grid item xs={2} md={2}>
                    <MenuIcon fontSize='large' className="header-menu-icon" onClick={toggleSidebar}/>
                </Grid>
                <Grid item xs={1} md={1}>
                    <img src={logo} alt="logo" className="header-logo"/>
                </Grid>
                <Grid item xs={2} md={2}></Grid>
                <Grid item xs={2} md={2}>
                    <div className="header-search-container">
                        <Autocomplete
                            onChange={(e, newValue) => newValue ? pushToSticker(newValue) : ''}
                            inputValue={inputValue}
                            onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
                            options={list.map((option) => option.title)}
                            renderInput={(params) => <TextField {...params} color="secondary" label="Поиск" variant="outlined"/>}
                        />
                    </div>
                </Grid>
                <Grid item xs={3} md={3}></Grid>
                <Grid item xs={1} md={1}>
                    <BrightnessIcon className="header-brightness" onClick={onToggleThemeClick}/>
                </Grid>
                <Grid item xs={1} md={1}>
                    <NavLink to="/cart" className="header-link">
                        <div className="header-cart-length">{length}</div>
                        <ShoppingCartIcon size="large" className="header-cart"/>
                    </NavLink>
                </Grid>
            </Grid>
        </AppBar>
    )
}

const mapStateToProps = ({list}) => ({list, length: list.filter((item) => item.inCart == true).length})

const mapDispatchToProps = {
    fetchStickers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)