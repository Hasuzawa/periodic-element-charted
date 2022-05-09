import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { RestLink } from "apollo-link-rest"
import { Provider } from "react-redux"
import { store } from "./store/store"


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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)