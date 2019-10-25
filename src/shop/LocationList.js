import React, { Component } from 'react'

export class LocationList extends Component {
    render() {
        if (this.props.locations == null || this.props.locations.length === 0) {
            return <h5 className="p-2">No tours available :'(</h5>
        }

        return this.props.locations.map(p =>
            <div className="card m-1 p-1 bg-light" key={p.id}>
                <h4>
                    { p.name }
                    <span className="badge badge-pill badge-primary float-right">{ p.price }</span>
                </h4>
                <div className="card-text bg-white p-1">{ p.organization }</div>
                <img src={ p.image } ></img>
            </div>
        )
    }
}
