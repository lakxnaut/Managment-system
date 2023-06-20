import { useEffect, useState } from 'react';
import './ViewAllUsers.css';
import { CSVLink } from 'react-csv';
import Notiflix from 'notiflix';
import { RotatingLines } from 'react-loader-spinner';
import { APICALLKARWA } from '../api/APICALLKRWA';

export default function UnutilizedReport() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [image, setImage] = useState('');
    
    const Myprops = {width: 400, height: 250, zoomWidth: 500, img: image};


    useEffect(() => {
        console.log('first');
        localStorage.setItem('first',true);
        getAllData();
    }, []);
  

    const handleUpload = async (xslFile) => {
        console.log(xslFile);
        const formData = new FormData();
        formData.append('fileName', xslFile);
        APICALLKARWA.PostXL(formData, 'exceltoJson').then((res) => {
            getAllData();
        });
    };

    const handleImageUpload = async (e) => {
        console.log(e.target.files.length);
        for (let i = 0; i < e.target.files.length; i++) {
            const form = new FormData();
            form.append('fileName', e.target.files[i]);
            APICALLKARWA.PostImage(form, 'uploadImage').then((res) => {
                getAllData();
            });
        }
    };

    const getAllData = () => {
        APICALLKARWA.GetPoliceData('getPoliceData').then((res) => {
            setData(res);
        });
    };

    const setterFunction = (setter) => (e) => {
        const { value } = e.target;
        setter(value);
    };

    return (
        <div className="dashboard_home">
            <div className="">
                <div className="content-page rtl-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 mb-3">
                                <div className="d-flex align-items-center justify-content-between welcome-content">
                                    <div className="navbar-breadcrumb dashboard_div">
                                        <h4 className="uploader_h4">Management System</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <div className="uploader_div">
                                        <h3 className="uploader_h3">File Uploader: </h3>
                                        <button className="uploader_btn">
                                            <input
                                                className="file_uploader_btn"
                                                type="file"
                                                name="myImage"
                                                onChange={(event) => {
                                                    console.log(event.target.files[0]);
                                                    handleUpload(event.target.files[0]);
                                                }}
                                            />
                                        </button>

                                        <h3 className="uploader_h3">Add Image:</h3>

                                        <button className="uploader_btn">
                                            <input
                                                className="file_uploader_btn"
                                                type="file"
                                                multiple
                                                onChange={(e) => handleImageUpload(e)}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-11">
                                <div>
                                    <div className="row"></div>
                                </div>
                            </div>

                            <div className="card-body">
                                {isLoading && (
                                    <div className="px-2 h-60 d-flex align-items-center justify-content-center bg-gradient">
                                        <div>
                                            <RotatingLines
                                                marginTop="70"
                                                strokeColor="#c1030d"
                                                strokeWidth="5"
                                                animationDuration="0.75"
                                                width="50"
                                                visible={true}
                                            />
                                        </div>
                                    </div>
                                )}
                                {!isLoading && (
                                    <div className="table-responsive">
                                        <span>
                                            <div className="table-responsive">
                                                <table
                                                    id="datatable"
                                                    className="table data-table table-striped table-bordered "
                                                >
                                                    <thead className='thead-light'>
                                                        <tr className="uploader_table">
                                                            <th>S.No.</th>
                                                            <th>Document Type</th>
                                                            <th>Year</th>
                                                            <th>Doc Number</th>
                                                            <th>Image</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data &&
                              data.length > 0 &&
                              data.map((mydata, i) => {
                                  return (
                                      <tr key={i}>
                                          <td>{++i}</td>
                                          <td>{mydata.Document_Type}</td>
                                          <td>{mydata.Year}</td>
                                          <td>{mydata.Doc_NO}</td>
                                          <td>
                                              <img src={mydata.Image} width={200} />
                                          </td>
                                          <td>
                                              <button
                                                  type="button" 
                                                  className="btn btn-primary btn-lg"
                                                  title='Edit'
                                                  onClick={() =>
                                                      setImage(mydata.Image)
                                                  }
                                                  //   className='dropdown-item btn-primary'
                                                  data-toggle='modal'
                                                  data-target='#exampleModalScrollable'
                                              >
                                                View Image
                                              </button>
                                              {/* <br/> */}
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
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    <div
                        className='modal fade'
                        id='exampleModalScrollable'
                        tabIndex='-1'
                        aria-labelledby='exampleModalScrollableTitle'
                        aria-hidden='true'
                    >
                        <div
                            className='modal-dialog modal-xl modal-dialog-scrollable'
                            role='document'
                        >
                            <div className='modal-content '>
                                <div className='modal-header'>
                                    <h5
                                        className='modal-title'
                                        id='exampleModalScrollableTitle'
                                    >
                                                    View Full Image
                                    </h5>
                                </div>
                                <div className='modal-body'>
                                  
                                    <img src={image} height={600} width={600} />

                                                
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        // onClick={handleClose}
                                        type='button'
                                        className='btn btn-secondary'
                                        data-dismiss='modal'
                                    >
                                                    Close
                                    </button>
                                    {/* <button
                                        type='button'
                                        className='btn btn-primary'
                                        // onClick={handleEditSubmit}
                                        data-dismiss='modal'
                                    >
                                                    Save changes
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* edit modal */}


                    
                </div>
            </div>
        </div>
    );
}