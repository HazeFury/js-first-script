let order = "Récapitulatif : ";
let completedOrder = false;

while (completedOrder === false) {
  let beverage = parseInt(prompt("1) thé / 2) café ?"));
  // ---------------------------
  if (beverage === 1) {
    order += "thé";
  } else if (beverage === 2) {
    order += "café ";
  } else {
    console.log("cette demande est impossible");
    break;
  }
  // ---------------------------
  let sugar = parseInt(prompt("1) oui / 2) non ?"));
  if (sugar === 1) {
    order += ", du sucre";
  } else if (sugar === 2) {
    order += ", pas de sucre ";
  } else {
    console.log("cette demande est impossible");
    break;
  }
  // ---------------------------
  let milk = parseInt(prompt("1) non / 2) lait de vache / 3) lait végétal ?"));
  if (milk === 1) {
    order += ", pas de lait";
  } else if (milk === 2) {
    order += ", lait de vache ";
  } else if (milk === 3) {
    order += ", lait végétal ";
  } else {
    console.log("cette demande est impossible");
    break;
  }

  console.log(order);

  completedOrder = confirm(order);
  //   if (beverage !== null && sugar !== null && milk !== null) {
  //     completedOrder = true;
  //   }
  order = "Récapitulatif : ";

  if (completedOrder === true) {
    console.log("votre commande sera bientôt prête :)");
  }
}
