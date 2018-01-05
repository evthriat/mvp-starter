import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      title: '',
      questions: [],
      answers: [],
    }
  }

  componentDidMount() {
    $.ajax({
      contentType: 'application/json',
      type: 'GET',
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data,
          title: data[0].Subject,
          questions: data[0].Questions,
          answers: data[0].Answers,
        });
        console.log('this is the data: ', data[0])
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1 title={this.state.title}></h1>
      <h1 questions={this.state.questions}></h1>
      <h1 answers={this.state.answers}></h1>

      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));