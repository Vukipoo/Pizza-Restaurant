

const careersPage = () => {
    const content = document.querySelector('.content')
    const careersPage = document.createElement('div')
    careersPage.classList.add('careers-page')

    const mission = document.createElement('div')
    mission.classList.add('mission')
    mission.innerHTML = '<p class="hiring" id="hire">We are hiring!</p><h1>Be part of our mission</h1><p>We are looking for passionate people to join us on out mission. We value flat hierarchies, clear communication, and full owenership and responsibility.</p>'
    
    const missionDivs = document.createElement('div')
    missionDivs.classList.add('mission-divs')
    const missionDiv1 = document.createElement('div')
    const missionDiv2 = document.createElement('div')
    const missionDiv3 = document.createElement('div')
    const missionDiv4 = document.createElement('div')
    const missionDiv5 = document.createElement('div')
    const missionDiv6 = document.createElement('div')
    const missionDiv7 = document.createElement('div')
    const missionDiv8 = document.createElement('div')

    missionDiv1.innerHTML = '<p>View all</p>'
    missionDiv2.innerHTML = '<p>Development</p>'
    missionDiv3.innerHTML = '<p>Design</p>'
    missionDiv4.innerHTML = '<p>Marketing</p>'
    missionDiv5.innerHTML = '<p>Costumer service</p>'
    missionDiv6.innerHTML = '<p>Operations</p>'
    missionDiv7.innerHTML = '<p>Finance</p>'
    missionDiv8.innerHTML = '<p>Management</p>'

    missionDiv1.classList.add('hiring')
    missionDiv2.classList.add('hiring')
    missionDiv3.classList.add('hiring')
    missionDiv4.classList.add('hiring')
    missionDiv5.classList.add('hiring')
    missionDiv6.classList.add('hiring')
    missionDiv7.classList.add('hiring')
    missionDiv8.classList.add('hiring')

    missionDivs.appendChild(missionDiv1)
    missionDivs.appendChild(missionDiv2)
    missionDivs.appendChild(missionDiv3)
    missionDivs.appendChild(missionDiv4)
    missionDivs.appendChild(missionDiv5)
    missionDivs.appendChild(missionDiv6)
    missionDivs.appendChild(missionDiv7)
    missionDivs.appendChild(missionDiv8)

    mission.appendChild(missionDivs)
    careersPage.appendChild(mission)
    content.appendChild(careersPage)

}


export default careersPage