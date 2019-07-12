const domObjects = {
  cross: '.fa-8x',
  circle: '.fa-7x',
  first: '#first',
  second: '#second',
  choice: '.choice',
  selection: '.selection',
  helpText: '#helpText'

};

class ticTacToe {
  constructor(){
    this.gameBoard = [0,0,0,0,0,0,0,0];
    this.activePlayer = 1;
    this.AI = 1;
    this.player = 2;
  }
  setPlayer() { //call when player choose to go first / choose X
    this.AI = 2;
    this.player = 1;
  }
  setBackGroundColor (){
    switch (this.player) {
      case 1:
        return { 'background-color': 'rgba(134, 19, 19, 0.514)' };
      default:
        return { 'background-color': 'rgba(11, 25, 90, 0.596)' };
    }
  }
  switchPlayer (){
    switch (this.activePlayer) {
      case 1:
        this.activePlayer = 2;
        break;
      default:
        this.activePlayer = 1;
    }
  }
  doMove (index, player) {
    this.gameBoard[index] = player;
    return this.gameBoard;
  }
  legalMove (){
    const legalMove = this.gameBoard.map((e, index) => {
      if (e === 0) {
        return index;
      }
    });
    return legalMove.filter(e => e !== undefined);
  }
  inGame () {
    let inGame;
    this.winLoseDraw() === -1 ? inGame = true : inGame = false;
    return inGame;
  }
  zeroCheck (numArr) {
    let noZero = true;
    numArr.forEach(e => {
      if (this.gameBoard[e] === 0) {
        return noZero = false;
      }
    });
    return noZero;
  }
  winLoseDraw () {
    let winFlag = -1; //-1 means in game
    if (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[0] === this.gameBoard[6] && this.zeroCheck([0, 3, 6])) {
      if (this.gameBoard[0] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[1] === this.gameBoard[7] && this.zeroCheck([1, 4, 7])) {
      if (this.gameBoard[1] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
        console.log(this.zeroCheck([1, 4, 7]));
      }
    } else if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[2] === this.gameBoard[8] && this.zeroCheck([2, 5, 8])) {
      if (this.gameBoard[2] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2] && this.zeroCheck([0, 1, 2])) {
      if (this.gameBoard[0] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5] && this.zeroCheck([3, 4, 5])) {
      if (this.gameBoard[3] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8] && this.zeroCheck([6, 7, 8])) {
      if (this.gameBoard[6] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8] && this.zeroCheck([0, 4, 8])) {
      if (this.gameBoard[0] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[6] && this.zeroCheck([2, 4, 6])) {
      if (this.gameBoard[2] === 1) {
        winFlag = 1;
      } else {
        winFlag = 2;
      }
    } else if (this.zeroCheck(this.gameBoard)) {
      winFlag = 0; //draw
    } else {
      return winFlag = -1;
    }
    return winFlag;
  }
}



// const monteCarloTS = {
//   board: this.gameBoard,
//   state: ticTacToe.inGame(),
//   randPlayOutNum: 5000,
//   makeMove: () => {
//     const legalMoves = ticTacToe.legalMove();
//     const moveWinCounts = {};
//     legalMoves.forEach(move => {
//       moveWinCounts[move] = 0;
//       });
    
    
//   },
//   randPlayOut: (move) => {


//   }
// };


//jquery helper functions

let ticTacToeGame = new ticTacToe();

//initiaize game board
const initGameBoard = (game) => {
  for (let i = 0; i < 9; i++) {
    makeDroppable(`#gameBoard${i}`, game);
  }
};

const makeDroppable = (selector, game) => {
  const gameBoardNum = Number(selector.substr(10));
  let player = game.player;
  const cssBGColor = game.setBackGroundColor(player);
  $(selector).droppable({
    drop: () => {
      game.gameBoard[gameBoardNum] = player;
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
//end of jquery helper functions

//jQuery releated functions
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
    ticTacToeGame.setPlayer();

  });

  //double click X to make it draggable and start playing
  $('#X').dblclick(function () {
    $(this).draggable();
    initGameBoard(ticTacToeGame);
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
    initGameBoard(ticTacToeGame);
  });
})
//end of jQuery related functions