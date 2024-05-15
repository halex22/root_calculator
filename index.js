const btn = document.getElementById("cal-btn");
btn.addEventListener("click", () => {
  const value = parseFloat(document.getElementById("n_input").value);
  const root = parseFloat(document.getElementById("n_root").value);
  const resultSpan = document.getElementById("result");

  const result = Math.pow(value, 1 / root);
  resultSpan.innerText = result;
});
