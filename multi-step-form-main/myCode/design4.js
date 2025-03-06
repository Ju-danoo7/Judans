const onlineService = document.querySelector('.online')
const largerStorage = document.querySelector('.larger')
const customizableProfile = document.querySelector('.profile')
const Picked = document.querySelector('.picked')
const monthsub = document.querySelector('.monthsub')
const sumTotalAmount = document.querySelector('.sumTotalAmount')
const confirmButton = document.querySelector('.confirm');
const successMessage = document.querySelector('.parent');
const container = document.querySelector('.container');
const layout = document.querySelector('.layout');
const lastButton = document.querySelector('.button-3');
const perioding = document.querySelector('.perioding');
const total = document.querySelector('.total');



const containerClassName = localStorage.getItem('containerClassName') || "container two monthTime"

const planz = JSON.parse(localStorage.getItem('planz'))
const product = JSON.parse(localStorage.getItem('product'))
const totalSubPrice = JSON.parse(localStorage.getItem('totalSubPrice'))


let subscriptionType = containerClassName.includes('monthTime')


Picked.innerText = planz.name || ""



if(product.forst === true){
    onlineService.style.display = "flex"
}
if(product.second === true){
    largerStorage.style.display = "flex"
}
if(product.third === true){
    customizableProfile.style.display = "flex"
}

let sumOf = Object.values(totalSubPrice).reduce((a, b) =>{
    return a + b
})



if (subscriptionType){
    monthsub.innerText = planz['month sub'];
    sumTotalAmount.innerText = add(sumOf, +planz['month sub'])
}
if (!subscriptionType) {
    container.classList.remove('monthTime')
    monthsub.innerText = planz['year sub']
    sumTotalAmount.innerText = add(sumOf, +planz['year sub'])
    perioding.innerText = 'yr'
}

function add(a, b){
    return a + b
}

confirmButton.addEventListener('click', () => {
    successMessage.classList.add('success')
    console.log('object clicked');
    lastButton.style.display = 'none'
    total.style.display = 'none'

})
layout.addEventListener('click', () => {
    console.log('layout clicked');
    successMessage.classList.remove('success')
    localStorage.clear()
    document.location.href = 'design.html'
})