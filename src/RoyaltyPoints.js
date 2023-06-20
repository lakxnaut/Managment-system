import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function RoyaltyPointsPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/app.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='wrapper'>
            <div className='content-page rtl-page'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-12'>
                            <div className='row'>
                                <div className='col-sm-12 col-lg-12'>
                                    <div className='card'>
                                        <div className='card-header d-flex justify-content-between'>
                                            <div className='header-title'>
                                                <h4 className='card-title'>Add Royality Points</h4>
                                            </div>
                                        </div>
                                        <div className='card-body'>
                                            <form>
                                                <div className='form-group'>
                                                    <label htmlFor='name'>Category :</label>
                                                    <select className='form-control mb-3'>
                                                        <option selected=''>Select Category</option>
                                                        <option value='1'>
                                                            User's Register and Login First Time{' '}
                                                        </option>
                                                        <option value='2'>Daily Login </option>
                                                        <option value='3'>
                                                            Verification Mobile
                                                        </option>
                                                        <option value='3'>
                                                            Verification Email
                                                        </option>
                                                        <option value='3'>Verification PAN</option>
                                                        <option value='3'>Verification Bank</option>
                                                        <option value='3'>Per Team Create </option>
                                                        <option value='3'>Deposit Amount </option>
                                                        <option value='3'>Withdraw Amount </option>
                                                        <option value='3'>
                                                            Convert Royalty points{' '}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div
                                                    className='form-group'
                                                    style={{ display: 'none' }}
                                                >
                                                    <label htmlFor='text'>Amount :</label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id=''
                                                        placeholder='Rs. 1000 = 1000 Points '
                                                    />
                                                </div>
                                                <div className='form-group'>
                                                    <label htmlFor='text'>Royality Points :</label>
                                                    <input
                                                        type='number'
                                                        className='form-control'
                                                        placeholder='Enter Royality Points'
                                                    />
                                                </div>
                                                <div
                                                    className='form-group'
                                                    style={{ display: 'none' }}
                                                >
                                                    <label htmlFor='text'>
                                                        Convert Royality Points to Amount :
                                                    </label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        value=''
                                                        placeholder='100 Points = 1 Rs'
                                                    />
                                                </div>
                                                <button type='submit' className='btn btn-primary '>
                                                    Submit
                                                </button>
                                                <button
                                                    type='submit'
                                                    className='btn bg-danger ml-3'
                                                >
                                                    Reset
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
