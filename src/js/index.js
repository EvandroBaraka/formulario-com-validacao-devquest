const inputs = document.querySelectorAll('.inputs')
const divs = document.querySelectorAll('.div-input')


for (let i = 0; i < inputs.length; i++) {
    const item = inputs[i]
    const div = divs[i]

    item.addEventListener('focusout', function () {
        if(item.value === '') {
            if(item.classList.contains('preenchido')){
                item.classList.remove('preenchido')
            }
            item.classList.add('vazio')
            div.classList.add('vazio')
        }else{
            if(item.classList.contains('vazio')){
                item.classList.remove('vazio')
                div.classList.remove('vazio')
            }
            item.classList.add('preenchido')
        }
    })
}