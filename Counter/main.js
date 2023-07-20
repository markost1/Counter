let count = document.getElementsByClassName('counter');
const decrease = document.getElementsByClassName('dec')[0];
const reset = document.getElementsByClassName('res')[0];
const increase = document.getElementsByClassName('inc')[0];
let options = document.getElementsByClassName('wrap');
let i = 0
//solution 1

// increase.addEventListener('click',(e)=>{
//     i++
//     count[0].innerHTML = i;
//     console.log(e.target.textContent);
// });

// reset.addEventListener('click',()=>{
//     i=0
//     count[0].innerHTML = i
// })

// decrease.addEventListener('click',()=>{
//     i--
//     count[0].innerHTML = i
// })


//solution 2

    options[0].addEventListener('click',(e)=>{
        console.log(e.target.textContent);  
    let type = e.target.textContent
        if(type == 'INCREASE'){
            i++;
        }else if(type == 'DECREASE'){
            i--
        }else if(type == 'RESET'){
             i=0;
        }
        count[0].innerHTML = i
    })