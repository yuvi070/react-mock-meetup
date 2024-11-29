import {
  Main,
  HeaderDiv,
  Image,
  BottomDiv,
  TextDiv,
  MainHeading,
  Para,
  Button,
  Image2,
} from './styled'

import myContext from '../../context'

const Home = props => {
  const {history} = props
  const onClickRegister = () => {
    history.push('/register')
  }
  return (
    <myContext.Consumer>
      {value => {
        const {name, topic, registered} = value
        console.log(registered, name)
        return (
          <Main>
            <HeaderDiv>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </HeaderDiv>
            <BottomDiv>
              <TextDiv>
                <MainHeading>
                  {registered ? `Hello ${name}` : 'Welcome to Meetup'}
                </MainHeading>
                <Para>Please register for the topic</Para>
                {registered ? (
                  ''
                ) : (
                  <Button onClick={onClickRegister} type="button">
                    Register
                  </Button>
                )}
              </TextDiv>
              <Image2
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </BottomDiv>
          </Main>
        )
      }}
    </myContext.Consumer>
  )
}

export default Home
