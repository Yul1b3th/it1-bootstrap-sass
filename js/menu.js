((d) => {
  const $btnMenu = d.querySelector('.navbar-toggler'),
    $navbarBrand = d.querySelector('.navbar-brand'),
    $btnClose = d.querySelector('.btn-close'),
    $body = d.body,
    $html = d.documentElement;

  $btnMenu.addEventListener('click', (e) => {
    $navbarBrand.classList.toggle('d-none');
    $btnMenu.classList.add('d-none');
    $body.style.overflowY = 'hidden';
    $html.style.overflowY = 'hidden';
  });

  $btnClose.addEventListener('click', (e) => {
    $navbarBrand.classList.remove('d-none');
    $btnMenu.classList.remove('d-none');
    $body.style.overflowY = 'auto';
    $html.style.overflowY = 'auto';
  });
})(document);
