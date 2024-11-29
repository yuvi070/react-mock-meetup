import {Component} from 'react'

import {
  Main,
  HeaderDiv,
  Image,
  BottomDiv,
  Div1,
  Image1,
  FormDiv,
  MainHeading,
  Wrapper,
  Div2,
  Label,
  Input,
  Select,
  Button,
} from './styled'

import myContext from '../../context'

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

class Register extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    registered: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({topic: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {history} = this.props
    console.log('button clicked')
    this.setState({registered: true})
    history.push('/')
  }

  render() {
    const {name, registered, topic} = this.state
    return (
      <myContext.Provider
        value={{
          name,
          topic,
          registered,
        }}
      >
        <Main>
          <HeaderDiv>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </HeaderDiv>
          <Wrapper>
            <BottomDiv>
              <Div1>
                <Image1
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </Div1>
              <FormDiv as="form">
                <MainHeading>Let us join</MainHeading>
                <Div2>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onChange={this.onChangeName}
                    value={name}
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </Div2>
                <Div2>
                  <Label htmlFor="topics">Topics</Label>
                  <Select
                    onChange={this.onChangeSelect}
                    value={topic}
                    id="topics"
                  >
                    {topicsList.map(each => (
                      <option value={each.displayText} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                </Div2>
                <Button type="submit" onClick={this.onClickButton}>
                  Register Now
                </Button>
              </FormDiv>
            </BottomDiv>
          </Wrapper>
        </Main>
      </myContext.Provider>
    )
  }
}

export default Register
