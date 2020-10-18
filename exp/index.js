//This is just an experiment, I was curious
let circle = document.querySelector('.circle');


    setInterval(()=> {
        circle.style.top = `${Math.floor(Math.random() * 90) + 1}%`;
    circle.style.left = `${Math.floor(Math.random() * 90) + 1}%`;
    }, 1000);

    
