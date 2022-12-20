$(document).ready(function () {
  setInterval(updateTotals, 3000);
});

function updateTotals() {
  var totalCards = $(".999-cards"); //名前？オブジェクト？
  if (!totalCards.length) {
    totalCards = $("<span>", {
      class: "board-header-btn total-cards", //Trelloの上にまとまっているやつ
      //   click: toggleDonate,
    });
    $(".board-header-btns.mod-left:first").append(totalCards); //
  }
  totalCards.text("Total cards: 999");
}
