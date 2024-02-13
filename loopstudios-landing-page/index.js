showSidebar = () => {
  var sidebar = document.getElementById("sidebar");
  //   sidebar.style.display = "block";
  sidebar.style.transform = "translateX(100vw)";
};
function hideSidebar() {
  var sidebar = document.getElementById("sidebar");
//   sidebar.style.display = "none";
sidebar.style.transform = "translateX(-100vw)";
}
