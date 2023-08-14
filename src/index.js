import {Home, Main} from './home';
import './style.css';
import bg from './assets/bg.jpg';

const content = document.getElementById('content');
content.style.background = `url(${bg}) no-repeat`;
content.style.backgroundSize = 'cover'
document.getElementById('content').append(Home());