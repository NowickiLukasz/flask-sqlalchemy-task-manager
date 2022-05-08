document.addEventListener('DOMContentLoaded', function () {
  // sidebar navigation
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });

  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // Collapsiblies

  var collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});
