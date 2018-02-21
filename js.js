const CATNAME = [
  "Stan",
  "Rubber",
  "Mittens",
  "Clarys",
  "Dag'Arhagnul"
];

const CATPHOTO = [
  "https://i.imgur.com/FmbuPNe.jpg",
  "https://i.imgur.com/a8nOUpr.jpg",
  "https://i.imgur.com/79C37Sc.jpg",
  "https://i.imgur.com/XDcn4Gj.jpg",
  "https://i.imgur.com/DNAFpLM.jpg"
];


for (var i = 0; i < CATNAME.length; i++) {
  var list = document.createElement("li");
  var image = document.createElement('img');
  var elem = document.createElement('div');
  var wrapper = document.getElementById("wrapper");

  list.innerHTML = `${CATNAME[i]}`;
  list.id = i + 1;

  image.src = CATPHOTO[i];
  image.className = "hd"
  image.id = "catImg" + (i + 1);
  image.style.display = "none";

  elem.textContent = 0;
  elem.className = "hd";
  elem.id = "catCount" + (i + 1);
  elem.style.display = "none";

  wrapper.append(elem, image);
  $("#sidebar ol").append(list);

  list.addEventListener("click", (function(c) {
    return function() {
      c = parseInt(c);
      //document.getElementsByTagName("img").style.visibility = "hidden";
      var hideAll = document.getElementsByClassName("hd");
      for (var i = 0; i < hideAll.length; i++) {
        hideAll[i].style.display = "none";;
      }
      document.getElementById(`catCount${c}`).style.display = "block";
      document.getElementById(`catImg${c}`).style.display = "block";
    }
  })(list.id));


  image.addEventListener("click", (function(x) {
    return function() {
      x.innerHTML = +x.innerHTML + 1
    }
  })(elem));
}
