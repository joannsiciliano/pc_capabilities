const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
});
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
