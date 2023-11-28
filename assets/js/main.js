function switchTheme() {
    // get root element
    const rootElm = document.documentElement
    let dataTheme = rootElm.getAttribute('data-theme'),
        newTheme
    
    newTheme = dataTheme === 'light' ? 'dark' : 'light'

    // set html attribute
    rootElm.setAttribute('data-theme', newTheme)
}