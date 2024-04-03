const modal = document.querySelector('.modal'); //클래스로 선택할 때
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

btnOpen.addEventListener('click',()=>{
    modal.style.display='flex';
});
btnClose.addEventListener('click',()=>{
    modal.style.display='none';
});