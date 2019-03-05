import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";
import MainMenu from "components/app/mainMenu/mainMenu";
import { LeftRightLayout } from "components/Layout/layout";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import store from "store/store";
import graphqlClient from "GQL/GraphQL";
import { loadCookies } from "utils/utils";
import { fetchUser } from "actions/actions";

export default class BlogApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    }
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    //载入cookies
    let userId = loadCookies("userId");
    if (userId) {
      store.dispatch(fetchUser(userId))
    }
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={ graphqlClient }>
          <Provider store={ store }>
            <Head>
              <link rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
                    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
                    crossOrigin="anonymous"/>
              <link rel="stylesheet"
                    href="/static/css/reset.css"
                    type="text/css"
              />
              <link rel="stylesheet"
                    href="/static/css/font-icon.css"
                    type="text/css"
              />
            </Head>
            <LeftRightLayout leftWidth={ 60 }>
              <MainMenu
                router={ {
                  homeUrl: "/",
                  momentUrl: "/moment",
                  searchUrl: "/find",
                  resourceUrl: "/ebooks",
                  messageUrl: "/message"
                } }
              />
              <Component { ...pageProps } />
            </LeftRightLayout>
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}