const selectPlan = document.querySelectorAll('.selectPlan')
const container = document.querySelector('.container')
const selector = document.querySelector('.selector')
const unz = document.querySelector('#un')
const deux = document.querySelector('#deux')
const trois = document.querySelector('#trois')
const nextStep = document.querySelector('.nextStep')

const planz = JSON.parse(localStorage.getItem('planz')) || {}
let containerClassName = localStorage.getItem('containerClassName') || 'container two monthTime'

let subscriptionType = containerClassName.includes('monthTime')
if (!subscriptionType) {
    container.classList.remove('monthTime')
}
let plus = ""


selectPlan.forEach((e) => {
    const plan = e.querySelector('.fes');
    const planName = plan.innerText;
    const planCost = e.querySelectorAll('.sub');

    e.addEventListener('click', () => {
        for (let planCos of planCost) {
            let naming = planCos.className
            let namingNumber = planCos.innerText
            planz.name = planName
            planz[naming] = namingNumber
            localStorage.setItem('planz', JSON.stringify(planz))
            plus = 'clicked'
            console.log('object');
        }
        clearPlan(selectPlan)

        e.classList.toggle('selectedPlan')
        
    })

    if (planz.name === "Arcade") {
        un.classList.add('selectedPlan')
    }
    if (planz.name === "Advanced") {
        deux.classList.add('selectedPlan')
    }
    if (planz.name === "Pro") {
        trois.classList.add('selectedPlan')
    }
    localStorage.setItem('planz', JSON.stringify(planz))
})

function clearPlan(given) {
    for (let i = 0; i < 3; i++) {
        given[i].classList.remove('selectedPlan')
    }
}
selector.addEventListener('click', () => {
    container.classList.toggle('monthTime')
    containerClassName = container.className
    localStorage.setItem('containerClassName', containerClassName)
    let subscriptionType = containerClassName.includes('monthTime')
    if (!subscriptionType) {
        container.classList.remove('monthTime')
    } 
})

nextStep.addEventListener('click', () => {
    if(plus === "clicked"){
       document.location.href = 'design3.html';
    } else if(plus !== "clicked"){
        
    }
})


