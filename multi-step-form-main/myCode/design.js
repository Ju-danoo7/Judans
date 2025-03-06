// Page 1
const firstNextButton = document.querySelector('#firstPageNextButton');
const allInputFields = document.querySelectorAll('input');
const allErrorMessage = document.querySelectorAll('.error');
const nameinput = document.querySelectorAll('#name-input');

const firstPageInput = JSON.parse(localStorage.getItem('firstPageInput')) || {}

firstNextButton.addEventListener('click', () => {
    const nameValue = nameinput.value;
    for (let i = 0; i < allInputFields.length; i++) {
        if (allInputFields[i].value) {
        } else {
            allErrorMessage[i].style.visibility = 'visible'
            allErrorMessage[i].innerText = 'This field is required'
        }
        let known = [...allInputFields].every((e) => {
            if (e.value) {
                return true
            }
        })
        if (known) {
            window.location.href = 'design2.html'
        }
        // if(!nameValue.match(/^[A-Za-z]*\${1}[A-Za-z]*&/)){
        //     allErrorMessage[1].innerText = "Write full name"
        // }
    }
    console.log(nameValue);
   
})

for (let input of allInputFields) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error')
    input.addEventListener('input', () => {
        // console.log(error);
        firstPageInput[input.id] = input.value;
        localStorage.setItem('firstPageInput', JSON.stringify(firstPageInput))
        error.style.visibility = 'hidden'
    })
    input.value = firstPageInput[input.id] || ""
}