// function app() {}
const alert = document.querySelector("#alert");
const alertTrigger = document.querySelector("#bell");
const menu = document.querySelector("#fp");
const menuTrigger = document.querySelector("#profile");
const planSelect = document.querySelector("#planSelect");
const closeBtnTrigger = document.querySelector("#close");
const openIcon = document.querySelector("#openIcon");
const setupContainer = document.querySelector("#container");

// const progressBar = document.querySelector("#progressBar");
// const checkboxes = document.querySelectorAll(".inputt");
// const selectedCount = document.querySelector("#selectedCount");
// const totalCheckboxes = checkboxes.length;

// const selectedItems = document.querySelectorAll(".inputt:checked").length;
// const progress = (selectedItems / totalCheckboxes) * 100;
// progressBar.style.width = progress + "%";

// selectedCount.textContent = ` ${selectedItems} / ${totalCheckboxes}  completed`;

const cardToggle = document.querySelector("#cardToggle");
const cardToggle1 = document.querySelector("#cardToggle1");
const cardToggle2 = document.querySelector("#cardToggle2");
const cardToggle3 = document.querySelector("#cardToggle3");
const cardToggle4 = document.querySelector("#cardToggle4");

const disappear = document.getElementById("disappear");
const go = document.getElementById("go");
const bgClr = document.getElementById("bg-clr");

const disappear1 = document.getElementById("disappear1");
const go1 = document.getElementById("go1");
const bgClr1 = document.getElementById("bg-clr1");

const disappear2 = document.getElementById("disappear2");
const go2 = document.getElementById("go2");
const bgClr2 = document.getElementById("bg-clr2");

const disappear3 = document.getElementById("disappear3");
const go3 = document.getElementById("go3");
const bgClr3 = document.getElementById("bg-clr3");

const disappear4 = document.getElementById("disappear4");
const go4 = document.getElementById("go4");
const bgClr4 = document.getElementById("bg-clr4");

alertTrigger.addEventListener("click", () => {
  if (fp.style.display == "flex") {
    fp.style.display = "none";
  }

  if (alert.style.display == "none") {
    alert.style.display = "flex";
  } else {
    alert.style.display = "none";
  }
});

menuTrigger.addEventListener("click", () => {
  const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";
  const allMenuItems = menu.querySelectorAll('[role="profilemenuitem"]');
  console.log(allMenuItems.item(0));
  if (alert.style.display == "flex") {
    alert.style.display = "none";
  }
  if (fp.style.display == "none") {
    fp.style.display = "flex";
  } else {
    fp.style.display = "none";
  }

  if (isExpanded) {
    menuTrigger.ariaExpanded = "false";
  } else {
    menuTrigger.ariaExpanded = "true";
    allMenuItems.item(0).focus();
  }
});

closeBtnTrigger.addEventListener("click", () => {
  if (planSelect.style.display == "none") {
    planSelect.style.display = "flex";
  } else {
    planSelect.style.display = "none";
  }
});

openIcon.addEventListener("click", () => {
  if (setupContainer.style.display == "none") {
    setupContainer.style.display = "flex";
    openIcon.style.transform = "rotate(180deg)";
  } else {
    setupContainer.style.display = "none";
    openIcon.style.transform = "rotate(360deg)";
  }
});

cardToggle.addEventListener("click", () => {
  if (disappear.style.display === "none") {
    disappear.style.display = "flex";
    go.style.display = "flex";
    bgClr.style.backgroundColor = "#f3f3f3";
  }
  go1.style.display = "none";
  disappear1.style.display = "none";
  bgClr1.style.backgroundColor = "#ffffff";
  go2.style.display = "none";
  disappear2.style.display = "none";
  bgClr2.style.backgroundColor = "#ffffff";
  go3.style.display = "none";
  disappear3.style.display = "none";
  bgClr3.style.backgroundColor = "#ffffff";
  go4.style.display = "none";
  disappear4.style.display = "none";
  bgClr4.style.backgroundColor = "#ffffff";
});

cardToggle1.addEventListener("click", () => {
  if (disappear1.style.display === "none") {
    disappear1.style.display = "flex";
    go1.style.display = "flex";
    bgClr1.style.backgroundColor = "#f3f3f3";
  }

  go.style.display = "none";
  disappear.style.display = "none";
  bgClr.style.backgroundColor = "#ffffff";
  go2.style.display = "none";
  disappear2.style.display = "none";
  bgClr2.style.backgroundColor = "#ffffff";
  go3.style.display = "none";
  disappear3.style.display = "none";
  bgClr3.style.backgroundColor = "#ffffff";
  go4.style.display = "none";
  disappear4.style.display = "none";
  bgClr4.style.backgroundColor = "#ffffff";
});

cardToggle2.addEventListener("click", () => {
  if (disappear2.style.display === "none") {
    disappear2.style.display = "flex";
    go2.style.display = "flex";
    bgClr2.style.backgroundColor = "#f3f3f3";
  }

  go.style.display = "none";
  disappear.style.display = "none";
  bgClr.style.backgroundColor = "#ffffff";
  go1.style.display = "none";
  disappear1.style.display = "none";
  bgClr1.style.backgroundColor = "#ffffff";

  go3.style.display = "none";
  disappear3.style.display = "none";
  bgClr3.style.backgroundColor = "#ffffff";
  go4.style.display = "none";
  disappear4.style.display = "none";
  bgClr4.style.backgroundColor = "#ffffff";
});

cardToggle3.addEventListener("click", () => {
  if (disappear3.style.display === "none") {
    disappear3.style.display = "flex";
    go3.style.display = "flex";
    bgClr3.style.backgroundColor = "#f3f3f3";
  }

  go.style.display = "none";
  disappear.style.display = "none";
  bgClr.style.backgroundColor = "#ffffff";
  go1.style.display = "none";
  disappear1.style.display = "none";
  bgClr1.style.backgroundColor = "#ffffff";
  go2.style.display = "none";
  disappear2.style.display = "none";
  bgClr2.style.backgroundColor = "#ffffff";
  go4.style.display = "none";
  disappear4.style.display = "none";
  bgClr4.style.backgroundColor = "#ffffff";
});

cardToggle4.addEventListener("click", () => {
  if (disappear4.style.display === "none") {
    disappear4.style.display = "flex";
    go4.style.display = "flex";
    bgClr4.style.backgroundColor = "#f3f3f3";
  }

  go.style.display = "none";
  disappear.style.display = "none";
  bgClr.style.backgroundColor = "#ffffff";
  go1.style.display = "none";
  disappear1.style.display = "none";
  bgClr1.style.backgroundColor = "#ffffff";
  go2.style.display = "none";
  disappear2.style.display = "none";
  bgClr2.style.backgroundColor = "#ffffff";
  go3.style.display = "none";
  disappear3.style.display = "none";
  bgClr3.style.backgroundColor = "#ffffff";
});

document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progressBar");
  const checkboxes = document.querySelectorAll(".inputt");
  const selectedCount = document.getElementById("selectedCount");

  const totalCheckboxes = checkboxes.length;

  function updateProgressBar() {
    const selectedItems = document.querySelectorAll(".inputt:checked").length;
    const progress = (selectedItems / totalCheckboxes) * 100;
    progressBar.style.width = progress + "%";

    selectedCount.textContent = ` ${selectedItems} / ${totalCheckboxes}  completed`;

    if (selectedItems === totalCheckboxes) {
      progressBar.style.width = "100%";
    }
  }

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateProgressBar);
  });

  updateProgressBar();
});
