import React from 'react'
import Background from './BackgroundDetails'
import Container from './ContainerDetails'
import Content from './ContentDetails'

const Banner = () => {
    return (
        <div>
            <Background>
                <Container>
                    <Content> 
                        <img src="/images/cta-logo-one.svg" alt="Hulu, Disney+ and ESPN Logos" />
                        <button type="button" className="get-bundle-btn">Get The Disney Bundle</button>
                        <h4>Stream now. Terms Apply</h4>
                        <img src="/images/cta-logo-two.png" alt="Disney's Bundle"/>
                        <button type="button" className="links">Sign Up for Disney+ Only</button>
                        <button type="button" className="links text-gray">$7.99/month or $79.99/year</button>
                    </Content>
                </Container>
            </Background>
        </div>
    )
}

export default Banner
