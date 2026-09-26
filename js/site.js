document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('nav-toggle').checked = false;
  });
});

// Pre-select the booking form from links like index.html?program=vert&format=group#book
(function () {
  var params = new URLSearchParams(location.search);
  [['program', 'f-program'], ['format', 'f-format']].forEach(function (pair) {
    var value = params.get(pair[0]);
    var select = document.getElementById(pair[1]);
    if (!value || !select) return;
    if (select.querySelector('option[value="' + CSS.escape(value) + '"]')) select.value = value;
  });
})();
