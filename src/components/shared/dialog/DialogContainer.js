import { connect } from 'react-redux';

import { DialogComponent } from './DialogComponent';

import {
  dialogRegister,
  dialogDestroy,
  dialogClose,
} from 'redux/dialog/actions';

const mapStateToProps = ({ dialog }, { name }) => ({
  ...dialog[name],
});

const mapDispatchToProps = { dialogRegister, dialogDestroy, dialogClose };

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(
  DialogComponent,
);
