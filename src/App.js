import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState,useEffect } from 'react';
import TopbarView from './screens/Structure/Topbar';
import SidebarRoleTwoView from './screens/Structure/SidebarRoleTwo';
import LoginPage from './screens/Login';
import Protected from './screens/Protected';
import FooterView from './screens/Structure/Footer';

import UnutilizedReport from './screens/UnutilizedReport';
import FileUploader from './screens/FileUploader';
import Department from './screens/Department';
import SidebarView from './screens/Structure/Sidebar';


// import { Outlet } from "react-router-dom";
function App() {
    const [isTopBar, setIsTopBar] = useState(true);
    const cookies = new Cookies();
    const [loggedin,setLoggedin] = useState(localStorage.getItem('loggedin'));
    const role = localStorage.getItem('role');

  

    // const authenticated = localStorage.getItem('loggedin');




    function setTopBar(bool) {
        setIsTopBar(bool);
    }






    return (

        <div>
            <div>
                
                <BrowserRouter>
                    {isTopBar && role == 1 && <SidebarView />}
                    <Routes>

                        <Route path='/login' element={<LoginPage topbar={setTopBar} />} />

                        <Route path='/' element={<Protected Component={UnutilizedReport} />} />

                        {/* <Route path='/file_upload' element={<Protected Component={FileUploader} />} /> */}
                        <Route path='/file_upload' element={<Protected Component={FileUploader} />} />

                        <Route path='/add_department' element={<Protected Component={Department} />} />

                    </Routes>
                    <FooterView />
                </BrowserRouter>
            </div>
        </div>
        // </QueryClientProvider>
    );
}

export default App;
