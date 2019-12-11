import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {GET_VIDEOS} from "../../actions/types";
import {getVideos} from "../../actions/videos";


export class Videos extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getVideos();
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