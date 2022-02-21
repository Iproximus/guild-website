import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const icon = { marginLeft: '30px' }

export default function Search() {
  return (
    <div style={icon}>
      <SearchIcon color="primary" />
    </div>
  );
}