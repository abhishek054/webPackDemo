import {btn,box} from './display'
import '../css/bootstrap.min.css';
import '../css/abhishek.css';
console.log('Js working');



btn.addEventListener('click', myFunction);

function myFunction() {
    // console.log("clicked"); 
    if(btn.innerHTML==="Click to show"){
        // console.log('clicked');
        box.innerHTML = 'This is secret Text';
        btn.innerHTML = 'Click to hide';
    }
    else if(btn.innerHTML==="Click to hide"){
        box.innerHTML = '';
        btn.innerHTML = 'Click to show';
    }
}


