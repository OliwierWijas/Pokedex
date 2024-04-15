import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root"
import AboutMe from './routes/AboutMe'
import { RouterProvider, createHashRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import Pokedex from './routes/Pokedex'
import PokemonDetail  from "./routes/PokemonDetail"

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Pokedex />
      },
      {
        path: "AboutMe",
        element: <AboutMe />
      },
      {
        path: "pokemon/:name",
        element: <PokemonDetail />
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);