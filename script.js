


function catchMe(myObject) {
     myObject.style.top = getRandomInt(0,  (window.innerHeight - myObject.offsetHeight)) + 'px';
    myObject.style.left = getRandomInt(0, (window.innerWidth - myObject.offsetWidth)) + 'px';
}

function getRandomInt(min , max){
	min = Math.ceil(min);  
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min )) + min;
}

