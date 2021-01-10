import React from 'react'
import * as yup from 'yup'
import { Field, Form, Formik } from 'formik'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'



const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле!').min(2, 'Минимум 2 символа!').max(20, 'Максимум 20 символов!'),
    surname: yup.string().required('Обязательное поле!').min(2, 'Минимум 2 символа!').max(20, 'Максимум 20 символов!'),
    street: yup.string().required('Обязательное поле!').min(3, 'Минимум 3 символа!').max(20, 'Максимум 20 символов!'),
    home: yup.string().required('Обязательное поле!').min(1, 'Минимум 1 символ!').max(3, 'Максимум 3 символа!'),
    apartment: yup.string().required('Обязательное поле!').min(1, 'Минимум 1 символ!').max(3, 'Максимум 3 символа!'),
});

function AddressForm({onSubmitClick, onGetResultSum, list}) {

    const {push} = useHistory();

    function getEmptyValues(){
        return {
            name: '',
            surname: '',
            street: '',
            home: '',
            apartment: '',
        }
    }

    function onFormikSubmit(){
        push('/order');
        onSubmitClick(list);
    }

    function getFieldText(field){
        let fieldText;
        switch(field.name){
            case 'name': fieldText = 'имя'; break;
            case 'surname': fieldText = 'фамилию'; break;
            case 'street': fieldText = 'улицу'; break;
            case 'home': fieldText = 'номер дома'; break;
            case 'apartment': fieldText = 'номер квартиры'; break;
            default: fieldText = ''; break;
        }
        return fieldText
    }

    function renderTextField({field, meta}){
        return (
            <TextField {...field} error={meta.error && meta.touched ? true : false} helperText={meta.touched ? meta.error : ''} label={"Введите " + (getFieldText(field))} variant="outlined" size="small" color="primary"/>
        )
    }

    function renderForm(){
        return (
            <Form>
                <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                    <Grid item>
                        <Field name="name">{renderTextField}</Field>
                    </Grid>
                    <Grid item>
                        <Field name="surname">{renderTextField}</Field>
                    </Grid>
                    <Grid item>
                        <Field name="street">{renderTextField}</Field>
                    </Grid>
                    <Grid item>
                        <Field name="home">{renderTextField}</Field>
                    </Grid>
                    <Grid item>
                        <Field name="apartment">{renderTextField}</Field>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" className="cart-list-typography">Всего: {onGetResultSum(list) + ' грн'}</Typography>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" startIcon={<CheckIcon/>}>Заказать</Button>
                    </Grid>
                </Grid>
            </Form>
        )
    }

    return (
        <Formik initialValues={getEmptyValues()} onSubmit={onFormikSubmit} validationSchema={validationSchema}>
            {renderForm}
        </Formik>
    )
}

export default AddressForm