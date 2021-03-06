import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css'







let maxLength40 = maxLengthCreator(40)

const LoginForm = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} validate={[required, maxLength40]} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} validate={[required, maxLength40]} component={Input} type={'password'} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> Remember me
                </div>
           {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.
            login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            < LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth
    }

)

export default connect(mapStateToProps, { login })(Login);