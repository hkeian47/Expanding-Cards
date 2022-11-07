// querySelectorAll returns a NodeList
const panels = document.querySelectorAll('.panel')

// Add active class to the panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
 // Remove active class from the panel
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// 

