let button = document.querySelectorAll("button");
let tp = document.querySelector(".tp");
let error = document.querySelector(".err");
let totalPrice = 0;
let price = 5350;

let selected = document.querySelectorAll(".dis");
selected.forEach((item) => {
    item.onclick = () => {
        error.style.display = 'block';
        error.textContent = 'Seat unavailable';
        setTimeout(() => {
error.style.display = 'none';
        }, 4000)
    }
})

let avaSeats = document.querySelector(".ava");
let sele = document.querySelector(".sele");
let num = [];
num2 = [];
const checkAvalaibleSelected = (x) => {
    num = [];
    num2 = [];
    button.forEach((item) => {
    if(!(item.classList.contains('dis')) && !(item.classList.contains('sel')) ) {
        num.push(item);
        avaSeats.textContent = num.length + " Seats Available";
    } 

    if (item.classList.contains('sel')) {
        num2.push(item)
        sele.textContent = num2.length + " Seat selected";
    }
})
}

let clicked = false;
button.forEach((item) => {
    if(!(item.classList.contains('dis'))) {
        item.onclick = () => {
            clicked = true;
            if (!(item.classList.contains('sel'))) {
            item.classList.add('sel');
            totalPrice += price;
            tp.textContent = "Total price: NGN" + totalPrice;
            checkAvalaibleSelected();
            }else if (item.classList.contains('sel')) {
                num2.pop();
                num.push(1);
                sele.textContent = num2.length + " Seat selected";
                avaSeats.textContent = num.length + " Seats Available";
                item.classList.remove('sel');
                totalPrice -= price;
                tp.textContent = "Total price: NGN" + totalPrice;
        }
        }
    } 
})


