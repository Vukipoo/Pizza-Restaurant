import restaurantPage from "./restaurant"
import menuPage from './menu'
import contactPage from './contact'
import pressPage from './press'

const createTabs = () => {
    const content = document.querySelector('.content')

    const header = document.createElement('header')
    header.classList.add('header')

    const tabs = document.createElement('div')
    tabs.classList.add('tabs')

    const title =  document.createElement('div')
    title.classList.add('title')
    

    const div1 = document.createElement('div1')
    const div2 = document.createElement('div2')
    const div3 = document.createElement('div3')
    const div4 = document.createElement('div4')
    const div5 = document.createElement('div5')
    const div6 = document.createElement('div6')
    const div7 = document.createElement('div7')
    const div8 = document.createElement('div8')



    div1.setAttribute('id', 'home-btn')
    div2.setAttribute('id', 'menu-btn')
    div3.setAttribute('id', 'press-btn')
    div4.setAttribute('id', 'contact-btn')
    div5.setAttribute('id', 'about-btn')
    div6.setAttribute('id', 'careers-btn')
    div7.setAttribute('id', 'reserve-btn')
    div8.setAttribute('id', 'title-btn')



    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')
    div4.classList.add('tab')
    div5.classList.add('tab')
    div6.classList.add('tab')
    div7.classList.add('tab')





    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Press'
    div4.textContent = 'Contact'
    div5.textContent = 'About'
    div6.textContent = 'Careers'
    div7.textContent = 'Reserve a table'
    div8.innerHTML = 'Universe Pizza'




    tabs.appendChild(div1)
    tabs.appendChild(div2)
    tabs.appendChild(div3)
    tabs.appendChild(div4)
    tabs.appendChild(div5)
    tabs.appendChild(div6)
    tabs.appendChild(div7)
    title.appendChild(div8)



    div1.addEventListener('click',() => {
        clearContent()
        restaurantPage()
    })
    div2.addEventListener('click',() => {
        clearContent()
        menuPage()
    })
      
    div3.addEventListener('click',() => {
        clearContent()
        pressPage()
    })
    div4.addEventListener('click',() => {
        clearContent()
        contactPage()
    })
    div5.addEventListener('click',() => {
        clearContent()
        aboutPage()
    })
    div6.addEventListener('click',() => {
        clearContent()
        careersPage()
    })
    div7.addEventListener('click',() => {
        clearContent()
        reservePage()
    })

    header.appendChild(tabs)
    header.appendChild(title)
    content.appendChild(header)



}

        function clearContent() {
            const content = document.querySelector('.content')
            const contentElements = document.querySelectorAll('.home-page, .menu-page, .contact-page, .press-page')

            contentElements.forEach(element => {
                if(element){
                    content.removeChild(element)
                }
            })
        }



export default createTabs