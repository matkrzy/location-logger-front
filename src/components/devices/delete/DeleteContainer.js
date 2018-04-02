import { connect } from 'react-redux';

import { DeleteComponent } from './DeleteComponent';

const mapStateToProps = state => ({});

export const DeleteContainer = connect(mapStateToProps, null)(DeleteComponent);
