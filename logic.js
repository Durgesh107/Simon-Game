let gameseq = [];
let userseq = [];
let btns = ["black", "aqua", "brown", "darkblue"];
let started = false;
let level = 0;
let txt = document.querySelector('.text');
document.addEventListener("keypress", () => {
    if (started == false) {
        console.log('Game has started');
        started = true;
        levelup();
    }
});
const gameblink = (btn) => {
    if (btn) { 
        console.log("Blinking button:", btn);  
        btn.classList.add("blink");
        setTimeout(() => {
            btn.classList.remove("blink");
        }, 250);
    } else {
        console.error("Button is undefined or null. Cannot add 'blink1' class.");
    }
};
const userblink = (btn) => {
    if (btn) { 
        console.log("Blinking button:", btn);  
        btn.classList.add("user");
        setTimeout(() => {
            btn.classList.remove("user");
        }, 250);
    } else {
        
        console.error("Button is undefined or null. Cannot add 'blink1' class.");
        reset();
    }
};
const levelup = () => {
    userseq=[];
    level++;
    txt.innerHTML = `Level ${level}`;
    let randomidx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameblink(randombtn);
};
const verify=(idx)=>{
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        txt.innerHTML=`Game over !Your score is <b>${level}</b> Press any key to start.`;
        setTimeout(function () {
            document.querySelector("body").style.backgroundcolor="red";
        },250);
    }
}
function btnpress() {
    let btn = this;  
    console.log("Button pressed:", btn); 
    gameblink(btn);
    userblink(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    verify(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
const reset =()=>{
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}