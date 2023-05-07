

const restaurantPage = () => {
    const content = document.querySelector('.content')
    const homePage = document.createElement('div')
    homePage.classList.add('home-page')

    const text = document.createElement('div')
    text.classList.add('text')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.innerHTML = '<h1>Best pizza in the universe</h1>'
    text.appendChild(headline)

    const title =  document.createElement('div')
    title.classList.add('title')
    title.innerHTML = '<h1>Universe Pizza</h1>'

    const homePizza = document.createElement('div')
    homePizza.classList.add('home-pizza')
    homePizza.innerHTML = '<img src="https://media.istockphoto.com/id/1042948900/photo/pizza-pepperoni-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=5TZsBkiQFd8FCz1HU1jdSfc-eZbCpkV6vyuxtvsBjWc="></img>'
    homePage.appendChild(homePizza)


    const homeCopy = document.createElement('div')
    homeCopy.classList.add('home-copy')
    homeCopy.innerHTML = '<p>Lorem ipsum dolor sit amet, mel et odio percipit, ridens salutatus pertinacia ut mel, vim tritani voluptua eu. Id eum ferri doming. Ne mel lucilius disputationi, ad nec autem inciderint. Mea mazim commodo admodum an, legere nominavi duo at, te vis lorem probatus. Vim id tamquam suscipit. Ad sea lorem viris audiam, hinc semper sed eu.</p>'
    text.appendChild(homeCopy)

    const bookOnlineBtn = document.createElement('button')
    bookOnlineBtn.classList.add('book-online')
    bookOnlineBtn.textContent = 'Book Online'
    text.appendChild(bookOnlineBtn)

  
    homePage.appendChild(text)
    
    content.appendChild(homePage)
    

    
}


export default restaurantPage