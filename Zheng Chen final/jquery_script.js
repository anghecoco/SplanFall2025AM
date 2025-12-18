$(function () {
  const $tabs = $(".tab");
  const $cards = $(".grid-2 .sticker");

  $tabs.on("click", function () {
    const filter = $(this).data("filter");

    $tabs.removeClass("is-active");
    $(this).addClass("is-active");

    if (filter === "all") {
      $cards.removeClass("is-hidden");
      return;
    }

    $cards.each(function () {
      const group = $(this).data("group");
      $(this).toggleClass("is-hidden", group !== filter);
    });
  });
});