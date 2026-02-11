const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const mainGif = document.getElementById("main-gif");
const mainHeader = document.getElementById("main-header");
const buttonsContainer = document.getElementById("main-buttons-container");
const bodyElement = document.querySelector("body");
let counter = 0;
const texts = [
    "Are u sure?",
    "Really sure?",
    "Thing again!",
    "Wrong button",
    `Try "Yes" instead"`,
    "My feelings :(",
    "I'm crying rn",
    "Last chance!"
];
let yesButtonFontSize = 24, noButtonFontSize = 24;

bodyElement.addEventListener("mousemove", (e) => {
    // console.log(e);

    if (Math.random() > 0.4) return;

    const xPos = e.clientX;
    const yPos = e.clientY;

    const spanElement = document.createElement("span");
    spanElement.classList.add("cursor-heart");

    spanElement.style.left = xPos + 'px';
    spanElement.style.top = yPos + 'px';

    const size = Math.random() * 80;

    spanElement.style.width = size * 1.1 + 'px';
    spanElement.style.height = size + 'px';

    bodyElement.appendChild(spanElement);

    setTimeout(() => {
        spanElement.remove();
    }, 3000)
})

yesButton.addEventListener('click',() => {
    setInterval(function() {
        const screenHeight = document.documentElement.scrollHeight;
        const screenWidth = document.documentElement.scrollWidth;
        const startLeft = getRandomArbitrary(0, screenWidth);
        const timeRun = getRandomArbitrary(4000, 6000);
        const opacityR = Math.random() * (1 - 0.2) + 0.2;
        const sizeR = getRandomArbitrary(5, 20);
        const endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
    
        const snow = document.createElement('span');
        snow.classList.add('snow-item', 'fa', 'fa-heart');
        Object.assign(snow.style, {
          position: 'absolute',
          zIndex: '1',
          color: '#ff0000',
          display: 'block',
          top: '0px',
          left: `${startLeft}px`,
          opacity: opacityR,
          fontSize: `${sizeR}px`
        });
    
        document.body.appendChild(snow);
    
        const startTime = performance.now();
    
        function animate(time) {
          const elapsed = time - startTime;
          const progress = Math.min(elapsed / timeRun, 1);
    
          snow.style.top = `${progress * (screenHeight - sizeR)}px`;
          snow.style.left = `${startLeft + (endLeft - startLeft) * progress}px`;
    
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            snow.style.transition = 'opacity 0.2s';
            snow.style.opacity = '0';
            setTimeout(() => snow.remove(), 200);
          }
        }
    
        requestAnimationFrame(animate);
    
      }, 50);

    mainHeader.innerHTML = "Yay! <br> Kocham Cię 💖";
    //mainGif.src = "https://media.tenor.com/3WxG2VePWSUAAAAi/bubududu-panda.gif";
    mainGif.src = "https://media.tenor.com/5aiUIR93EfsAAAAi/happy-sweetest.gif";
    // https://media.tenor.com/5aiUIR93EfsAAAAi/happy-sweetest.gif
    yesButton.style.display = "none";
    noButton.style.display = "none";
    buttonsContainer.innerHTML = "<h1>Twój Łuki!</h1>"

});

noButton.addEventListener('click', () => {
    if(counter < texts.length) {
        if(counter == 3)
            mainGif.src = "https://media.tenor.com/rwZ1KmV8ZAoAAAAi/bubu-dudu-sseeyall.gif";
        if(counter == 6)
            mainGif.src = "https://media.tenor.com/QOzMqPvW8PUAAAAi/love-you.gif";

        noButton.innerHTML = texts[counter];
        noButton.style.display = "content";
        counter++;
        yesButton.style.fontSize = `${yesButtonFontSize + 4}px`
        yesButtonFontSize = yesButtonFontSize + 15;
        noButton.style.fontSize = `${noButtonFontSize - 2}px`
        noButtonFontSize = noButtonFontSize - 2;
    }

    if(counter == 8) {
        noButton.style.position = "absolute";
        noButton.style.top = `${noButton.offsetTop}px`;
        noButton.style.left = `${noButton.offsetLeft}px`;
        noButton.style.cursor = "none";
        noButton.addEventListener('mouseover', () => {
            const maxX = window.innerWidth - noButton.offsetWidth;
            const maxY = window.innerHeight - noButton.offsetHeight;
        
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
        
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
          });
    }

});

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}