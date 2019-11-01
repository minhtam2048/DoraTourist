import React, { Component } from 'react'

export class SearchForm extends Component {
    render() {
        return <>
        
        <div className="jumbotron container">
            <h3>Explore the world :-)</h3>
            <p className="lead">First, let us know more about your ideal vacation (Japan, L.A, Ha Noi, ShangHai,...)</p>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <input type="text" className="form-control" pla />
                </div>
                <div className="form-group col-md-3">
                    <select className="form-control">
                        <option selected>what kind of tour</option>
                        <option>Cheap</option>
                        <option>Casual</option>
                        <option>High</option>
                        <option>Luxury</option>
                    </select>
                </div>
                <div className="form-group col-md-3">
                    <select className="form-control">
                        <option selected>Duration</option>
                        <option>3 days</option>
                        <option>5 days</option>
                        <option>7 days</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <button className="btn btn-primary">Find</button>
                </div>
            </div>
            </div> 
            </>
    }
}
