const links = document.querySelectorAll(".show-text");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = link.getAttribute("data-target");
    const message = document.getElementById(targetId);

    if (message.classList.contains("hide-text")) {
      message.classList.remove("hide-text");
    }
  });
});

const changeDesignBtn = document.getElementById("change-design-btn");
const body = document.body;

changeDesignBtn.addEventListener("click", function () {
  body.classList.add("newDesign");

  changeDesignBtn.disabled = true;
  changeDesignBtn.textContent = "Design";
});
