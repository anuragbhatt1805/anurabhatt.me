import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './view/home/Home'
import { About } from './view/about/About.tsx'
import { Gallery } from './view/gallery/Gallery.tsx'
import { Education } from './view/education/Education.tsx'
import { Experience } from './view/experience/Experience.tsx'
import { Project } from './view/project/Project.tsx'
import { Contact } from './view/contact/Contact.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='education' element={<Education />} />
      <Route path='experience' element={<Experience />} />
      <Route path='project' element={<Project />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
