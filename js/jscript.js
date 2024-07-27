function yescheck() {
  if (document.getElementById("check").checked) {
    document.getElementById("tarea").style.display = "inline-block";
  } else {
    document.getElementById("tarea").style.display = "none";
    document.getElementById("tarea").removeAttribute = "required";
  }
}
document.getElementById("frm").setAttribute("method", "post");
document.getElementById("n").removeAttribute("class");
