$('a.nice-link').each(function () {
  $(this).attr('data-text', $(this).text());
});