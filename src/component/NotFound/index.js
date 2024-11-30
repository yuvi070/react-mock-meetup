import {MainDiv, Image, MainHeading, Para} from './styled'

const NotFound = () => (
  <MainDiv>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <MainHeading>Page Not Found</MainHeading>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </MainDiv>
)

export default NotFound
