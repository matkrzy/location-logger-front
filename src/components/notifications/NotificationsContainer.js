import { connect } from 'react-redux';

import { NotificationsComponent } from './NotificationsComponent';
import { notificationTake } from 'redux/notifications/actions';

const mapStateToProps = ({ notifications }) => ({
  notifications,
});

const mapDispatchToProps = {
  notificationTake,
};

export const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsComponent);
