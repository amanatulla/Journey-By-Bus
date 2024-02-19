
let seatCount = 0;
let leftSeat = 40;
let className = 'Economic';
let price = 550;
let totalPrice = 0;

const couponOne = 'NEW15';
const couponTwo = 'Couple 20';


const allBtn = document.getElementsByClassName("seat");
for (const btn of allBtn) {
    btn.addEventListener("click",
        function (e) {
            seatCount = seatCount + 1;
            leftSeat = leftSeat - 1;

            const seatSelect = e.target.parentNode.childNodes[1].innerText;
            const currentSeat = document.getElementById("seat-name");

            const li = document.createElement("li");
            const p = document.createElement('p');
            p.innerText = seatSelect;
            const p2 = document.createElement('p');
            p2.innerText = className;
            const p3 = document.createElement('p');
            p3.innerText = 550;

            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);

            if (seatCount <= 4) {
                setBackgroundColorById(seatSelect);
                currentSeat.appendChild(li);
                setInnerText("total-seat", seatCount);
                setInnerText("seats-left", leftSeat);
                totalPrice = totalPrice + 550;
                document.getElementById("total-money").innerText = totalPrice;
                document.getElementById("grand-total").innerText = totalPrice;

            }
            else {
                showElementById('max-alert');
                
            }


            if (seatCount >= 4) {
                allowElementById("coupon-code");
                allowElementById("coupon-btn");
            }

            else {
                console.log("coupon-3");
            }

            

            nextAllow()



        });
}


const text1 = document.getElementById('coupon-code');
const btn1 = document.getElementById('coupon-btn');

btn1.addEventListener('click', couponOneCal);
function couponOneCal() {
    textInner = text1.value
    if (textInner === couponOne) {
        disPrice = (totalPrice * 0.15);
        grandPrice = totalPrice - disPrice;
        document.getElementById("grand-total").innerText = grandPrice;
        hideElementById('coupon-hide');
        showElementById('discount-price');

        document.getElementById('discount-money').innerText = disPrice;     

    }
    else if (textInner === couponTwo && seatCount >= 4) {
        disPrice = (totalPrice * 0.2);
        grandPrice = totalPrice - disPrice;
        document.getElementById("grand-total").innerText = grandPrice;
        hideElementById('coupon-hide');
        showElementById('discount-price');

        document.getElementById('discount-money').innerText = disPrice; 
    }
    else {
        document.getElementById("grand-total").innerText = totalPrice;
        disabledElementById("coupon-code")
        disabledElementById("coupon-btn")
    }
}

function aware() {
    hideElementById('max-alert');
    allowElementById("coupon-code");
    allowElementById("coupon-btn");
}


const userName = document.getElementById('name'); 
const cellNumber = document.getElementById('number');
const submit = document.getElementById('submit');


userName.addEventListener("keyup", (e)=> {

    const value = e.currentTarget.value;

    if(value == ""){
        allowElementById("submit")
    }
    else{
        submit.disabled = false;
    }

} );

cellNumber.addEventListener("keyup", (e)=> {

    const value = e.currentTarget.value;

    if(value == ""){
        allowElementById("submit")
    }
    else{
        submit.disabled = false;
    }

} );


function next(){
    // hide every thing
    if(seatCount >= 1  ){
        hideElementById('header');
        hideElementById('offer');
        hideElementById('booking');
        hideElementById('footer');
        showElementById('continue');
    }
}


function again(){
    showElementById('header');
    showElementById('offer');
    showElementById('booking');
    showElementById('footer');
    hideElementById('continue');
    location.reload()
}
















