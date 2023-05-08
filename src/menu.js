

const menuPage = () => {
    const content = document.querySelector('.content')
    const menuPage = document.createElement('div')
    menuPage.classList.add('menu-page')

    const highLight = document.createElement('div')
    highLight.classList.add('high-light')

    const highLightText = document.createElement('div')
    highLightText.classList.add('highLight-text')
    highLightText.innerHTML = '<h2>Highlight item $9.99</h2><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>'
    

    const highLightImg = document.createElement('div')
    highLightImg.classList.add('highlight-img')
    highLightImg.innerHTML = '<img src = "https://rare-gallery.com/uploads/posts/805971-Fast-food-Pizza-White-background-Basil.jpg">'


    const menu = document.createElement('div')
    menu.classList.add('menu')
    
    
    highLight.appendChild(highLightText)
    highLight.appendChild(highLightImg)

    menuPage.appendChild(highLight  )

    content.appendChild(menuPage)
}

export default menuPage