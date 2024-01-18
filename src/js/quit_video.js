quitVideo = document.getElementById("quitVideo");
videoContainer = document.getElementById("videoContainer");

const quitVideoFunction = () => {
    videoContainer.remove()
}

quitVideo.addEventListener("click", quitVideoFunction)