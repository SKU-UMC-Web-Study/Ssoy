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

const modal = document.querySelector('.modal'); 
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

btnOpen.addEventListener('click',()=>{
    modal.style.display='flex';
});
btnClose.addEventListener('click',()=>{
    modal.style.display='none';
});

const numPattern= /^\d+$/;
const emailPattern=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const fourtweleve=  /^[a-z\d]{4,12}$/;
const passwdpattern=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/

let nameCheck =()=>{
    if(numPattern.test(Name.value)==true){
        nameFail.innerText = '이름은 문자열이어야 합니다!';
        nameSuccess.style.display = 'none';
        nameFail.style.display = 'flex';
    }
    else if(Name.value==''){
        nameFail.innerText = '필수 입력 항목입니다!';
        nameSuccess.style.display = 'none';
        nameFail.style.display = 'flex';
    }
    else{
        nameSuccess.style.display = 'flex';
        nameFail.style.display = 'none';
    }
}
let emailCheck =()=>{
    if(numPattern.test(email.value)==true){
        emailFail.innerText = '이메일은 문자열이어야 합니다!';
        emailSuccess.style.display = 'none';
        emailFail.style.display = 'flex';
    }
    else if(email.value==''){
        emailFail.innerText = '필수 입력 항목입니다!';
        emailSuccess.style.display = 'none';
        emailFail.style.display = 'flex';
    }
    else if(emailPattern.test(email.value)!==true){
        emailFail.innerText = '이메일 양식을 맞춰주어야 합니다!';
        emailSuccess.style.display = 'none';
        emailFail.style.display = 'flex';
    }
    else{
        emailSuccess.style.display = 'flex';
        emailFail.style.display = 'none';
    }
}
let ageCheck =()=>{
    if(numPattern.test(age.value)==false){
        ageFail.innerText = '나이는 숫자입니다!';
        ageSuccess.style.display = 'none';
        ageFail.style.display = 'flex';
    }
    else if(email.value==''){
        ageFail.innerText = '필수 입력 항목입니다!';
        ageSuccess.style.display = 'none';
        ageFail.style.display = 'flex';
    }
    else if(age.value<0){
        ageFail.innerText = '나이는 음수가 될 수 없습니다';
        ageSuccess.style.display = 'none';
        ageFail.style.display = 'flex';
    }
    else if(age.value%1!==0){
        ageFail.innerText = '나이는 소수가 될 수 없습니다 ';
        emailSuccess.style.display = 'none';
        ageFail.style.display = 'flex';
    }
    else if(age.value<=18){
        ageFail.innerText = '19세 이상만 가입이 가능합니다. ';
        ageSuccess.style.display = 'none';
        ageFail.style.display = 'flex';
    }
    else{
        ageSuccess.style.display = 'flex';
        ageFail.style.display = 'none';
    }
}
let passwdCheck= ()=>{
    if(numPattern.test(passwd.value)){
        passwdFail.innerText = '비밀번호는 문자열이어야 합니다.';
        passwdSuccess.style.display = 'none';
        passwdFail.style.display = 'flex';
    }
    else if(passwd.value.length<3){
        passwdFail.innerText ='비밀번혼느 최소 4자리 이상이어야 합니다.';
        passwdSuccess.style.display='none';
        passwdFail.style.display='flex';
    }
    else if(passwd.value.length>13){
        passwdFail.innerText ='비밀번호는 최대 12자리까지 가능합니다.';
        passwdSuccess.style.display='none';
        passwdFail.style.display='flex';
    }
    else if(passwdpattern.test(passwd.value)==false){
        passwdFail.innerText ='영어, 숫자, 특수문자를 모두 조합해서 작성해야 합니다.';
        passwdSuccess.style.display='none';
        passwdFail.style.display='flex';
    }
    else if(passwd.value=''){
        passwdFail.innerText ='필수 입력 항목입니다';
        passwdSuccess.style.display='none';
        passwdFail.style.display='flex';
    }
    else{
        passwdSuccess.style.display = 'flex';
        passwdFail.style.display = 'none';
    }
}
let passwd2Check= ()=>{
    if(numPattern.test(passwd2.value)){
        passwd2Fail.innerText = '비밀번호는 문자열이어야 합니다.';
        passwd2Success.style.display = 'none';
        passwd2Fail.style.display = 'flex';
    }
    else if(passwd2.value=''){
        passwd2Fail.innerText ='필수 입력 항목입니다';
        passwd2Success.style.display='none';
        passwd2Fail.style.display='flex';
    }
    else if(passwd2.value!==passwd.value){
        passwd2Fail.innerText ='비밀번호가 일치하지 않습니다';
        passwd2Success.style.display='none';
        passwd2Fail.style.display='flex';
    }
    else{
        passwdSuccess.style.display = 'flex';
        passwdFail.style.display = 'none';
    }
}


Name.addEventListener('blur', nameCheck);
email.addEventListener('blur', emailCheck);
age.addEventListener('blur',ageCheck);
passwd. addEventListener('blur',passwdCheck);
passwd2.addEventListener('blur',passwd2Check);
let modalDisplay=()=>{

}
