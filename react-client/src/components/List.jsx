import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are items.
    { props.items.map((item, index) => <ListItem item={item}/>)}
  </div>
)

export default List;