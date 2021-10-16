import styled from 'styled-components'

const BackgroundDetails = styled.section`
    background: url('/images/login-background.jpg');
    height: 95vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        height: 85vh;
    }

    @media screen and (min-width: 280px) and (max-width: 767px) {
        height: 75vh;
    }

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export default BackgroundDetails