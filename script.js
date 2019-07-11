const domObjects = {
  cross: '.fas.fa-times.fa-8x',
  circle: '.far.fa-circle.fa-7x',
  first: '#first',
  second: '#second',
  bigCross: 'fa-10x',
  bigCircle: 'fa-9x',
  choice: '.choice',
  selection: '.selection',
  helpText: '#helpText'

}

const moveToMid = (selector) => {
  $(selector).css('grid-column-start', 'choiceS');
  $(selector).css('grid-column-end', 'choiceE');
};

const makeDisappear = (selector, time=500) => {
  $(selector).animate({
    opacity: 0
  }, time);
}

const showHelpText = () => {
  $(domObjects.helpText).animate({
    'font-size': '1.8em'
  },500);
}

const selectX = () => {
  $(domObjects.cross).toggleClass(domObjects.bigCross, true);
  $(domObjects.first).css('font-size', '4em');
}

const unSelectX = () => {
  $(domObjects.cross).toggleClass(domObjects.bigCross, false);
  $(domObjects.first).css('font-size', '0em');
}

const selectO = () => {
  $(domObjects.circle).toggleClass(domObjects.bigCircle, true);
  $(domObjects.second).css('font-size', '4em');
}

const unSelectO = () => {
  $(domObjects.circle).toggleClass(domObjects.bigCircle, false);
  $(domObjects.second).css('font-size', '0em');
}

$(function () {

  $(domObjects.cross).hover(
    selectX, unSelectX
  );

  //hover or O
  $(domObjects.circle).hover(
    selectO, unSelectO
  );

  //hover or X

  //Click X
  $('#X').click(function () {
    makeDisappear(domObjects.choice);
    makeDisappear(domObjects.circle);
    $(this).unbind('mouseenter', selectX);
    $(this).unbind('mouseleave', unSelectX);
    setTimeout(() => {
      moveToMid(this);
      moveToMid(domObjects.first);
      $(domObjects.circle).remove();
      $(domObjects.choice).remove();
    }, 600);
    setTimeout(() => {
      makeDisappear(domObjects.first, 1000);
    }, 500);
    setTimeout(()=>{
      showHelpText()
    },1500);
    setTimeout(()=>{
      makeDisappear(domObjects.helpText);
    },4000);


  });

  //double click X to make it draggable and start playing
  $('#X').dblclick( function() {
    $(this).draggable();
  });

  
  //Click O
  $('#O').click(function () {
    makeDisappear(domObjects.choice);
    makeDisappear(domObjects.cross);
    $(this).unbind('mouseenter', selectO);
    $(this).unbind('mouseleave', unSelectO);
    setTimeout(() => {
      moveToMid(this);
      moveToMid(domObjects.second);
      $(domObjects.cross).remove();
      $(domObjects.choice).remove();
    }, 600);
    setTimeout(() => {
      makeDisappear(domObjects.second, 1000);
    }, 500);
    setTimeout(()=>{
      showHelpText()
    },1500);
    setTimeout(()=>{
      makeDisappear(domObjects.helpText);
    },4000);
  });
  
  //double click O to make it draggabe and start playing
  $('#O').dblclick( function(){
    $(this).draggable();
  })
})