let count = 0;
let turn = 'X';
let havewinner = false;
const combinations =[   [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
document.querySelector("#restart").addEventListener("click", () => {
  window.location.reload();
});

const allCellElement = document.querySelectorAll('[data-cell]');
allCellElement.forEach(cur => {
    cur.addEventListener('click', handleClick, {once: true});
});

function handleClick(e){
    if(havewinner === false){
        const cell = e.target;
        if (turn === "X") {
          cell.innerHTML = "X";
          turn = "O";
        } else if (turn === "O") {
          cell.innerHTML = "O";
          turn = "X";
        }
        checkWin();
    }
}

const checkWin = () => {
    if(havewinner === false){
        for (let i = 0; i < combinations.length; i++) {
          const [a, b, c] = combinations[i];
           if(allCellElement[a].innerHTML !== "" && allCellElement[b].innerHTML !== ""
            && allCellElement[c].innerHTML !== ""){
              if (allCellElement[a].innerHTML === allCellElement[b].innerHTML &&
                  allCellElement[b].innerHTML === allCellElement[c].innerHTML){
                      document.querySelector("[data-win-msg").innerHTML = 
                      `Winner is ${allCellElement[a].innerHTML}`;
                      havewinner = true;
                }
            }
        }
    }
    count++;
    checkDraw();
}

const checkDraw = () => {
    if(count === 9 && !havewinner) {
      document.querySelector("[data-win-msg").innerHTML = `Draw`;
    }
}
