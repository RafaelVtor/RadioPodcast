
window.addEventListener('load', () => {

    let frequency = document.querySelector('#frequency')
    let podcastImage = document.querySelector('.podcastImage')
    let mhz = document.querySelector('#mhz')
    let description = document.querySelector('.description')

    console.log(podcastImage)

    frequency.addEventListener('input', searchChannels)

    let podcastChannels = podcast.map(channel => {
        return {
            name: channel.name,
            image: channel.image,
            frequency: channel.frequency,
            description: channel.description,
        }
    })

    function searchChannels() {
        console.log(frequency.value)

        podcastChannels.forEach(channel => {
            if (channel.frequency === frequency.value) {
                mhz.innerText = `${channel.frequency}`
                console.log(`./img/${channel.image}.jpg`)
                podcastImage.style.backgroundImage = `url("./img/${channel.image}.jpg")`
                description.textContent = channel.description
            }
        })
    }
})
