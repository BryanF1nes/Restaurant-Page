import lauger from './assets/lauger.png';
import yuengling from './assets/yuengling.png'
import samadams from './assets/samadams.png'

function Menu() {
    const div = document.createElement('div');
    div.classList.add('menu', 'tabcontent')
    div.id = 'menu'

    div.innerHTML = `<h1>Menu</h1>
    <ul class="menu-flex">
        <li>
            <h2>Becks Cold Brew - $4.99</h2>
            <img class="img" src='${lauger}'>
            <p>A classic homestyle lauger!</p>
        </li>
        <li>
            <h2>Yuengling Traditional Lager - $5.99</h2>
            <img class="img" src='${yuengling}'>
            <p>An American Traditional Lager!</p>
        </li>
        <li>
            <h2>Sam Adams Octoberfest - $4.99</h2>
            <img class="img" src='${samadams}'>
            <p>Hearty & Smooth!</p>
        </li>
    </ul>`

    return div;
}

export default Menu;