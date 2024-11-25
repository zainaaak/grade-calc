document.getElementById("btn-cnvrt").addEventListener("click", calcCelcius);

function calcCelcius() {
  //input
  let tempF = +document.getElementById("temp-inpt").value;

  //process
  let tempC = (tempF - 32) * 0.56;
  tempC = tempC.toFixed(0);

  //output
  document.getElementById("celc-span").innerHTML = tempC;
  document.getElementById("btn-cnvrt").style.backgroundColor = "#26d978";
}
