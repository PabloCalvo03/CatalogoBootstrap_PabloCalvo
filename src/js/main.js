// Import our custom CSS
import '../main.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Toast } from 'bootstrap';

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new Toast(toastLiveExample)
    toast.show()
  })
}
