import React, {Component} from 'react';


class DegreeType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            degree: 'inRank',
            quantifier: 'max',
            query: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setQuery = () => {
        let order = "";
        if (this.state.quantifier === "max") {
            order = "DESC";
        } else if (this.state.quantifier ==="min"){
            order = "ASC";
        }
        this.setState(query, "SELECT * FROM RANKING ORDER BY " + this.state.degree + " " + order + " LIMIT 1;" );
        alert(this.state.query);
    }
    handleChange(event) {
        const name = event.target.name;
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        //alert("current selection is: " + this.state.value);
        this.setQuery();
    }

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