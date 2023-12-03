// Load navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const menuContainer = document.getElementById("navbar__full-menu-mobile");

  hamburgerMenu.addEventListener("click", function () {
    menuContainer.classList.toggle("u-hide");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("reviewsCardContainer");
  const container2 = document.getElementById("reviewsCardContainer2");
  const container3 = document.getElementById("reviewsCardContainer3");
  const firstCard = container.children[0];

  for (var i = 0; i < 100; i++) {
    const clone = firstCard.cloneNode(true);
    container.insertAdjacentElement("afterbegin", clone);
  }

  for (var i = 0; i < 100; i++) {
    const clone = firstCard.cloneNode(true);
    container2.insertAdjacentElement("afterbegin", clone);
  }

  for (var i = 0; i < 100; i++) {
    const clone = firstCard.cloneNode(true);
    container3.insertAdjacentElement("afterbegin", clone);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("reviewsCardContainer");
  const container2 = document.getElementById("reviewsCardContainer2");
  const container3 = document.getElementById("reviewsCardContainer3");

  // Animate the cards using CSS animation
  const animationDuration = 1500;

  container.style.animation = `slideRight ${animationDuration}s linear infinite`;
  container2.style.animation = `slideLeft ${animationDuration}s linear infinite`;
  container3.style.animation = `slideRight ${animationDuration}s linear infinite`;

  function stopAnimation(container) {
    container.style.animationPlayState = "paused";
  }

  function resumeAnimation(container) {
    container.style.animationPlayState = "running";
  }

  container.addEventListener("mouseenter", function () {
    stopAnimation(container);
  });

  container.addEventListener("mouseleave", function () {
    resumeAnimation(container);
  });

  container2.addEventListener("mouseenter", function () {
    stopAnimation(container2);
  });

  container2.addEventListener("mouseleave", function () {
    resumeAnimation(container2);
  });

  container3.addEventListener("mouseenter", function () {
    stopAnimation(container3);
  });

  container3.addEventListener("mouseleave", function () {
    resumeAnimation(container3);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const card0 = document.getElementById("faq__card0");
  const card1 = document.getElementById("faq__card1");
  const card2 = document.getElementById("faq__card2");
  const card3 = document.getElementById("faq__card3");
  const card4 = document.getElementById("faq__card4");
  const card5 = document.getElementById("faq__card5");
  const textElement0 = document.getElementById("faq__card-text0");
  const textElement1 = document.getElementById("faq__card-text1");
  const textElement2 = document.getElementById("faq__card-text2");
  const textElement3 = document.getElementById("faq__card-text3");
  const textElement4 = document.getElementById("faq__card-text4");
  const textElement5 = document.getElementById("faq__card-text5");
  const button1 = document.getElementById("faq__card-icon1");
  const button2 = document.getElementById("faq__card-icon2");
  const button3 = document.getElementById("faq__card-icon3");
  const button4 = document.getElementById("faq__card-icon4");
  const button5 = document.getElementById("faq__card-icon5");
  const button0 = document.getElementById("faq__card-icon0");

  card0.addEventListener("click", function (e) {
    card0.classList.add("faq__card-text-transition");
    textElement0.classList.toggle("u-hide");
    if (button0.innerHTML === "+") {
      button0.innerHTML = "&#8722;";
    } else {
      button0.innerHTML = "+";
    }
    textElement0.classList.add("faq__card-text-transition");
  });

  card2.addEventListener("click", function (e) {
    card2.classList.add("faq__card-text-transition");
    textElement2.classList.toggle("u-hide");
    if (button2.innerHTML === "+") {
      button2.innerHTML = "&#8722;";
    } else {
      button2.innerHTML = "+";
    }
    textElement2.classList.add("faq__card-text-transition");
  });

  card3.addEventListener("click", function (e) {
    card3.classList.add("faq__card-text-transition");
    textElement3.classList.toggle("u-hide");
    if (button3.innerHTML === "+") {
      button3.innerHTML = "&#8722;";
    } else {
      button3.innerHTML = "+";
    }
    textElement3.classList.add("faq__card-text-transition");
  });

  card4.addEventListener("click", function (e) {
    card4.classList.add("faq__card-text-transition");
    if (button4.innerHTML === "+") {
      button4.innerHTML = "&#8722;";
    } else {
      button4.innerHTML = "+";
    }
    textElement4.classList.toggle("u-hide");
    textElement4.classList.add("faq__card-text-transition");
  });

  card1.addEventListener("click", function (e) {
    if (button1.innerHTML === "+") {
      button1.innerHTML = "&#8722;";
    } else {
      button1.innerHTML = "+";
    }
    card1.classList.add("faq__card-text-transition");
    textElement1.classList.toggle("u-hide");
    textElement1.classList.add("faq__card-text-transition");
  });

  card5.addEventListener("click", function (e) {
    if (button5.innerHTML === "+") {
      button5.innerHTML = "&#8722;";
    } else {
      button5.innerHTML = "+";
    }
    card5.classList.add("faq__card-text-transition");
    textElement5.classList.toggle("u-hide");
    textElement5.classList.add("faq__card-text-transition");
  });
});
