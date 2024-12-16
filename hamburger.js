// 要素を取得 ※1

var btn = document.getElementById("btn");

var menu = document.getElementById("menu");

var modal = document.getElementById("modal");


// ボタンがクリックされたらclassを追加 ※2

btn.addEventListener("click", function () {

   menu.classList.toggle("add-menu-sp");

   modal.classList.toggle("add-modal-sp");

   btn.classList.toggle("btn--open");

// アイコンのクラスを切り替え（ハンバーガー ↔ ×）
if (menu.classList.contains("add-menu-sp")) {
   icon.classList.remove("fa-bars");
   icon.classList.add("btn--open"); // 罰点アイコンに変更
} else {
   icon.classList.remove("btn--open");
   icon.classList.add("fa-bars"); // ハンバーガーアイコンに戻す
}
});

// モーダルがクリックされたらclassを削除 ※3

modal.addEventListener("click", function () {

   menu.classList.remove("add-menu-sp");

   modal.classList.remove("add-modal-sp");

   btn.classList.remove("btn--open");

   // アイコンをハンバーガーアイコンに戻す
   icon.classList.remove("btn--open");
   icon.classList.add("fa-bars");

});