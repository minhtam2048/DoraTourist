import React, { Component } from 'react';
import { LocationList } from './LocationList';
import { AreaNavigate } from './AreaNavigate';
import { PaginateControl } from '../PaginateControl';
import { Connector2 } from './Connector2';
import { SearchForm } from './SearchForm';

const Pages = Connector2(PaginateControl);



export class Shop extends Component {

 
    render() {
        return (
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-primary text-white">
                        <div className="navbar-brand">DoraTourist</div>
                    </div>
                </div>
                <br></br>
                <div className="form-row">
                <SearchForm />
                </div>
                
                <div className="row">
                    <div className="col-3 p-2">
                        <AreaNavigate baseUrl="/home/locations" areas={this.props.areas} />
                    </div>   
                    <div className="col-7 p-5">
                        <LocationList locations={ this.props.locations } />
                        <Pages />
                    </div>
                </div>
            </div>
            </>
        )
    }
}
