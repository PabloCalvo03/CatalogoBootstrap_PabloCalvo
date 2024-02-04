import '../main.scss'

import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = document.documentElement.getAttribute('data-page');
    switch (currentPage) {
        case 'catalogo':
            import('./show_toast.js');
            import('./quit_video.js')
            break;
        case 'registro':
            import('./show_modal.js');
            import('./show_toast.js')
            import('./show_tooltips.js')
            import('./validations.js')
            import('./dropdown_selection.js')
            break;
        case 'estadisticas':
            import('./show_chart.js')
            import('./show_toast.js')
            break;
        default:
            break;
    }
});

