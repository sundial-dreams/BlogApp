import ApolloClient from "apollo-boost";
import fetch from "node-fetch";
const developmentServerHost = "http://localhost:8769/graphql";
const productServerHost = "http://www.theaurora.cn:8769/graphql";
const graphqlClient = new ApolloClient({ uri: developmentServerHost, fetch });
export default graphqlClient;

