import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBlock.forEach((item) => { item.classList.remove('active')});
  playerBtn.forEach((item) => { item.classList.remove('active')});
}

// console.log(playerBtn);
// console.log(playerBlock);

playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
  });
});


radioPlayerInit();
musicPlayerInit();
videoPlayerInit();

