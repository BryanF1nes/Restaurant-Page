function Contact() {
    const div = document.createElement('div');
    div.classList.add('contact','tabcontent');
    div.id = 'contact'

    div.innerHTML = 
    `
    <h1>Contact Me!</h1>
    <form>
        <label for="name">Name</label>
        <input type="text" name="name">
        <label for="email">Email</label>
        <input type="email" name="email">
        <button>Send</button>
    </form>
    `

    return div;
}

export default Contact;