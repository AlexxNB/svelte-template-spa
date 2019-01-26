import './styles/global.scss' //All globals styles should be imported there. I.e. any CSS frameworks or something like this.
import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'MyApp'
	}
});

export default app;