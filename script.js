
$("#news").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".news").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
});




var time = 4;
$('span').each(function() {
  var i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function() {
      if (i <= num) {
        that.html(i);
      } else {
        clearInterval(int);
      }
      i++;
    }, step);
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}