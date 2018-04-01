import { connect } from 'react-redux';

import { DeleteComponent } from './DeleteComponent';

const mapStateToProps = (state)=>({});

const mapDispatchToProps = {
  
} 

export const DeleteContainer = connect(mapStateToProps,mapDispatchToProps)(DeleteComponent);