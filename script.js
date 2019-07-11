
let selected = false;

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

const moveToMid = (selector) => {
  $(selector).css('grid-column-start', 'choiceS');
  $(selector).css('grid-column-end', 'choiceE');
};


$(function () {

  if(!selected){
    
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
  } 
  //hover or X

  //Click X
  $('#X').click(function(){
    $(domObjects.choice).animate({
      opacity: 0
    },500);
    $(domObjects.circle).animate({
      opacity: 0
    },500);
    setTimeout(()=>{
      moveToMid(this);
    }, 600);
    selected = true;
  });
  
  //Click O
  $('#O').click(function(){
    $(domObjects.choice).animate({
      opacity:0
    }, 500)
    $(domObjects.cross).animate({
      opacity:0
    }, 500)
    setTimeout(()=>{
      moveToMid(this);
    },600);
    selected = true;
  });

})