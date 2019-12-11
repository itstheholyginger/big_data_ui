import React, {Component} from 'react';
import {Select, MenuItem} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";


class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            label: props.label,
            selection: "",
            options: props.options,
        };
    }

    handleChange = event => {
        // set selection to the value selected
        this.setState({
            selection: event.target.value
        });
    };

    handleSubmit = event => {
        console.log(("Submitted"));

    };

    renderOptions() {
        return this.state.options.map((item) => {
            return (
                <MenuItem
                    label={this.state.label}
                    value={item.id}
                    key={item.key}>
                    {item.label}
                </MenuItem>
            );
        });
    }

    render() {

        const dropDownStyle = {
            padding: "5px",
        };

        console.log(this.state.selection);
        return (
            <div>
                <FormControl>
                    <Select style={dropDownStyle}
                            className="width100"
                            value={this.state.selection}
                            onChange={this.handleChange}
                    >
                        {this.renderOptions()}
                    </Select>
                    {/*<input type={submit} value="Sumbit"/>*/}
                </FormControl>
            </div>
        )
    }
}

export default DropDown;