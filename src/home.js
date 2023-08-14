function Home() {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul')
    const p = document.createElement('p');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add('home');
    menuBtn.classList.add('menu');
    contactBtn.classList.add('contact');
    homeBtn.innerHTML = 'Home';
    menuBtn.innerHTML = 'Menu';
    contactBtn.innerHTML = 'Contact';

    ul.append(homeBtn, menuBtn, contactBtn)
    nav.append(ul)

    h1.innerHTML = 'Butter Beer Bakery'
    p.innerHTML = 'A cozy bar that also serves sweet treats?!'

    container.classList.add('container');
    container.append(h1, nav, p);

    return container;
}


export { Home };