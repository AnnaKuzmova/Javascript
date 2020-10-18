const tl = new TimelineLite({paused:true, reversed: true});
const shopButton = document.querySelector('.open');

tl.to('#cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('.navigation-holder', 1 , {
    height: '100%',
    ease: Power2.easeOut
},  '-=1')
.fromTo('.not-visible-navigation', 0.5, {
    x: 50,
    opacity: 0,
    ease: Power2.easeOut
},{
    x:0,
    opacity: 1
}, '-= 0.5')

shopButton.addEventListener('click', function(){
    tl.reversed()? tl.play():tl.reverse()
});



