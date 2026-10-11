const navigation = document.querySelector('header nav');
const menuButton = navigation?.querySelector('.nav-toggle');
const navigationMenu = navigation?.querySelector('#primary-navigation');
const mobileViewport = window.matchMedia('(max-width: 560px)');

if (navigation && menuButton && navigationMenu) {
	function closeMobileMenu() {
		menuButton.setAttribute('aria-expanded', 'false');
		menuButton.textContent = 'Menu';
		navigationMenu.hidden = mobileViewport.matches;
	}

	function updateNavigationForViewport() {
		closeMobileMenu();
	}

	menuButton.addEventListener('click', function () {
		const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

		menuButton.setAttribute('aria-expanded', String(!isExpanded));
		menuButton.textContent = isExpanded ? 'Menu' : 'Close menu';
		navigationMenu.hidden = isExpanded;
	});

	navigationMenu.querySelectorAll('a[href^="#"]').forEach(function (link) {
		link.addEventListener('click', closeMobileMenu);
	});

	mobileViewport.addEventListener('change', updateNavigationForViewport);
	updateNavigationForViewport();
}
