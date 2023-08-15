import Home from './home';
import Menu from './menu';
import Contact from './contact';
import './style.css';
import bg from './assets/bg.jpg';

function Nav() {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul')
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add('link')
    menuBtn.classList.add('link')
    contactBtn.classList.add('link')

    homeBtn.innerHTML = 'Home';
    homeBtn.id = 'default';
    menuBtn.innerHTML = 'Menu';
    contactBtn.innerHTML = 'Contact';
    
    ul.append(homeBtn, menuBtn, contactBtn)
    nav.append(ul)
    
    h1.innerHTML = 'Butter Beer Bakery'
    
    container.classList.add('container');
    container.append(h1, nav);
    
    homeBtn.addEventListener('click', () => openTab(event, home))
    menuBtn.addEventListener('click', () => openTab(event, menu))
    contactBtn.addEventListener('click', () => openTab(event, contact))
    
    return container;
}

function openTab(link, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for( let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    
    const tablink = document.getElementsByClassName('link');
    for( let i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    tabName.style = 'flex';
    link.currentTarget.className += ' active';
}

const content = document.getElementById('content');
content.style.background = `url(${bg}) no-repeat`;
content.style.backgroundSize = 'cover'
document.getElementById('content').append(Nav(), Home(), Menu(), Contact());
document.getElementById('default').click();