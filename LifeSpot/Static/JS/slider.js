let imageNumber = 1;
function NextImage() {
    document.getElementById("image" + imageNumber).hidden = true;
    imageNumber++;
    if (imageNumber > 4) {
        imageNumber = 1;
    }
    document.getElementById("image" + imageNumber).hidden = false;
}
function PrevImage() {
    document.getElementById("image" + imageNumber).hidden = true;
    imageNumber--;
    if (imageNumber < 1) {
        imageNumber = 4;
    }
    document.getElementById("image" + imageNumber).hidden = false;
}