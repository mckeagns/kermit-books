function submitFunction() {
    alert("You're all signed up!")
}

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};