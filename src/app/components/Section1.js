import React, { Component } from 'react';

import uproposTitle from '../../../public/img/upropose-logo004.png';
import hero from '../../../public/img/Hero-Banner.jpg'

import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image'
import Hero from 'grommet/components/Hero'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import FormFields from 'grommet/components/FormFields'
import TextInput from 'grommet/components/TextInput'

export default class Section1 extends Component {
    render() {
        return (
            <Section pad='none' justify='start' align='stretch' full='vertical' colorIndex='light-1'>
                <Hero size='large' backgroundColorIndex='light-1' background={<Image src={hero} fit='cover' />}>
                </Hero>
                <Header float={true}>
                    <Box pad='medium' align='end' full='horizontal'>
                        <Image src={uproposTitle} size='medium' />
                    </Box>
                </Header>
                <Box align='center' justify='center' full={true}>
                    <Form plain={true}>
                        <FormFields>
                        <Heading>Label</Heading>
                        <TextInput />
                        </FormFields>
                    </Form>
                </Box>
            </Section>
        )
    }
}