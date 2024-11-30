import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './component/Home'
import Register from './component/Register'
import NotFound from './component/NotFound'
import myContext from './context'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {name: '', topic: '', registered: false}

  setValues = (a, b) => {
    this.setState({name: a, topic: b, registered: true})
  }

  render() {
    const {name, topic, registered} = this.state
    return (
      <myContext.Provider
        value={{
          name,
          topic,
          registered,
          setValues: this.setValues,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </myContext.Provider>
    )
  }
}

export default App
