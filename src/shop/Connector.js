import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { loadData } from '../data/ActionCreators';
import { DataTypes } from '../data/Types';
import { Shop } from './Shop';

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData
}

const filterByArea = (locations = [], area) => 
    (!area || area === "ALL") ? 
    locations : locations.filter(l => l.area.toLowerCase() === area.toLowerCase()); 
        
    
export const Connector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
                <Route path="/home/locations/:area?" 
                render={ (routeProps) => <Shop { ...this.props } { ...routeProps } 
                          locations={ filterByArea(this.props.locations, routeProps.match.params.area )} /> } /> 
                <Redirect to="/home/locations" />
            </Switch>
        }

        componentDidMount() {
            this.props.loadData(DataTypes.LOCATIONS);
            this.props.loadData(DataTypes.AREAS);
        }
    }  
)
