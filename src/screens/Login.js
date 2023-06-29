import React from 'react';
import { useEffect, useState } from 'react';
// import { authApi } from '../api/authApi';
import { useNavigate, Link } from 'react-router-dom';
// import jwt from 'jwt-decode'
import swal from 'sweetalert';
import Notiflix from 'notiflix';
import Cookies from 'universal-cookie';
import './ViewAllUsers.css';

const LoginPage = (props) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/app.js';
        script.async = true;
        document.body.appendChild(script);
        localStorage.removeItem('loggedin');
        localStorage.removeItem('jwtToken');
        props.topbar(false);
        localStorage.removeItem('role');
        localStorage.removeItem('name');
    }, []);

    const getName = (email) => {
        const name = email.split('@');
        const myName = name[0];
        return myName;
    };

    const login = (e) => {
        e.preventDefault();
        if (name == '1234' && password == '1234') {
            localStorage.setItem('loggedin', name);
            // localStorage.setItem('jwtToken', data.message);
            localStorage.setItem('role', 1);
            const CallerName = getName(name);
            localStorage.setItem('name', CallerName);
            props.topbar(true);
            navigate('/');
        } else {
            Notiflix.Notify.failure('Wrong Credentials');
        }
    };
    return (
        <div className='wrapper'>
            <section className='login-content'>
                <div className='container h-100'>
                    <div className='ml-5 row align-items-center justify-content-center h-100 '>
                        <div className='col-12'>
                            <div className='row align-items-center'>
                                <div className='login-screen'>
                                    <div className='mt-5'>
                                        <img
                                            src='assets/images/pfizer.png'
                                            className='img-fluid w-100'
                                            alt=''
                                        />
                                    </div>

                                    <div className='hr-before-line'>
                                        <div className='hr-line-fucking'></div>
                                        <div className='login-screen-internal-1'>
                                            <h2 className='mb-2 my-heading'>Sign In</h2>
                                            {/* <p className='font-weight-bold'>
                                                To Keep connected with us please login with your
                                                personal info.
                                            </p> */}
                                            <form onSubmit={login}>
                                                <div className='row'>
                                                    <div className='col-lg-12'>
                                                        <div className='floating-label form-group'>
                                                            <input
                                                                className='input-login-screen'
                                                                type='text'
                                                                placeholder='Email'
                                                                onChange={(e) => {
                                                                    setName(e.target.value);
                                                                }}
                                                            />
                                                            {/* <label>Email</label> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-12'>
                                                        <div className='floating-label form-group'>
                                                            <input
                                                                className='input-login-screen'
                                                                type='password'
                                                                placeholder='Password'
                                                                onChange={(e) => {
                                                                    setPassword(e.target.value);
                                                                }}
                                                            />
                                                            {/* <label>Password</label> */}
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className='custom-control custom-checkbox mb-3'>
                                                            <input
                                                                type='checkbox'
                                                                className='custom-control-input'
                                                                id='customCheck1'
                                                            />
                                                            <label
                                                                className='custom-control-label'
                                                                htmlFor='customCheck1'
                                                            >
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {/* <div className='col-lg-6 rtl-left'>
            <a
                href='change-password.html'
                className='text-primary float-right'
            >
                Forgot Password?
            </a>
        </div> */}
                                                </div>
                                                <button type='submit' className='login-button-fuck-yeah'>
                                                    Sign In
                                                </button>
                                                {/* <p className='mt-3'>
        Create an Account{' '}
        <a href='sign-up.html' className='text-primary'>
            Sign Up
        </a>
    </p> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-lg-6 mb-lg-0 mb-5 mt-lg-0 mt-4'>
                                    <img
                                        src='assets/images/pfizer.jpeg'
                                        className='img-fluid w-80'
                                        alt=''
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
