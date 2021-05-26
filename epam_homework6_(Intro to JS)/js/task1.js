// Your code goes here

function qrt() {
  const a = Number(prompt(`enter 'a' value`));
  const b = Number(prompt(`enter 'b' value`));
  const c = Number(prompt(`enter 'c' value`));
  let d = b * b - 4 * a * c;
  if (isNaN(d)) {
    alert("invalid input data");
  } else if (d === 0) {
    const x = -b / (2 * a);
    alert(`x= ${x}`);
  } else if (d > 0) {
    const x1 = ((-b + Math.sqrt(d)) / 2) * a;
    const x2 = ((-b - Math.sqrt(d)) / 2) * a;
    alert(`x1 = ${x1}, x2 = ${x2}`);
  } else if (d < 0) {
    alert("the equation has no real roots");
  }
}

qrt();
