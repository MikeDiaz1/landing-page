import React, { Component } from 'react';

import uproposTitle from '../../../public/img/upropose-logo004.png';
import hero from '../../../public/img/Hero-Banner.jpg'
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Image from 'grommet/components/Image'
import Hero from 'grommet/components/Hero'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
/*
<Headline margin='none'>Section 1</Headline>*/

export default class Section1 extends Component {
    render() {
        return (
            <Section pad='none' justify='start' align='stretch' full='vertical' colorIndex='brand'>
                <Hero size='large' backgroundColorIndex='light-1' background={<Image src={hero} fit='cover' />}>
                </Hero>
                <Header float={true}>
                    <Box pad='medium' align='end' full='horizontal'>
                        <Image src={uproposTitle} size='medium' />
                    </Box>
                </Header>
            </Section>
        )
    }
}