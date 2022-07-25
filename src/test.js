const string = `.skin * {
  margin: 0;
  padding: 0;
}
.skin * {
  box-sizing: border-box;
}
.skin *::before {
  box-sizing: border-box;
}
.skin *::after {
  box-sizing: border-box;
}

.skin {
  background-color: yellow;
  min-height: 50vh;
  position: relative;
}
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 135px;
  margin-left: -10px;
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: shake 300ms infinite linear;
}
.circular_arc {
  position: absolute;
  width: 20px;
  height: 8px;
  top: -15px;
  left: -10px;
  background-color: black;
  border-radius: 50%;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid black;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: 3px;
  left: 10px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -10px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  width: 100px;
  height: 30px;
  border-top: transparent;
  background-color: yellow;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 30px;
  border-right: transparent;
  transform: rotate(-20deg);
}
.mouth .up .lip.right {
  border-radius: 0 0 30px 0;
  border-left: transparent;
  transform: rotate(20deg);
  position: absolute;
  left: 100px;
  top: 0;
}
.mouth .down {
  position: absolute;
  width: 100%;
  height: 180px;
  top: 0px;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background-color: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  height: 300px;
  width: 200px;
  position: absolute;
  bottom: -160px;
  left: 50%;
  margin-left: -100px;
  background-color: #ff485f;
  border-radius: 100px;
  border: 3px solid black;
}
.cheek {
  position: absolute;
  height: 80px;
  width: 80px;
  left: 50%;
  top: 210px;
  margin-left: -40px;
  border: 3px solid black;
  background-color: red;
  border-radius: 50%;
}
.cheek > img {
  position: absolute;
  top: 50%;
  left: 50%;
}
.cheek.left {
  transform: translateX(-150px);
}
.cheek.left > img {
  transform-origin: 0 0;
  transform: rotateY(180deg);
}
.cheek.right {
  transform: translateX(150px);
}
`;

const player = {
  n: 1,
  time: 50,
  id: undefined,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause/play/slow/normal/fast字符串
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 20;
    player.play();
  },
};

player.init();
