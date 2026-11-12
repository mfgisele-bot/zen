const menu = document.querySelector('#navbarSupportedContent');
const navbar = menu.closest('nav');
const dropdown = menu.querySelector('.dropdown');

menu.addEventListener('show.bs.collapse', () => navbar.classList.add('opened'));
menu.addEventListener('hide.bs.collapse', () => navbar.classList.remove('opened'));
dropdown.addEventListener('show.bs.dropdown', () => dropdown.classList.add('open'));
dropdown.addEventListener('hide.bs.dropdown', () => dropdown.classList.remove('open'));

menu.addEventListener('click', event => {
  const link = event.target.closest('a:not([data-bs-toggle])');
  if (link && menu.classList.contains('show')) {
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  }
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches) {
  if (typeof jarallax === 'function') {
    jarallax(document.querySelectorAll('.mbr-parallax-background'));
  }

}

const preview = document.querySelector('#header02-32 .mbr-background-video-preview');
if (preview && !reducedMotion.matches) {
  const background = document.createElement('div');
  background.className = 'zen-video';
  background.setAttribute('aria-hidden', 'true');
  const player = document.createElement('iframe');
  player.title = 'Filme da Coleção Zen';
  player.tabIndex = -1;
  player.allow = 'autoplay; encrypted-media';
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  player.src = 'https://www.youtube-nocookie.com/embed/bjMxu2Ka9QQ?autoplay=1&mute=1&controls=0&loop=1&playlist=bjMxu2Ka9QQ&playsinline=1&rel=0';
  background.append(player);
  preview.after(background);
}
