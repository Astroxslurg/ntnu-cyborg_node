import React from 'react';
import App, { Container } from 'next/app';
import Api from '../src/api-client';

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      hello: {
        id: -1,
        content: ' ',
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
        <Component state={this.state} {...pageProps} />
      </Container>
    );
  }
}
