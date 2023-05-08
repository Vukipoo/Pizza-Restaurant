import restaurantPage from "./restaurant"
import menuPage from './menu'
import contactPage from './contact'

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



    div1.setAttribute('id', 'home-btn')
    div2.setAttribute('id', 'menu-btn')
    div3.setAttribute('id', 'contact-btn')
    div4.setAttribute('id', 'about-btn')
    div5.setAttribute('id', 'careers-btn')
    div6.setAttribute('id', 'reserve-btn')
    div7.setAttribute('id', 'title-btn')



    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')
    div4.classList.add('tab')
    div5.classList.add('tab')
    div6.classList.add('tab')




    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Contact'
    div4.textContent = 'About'
    div5.textContent = 'Careers'
    div6.textContent = 'Reserve a table'
    div7.innerHTML = 'Universe Pizza'




    tabs.appendChild(div1)
    tabs.appendChild(div2)
    tabs.appendChild(div3)
    tabs.appendChild(div4)
    tabs.appendChild(div5)
    tabs.appendChild(div6)
    title.appendChild(div7)



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
        contactPage()
    })
    div4.addEventListener('click',() => {
        clearContent()
        aboutPage()
    })
    div5.addEventListener('click',() => {
        clearContent()
        careersPage()
    })
    div6.addEventListener('click',() => {
        clearContent()
        reservePage()
    })

    header.appendChild(tabs)
    header.appendChild(title)
    content.appendChild(header)



}

        function clearContent() {
            const content = document.querySelector('.content')
            const contentElements = document.querySelectorAll('.home-page, .menu-page, .contact-page')

            contentElements.forEach(element => {
                if(element){
                    content.removeChild(element)
                }
            })
        }



export default createTabs