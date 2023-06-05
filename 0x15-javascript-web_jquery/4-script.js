$('div#toggle_header').on('click', function () {
    if ($('header').hasClass('red')) { $(this).removeClass('green'); } else { $(this).removeClass('red'); }
  });