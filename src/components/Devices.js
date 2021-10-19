import React from 'react'
import styled from 'styled-components'

const Devices = () => {
    return (
        <>
            <Section>
                <Container>
                    <Title>
                        <h1 className="disney-titles">Available Stream on Your Favorite Devices</h1>
                    </Title>
                    <ImgGrid>
                        <Image>
                            <img src="/images/TV.png" alt="TV Icon"/>
                            <h2>TV</h2>
                        </Image>

                        <Image>
                            <img src="/images/Laptop.png" alt="Laptop Icon"/>
                            <h2>Laptop</h2>
                        </Image>

                        <Image>
                            <img src="/images/mobile.png" alt="Mobile Icon"/>
                            <h2>Mobile</h2>
                        </Image>

                        <Image>
                            <img src="/images/XBOX.png" alt="XBOX Icon"/>
                            <h2>XBOX</h2>
                        </Image>
                    </ImgGrid>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding: 3vh 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

const Title = styled.div`
    text-align: center;
    margin: 0 0 4vh 0;
`

const ImgGrid = styled.div`
    display: grid;
    gap: 15px 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media screen and (min-width: 280px) and (max-width: 767px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Image = styled.div`
    width: 100%;
    padding: 0 0 0 0;
    text-align: center;
    border-radius: 4px;

    @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 100%;
    }

    img {
        width: 100%;
        height: 115px;
        object-fit: contain;

        @media screen and (min-width: 768px) and (max-width: 991px) {
            height: 85px;
        }

        @media screen and (min-width: 550px) and (max-width: 767px) {
            height: 75px;
        }

        @media screen and (min-width: 280px) and (max-width: 550px) {
            height: 65px;
        }
    }

    h2 {
        font-weight: 500 !important;

        @media screen and (min-width: 280px) and (max-width: 550px) {
            font-size: 0.9rem;
        }
    }
`


export default Devices
