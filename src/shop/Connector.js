import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { loadData } from '../data/ActionCreators';
import { DataTypes } from '../data/Types';
import { Shop } from './Shop';
import { DataCollector } from '../data/DataCollector';
import LocationDetails from './LocationDetails';

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData
}


// const filterByArea = (locations = [], area) => 
//     (!area || area === "ALL") ? 
//     locations : locations.filter(l => l.area.toLowerCase() === area.toLowerCase()); 
        
    
export const Connector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
                {/* <Route path="/home/locations/:area?" 
                render={ (routeProps) => <Shop { ...this.props } { ...routeProps } 
                          locations={ filterByArea(this.props.locations, routeProps.match.params.area )} /> } /> 
                <Redirect to="/home/locations" /> */}

                <Redirect from="/home/locations/:area" to="/home/locations/:area/1" exact={true} />
                <Route path={"/home/locations/:area/:page"}
                    render={ (routeProps) =>
                        <DataCollector {...this.props} { ...routeProps }>
                             <Shop { ...this.props } { ...routeProps } />
                        </DataCollector>      
                    } />
                <Route path="/home/locations/1" 
                    render={ (routeProps) =>
                       <LocationDetails {...this.props} {...routeProps} /> } />
                <Redirect to="home/locations/all/1" />
            </Switch>
        }

        componentDidMount() {
            // this.props.loadData(DataTypes.LOCATIONS);
            this.props.loadData(DataTypes.AREAS);
        }
    }  
)
