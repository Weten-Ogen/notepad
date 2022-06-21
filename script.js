const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector('.popup-box'),
closeIcon = popupBox.querySelector(".close");

addBox.addEventListener('click', ()=>{
    popupBox.classList.add('show');
});

closeIcon.addEventListener('click', ()=> {
    popupBox.classList.remove('show');
    console.log('click')
});