const buttons = document.querySelectorAll(".link-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const linkName = this.getAttribute("data-name");
    console.log("Link diklik:", linkName);
  });
});