const data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    img: "url('./images/desktop-image-hero-1.jpg')",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    img: "url('./images/desktop-image-hero-2.jpg')",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    img: "url('./images/desktop-image-hero-3.jpg')",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function initialize() {
  var d = data[1];
  console.log(d);
  var e = document.getElementById("dataIndex");
  e.value = 0;
}

function updateIndex(incrOrDecr) {
  var curIndex = parseInt(document.getElementById("dataIndex").value);
  console.log("index", curIndex);
  if (incrOrDecr === "incr") {
    curIndex = curIndex + 1;
    if (curIndex > data.length - 1) curIndex = 0;
  } else {
    curIndex = curIndex - 1;
    if (curIndex === -1) curIndex = data.length - 1;
  }
  document.getElementById("dataIndex").value = curIndex;
  document.getElementById("upper-box-left-id").style.backgroundImage =
    data[curIndex].img;
  document.getElementById("ubox-text-header").innerHTML = data[curIndex].title;
  document.getElementById("ubox-text-para").innerHTML = data[curIndex].text;
}
