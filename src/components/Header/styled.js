import styled from 'styled-components'

const Container = styled.div`
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #012a81;
    position: relative;
    h1 {
        font-size: 64px;
        color: #ffffff;
        position: absolute;
        z-index: 99;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(0,-100%);
        -ms-transform: translate(0,-100%);
        transform: translate(-50%,-100%);
    }
`
export {Container}
