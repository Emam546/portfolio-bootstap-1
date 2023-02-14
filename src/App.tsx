import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import Landing from './Landing'
import { Services } from './services'
import OurProjects from './ourSkills'
import { About } from './About'
import Team from './team'
import Tech from './tech'
import { StartProject } from './start-project'
import { Blogs } from './Blogs'
import Subscribe from './subscribe'
import Footer from './Footer'
import "./framework.css"
function App() {
  return (<>
    <NavBar />
    <main>
      <Landing />
      <Services />
      <OurProjects />
      <About />
      <Team />
      <Tech />
      <StartProject />
      <Blogs />
      <Subscribe />
    </main>
    <Footer />
  </>
  )
}

export default App
