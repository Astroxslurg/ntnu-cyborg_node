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
        <Row horizontal="center">
          <Column flexGrow={1}>
            <NavbarTop />
          </Column>
        </Row>
        <Row vertical="center">
          <Column flexGrow={1} horizontal="center">
            <h3> Column 1 </h3>
            <span> column 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal="center">
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
          <Column flexGrow={1} horizontal="center">
            <h3> Column 1 </h3>
            <span> column 1 content </span>
            <Component state={this.state} {...pageProps} />
          </Column>
          <Column flexGrow={1} horizontal="center">
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
          <Column flexGrow={1} horizontal="center">
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
        </Row>
      </Container>
    );
  }
}
