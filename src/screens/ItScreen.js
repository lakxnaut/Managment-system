import React, { useEffect, useState } from 'react';

export default function ItScreen() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/app.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const data = [
        {
            name: 'Aditya',
            technology: 'React',
            branch: 50,
            experience: 2,
        },

        {
            name: 'Akhil',
            technology: 'Node',
            branch: 50,
            experience: 4,
        },

        {
            name: 'Ashish',
            technology: 'Tester',
            branch: 5,
            experience: 3,
        },

        {
            name: 'Akhil',
            technology: 10,
            branch: 50,
            experience: 6,
        },

        {
            name: 'Ashish',
            technology: 10,
            branch: 50,
            experience: 30,
        },

        {
            name: 'Kashish',
            technology: 10,
            branch: 50,
            experience: 2,
        },

        {
            name: 'Praveen',
            technology: 10,
            branch: 50,
            experience: 12,
        },
    ];

    return (
        <div className='wrapper'>
            <div className='content-page rtl-page'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-12'>
                            <div className='card'>
                                <div className='card-header d-flex justify-content-between'>
                                    <div className='header-title'>
                                        <h4 className='card-title'>IT Department</h4>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <div className='table-editable' id='table'>
                                        <div className='table-responsive'>
                                            <table
                                                id='datatable'
                                                className='table data-table table-striped table-bordered'
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>S.No.</th>
                                                        <th>Name</th>
                                                        <th>Technology</th>
                                                        <th>Branch</th>
                                                        <th>Experience</th>
                                                        <th>Action</th>

                                                        {/* <th>Action</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data &&
                                                        data.length > 0 &&
                                                        data.map((data, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{++i}</td>
                                                                    <td>{data.name}</td>
                                                                    <td>{data.technology}</td>
                                                                    <td>{data.branch}</td>
                                                                    <td>{data.experience}</td>
                                                                    <td>
                                                                        <button
                                                                            type='button'
                                                                            className='btn btn-primary btn-lg ml-2'
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                </tbody>
                                            </table>
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
