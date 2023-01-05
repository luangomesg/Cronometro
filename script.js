let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let mili = document.querySelector(".mil");
let sec = document.querySelector(".sec");
let start = document.querySelector(".start");
let crono;
let shadow = document.querySelector(".crono");

 
hour.value = 00;
min.value = 00;
mili.value = 00;
sec.value = 00;
start.disabled = false;




function go() {
    timer()
    crono = setInterval(() => { timer() }, 10)
    start.disabled = true;
    shadow.style.boxShadow = "red  0px 5px 40px 10px"
}

function timer() {
    mili.value += 1;
    mili.innerHTML = (mili.value < 10 ? '0' + mili.value : mili.value);
    if (mili.value == 100) {
        mili.value = 0;
        sec.value += 1;
        if (sec.value == 60) {
            sec.value = 0;
            min.value += 1;
            if (min.value == 60) {
                min.value = 0;
                hour.value += 1; 
            }
        }
        sec.innerHTML = (sec.value < 10 ? '0' + sec.value : sec.value);
        min.innerHTML = (min.value < 10 ? '0' + min.value : min.value);
        hour.innerHTML = (hour.value < 10 ? '0' + hour.value : hour.value);
    }  

    
}

function pause() {
    clearInterval(crono);
    start.disabled = false;
    shadow.style.boxShadow = "#bf3535  0px 5px 40px 5px"
}

function end() {
    clearInterval(crono);
    hour.value = 0;
    min.value = 0;
    mili.value = 0;
    sec.value = 0;
    hour.innerHTML = (hour.value < 10 ? '0' + hour.value : hour.value);
    min.innerHTML = (min.value < 10 ? '0' + min.value : min.value);
    mili.innerHTML = (mili.value < 10 ? '0' + mili.value : mili.value);
    sec.innerHTML = (sec.value < 10 ? '0' + sec.value : sec.value);
    start.disabled = false;
    shadow.style.boxShadow = "none"
}

















