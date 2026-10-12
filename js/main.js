document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel && panel.classList.contains('panel')) {
        panel.classList.toggle('show');
      }
    });
  });
});
