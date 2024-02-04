const quitVideo = document.getElementById("quitVideo");
const videoContainer = document.getElementById("videoContainer");

const quitVideoFunction = () => {
    videoContainer.remove()
}

quitVideo.addEventListener("click", quitVideoFunction)