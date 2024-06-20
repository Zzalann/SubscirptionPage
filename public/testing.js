
function moreInfo(betu){
    const buttonElement = betu;
    const infoA ='<div class=" p-1 rounded-md flex flex-row justify-between text-white border-solid border-2 border-slate-600"><div><h1>Information1</h1><p>Description is here!</p><p>Example</p></div><div><button onclick="exitinfo()" class=" m-1 p-1 rounded-3xl hover:bg-white hover:text-black transition-all duration-300 ease-out text-white border-slate-500 border-solid border-2">x</button></div></div>';
    const infoB ='<div class=" p-1 rounded-md flex flex-row justify-between text-white border-solid border-2 border-slate-600"><div><h1>Information2</h1><p>Description is here!</p><p>Example</p></div><div><button onclick="exitinfo()" class=" m-1 p-1 rounded-3xl hover:bg-white hover:text-black transition-all duration-300 ease-out text-white border-slate-500 border-solid border-2">x</button></div></div>';
    const infoC ='<div class=" p-1 rounded-md flex flex-row justify-between border-solid border-2 border-slate-600"><div><h1>Information3</h1><p>Description is here!</p><p>Example</p></div><div><button onclick="exitinfo()" class=" m-1 p-1 rounded-3xl hover:bg-slate-500 hover:text-black transition-all duration-300 ease-out text-white border-slate-500 border-solid border-2">x</button></div></div>';
    const infoD ='<div class=" p-1 rounded-md flex flex-row justify-between border-solid border-2 border-slate-600"><div><h1>Information4</h1><p>Description is here!</p><p>Example</p></div><div><button onclick="exitinfo()" class=" m-1 p-1 rounded-3xl hover:bg-slate-500 hover:text-black transition-all duration-300 ease-out text-white border-slate-500 border-solid border-2">x</button></div></div>'
    if (buttonElement === 'A') {
        document.querySelector('.js-info').innerHTML = infoA;
    }
    if (buttonElement === 'B') {
        document.querySelector('.js-info').innerHTML = infoB;
    }
    if (buttonElement === 'C') {
        document.querySelector('.js-info').innerHTML = infoC;
    }
    if (buttonElement === 'D') {
        document.querySelector('.js-info').innerHTML = infoD;
    }
}

let activeButton = null;

function subscribe(betu) {
    const subButtonElement = betu;
    const currentSubElement = document.querySelector(`.js-sub${subButtonElement}`);
    
    if (activeButton === null) {
        activeButton = subButtonElement;
        currentSubElement.innerHTML = 'Subscribed';
        currentSubElement.classList.add("bg-green-700");
        currentSubElement.classList.remove("bg-gradient-to-r", "from-red-900", "to-red-950");
    } else if (activeButton === subButtonElement) {
        activeButton = null;
        currentSubElement.innerHTML = 'Subscribe';
        currentSubElement.classList.remove("bg-green-700");
        currentSubElement.classList.add("bg-gradient-to-r", "from-red-900", "to-red-950");
    } else {
        document.querySelector('.js-alert').innerHTML ='<div class=" p-1 rounded-3xl flex flex-row justify-between items-center border-solid border-2 border-red-900"><div><h1>Alert!</h1><p>You can only subscribe to one item at a time!</p></div><div><button onclick="exitalert()" class=" m-1 p-1 rounded-3xl hover:bg-slate-500 hover:text-black transition-all duration-300 ease-out text-white border-slate-500 border-solid border-2">x</button></div></div>';
    }
}


function teloMenu(){
    const menuElement = `<img class="h-14 hover:opacity-80 m-2 cursor-pointer" src="img/m9nf3l552h9ulebgp788rvp1dj.png"><img class="h-12 hover:opacity-70 opacity-90 m-2 cursor-pointer" src="img/7n3va2sjun2cgujl66rrnik550.png"><img class="h-14 hover:opacity-70 opacity-90 m-2 cursor-pointer" src="img/—Pngtree—settings icon_4490382.png">`;  
    let menuContent = document.querySelector('.js-menu');
    if (menuContent.innerHTML === ``) {
        menuContent.innerHTML = menuElement;
        menuContent.classList.add("opacity-100", "sm:opacity-0", "rounded-br-md", "top-20", "left-0", "bottom-48", "bg-black", "flex", "flex-col", "justify-around", "items-center", "fixed", "border-slate-600", "border-solid", "border-r-2", "border-b-2");
    }
    else{
        menuContent.innerHTML = ``;
        menuContent.classList.remove("opacity-100","sm:opacity-0", "rounded-br-md", "top-20", "left-0", "bottom-48", "bg-black", "flex", "flex-col", "justify-around", "items-center", "fixed", "border-slate-600", "border-solid", "border-r-2", "border-b-2");
    }
}
function exitinfo(){
    document.querySelector('.js-info').innerHTML = ``;
}
function exitalert(){
    document.querySelector('.js-alert').innerHTML = ``;
}

   
