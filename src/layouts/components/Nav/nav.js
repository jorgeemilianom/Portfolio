const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')
const navItems = document.getElementById('nav-items')

btnOpen?.addEventListener('click', () => {
    navItems?.classList.add('nav-items--side', 'active')
})

btnClose?.addEventListener('click', () => {
    navItems?.classList.remove('active')
})