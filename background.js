const images = ["space_one.jpg", "space_two.jpg", "space_three.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `url(img/${chosenImage})`;
document.body.style.backgroundImage = bgImage;
