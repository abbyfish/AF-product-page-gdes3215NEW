

/* BANNER WORD SLIDESHOW*/
$('.slideshow').slick({
  infinite: true,
  speed: 100,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

/**************************INK**********/
/* INK SHOW AND HIDE FUNCTION*/
$('.ink').click(function() {
  $('.grip').toggleClass('display');
});

$('.ink').click(function() {
  $('.ink').toggleClass('inknew');
});

$('.ink').click(function() {
  $('.recycle').toggleClass('display');
});

$('.ink').click(function() {
  $('.blend').toggleClass('display');
});

 $('.ink').click(function() {
  $('.glide').toggleClass('display');
});


/* X BUTTON SHOW AND HIDE FUNCTION*/
$('.ink').click(function() {
  $('.x').toggleClass('xshow');
});


/* INK CLOSING FUNCTION*/
$('.fa-window-close').click(function() {
  $('.ink').addClass('ink');
});


/**************************GRIP**********/
/* GRIP SHOW AND HIDE FUNCTION*/
$('.grip').click(function() {
  $('.grip').toggleClass('gripnew');
});

$('.grip').click(function() {
  $('.ink').toggleClass('display');
});

$('.grip').click(function() {
  $('.recycle').toggleClass('display');
});

$('.grip').click(function() {
  $('.blend').toggleClass('display');
});

 $('.grip').click(function() {
  $('.glide').toggleClass('display');
});


/* X BUTTON SHOW AND HIDE FUNCTION*/
$('.grip').click(function() {
  $('.x').toggleClass('xshow');
});


/* GRIP CLOSING FUNCTION*/
$('.fa-window-close').click(function() {
  $('.grip').addClass('grip');
});

/**************************RECYCLE**********/
$('.recycle').click(function() {
  $('.grip').toggleClass('display');
});

$('.recycle').click(function() {
  $('.ink').toggleClass('display');
});

$('.recycle').click(function() {
  $('.recycle').toggleClass('recyclenew');
});

$('.recycle').click(function() {
  $('.blend').toggleClass('display');
});

 $('.recycle').click(function() {
  $('.glide').toggleClass('display');
});


/* X BUTTON SHOW AND HIDE FUNCTION*/
$('.recycle').click(function() {
  $('.x').toggleClass('xshow');
});


/* RECYCLE CLOSING FUNCTION*/
$('.fa-window-close').click(function() {
  $('.recycle').addClass('recycle');
});

/**************************BLEND**********/
$('.blend').click(function() {
  $('.grip').toggleClass('display');
});

$('.blend').click(function() {
  $('.ink').toggleClass('display');
});

$('.blend').click(function() {
  $('.recycle').toggleClass('display');
});

$('.blend').click(function() {
  $('.blend').toggleClass('blendnew');
});

 $('.blend').click(function() {
  $('.glide').toggleClass('display');
});


/* X BUTTON SHOW AND HIDE FUNCTION*/
$('.blend').click(function() {
  $('.x').toggleClass('xshow');
});


/* RECYCLE CLOSING FUNCTION*/
$('.fa-window-close').click(function() {
  $('.blend').addClass('blend');
});


/**************************GLIDE**********/
$('.glide').click(function() {
  $('.grip').toggleClass('display');
});

$('.glide').click(function() {
  $('.ink').toggleClass('display');
});

$('.glide').click(function() {
  $('.recycle').toggleClass('display');
});

$('.glide').click(function() {
  $('.blend').toggleClass('display');
});

 $('.glide').click(function() {
  $('.glide').toggleClass('glidenew');
});


/* X BUTTON SHOW AND HIDE FUNCTION*/
$('.glide').click(function() {
  $('.x').toggleClass('xshow');
});


/* RECYCLE CLOSING FUNCTION*/
$('.fa-window-close').click(function() {
  $('.glide').addClass('glide');
});

AOS.init();

/*FAQ*/

let heading = document.querySelectorAll('h2');
let accordionContent = document.querySelector('.accordion-content');


heading.forEach(function(h){
  h.addEventListener('click',function(){
    if( h.classList.contains('curr') ){
      // if current selection is open, close accordion
      h.nextElementSibling.classList.remove('more');
      // and then remove current status
      h.classList.remove('curr');
    } else {
      // if current selection is not open
      // remove current class from all headings
      h.classList.remove('curr');
      // add class to the current selection
      h.classList.add('curr');
      // remove class from all accordion content
      accordionContent.classList.remove('more');
      // add class to the current accordion content
      h.nextElementSibling.classList.add('more');
    }
  })
})


/* EMAIL FORM HANDLING */

$('form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})

$('form').submit(function(e){
  
  // do not submit form
  e.preventDefault();
  
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    var val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden in CSS)
    $('.form-input').addClass('drop-out');
    $('.form-confirmation-message').addClass('drop-in');
  }

})



