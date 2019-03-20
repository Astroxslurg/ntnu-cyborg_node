import React from 'react';
import App, { Container } from 'next/app';
import Api from '../src/api-client';
import NavbarTop from '../components/navbar';
import { Column, Row } from 'simple-flexbox';

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
        <div
          className="row"
          style={{
            backgroundColor: '#343a40',
          }}>
          <div className="col-md-3" style={{}} />
          <div className="col-md-6">
            <NavbarTop />
          </div>
          <div className="col-md-3" style={{}} />
        </div>
        <Component state={this.state} {...pageProps} />
      </Container>
    );
  }
}
