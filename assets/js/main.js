// 1 clineHeight: Phương thức này giúp chúng ta lấy được chiều cao của elements 
// 2 documents.getBoundingClientRect().top : phương thức này giúp chúng ta lấy được khoảng cách từ đầu trang đến elements mà ta trỏ vào
// 3 windown.innerHeight : Phương thức này  giúp chúng ta lấy được height của view page 

const mainOne = document.querySelector('.main')
const mainTwo = document.querySelector('.mainTwo')
const mainthree = document.querySelector('.mainthree')




const check = (el) => {
    let valueOfViewPort = el.getBoundingClientRect()
    let heightWindow = window.innerHeight
    console.log(valueOfViewPort.top, valueOfViewPort.bottom, heightWindow);
    return (valueOfViewPort.bottom < heightWindow + 100 && valueOfViewPort.top > -300 || valueOfViewPort.top > 312 && valueOfViewPort.bottom < 712)
}

const valueOfIndex = () => {
    if (check(mainTwo)) {
        let activeMainTwo = mainTwo.querySelectorAll('.title')
        activeMainTwo[0].classList.add('active')
        activeMainTwo[1].classList.add('active')
    }
    else {
        let activeMainTwo = mainTwo.querySelectorAll('.title')
        activeMainTwo[0].classList.remove('active')
        activeMainTwo[1].classList.remove('active')
    }

    if (check(mainOne)) {
        let activeMainOne = document.querySelectorAll('.main-one')
        activeMainOne[0].classList.add('active')
        activeMainOne[1].classList.add('active')
    }
    else {
        let activeMainOne = document.querySelectorAll('.main-one')
        activeMainOne[0].classList.remove('active')
        activeMainOne[1].classList.remove('active')
    }
    if (check(mainthree)) {
        let mainThreeOfANM = document.querySelectorAll('.person')
        mainThreeOfANM[0].classList.add('active')
        mainThreeOfANM[1].classList.add('active')
        mainThreeOfANM[2].classList.add('active')
    }
    else {
        let mainThreeOfANM = document.querySelectorAll('.person')
        mainThreeOfANM[0].classList.remove('active')
        mainThreeOfANM[1].classList.remove('active')
        mainThreeOfANM[2].classList.remove('active')
    }
}

window.addEventListener("scroll", (e) => {
    setTimeout(() => {
        valueOfIndex()
    }, 100);
})


