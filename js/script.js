let liFifth = document.createElement('li'),
    list = document.getElementsByClassName("menu-item"),
    listWrapper = document.querySelector('.menu');

console.log(liFifth);
console.log(list);
console.log(listWrapper);

listWrapper.insertBefore(list[2], list[1]);
liFifth.classList.add('menu-item');
liFifth.innerHTML = 'Fifth';
listWrapper.appendChild(liFifth);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

document.querySelector("#title").innerHTML = "We sell only original Apple products";

document.querySelector(".adv").remove();

let question = "Do you like Apple?",
    answer = prompt(question, "");
    
document.querySelector("#prompt").innerHTML =  answer;