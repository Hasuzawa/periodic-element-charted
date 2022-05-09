import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { RestLink } from "apollo-link-rest"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const restLink = new RestLink({
  uri: "https://periodic-table-elements-info.herokuapp.com"
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
})


root.render(
  <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
  </React.StrictMode>
)