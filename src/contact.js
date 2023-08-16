function Contact() {
    const div = document.createElement('div');
    div.classList.add('contact','tabcontent');
    div.id = 'contact'

    div.innerHTML = 
    `
    <form>
        <h1>Contact Us!</h1>
        <div class="form-div">
            <label for="name">Name</label>
            <input type="text" name="name">
        </div>
        <div class="form-div">
            <label for="email">Email</label>
            <input type="email" name="email">
        </div>
        <textarea rows="5" cols="40" placeholder="Enter your message here..."></textarea>
        <button class="submit">Send</button>
    </form>
    `

    return div;
}

export default Contact;