let daysObject = {};
let buttonAdd = document.querySelector('#add-button');

function askUser(){
    let day = document.querySelector('#day').value;
    let likes = parseInt(document.querySelector('#number-likes').value);

    let ask = confirm('Likes for this day have been already added. Do you want to make a change?');
    if(ask === true) {
        daysObject[day] = likes;
    }

}

buttonAdd.addEventListener('click',function(e){
    e.preventDefault();

    let day = document.querySelector('#day').value;
    let likes = parseInt(document.querySelector('#number-likes').value);

    daysObject[day] = daysObject.hasOwnProperty(day)?askUser():likes; 
   
});

let filterButton = document.querySelector('#filter-data');

filterButton.addEventListener('click', function(){

  let lowestLike = Math.min(parseInt(Object.values(daysObject)));
  let lowLikes = document.querySelector('#low-likes');
  let maxLikes = document.querySelector('#max-like');

  for(let key of Object.keys(daysObject)) {
    if(parseInt(daysObject[key]) === lowestLike) {
        let li = document.createElement('li');
        let text = document.createTextNode(key +' - ' + daysObject[key]);
        li.appendChild(text);
        lowLikes.appendChild(li);
    }else if(parseInt(daysObject[key]) > 3000) {
        let li = document.createElement('li');
        let text = document.createTextNode(key +' - ' + daysObject[key]);
        li.appendChild(text);
        maxLikes.appendChild(li);
    }
  }

});

