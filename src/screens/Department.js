import { useEffect, useState } from 'react';
import './ViewAllUsers.css';
import { CSVLink } from 'react-csv';
import Notiflix from 'notiflix';
import { RotatingLines } from 'react-loader-spinner';
import { APICALLKARWA } from '../api/APICALLKRWA';


export default function Department() {



    return (
        <div className='dashboard_home'>
            <div className=''>
                <div className='content-page rtl-page'>
                    <div className='container-fluid'>

                        <button className='cases_button_1999'>Add Department</button>
                    </div>
                </div>
            </div>
        </div >
    );


}
