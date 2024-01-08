const btn = document.querySelector('.btn');
let input = document.getElementById('input');
const label = document.querySelector('.label');
const regX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
input.value = input.value.replace(/\s/g, '');
// console.log(btn, input, label)


window.addEventListener('DOMContentLoaded', () => {
    removeSpace();
    checkEmailValidation();
})

function removeSpace() {
    input.addEventListener('blur', () => {
        input.value = input.value.replace(/\s/g, '');
    })
}


function checkEmailValidation() {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (input.value === "") {  
            input.style.border = " 2px solid var(--Light-Red)";
            label.innerText = 'Whoops! It looks like you forgot to add your email';
            label.classList.add('active');
        } else if (!regX.test(input.value)) {
            input.value  = '';
            input.placeholder = `example@gmail.com`;
            label.classList.add('active');
            label.innerText = 'Please provide a valid email address';
        } else {
            input.style.border = " 2px solid var(--Pale-Blue)";
            label.classList.remove('active');
            alert('submit');
            input.value  = '';
        }
    
    })
}

