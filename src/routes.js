import Home from './views/Home.html'
import About from './views/About.html'

export default{
	mode: 'history',
	routes: {
		'/': Home,
		'/about': About
	}
}