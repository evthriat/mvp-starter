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
      questions: '',
      testQuestion: ['How many bees are there in the world?',
                'Are honeybees going extinct?',
                'How many times can honeybees sting you?',
                'Wasps are ...',
                'How are bees from a hive related to each other?',
                'What is Honey made from?',
                'how many bees are in a hive?'
                ],
      testAnswers: [{1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
                    {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
                    {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
                    {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
                    {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4},
                    {1:'one million', 2:'13.5 billion',3:'one trillion', 4: 'more thant those', 'answer': 4}
               ]
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
          questions: [data[0].Questions],
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
      <h1>{this.state.title}</h1>
      <List questions={this.state.testQuestion}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));