import lauger from './assets/lauger.png';
import yuengling from './assets/yuengling.png'
import samadams from './assets/samadams.png'

const menuItems = [
    {name: 'Becks Cold Brew', image: `${lauger}`, price: '$4.99', statement: 'A classic homestyle lager!'},
    {name: 'Yuengling Traditional Lager', image: `${yuengling}`, price: '5.99', statement: 'An American Traditional Lager!'},
    {name: 'Sam Adams Octoberfest', image: `${samadams}`, price: '$3.99', statement: 'Hearty & Smooth!'},
]

function Menu() {
    const div = document.createElement('div');
    div.classList.add('menu', 'tabcontent')
    div.id = 'menu'

    const menuItems = [
        {name: 'Becks Cold Brew', image: `${lauger}`, price: '$4.99', statement: 'A classic homestyle lager!'},
        {name: 'Yuengling Traditional Lager', image: `${yuengling}`, price: '5.99', statement: 'An American Traditional Lager!'},
        {name: 'Sam Adams Octoberfest', image: `${samadams}`, price: '$3.99', statement: 'Hearty & Smooth!'},
    ]

    const makeItemList = (array) => {
        const ul = document.createElement('ul');
        ul.classList.add('menu-flex');

        console.log(array.length)
        
        for (let i = 0; i < array.length; i++) {
            const li = document.createElement('li');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');
            const p = document.createElement('p');

            h2.textContent = `${array[i].name} - ${array[i].price}`;
            img.src = `${array[i].image}`;
            p.textContent = array[i].statement;

            img.classList.add('img')

            li.append(h2, img, p);
            ul.append(li);
        }
        return ul;
    }

    div.append(makeItemList(menuItems));

    return div;
}

export default Menu;
