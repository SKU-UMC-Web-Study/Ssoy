const Name= document.querySelector('#name');
const nameSuccess =document.querySelector('.success-name');
const nameFail = document. querySelector('.fail-name');

const email= document.querySelector('#email');
const emailSuccess = document.querySelector('.success-email');
const emailFail = document.querySelector('.fail-email');

const age = document.querySelector('#age');
const ageSuccess = document.querySelector('.success-age');
const ageFail= document.querySelector('.fail-age');

const passwd = document.querySelector('#passwd');
const passwdSuccess= document.querySelector('.success-passwd');
const passwdFail = document.querySelector('.fail-passwd');

const passwd2=document.querySelector('#passwd2');
const passwd2Success = document.querySelector('.success-passwd2');
const passwd2Fail = document.querySelector('.fail-passwd2');
const pattern=/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
let nameCheck = () => {

    if (/[0-9]/.test(Name.value.trim())===true|| Name.value.trim() === '') {
        nameFail.style.display = 'flex';
        nameSuccess.style.display = 'none';
    } else {
        nameSuccess.style.display = 'flex';
        nameFail.style.display = 'none';
    }
}

let emailCheck =() =>{
    if(!/[a-zA-Z]/.test(email.value.trim())|| 
    !pattern.test(email.value.trim())||
    email.value.trim()===''){
        emailFail.style.display = 'flex';
        emailSuccess.style.display = 'none';

    }
    else{
        emailSuccess.style.display = 'flex';
        emailFail.style.display = 'none';
    }
}
Name.addEventListener('blur', nameCheck);
email.addEventListener('blur', emailCheck);
let modalDisplay=()=>{

}
