import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRouter from './Route/Route'
import { RouterProvider } from 'react-router-dom'
import ProviderContext from './Provider/ProviderContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={myCreateRouter} />
    </ProviderContext>
  </React.StrictMode>,
)
