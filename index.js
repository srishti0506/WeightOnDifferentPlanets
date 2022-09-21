function mw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var mercury = weight * 0.37 ;
    if (document.getElementById("mw").innerHTML === "") {
      document.getElementById("mw").innerHTML =
        "Weight on Mercury is:" + mercury.toFixed(2);
    } else {
      document.getElementById("mw").innerHTML = "";
    }
  }
}
function vw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var venus = weight * 0.91 ;
    if (document.getElementById("vw").innerHTML === "") {
      document.getElementById("vw").innerHTML =
        "Weight on Venus is:" + venus.toFixed(2);
    } else {
      document.getElementById("vw").innerHTML = "";
    }
  }
}
function ew() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var earth = weight * 1;
    if (document.getElementById("tmw").innerHTML === "") {
      document.getElementById("tmw").innerHTML = "Weight on Earth is:" + earth;
    } else {
      document.getElementById("tmw").innerHTML = "";
    }
  }
}

function marsw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var mars = weight * 0.38;
    if (document.getElementById("msw").innerHTML === "") {
      document.getElementById("msw").innerHTML =
        "Weight on Mars is:" + mars.toFixed(2);
    } else {
      document.getElementById("msw").innerHTML = "";
    }
  }
}

function jw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var jupiter = weight * 2.34;
    if (document.getElementById("jpw").innerHTML === "") {
      document.getElementById("jpw").innerHTML =
        "Weight on Jupiter is:" + jupiter.toFixed(2);
    } else {
      document.getElementById("jpw").innerHTML = "";
    }
  }
}

function sw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var saturn = weight * 1.06;
    if (document.getElementById("sw").innerHTML === "") {
      document.getElementById("sw").innerHTML =
        "Weight on Saturn is:" + saturn.toFixed(2);
    } else {
      document.getElementById("sw").innerHTML = "";
    }
  }
}

function uw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var uranus = weight * 0.92;
    if (document.getElementById("ur").innerHTML === "") {
      document.getElementById("ur").innerHTML =
        "Weight on Uranus is:" + uranus.toFixed(2);
    } else {
      document.getElementById("ur").innerHTML = "";
    }
  }
}

function nw() {
  var weight = document.getElementById("box1").value;
  if (weight === "") {
    alert("Please enter your weight.");
  } else {
    var neptune = weight * 1.12;
    if (document.getElementById("ne").innerHTML === "") {
      document.getElementById("ne").innerHTML =
        "Weight on Neptune is:" + neptune.toFixed(2);
    } else {
      document.getElementById("ne").innerHTML = "";
    }
  }
}

// function pw(){
//     var weight = document.getElementById("box1").value;
//     if(weight===""){
//         alert("Please enter your weight.")
//     }else{
//     var pluto = weight * 0.06;
//     if(document.getElementById("pu").innerHTML===""){
//     document.getElementById("pu").innerHTML="your weight is:"+pluto.toFixed(2);
// }else{
//     document.getElementById("pu").innerHTML=""
// }
// }}
