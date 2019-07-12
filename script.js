const domObjects = {
  cross: '.fa-8x',
  circle: '.fa-7x',
  first: '#first',
  second: '#second',
  choice: '.choice',
  selection: '.selection',
  helpText: '#helpText'

};

let ticTacToe = {
  gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  activePlayer: 1,
  aI: 1, //default - bot goes first, bot has X
  player: 2, //default - player goes second, player has O
  setPlayer: () => { //call when player choose to go first / choose X
    ticTacToe.aI = 2;
    ticTacToe.player = 1;
    ticTacToe.activePlayer = 2;
  },
  setBackGroundColor: (player) => {
    switch (player) {
      case 1:
        return { 'background-color': 'rgba(134, 19, 19, 0.514)' };
      default:
        return { 'background-color': 'rgba(11, 25, 90, 0.596)' };
    }
  },
  switchPlayer: () => {
    switch(ticTacToe.activePlayer){
      case 1:
        ticTacToe.activePlayer = 2;
        break;
      default:
        ticTacToe.activePlayer = 1;
    }
  },
  doMove: (index, player) => {
    ticTacToe.gameBoard[index] = player;
    return ticTacToe.gameBoard;
  },
  legalMove: () => {
    const legalMove = ticTacToe.gameBoard.map((e,index) => {
      if (e === 0){
        return index;
      }
    });
    return legalMove.filter(e => e!== undefined);
  }

};

//initiaize game board
const initGameBoard = () => {
  for (let i = 0; i < 9; i++) {
    makeDroppable(`#gameBoard${i}`);
  }
};


const monteCarloTS = (game, randPlayOutNum) => {

}

const makeDroppable = (selector) => {
  const gameBoardNum = Number(selector.substr(10));
  let player = ticTacToe.player;
  const cssBGColor = ticTacToe.setBackGroundColor(player);
  $(selector).droppable({
    drop: () => {
      ticTacToe.gameBoard[gameBoardNum] = player;
      $(selector).animate(cssBGColor, 300);
    }
  });
};

const moveToMid = (selector, area = 'choice') => {
  $(selector).css({
    'grid-area': area,
    'padding-left': 0,
    'padding-right': 0
  });
};

const makeDisappear = (selector, time = 500) => {
  $(selector).animate({
    opacity: 0
  }, time);
}

const showHelpText = () => {
  $(domObjects.helpText).animate({
    'font-size': '1.8em'
  }, 500);
}

const resize = (selector, size) => {
  $(selector).animate({
    'font-size': size
  }, 500);
}



const selectX = () => {
  resize(domObjects.cross, '10em');
  resize(domObjects.first, '4em');
}

const unSelectX = () => {
  resize(domObjects.cross, '8em');
  resize(domObjects.first, '0em');
}

const selectO = () => {
  resize(domObjects.circle, '9em');
  resize(domObjects.second, '4em');
}

const unSelectO = () => {
  resize(domObjects.circle, '7em');
  resize(domObjects.second, '0em');
}

$(function () {

  //hover on X
  $(domObjects.cross).hover(
    selectX, unSelectX
  );

  //hover on O
  $(domObjects.circle).hover(
    selectO, unSelectO
  );


  //Click X
  $('#X').click(function () {
    makeDisappear(domObjects.choice);
    makeDisappear(domObjects.circle);
    $(this).unbind('mouseenter', selectX);
    $(this).unbind('mouseleave', unSelectX);
    setTimeout(() => {
      moveToMid(this);
      moveToMid(domObjects.first, 'help');
      $(domObjects.circle).remove();
      $(domObjects.choice).remove();
    }, 600);
    setTimeout(() => {
      makeDisappear(domObjects.first, 1000);
    }, 500);
    setTimeout(() => {
      showHelpText()
    }, 1500);
    setTimeout(() => {
      makeDisappear(domObjects.helpText);
    }, 4000);
    ticTacToe.setPlayer();

  });

  //double click X to make it draggable and start playing
  $('#X').dblclick(function () {
    $(this).draggable();
    initGameBoard();
  });


  //Click O
  $('#O').click(function () {
    makeDisappear(domObjects.choice);
    makeDisappear(domObjects.cross);
    $(this).unbind('mouseenter', selectO);
    $(this).unbind('mouseleave', unSelectO);
    setTimeout(() => {
      moveToMid(this);
      moveToMid(domObjects.second, 'help');
      $(domObjects.cross).remove();
      $(domObjects.choice).remove();
    }, 600);
    setTimeout(() => {
      makeDisappear(domObjects.second, 1000);
    }, 500);
    setTimeout(() => {
      showHelpText()
    }, 1500);
    setTimeout(() => {
      makeDisappear(domObjects.helpText);
    }, 4000);

  });

  //double click O to make it draggabe and start playing
  $('#O').dblclick(function () {
    $(this).draggable();
    initGameBoard();
  });



})