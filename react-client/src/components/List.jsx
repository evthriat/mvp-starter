import React from 'react';
import ListItem from './ListItem.jsx';
    // { props.answers.map(answer => <ListItem answer={answer}>) }

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are a few questions...  
    { props.questions.map(question => <ListItem question={question}/>) }
  </div>
)

export default List;