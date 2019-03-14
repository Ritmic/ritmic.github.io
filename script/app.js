$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$('.landscape__button').click(function (event) {
    event.preventDefault();
    $('#first').scrollView();
  });