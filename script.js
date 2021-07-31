const inputs = document.querySelectorAll('input')

function handleUpdate() {
    const suffix = this.dataset.sizing || ''
    const rootDoc = document.documentElement

    switch(this.id) {
        case 'spacing':
            rootDoc.style.setProperty('--spacing', `${this.value+suffix}`)
            break
        case 'blur':
            rootDoc.style.setProperty('--blur', `${this.value+suffix}`)
            break
        case 'base':
            rootDoc.style.setProperty('--base', `${this.value+suffix}`)
            break
        default:
            break

    }
}

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate)
    input.addEventListener('mousemove', handleUpdate)
})

console.log(getComputedStyle(document.documentElement).getPropertyValue('--spacing'))
