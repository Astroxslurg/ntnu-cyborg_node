import React from 'react';
import App, { Container } from 'next/app';
import Api from '../src/api-client';
import NoSRR from 'react-no-ssr';

export default class MyApp extends App {
  constructor() {
    super();
    this.state = {
      hello: {
        id: '',
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
        <NoSRR>
          <Component state={this.state} {...pageProps} />
        </NoSRR>
      </Container>
    );
  }
}
