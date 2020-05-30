import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-betweent">
            <div className="container">
                <h1>CRUD - React, Redux, REST & Axios</h1>
            </div>

            <a  href="/products/new"
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Add product &#43;</a>
        </nav>
    );
}
 
export default Header;