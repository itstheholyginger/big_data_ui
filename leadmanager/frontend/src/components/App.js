import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import Header from './layout/Header';
import DropDown from './videos/DropDown';
import Videos from "./videos/Videos";
import {FormControl, Typography} from "@material-ui/core";
import {Provider} from 'react-redux';
import store from '../store';
import DegreeType from './videos/DegreeType';


class App extends Component {
    render() {

        const lineStyle = {
            display: "inline-flex",
            alignItems: "baseline"
        };


        return (
            <Provider store={store}>
                <Fragment>
                    <Header/>
                    <div className="container">
                        <div>
                            <h4>Degree Distribution</h4>
                            <div style={lineStyle}>
                                <DegreeType endpoint="api/ranking"/>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App/>
    , document.getElementById('app'));