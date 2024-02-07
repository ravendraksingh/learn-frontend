function showListItem(id) {
  var listItem = document.getElementById(id);
  var iconMinus = listItem.getElementsByClassName("icon-minus");
  var iconPlus = listItem.getElementsByClassName("icon-plus");
  iconMinus[0].classList.remove("hide");
  iconMinus[0].classList.add("show");
  iconPlus[0].classList.add("hide");
  var paragraph = listItem.getElementsByClassName("para-text");
  paragraph[0].classList.remove("hide");
  paragraph[0].classList.add("show");
}

function hideListItem(id) {
  var listItem = document.getElementById(id);
  var iconMinus = listItem.getElementsByClassName("icon-minus");
  var iconPlus = listItem.getElementsByClassName("icon-plus");
  console.log(iconPlus);
  iconMinus[0].classList.add("hide");
  iconPlus[0].classList.remove("hide");
  iconPlus[0].classList.add("show");
  var paragraph = listItem.getElementsByClassName("para-text");
  paragraph[0].classList.add("hide");
}

function showFirstListItem() {
  showListItem(1);
}

function showIconClicked(id) {
  console.log("showIconClicked", id);
  showListItem(id);
}

function hideIconClicked(id) {
  console.log("hideIconClicked", id);
  hideListItem(id);
}
