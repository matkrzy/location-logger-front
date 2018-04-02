import { connect } from 'react-redux';

import { DetailsComponent } from './DetailsComponent';

const mapStateToProps = state => ({});

export const DetailsContainer = connect(mapStateToProps, null)(DetailsComponent);
