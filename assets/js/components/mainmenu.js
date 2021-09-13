const menuToggler = document.querySelector('#menu-toggle');
const mainMenu = document.querySelector('#mainmenu');

const Mainmenu = {
    openMenu: () => {
        mainMenu.classList.add('active');
        menuToggler.classList.add('menu-opened');

        menuToggler.setAttribute('aria-expanded', 'true');
    },

    closeMenu: () => {
        mainMenu.classList.remove('active');
        menuToggler.classList.remove('menu-opened');

        menuToggler.setAttribute('aria-expanded', 'false');
    },

    init: () => {

        menuToggler.addEventListener('click', function (e) {
            e.preventDefault();

            if ( !mainMenu.classList.contains('active') ) { // oepn menu in mobile
                Mainmenu.openMenu();

            } else { // close menu in mobile
                Mainmenu.closeMenu();
            }
        });

        // close the menu if document clicked elsewhere
        document.querySelector('body').addEventListener('click', function (e) {
            let path = e.composedPath();

            if ( path.some(elem => elem.id === 'menu-toggle') )
                return;

            if ( !path.some(elem => elem.id === 'menu-container') ) {
                Mainmenu.closeMenu();
            }
        });

        // close the menu if esc key is pressed
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (  keyName === 'Escape' && mainMenu.classList.contains('active') ) {
                Mainmenu.closeMenu();
            }
        }, false);
    }
}

export default Mainmenu;