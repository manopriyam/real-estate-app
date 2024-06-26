import React from 'react'
import "../App.css"

class Navbar extends React.Component {
    render() { 
        return (
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="./">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./property-explore">Buy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./property-explore">Rent</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sell</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Profile
                            </a>
                            {/* <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div> */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;