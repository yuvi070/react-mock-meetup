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

const Home = props => {
  const {history} = props
  const onClickRegister = () => {
    history.replace('/register')
  }
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
          <MainHeading>Welcome to Meetup</MainHeading>
          <Para>Please register for the topic</Para>
          <Button onClick={onClickRegister} type="button">
            Register
          </Button>
        </TextDiv>
        <Image2
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </BottomDiv>
    </Main>
  )
}

export default Home
