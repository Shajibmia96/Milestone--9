import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myCreateRouter from './Route/Route'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={myCreateRouter} />
  </React.StrictMode>,
)