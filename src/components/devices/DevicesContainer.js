import { connect } from 'react-redux';

import { DevicesComponent } from './DevicesComponent';

import { dialogOpen } from 'redux/dialog/actions';

const mapStateToProps = state => ({
  devices: [
    {
      id: 1,
      name: 'LG Nexus 5X',
      uuid: '21bb24d8352511e8b4670ed5f89f718b',
      removed: false,
    },
    {
      id: 2,
      name: 'Iphone 5s',
      uuid: '21bb2776352511e8b4670ed5f89f718b',
      removed: false,
    },
  ],
});

const mapDispatchToProps = { dialogOpen };

export const DevicesContainer = connect(mapStateToProps, mapDispatchToProps)(
  DevicesComponent,
);
