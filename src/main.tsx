import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MealsCalculator from './views/meals-calculator/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MealsCalculator />
  },
  {
    path: '/meals-calculator',
    element: <MealsCalculator />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
