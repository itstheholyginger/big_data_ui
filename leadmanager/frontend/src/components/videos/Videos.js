import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {DEGREE_DIST_QUERY} from "../../actions/types";
import {getDegreeDist} from "../../actions/videos";


export class Videos extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getDegreeDist();
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    videos: state.videos.videos
});


export default connect(mapStateToProps, {getVideos})(Videos);