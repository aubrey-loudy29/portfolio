import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Routes, Route } from "react-router-dom";

function App() {

	const routes = (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/skills' element={<Skills />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	)

	return (
		<div className='app'>
			<Navbar />
			{routes}
			<Footer />
		</div>
	)
}

export default App