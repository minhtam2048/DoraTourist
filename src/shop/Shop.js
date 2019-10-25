import React, { Component } from 'react';
import { LocationList } from './LocationList';
import {AreaNavigate } from './AreaNavigate';

export class Shop extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-primary text-white">
                        <div className="navbar-brand">DoraTourist</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <AreaNavigate baseUrl="/home/locations" areas={this.props.areas} />
                    </div>   
                    <div className="col-7 p-5">
                        <LocationList locations={ this.props.locations } />
                    </div>
                </div>
            </div>
        )
    }
}
