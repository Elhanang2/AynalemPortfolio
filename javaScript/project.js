const listItem = document.querySelector('.list-item');
function humberger(x) {
    x.classList.toggle("change");

      listItem.classList.toggle("active");
  }

  window.onscroll = function() {stickyNav()};

  var navbar = document.getElementById("container-header");
  var sticky = navbar.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  const myname = document.querySelector('.myname');
  const title = document.querySelector('.home-heading');
  const arrow = document.querySelector('.arrow');
  const t2 = new TimelineMax();
  var duration = 1;
  var tl = new TimelineMax({repeat:-1, repeatDelay:1});
  
  tl.set(arrow, {y: 0})
  .to(arrow, duration / 4, {y:+20, ease:Power2.easeOut}, "bounceme")
  .to(arrow, duration / 2, { y:0, ease:Bounce.easeOut, delay:duration / 4 }, "bounceme");
t2.fromTo(myname, 1, {
    x: '-150%'
}, {
    x: '0%',
    ease: Power2.easeInOut
}).fromTo(title, 1, {
  x: '150%'
}, {
  x: '0%',
  ease: Power2.easeInOut
},'-=1').fromTo(arrow, 1, {
  y: '800%'
}, {
  y: '0%',
  ease: Power2.easeInOut
})

 
  AOS.init();
  
  
  
  
  // function test(){
  //   let test = document.querySelector(".test");
  //   if(test.style.display === 'none'){
  //     test.style.display="block";
  //   }else{
  //     test.style.display="none"
  //   }
    
  // }

  