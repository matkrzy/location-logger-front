import { connect } from 'react-redux';

import { SectionComponent } from './SectionComponent';

const mapStateToProps = ({ menu }) => ({
  menu,
});

export const SectionContainer = connect(mapStateToProps, null)(
  SectionComponent,
);
