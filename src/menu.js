import lauger from './assets/lauger.png';
import sixpack from './assets/lauger.png'

function Menu() {
    const div = document.createElement('div');
    div.classList.add('menu', 'tabcontent')
    div.id = 'menu'

    div.innerHTML = `<h1>Menu</h1>
    <ul class="menu-flex">
        <li>
            <h2>Becks Cold Brew - $4.99</h2>
            <img class="img" src='${lauger}'>
        </li>
        <li>
            <h2>Becks Cold Brew - $4.99</h2>
            <img class="img" src='${lauger}'>
        </li>
        <li>
            <h2>Becks Cold Brew - $4.99</h2>
            <img class="img" src='${lauger}'>
        </li>
    </ul>`

    return div;
}

export default Menu;