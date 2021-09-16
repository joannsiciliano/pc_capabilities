const unmuteButton = document.querySelector(".unmute");
const muteButton = document.querySelector(".mute");
const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

unmuteButton.addEventListener("click", () => {
  player.setVolume(1);
});

muteButton.addEventListener("click", () => {
  player.setVolume(0);
});

LottieInteractivity.create({
  mode: "click",
  player: "#volume-lottie",
  actions: [
    {
      visibility: [0, 1],
      type: "play",
      frames: [0, 100],
    },
  ],
});
