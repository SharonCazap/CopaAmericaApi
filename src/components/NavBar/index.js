import React from 'react' 
import {Container} from './styled'
import logo from '../../assets/logoCopa.png'

const NavBar = () => {
    return(
        <Container>
            <h1><img src={logo} /></h1>
            <p>menu</p>
        </Container>
    )
}

export default NavBar