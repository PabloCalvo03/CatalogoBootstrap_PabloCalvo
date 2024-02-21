import '../main.scss'

import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = document.documentElement.getAttribute('data-page');
    switch (currentPage) {
        case 'catalogo':
            import('./show_toast.js')
            import('./quit_video.js')
            import('./toggle_theme.js')
            break;
        case 'registro':
            import('./show_modal.js')
            import('./show_toast.js')
            import('./show_tooltips.js')
            import('./validations.js')
            import('./dropdown_selection.js')
            import('./toggle_theme.js')
            break;
        case 'estadisticas':
            import('./show_chart.js')
            import('./show_toast.js')
            import('./toggle_theme.js')
            break;
        default:
            break;
    }
});

