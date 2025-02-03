function moveButton() {
  const noButton = document.getElementById("noButton");
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function acceptValentine() {
  alert("Yay! You've made me the happiest person alive! 💖");
  // You can add more actions here, like redirecting to another page or showing a special message.
}
