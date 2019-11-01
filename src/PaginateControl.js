import React, { Component } from 'react';
import { PaginateButtons } from './PaginateButtons';

export class PaginateControl extends Component {

    
    render() {
        return <div className="m-2">
            <div className="text-center m-1">
                <PaginateButtons currentPage={ this.props.currentPage } pageCount={ this.props.pageCount } 
                 navigate={ this.props.navigateToPage }/>
            </div>    
        </div>
    }
}
