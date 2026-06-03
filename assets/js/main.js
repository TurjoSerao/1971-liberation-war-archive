const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

// Toggle sidebar
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  // Change icon (hamburger ↔ close)
  menuToggle.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars-staggered"></i>';
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");

  menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
});

// Close when clicking menu links
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");

    menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
  });
});

// timeline section
const timelineData = {
  march7: {
    date: "7 March 1971",
    title: "Historic March 7 Speech",
    image: "assets/images/march_7.jfif",
    description:
      "Sheikh Mujibur Rahman delivered his historic speech at the Racecourse Ground in Dhaka, inspiring the nation to prepare for the struggle for independence.",
  },

  march25: {
    date: "25 March 1971",
    title: "Operation Searchlight",
    image: "assets/images/march-25.jfif",
    description:
      "The Pakistan Army launched Operation Searchlight, beginning a brutal military crackdown across East Pakistan.",
  },

  march26: {
    date: "26 March 1971",
    title: "Declaration of Independence",
    image: "assets/images/march-26.webp",
    description:
      "Bangladesh officially declared independence, marking the beginning of the Liberation War.",
  },

  april17: {
    date: "17 April 1971",
    title: "Mujibnagar Government",
    image: "assets/images/april-17.webp",
    description:
      "The provisional Government of Bangladesh was formally established at Mujibnagar.",
  },

  dec16: {
    date: "16 December 1971",
    title: "Victory Day",
    image: "assets/images/december-17.jfif",
    description:
      "Pakistani forces surrendered in Dhaka, bringing the Liberation War to a victorious conclusion.",
  },
};

const timelineButtons = document.querySelectorAll(".timeline-btn");

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const event = button.dataset.event;
    const data = timelineData[event];

    document.getElementById("timelineDate").textContent = data.date;

    document.getElementById("timelineTitle").textContent = data.title;

    document.getElementById("timelineDescription").textContent =
      data.description;

    document.getElementById("timelineImage").src = data.image;

    document.querySelector(".timeline-btn.active").classList.remove("active");

    button.classList.add("active");
  });
});
