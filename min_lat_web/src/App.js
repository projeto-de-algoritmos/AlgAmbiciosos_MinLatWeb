import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Activity, minimum_lateness} from './MinLat';
import {Button, Form} from 'react-bootstrap';
import TimeKeeper from 'react-timekeeper';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activities: [],
      answer: [],
      name: '',
      execTime : 0,
      deadline: new Date(),
      showTime: false,
      idCount: 0
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){    
    let field = e.target.name;
    let val = e.target.value;
    this.setState({[field]: val});
  }

  addToList(){
    let new_activity = new Activity(this.state.name, 
                                    this.state.execTime, 
                                    this.state.deadline, 
                                    this.state.idCount);

    this.setState({idCount: this.state.idCount + 1});
    let copy_list = this.state.activities;
    copy_list.push(new_activity);
    this.setState({activities:copy_list});
    console.log(this.state.activities);
  }

  answer(){
    minimum_lateness(this.state.activities);
  }

  render(){
    console.log(this.state.deadline);
    
    return(
      <div>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <Form.Label>Tempo de execução (em horas)</Form.Label>
          <Form.Control
            type="number"
            name="execTime"
            value={this.state.execTime}
            onChange={this.handleChange}
          />

          <Form.Label>Data de entrega</Form.Label>
          {this.state.showTime && <TimeKeeper 
            onChange={(newTime) => this.setState({deadline: newTime})}
            switchToMinuteOnHourSelect
            onDoneClick={() => this.setState({showTime: false})}
          />}
          <span>Time is {this.state.deadline.formatted12}</span>
          {!this.state.showTime &&
            <button onClick={() => this.setState({showTime: true})}>Show</button>
          }
        </Form.Group>
        <Button onClick={() => this.addToList()}>Adiciona na Lista de Atividades</Button>
        <hr/>
        <Button onClick={() => this.answer()}>Faz a magia</Button>

      </div>
  );
  }
}

export default App;
