import React, { Component, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem('loggedin');
        if (!login) {
            navigate('/login');
        }
    }, []);
    return <Component />;
};

export default Protected;