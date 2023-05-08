

const pressPage = () => {
    const content = document.querySelector('.content')
    const pressPage = document.createElement('div')
    pressPage.classList.add('press-page')


    const pressImg = document.createElement('div')
    pressImg.classList.add('press-img-div')
    pressImg.innerHTML = '<img src="https://media.istockphoto.com/id/1088702690/photo/dog-with-a-slice-of-pizza.jpg?s=612x612&w=0&k=20&c=kVE9voMZkqhR8uV36HlbnV4VhRs9jPnWtDRg2hQ-vGo=">'
    pressPage.appendChild(pressImg)

    const pressCommentsDiv = document.createElement('div')
    pressCommentsDiv.classList.add('press-comments-div')


    const pressComment1 = document.createElement('div')
    pressComment1.classList.add('press-comment')
    pressComment1.innerHTML = '<h3>05/07/2023</h3><h2>Popular Pizza Critic</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
    pressCommentsDiv.appendChild(pressComment1)


    const pressComment2 = document.createElement('div')
    pressComment2.classList.add('press-comment')
    pressComment2.innerHTML = '<h3>05/07/2023</h3><h2>Popular Restaurant Critic</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
    pressCommentsDiv.appendChild(pressComment2)


    const pressComment3 = document.createElement('div')
    pressComment3.classList.add('press-comment')
    pressComment3.innerHTML = '<h3>05/07/2023</h3><h2>Popular Restaurant Critic</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
    pressCommentsDiv.appendChild(pressComment3)

  

    pressPage.appendChild(pressCommentsDiv)
    content.appendChild(pressPage)
}

export default pressPage