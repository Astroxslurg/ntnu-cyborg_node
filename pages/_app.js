import React from 'react';
import App, { Container } from 'next/app';
import Api from '../src/api-client';
import NavbarTop from '../components/navbar';

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      hello: {
        id: '',
        content: '',
      },
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  async componentDidMount() {
    const result = await Api.fetchHello();
    this.setState({ hello: result });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Column flexGrow={1}>
          <Row vertical="center">
            <NavbarTop />
          </Row>
          <Row vertical="center">
            <Column flexGrow={1} horizontal="center" />
            <Column flexGrow={1} horizontal="center">
              <DynamicPlot />
            </Column>
            <Column flexGrow={1} horizontal="center">
              <span>Explanation of stuff </span>
            </Column>
            <Column flexGrow={1} horizontal="center" />
          </Row>
        </Column>
        <Component state={this.state} {...pageProps} />
      </Container>
    );
  }
}
