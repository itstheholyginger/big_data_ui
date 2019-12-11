import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DEGREE_DIST_QUERY} from "../../actions/types";
import {getDegreeDist} from "../../actions/videos";

class DegreeType extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
        endpoint: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            degree: 'inRank',
            quantifier: 'max',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        //alert("current selection is: " + this.state.value);
        const {degree, quantifier} = this.state;
        const video = {degree, quantifier}
        const conf = {
            method: "get",
            body: JSON.stringify(video),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response))

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    From
                    <select value={this.state.degree} name="degreeType" onChange={this.handleChange}>
                        <option value="inRank">InRank</option>
                        <option value="outRank">OutRank</option>
                    </select>
                </label>
                <label>
                    Quantifier:
                    <select value={this.state.quantifier} name='quantifier' onChange={this.handleChange}>
                        <option value="max">Maximum Degree</option>
                        <option value="avg">Average Degree</option>
                        <option value="min">Minimum Degree</option>
                    </select>
                </label>
                <input className={"btn btn-primary btn-sm"} type="submit" value="Submit"/>
            </form>
        )
    }
}


export default DegreeType;