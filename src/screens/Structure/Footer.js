function FooterView() {
    return (
        <footer className='iq-footer rtl-footer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 '>
                        <ul className='list-inline mb-0  rtl-pr-0 rtl-right'>
                            <li className='list-inline-item '>
                                <a href='privacy-policy.html'>Privacy Policy</a>
                            </li>
                            <li className='list-inline-item'>
                                <a href='terms-of-service.html'>Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6 text-right '>Copyright 2022. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
}
export default FooterView;
