

const contactPage = () => {
    const content = document.querySelector('.content')
    const contactPage = document.createElement('div')
    contactPage.classList.add('contact-page')

    const topDiv = document.createElement('div')
    topDiv.classList.add('top-div')
    topDiv.innerHTML = '<h2>Lets have a talk</h2><img src="https://cdn.shopify.com/s/files/1/0051/5375/1089/products/iStock-156466582_400x400_400x_4c08fb0d-9ac8-4777-8399-2946f1a4ea53_400x.jpg?v=1613165235">'

    const bottomDiv = document.createElement('div')
    bottomDiv.classList.add('bottom-div')
    
    const location = document.createElement('div')
    location.classList.add('location')
    location.innerHTML = '<img src = "https://i.insider.com/55faf019dd0895883d8b45f1?width=600&format=jpeg&auto=webp">'
    bottomDiv.appendChild(location)

    const info = document.createElement('div')
    info.classList.add('info')
    info.innerHTML = '<h2>Meet us</h2><br><p>619-123-4567<br>contact@contact.com<br>Adress 123 street</p>'
    bottomDiv.appendChild(info)

    const pitch = document.createElement('div')
    pitch.classList.add('pitch')
    pitch.innerHTML = '<h2>Pitch us</h2><br><p>Hello, my name is ____,<br> and my email address is ____,<br> and I would like to<br> discuss about ____ project.</p>'
    bottomDiv.appendChild(pitch)

    contactPage.appendChild(topDiv)
    contactPage.appendChild(bottomDiv)
    content.appendChild(contactPage)
}

export default contactPage