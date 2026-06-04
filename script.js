
const photos = [
  "https://share.google/0M2FVbdLOdvrFkj6H",
  "https://share.google/HGkg6xXYkbSFwnJTO",
  "images/photo3.jpg"
];

let current = 0;
const photo = document.getElementById("photo");

function nextPhoto() {
  current = (current + 1) % photos.length;
  photo.src = photos[current];
}

if ("ProximitySensor" in window) {
  try {
    const sensor = new ProximitySensor();
    let lastState = false;

    sensor.addEventListener("reading", () => {
      const near = sensor.distance < sensor.max;

      if (near && !lastState) {
        nextPhoto();
      }

      lastState = near;
    });

    sensor.start();
  } catch (err) {
    console.error(err);
  }
} else {
  console.log("Proximity Sensor API not supported.");
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
