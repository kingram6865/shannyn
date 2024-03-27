const navbuttons = [
  {page: "index", element: 'homePage'},
  {page: "pages/process", element: 'processPage'}, 
  {page: "pages/services", element: 'servicesPage'}, 
  {page: "pages/scheduling", element: 'schedulingPage'},
  {page: "pages/about", element: 'aboutPage'}
]

function setNav() {
  navbuttons.forEach(item => {
    let button = document.getElementById(item.element)
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = `/shannyn/${item.page}.html`
      })
    } else {
      let disable = document.getElementById('none')
      disable.disabled = true
    }
  }) 
}

setNav()