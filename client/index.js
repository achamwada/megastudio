import React from "react";
import { render } from "react-dom"
import Home from "./components/pages/Home"
import client from './store/client'
import { ApolloProvider } from '@apollo/client'

const root = document.getElementById("root")
render(<ApolloProvider client={client}><Home /></ApolloProvider>, root)