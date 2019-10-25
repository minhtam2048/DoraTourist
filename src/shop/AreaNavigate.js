import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ToggleLink } from '../ToggleLink';

export class AreaNavigate extends Component {
    render() {
        return <React.Fragment>
            <ToggleLink to={ this.props.baseUrl } exact= { true }>ALL</ToggleLink>
            { this.props.areas && this.props.areas.map(area => 
                <ToggleLink key={ area } to={ `${this.props.baseUrl}/${area.toLowerCase()}` }>
                    { area }
                </ToggleLink>
            )}
        </React.Fragment>
    }
}

