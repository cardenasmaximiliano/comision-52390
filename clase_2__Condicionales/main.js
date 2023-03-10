const n = prompt("Ingrese un número del 1 al 31");
const m = prompt("Ingrese un número del 1 al 6");
if (m == 1) {
  if (n < 21) {
    alert("CAPRICORNIO");
  } else if (n >= 21 && n < 32) {
    alert("ACUARIO");
  } else {
    alert("Fuera de rango.");
  }
} else if (m == 2) {
  if (n < 20) {
    alert("ACUARIO");
  } else if (n >= 20 && n < 29) {
    alert("PISCIS");
  } else {
    alert("Fuera de rango.");
  }
} else if (m == 3) {
  if (n < 21) {
    alert("PISCIS");
  } else if (n >= 21 && n < 32) {
    alert("ARIES");
  } else {
    alert("Fuera de rango.");
  }
} else if (m == 4) {
  if (n < 21) {
    alert("ARIES");
  } else if (n >= 21 && n < 31) {
    alert("TAURO");
  } else {
    alert("Fuera de rango.");
  }
} else if (m == 5) {
  if (n < 22) {
    alert("TAURO");
  } else if (n >= 22 && n < 32) {
    alert("GÉMINIS");
  } else {
    alert("Fuera de rango.");
  }
} else if (m == 6) {
  if (n < 22) {
    alert("GÉMINIS");
  } else if (n >= 22 && n < 31) {
    alert("CÁNCER");
  } else {
    alert("Fuera de rango.");
  }
} else {
  alert("Fuera de rango.");
}
