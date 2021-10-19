import React from 'react'
import styled from 'styled-components'

const MarvelStudio = () => {
    return (
        <>
            <Section>
                <Container>
                    <Content>
                        <h1 className="disney-titles">Endless Entertainment</h1>
                        <p>Disney classics, Pixar adventures, Marvel epics, Star Wars sagas,
                            National Geographic explorations, and more.
                        </p>
                    </Content>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    background: url('/images/BlackPanther.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 71vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width:768px) and (max-width:1200px) {
        height: 61vh;
    }
    
    @media screen and (min-width:280px) and (max-width:767px) {
        height: 55vh;
        object-fit: contain;
        object-position: center;
    }
`

const Container = styled.div`
    width: 91%;
    margin: 0 auto;

    @media screen and (min-width:280px) and (max-width:1200px) {
        width: 85%;
    }
`

const Content = styled.div`
    margin-top: 17vh;

    display: flex;
    text-align: end;
    flex-direction: column;

    @media screen and (min-width:280px) and (max-width:1200px) {
        margin-top: 13vh;
    }

`

export default MarvelStudio
