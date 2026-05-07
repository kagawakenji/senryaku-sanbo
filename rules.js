function getStrategy(spend, playstyle) {

  if (spend === "F2P" && playstyle === "PvP") {
    return "F2P Raider: Focus economy + cheap troops + timing attacks";
  }

  if (spend === "Whale") {
    return "Whale Commander: Focus fast growth + heavy PvP";
  }

  return "Balanced Player: Focus steady progression";
}
