const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'white'
            h2.style.color = 'white'
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'blue'
            h2.style.color = 'blue'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'yellow'
            h2.style.color = 'yellow'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'green'
            h2.style.color = 'green'

        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'gray'
            h2.style.color = 'gray'

        }
    })
})