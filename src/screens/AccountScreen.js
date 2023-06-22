import React,{useEffect,useState} from 'react';

export default function  AccountScreen (){

    
    useEffect(()=>{
        const script =document.createElement('script');
        script.src='assets/js/app.js';
        script.async=true;
        document.body.appendChild(script);
     
      
    },[]);

    const data = [
        {
            name:'lakshya',
            transaction:10,
            deduct:50,
            total:30,
        },

        {
            name:'Manoj',
            transaction:10,
            deduct:50,
            total:30,
        },
        {
            name:'Rajnesh',
            transaction:110,
            deduct:20,
            total:100,
        },

        {
            name:'Ankit',
            transaction:10,
            deduct:50,
            total:30,
        },

        {
            name:'Shivam',
            transaction:10,
            deduct:50,
            total:30,
        },
        {
            name:'Akaash',
            transaction:110,
            deduct:20,
            total:100,
        },

        {
            name:'lakshya',
            transaction:10,
            deduct:50,
            total:30,
        },

        {
            name:'Manoj',
            transaction:10,
            deduct:50,
            total:30,
        },
        {
            name:'Rajnesh',
            transaction:110,
            deduct:20,
            total:100,
        },

        {
            name:'Ankit',
            transaction:10,
            deduct:50,
            total:30,
        },

        {
            name:'Shivam',
            transaction:10,
            deduct:50,
            total:30,
        },
        {
            name:'Akaash',
            transaction:110,
            deduct:20,
            total:100,
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
                                        <h4 className='card-title'>Accounts Department</h4>
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
                                                        <th>Transaction</th>
                                                        <th>Deduct</th>
                                                        <th>Total</th>
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
                                                                        <td>
                                                                            {data.name}
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                data.transaction
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {data.deduct}
                                                                        </td>
                                                                        <td>{data.total}</td>
                                                                        <td>
                                                                            <button
                                                                                type="button" 
                                                                                className="btn btn-primary btn-lg ml-2"
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

 