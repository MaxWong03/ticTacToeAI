

const domObjects = {
  cross: '.fas.fa-times.fa-8x',
  circle: '.far.fa-circle.fa-7x',
  first: '#first',
  second: '#second',
  bigCross: 'fa-10x',
  bigCircle: 'fa-9x',
  choice: '.choice',
  selection: '.selection'

}


$(function () {



  //hover or X
  $(domObjects.cross).hover(function () {
    $(this).toggleClass(domObjects.bigCross, true);
    $(domObjects.first).css('font-size', '4em');
  }, function () {
    $(this).toggleClass(domObjects.bigCross, false);
    $(domObjects.first).css('font-size', '0em');
  }
  );

  //hover or O
  $(domObjects.circle).hover(function(){
    $(this).toggleClass(domObjects.bigCircle, true);
    $(domObjects.second).css('font-size', '4em');
  }, function(){
    $(this).toggleClass(domObjects.bigCircle, false);
    $(domObjects.second).css('font-size', '0em');
  }
  );

  //Click X
  $('#X').click(function(){
    $(domObjects.choice).fadeToggle(500);
    $(domObjects.circle).fadeToggle(500);
  });

  //Click O
  $('#O').click(function(){
    $(domObjects.choice).fadeToggle(500);
    $(domObjects.cross).fadeToggle(500);
    setTimeout(()=>$(domObjects.selection).css('justify-content', 'flex-end'),500);
    
  });

})