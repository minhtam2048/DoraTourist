import React, { Component } from 'react';
import { DataTypes } from '../data/Types';

export class DataCollector extends Component {
    render() {
        return <React.Fragment>{ this.props.children }</React.Fragment>
    }

    componentDidUpdate = () => this.getData()
    componentDidMount = () => this.getData()


    getData = () => {
        const dsData = this.props.locations_params || {};
        const rtData = {
            _limit: 7,
            _page: this.props.match.params.page || 1,
            area_like: ( this.props.match.params.area || "") === "all" ? "" : this.props.match.params.area
        }

        if(Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            this.props.loadData(DataTypes.LOCATIONS, rtData);
        }
    }
}
