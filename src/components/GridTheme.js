import React from 'react'
import styled from 'styled-components'

const GridTheme = () => {
    return (
        <>
            <Section>
                <Container>
                    <Title>
                        <h1 className="disney-titles">
                            Stream Exclusive Disney+ Originals
                        </h1>
                        <p>
                            New Stories from our incredible family of studios
                        </p>
                    </Title>
                    <GridImg>
                            <Image><img src="/images/Disney_MLP_GridItem_TS4_AUNZ.jpg" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/ForkyAsksAQuestion_en-US.jpg" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/moana-poster-4-2.png" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/Poster_InfinityWar_EN.jpg" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/Soul_EN_(1).png" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/LUCA-2.png" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/SW_Clone_Wars.png" alt="Exclusive Disney+"/></Image>
                            <Image><img src="/images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg" alt="Exclusive Disney+"/></Image>
                    </GridImg>
                    <GetBundleBtn><button type="button" className="btn-theme-disney">GET THIS DISNEY BUNDLE</button></GetBundleBtn>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding: 5vh 0;
    position: relative;
`

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

const Title = styled.div`
    text-align: center;
    margin-bottom: 3vh;

    p {
        font-size: 1rem;
        @media screen and (max-width: 550px) {
            font-size: .8rem;
        }
    }
`

const GridImg = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px 25px;

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Image = styled.div`
    width: 100%;
    padding: 0;
    border-radius: 0.245rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.245rem;
    }
`

const GetBundleBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1vh 0;
`
export default GridTheme
