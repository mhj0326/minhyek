document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var links = document.querySelector('.nav-links');

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var emailLink = document.getElementById('email-link');
  if (emailLink) {
    emailLink.addEventListener('click', function (e) {
      e.preventDefault();
      var email = emailLink.getAttribute('data-email');
      var item = emailLink.closest('.copy-email-item');
      navigator.clipboard.writeText(email).then(function () {
        item.classList.add('copied');
        setTimeout(function () { item.classList.remove('copied'); }, 1500);
      });
    });
  }
});
