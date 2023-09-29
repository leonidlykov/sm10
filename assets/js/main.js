function rand(max){
    return Math.floor(Math.random()*max);
    }
const form = document.querySelector('.form')
const input_name = document.getElementById('input1')
const input_year = document.getElementById('input2')

let error = document.querySelector('.error')
let error1 = document.querySelector('.error1')
let error2 = document.querySelector('.error2')

form.addEventListener('submit', function(event){
    event.preventDefault()

    if(input_name.value == ''){
        error1.innerHTML='Введите имя'
        input_name.style.boxShadow = '0px 4px 16px red'
    }else if(input_name.value.length < 2){
        error1.innerHTML='имя не меньше 2 символов'
        input_name.style.boxShadow = '0px 5px 15px red'
    }else{
        input_name.style.boxShadow = '0px 5px 15px green'
        error1.innerHTML=''
    }

    if(input_year.value == ''){
        error2.innerHTML='Введите год рождения'
        input_year.style.boxShadow = '0px 5px 15px red'
    }else if(input_year.value.length < 4){
        error2.innerHTML='Не меньше 4 символов'
        input_year.style.boxShadow='0px 5px 15px red'
    }else{
        input_year.style.boxShadow = '0px 5px 15px green'
        error2.innerHTML=''
    }

    let x = Number(input_year.value)
    let y = 2023

    let age = y - x

    if(age < 18){
        error.innerHTML='Возраст меньше 18 лет'
    }else{
        error.innerHTML='https://club.z-go.ru/'
    }
})