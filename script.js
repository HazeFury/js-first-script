const body = document.body;

for (const li of allLi) {
  li.addEventListener("click", () => {
    alert("toto");
  });
}

// for (let i = 0; i < allLi.length; i++) {
//   allLi[i].addEventListener("click", () => {
//     alert("toto");
//   });
// }

// allLi.forEach((li) => {
//   li.addEventListener("click", () => {
//     alert("toto");
//   });
// });

// allLi.addEventListener("click", () => {
//   alert("toto");
// });
