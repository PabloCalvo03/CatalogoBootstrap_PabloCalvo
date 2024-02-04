import { Toast } from 'bootstrap';

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new Toast(toastLiveExample)
    toast.show()
  })
}