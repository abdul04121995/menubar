const liEls = document.querySelectorAll("li");

liEls.forEach((li) => {
  li.addEventListener("click", function () {
    liEls.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});
