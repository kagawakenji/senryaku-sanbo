function startWizard() {

  let spend = prompt("Spend level? (F2P / Low / Whale)");
  let playstyle = prompt("Playstyle? (PvP / PvE / Balanced)");

  let result = getStrategy(spend, playstyle);

  document.getElementById("result").innerText = result;
}
