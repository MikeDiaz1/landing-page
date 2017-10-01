import React, { Component } from 'react';

import uproposTitle from '../../../public/img/upropose-logo004.png'
import 'grommet/scss/hpe/index.scss';

import App from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Headline from 'grommet/components/Headline'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'

export default class Home extends Component {
    render() {
        return (
            <App centered={false} inline={true}>
                <Article>
                    <Section pad='large' justify='center' align='center' full='vertical'>
                        <Header justify='center' align='center' float={true} colorIndex='light-2'>
                            <Image src={uproposTitle} />
                        </Header>
                        <Headline margin='none'>Section 1</Headline>
                    </Section>
                    <Section pad='large' justify='center' align='center' colorIndex='grey-4' full='vertical'>
                        <Headline margin='none'>Section 2</Headline>
                    </Section>
                    <Section pad='large' justify='center' align='center' full='vertical'>
                        <Headline margin='none'>Section 3</Headline>
                    </Section>
                    <Section pad='large' justify='center' align='center' colorIndex='grey-4' full='vertical'>
                        <Headline margin='none'>Section 4</Headline>
                    </Section>
                    <Section pad='large' justify='center' align='center' full='vertical'>
                        <Headline margin='none'>Section 5</Headline>
                    </Section>
                </Article>
                <Footer justify='center' align='center' colorIndex='light-2'>
                    <Headline margin='none'>Footer</Headline>
                </Footer>
            </App>
        );
    }
}