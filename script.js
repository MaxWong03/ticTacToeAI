



$(function () {


  //hover or X
  $('.fas.fa-times.fa-8x').hover(function () {
    $(this).toggleClass('fa-10x', true);
    $('#first').show();
    $('#first').css('font-size', '4em');
  }, function () {
    $(this).toggleClass('fa-10x', false);
    $('#first').css('font-size', '0em');
  }
  );

  //hover or O
  $('.far.fa-circle.fa-7x').hover(function(){
    $(this).toggleClass('fa-9x', true);
    $('#second').css('font-size', '4em');
  }, function(){
    $(this).toggleClass('fa-9x', false);
    $('#second').css('font-size', '0em');
  }
  );


})