import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = {  };

const mergeProps = (dataStore, actionsCreators, router) => ({
    ...dataStore, ...actionsCreators, ...router,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil((dataStore.locations_total || 7) / 5),
    navigateToPage: (page) => router.history.push(`/home/locations/${router.match.params.area}/${page}`)
});

export const Connector2 = (PageComponent) => withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent))