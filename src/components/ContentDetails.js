import styled from 'styled-components'

const ContentDetails = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 650px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width:768px) and (max-width:1200px) {
        max-width: 550px;
    }

    @media screen and (min-width:550px) and (max-width:767px) {
        max-width: 450px;
        margin-top: 13vh;
    }

    @media screen and (min-width:375px) and (max-width:550px) {
        max-width: 350px;
        margin-top: 13vh;
    }

    @media screen and (min-width:280px) and (max-width:375px) {
        max-width: auto;
        margin-top: 13vh;
    }

    h4 {
        color: #fff;
        margin: 1vh 0;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
        max-width: 600px;
        display: block;
        margin-bottom: 1vh;
    }

    > .get-bundle-btn {
        outline: none;
        border: none;
        width: 100%;
        padding: 11.5px 15px;
        align-items: center;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        background: #0063e5;
        color: #f9f9f9;
        font-size: 18px;
        border-radius: 0.145rem;
        transition: all 0.7s ease-in-out;

        @media screen and (min-width:550px) and (max-width:1200px) {
            padding: 10px 0;
            font-size: 15px;
        }

        @media screen and (min-width:280px) and (max-width:550px) {
            padding: 5px 0;
            font-size: 14px;
        }

        &:hover {
            background: #0085ff;
        }
    }

    > .links {
        outline: none;
        border: none;
        font-size: 19px;
        background: transparent;
        color: #f9f9f9;

        @media screen and (min-width:280px) and (max-width:550px) {
            font-size: 15px;
        }
    }

    > .text-gray {
        color: gray;
    }
`

export default ContentDetails