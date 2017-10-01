import React, { Component } from 'react';

import 'grommet/scss/hpe/index.scss';

import Section1 from '../components/Section1'
import App from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'

export default class Home extends Component {
    render() {
        return (
            <Article margin='none'>
                <Section1 />
                <Section justify='center' align='center' colorIndex='grey-4' full='vertical'>
                    <Headline margin='none'>Section 2</Headline>
                </Section>
                <Section justify='center' align='center' full='vertical'>
                    <Headline margin='none'>Section 3</Headline>
                </Section>
                <Section justify='center' align='center' colorIndex='grey-4' full='vertical'>
                    <Headline margin='none'>Section 4</Headline>
                </Section>
                <Footer justify='center' align='center' colorIndex='light-2'>
                    <Headline margin='none'>Footer</Headline>
                </Footer>
            </Article>
        );
    }
}