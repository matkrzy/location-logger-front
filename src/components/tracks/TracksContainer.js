import { connect } from 'react-redux';

import { TracksComponent } from './TracksComponent';
import { dialogOpen } from 'redux/dialog/actions';

const mapStateToProps = state => ({
  tracks: [
    {
      id: 1,
      name: 'Tack 1',
      date: '22-12-2016',
      distance: Math.floor(Math.random() * 50 + 1),
      time: Math.floor(Math.random() * 50 + 1),
    },
    {
      id: 2,
      name: 'Tack 2',
      date: '22-12-2015',
      distance: Math.floor(Math.random() * 50 + 1),
      time: Math.floor(Math.random() * 50 + 1),
    },
    {
      id: 3,
      name: 'Tack 3',
      date: '22-12-2018',
      distance: Math.floor(Math.random() * 50 + 1),
      time: Math.floor(Math.random() * 50 + 1),
    },
    {
      id: 4,
      name: 'Tack 4',
      date: '22-12-2014',
      distance: Math.floor(Math.random() * 50 + 1),
      time: Math.floor(Math.random() * 50 + 1),
    },
    {
      id: 5,
      name: 'Tack 5',
      date: '22-12-2012',
      distance: Math.floor(Math.random() * 50 + 1),
      time: Math.floor(Math.random() * 50 + 1),
    },
  ],
});

const mapDispatchToProps = { dialogOpen };

export const TracksContainer = connect(mapStateToProps, mapDispatchToProps)(
  TracksComponent,
);
