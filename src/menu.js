

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


    const menuItems = document.createElement('div')
    menuItems.classList.add('menu-items')

    const menuItem1 = document.createElement('div')
    const menuItem2 = document.createElement('div')
    const menuItem3 = document.createElement('div')
    const menuItem4 = document.createElement('div')

    menuItem1.classList.add('menu-item-div')
    menuItem2.classList.add('menu-item-div')
    menuItem3.classList.add('menu-item-div')
    menuItem4.classList.add('menu-item-div')

    menuItem1.innerHTML = '<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>'
    menuItem2.innerHTML = '<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>'
    menuItem3.innerHTML = '<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>'
    menuItem4.innerHTML = '<h3>Menu Item $9.99</h3><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>'


    menuItems.appendChild(menuItem1)
    menuItems.appendChild(menuItem2)
    menuItems.appendChild(menuItem3)
    menuItems.appendChild(menuItem4)


    
    highLight.appendChild(highLightText)
    highLight.appendChild(highLightImg)

    menuPage.appendChild(highLight)
    menuPage.appendChild(menuItems)

    content.appendChild(menuPage)
}

export default menuPage