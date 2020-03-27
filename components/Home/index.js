import React, { Fragment } from 'react'

//imports 
import SpotifyLogin from 'react-spotify-login'
import { config } from "../../config/index";
import NavBar from "../NavBar/index"
import { Title, Description, Container, Row } from "./style";
import { GlobalStyles } from '../../styles/globalStyles'

const Home = () => {

  const onSuccess = response => { console.log(response) };
  const onFailure = response => console.error(response);

  return (
    <Fragment>
      <GlobalStyles />
      <NavBar />
      <Container>
        <Title>La nueva alternativa cliente de spotify</Title>
        <Description>Accede a millones de canciones desde la api de spotify,
          reproduce y crea listas de
          reproducciones personalizadas.
      </Description>
        <Row>
          <SpotifyLogin clientId={config.clientID}
            redirectUri={config.linkRedirect}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText='Ingresar'
            className='button_home'
          />

          <input type='button' className='button_home' onClick={() => window.location.href = 'https://www.spotify.com/signup/'} value='Registrarse' />
        </Row>
      </Container>
    </Fragment>
  )
}

export default Home
