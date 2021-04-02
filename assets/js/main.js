$(document).ready(function(){
$('.dropdownone').click(function(){
    $('.drop-one').toggleClass('drop-none');
    $('.tog .chev ').toggleClass('toggle-chev');
});
    
$('.dropdowntwo').click(function(){
    $('.drop-two').toggleClass('drop-two-none');
    $('.tog1 .chev').toggleClass('toggle-chev' , 5000);
})
$('.locationone').click(function(){
    $('.location-one').toggleClass('drop-none');
    $('.tog2 .chev').toggleClass('toggle-chev');
})
$('.dateone').click(function(){
    $('.date-one').toggleClass('drop-none');
})
$('.rangeone').click(function(){
    $('.range-btn').toggleClass('drop-none');
    $('.tog3 .chev').toggleClass('toggle-chev');
});

// $('.o-star').click(function(){
  $('.fa-star').hide();
  $('.fa-star-o').show();
  // $('.fa-star').toggle();
  // $('.fa-star-o').toggle();
// })
// function star(){
//   $('.o-star').hide(); 
//   $('.i-star').show(); 
//   $('.inner-i-star').show();
//   $('.inner-o-star').hide();
//   $('.o-star').click(function(){
//     $(this).toggle();
//     $('.inner-i-star').toggle();
//   }) 
//   // $('.i-star').hide(); 
//   $('.i-star').click(function(){
//     // alert('hello');
//     $('.inner-i-star').toggle();
//     $(this).toggle();
//   }) 
// }
// star();
// hideStar();
// $('.fa-star-o').click(function(){
//   // $(this).toggle();
//   // $('.fa-star-o').show().toggleClass('yellow-star');
//   hideStar();
// });

// $('.fa-star').click(function(){
//   $(this).toggleClass('yellow-star');
// })
// $('.rating').click(function(){

//   $('.fa-star').toggle();
// })

})
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });
  // $('.sli-caro').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay:true,
  //   arrows:false,
  //   dots: true,
  // });
  $(document).ready(function(){
    $('.sli-caro').bxSlider();
  });
