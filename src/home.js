function Home() {
    const div = document.createElement('div');
    div.id = 'home'
    div.classList.add('tabcontent')

    div.innerHTML = `<h1>Welcome to Butter Beer Bakery!</h1>
    <p>Your one stop shop for beer and baked goods!</p>`

    return div;
}

export default Home;