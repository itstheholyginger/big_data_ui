import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
                <div className="collapse navbar-collapse">
                    <h3 style={{color: "white", textAlign: "center"}}>YouTube Parser</h3>
                </div>
            </nav>
        );
    }
}

export default Header;