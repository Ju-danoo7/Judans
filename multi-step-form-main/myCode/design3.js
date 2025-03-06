const container = document.querySelector('.container');
const allThirdInput = document.querySelectorAll('.thirdPart');
const firstThirdInput = document.querySelector('#forst');
const secondThirdInput = document.querySelector('#second');
const lastThirdInput = document.querySelector('#third');
const nextstepButton = document.querySelector('.nextStep');


const containerClassName = localStorage.getItem('containerClassName') || "container two monthTime"

const thirdInputClass = JSON.parse(localStorage.getItem('thirdInputClass')) || {}
const totalSubPrice = JSON.parse(localStorage.getItem('totalSubPrice')) || {}
const planz = JSON.parse(localStorage.getItem('planz'))

const product = JSON.parse(localStorage.getItem('product')) || {
    forst: false,
    second: false,
    third: false
}



let subscriptionType = containerClassName.includes('monthTime')
if (!subscriptionType) {
    container.classList.remove('monthTime')
}

allThirdInput.forEach((e) => {
    e.addEventListener('click', () => {
        let idGiven = e.id
        e.classList.toggle('checked')
        thirdInputClass[e.id] = e.classList
        localStorage.setItem('thirdInputClass', JSON.stringify(thirdInputClass))
        let boolin = [...thirdInputClass[e.id]].includes('checked')
        product[e.id] = boolin
        localStorage.setItem('product', JSON.stringify(product))

        if (subscriptionType) {
            if (product.forst === true) {
                totalSubPrice.one = 1
            } else {
                totalSubPrice.one = 0
            }
            if (product.second === true) {
                totalSubPrice.two = 2
            } else {
                totalSubPrice.two = 0
            }
            if (product.third === true) {
                totalSubPrice.three = 2
            } else {
                totalSubPrice.three = 0
            }

        }
        if (!subscriptionType) {
            if (product.forst === true) {
                totalSubPrice.one = 10
            } else {
                totalSubPrice.one = 0
            }
            if (product.second === true) {
                totalSubPrice.two = 20
            } else {
                totalSubPrice.two = 0
            }
            if (product.third === true) {
                totalSubPrice.three = 20
            } else {
                totalSubPrice.three = 0
            }
        }
        localStorage.setItem('totalSubPrice', JSON.stringify(totalSubPrice))

    })


    if (product.forst === true) {
        firstThirdInput.classList.add('checked')
    } else {
        firstThirdInput.classList.remove('checked')
    }

    if (product.second === true) {
        secondThirdInput.classList.add('checked')
    } else {
        secondThirdInput.classList.remove('checked')
        totalSubPrice.two = 0
    }
    if (product.third === true) {
        lastThirdInput.classList.add('checked')
    } else {
        lastThirdInput.classList.remove('checked')
    }

})
nextstepButton.addEventListener('click', () => {
    let numbers = Object.values(totalSubPrice).reduce((a, b) => {
        return a + b
    })
    if (numbers > 0){
        document.location.href = 'design4.html'
    } 
})

