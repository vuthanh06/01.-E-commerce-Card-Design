let credit_number = document.getElementsByName('credit-number')[0];

credit_number.addEventListener('keyup', () => {
    let number4 = (credit_number.value).slice(0, 5);
    if (number4 <= 5000) {
        document.getElementById('master').src = "./img/master.png"
    } else {
        document.getElementById('master').src = "./img/visa.png"
    }
})

const img = ["./img/air1.png", "./img/Airpods.png", "./img/air3.png"];

var cardoff = () => {
    Array.from(document.getElementsByClassName('card_img')).forEach((ele, i)=> {
        ele.style.boxShadow = "unset";
    })
}

var dotoff = () => {
    Array.from(document.getElementsByClassName('dot')).forEach((ele, i)=> {
        ele.style.boxShadow = "unset";
        ele.style.background = "none";
    })
}

Array.from(document.getElementsByClassName('card_img')).forEach((ele, i)=> {
    ele.addEventListener('click',() => {
        cardoff();
        dotoff();
        document.getElementById('poster').src = img[i];
        document.getElementsByClassName('card_img')[i].style.boxShadow = "0px 0px 20px rgb(0, 0, 0, .3)";
        document.getElementsByClassName('dot')[i].style.boxShadow = "0px 0px 5px #0070d6";
        document.getElementsByClassName('dot')[i].style.background = "transparent";
    });
});