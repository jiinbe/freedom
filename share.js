document.getElementById("share").addEventListener("click", () => {
console.log("share image");

const dataUrl = canvas.toDataURL();
  
fetch(dataUrl)
.then(res => res.blob())
.then(blob => {
//console.log(blob)
const filesArray = [new File([blob], 'image.png', { type: blob.type, lastModified: new Date().getTime() })];
console.log(filesArray);
const shareData = {
title: "HI, THERE 👋👋👋",
text: "Learn web development on CODEPEN!",
url: "https://codepen.io/erossavanka/pen/MWMbzzy",
files: filesArray
};
console.log(shareData);
if (navigator.share) {
navigator.share(
shareData
)
.then(() => console.log("thanks for share"))
.catch(error => console.log("error", error));
} else {
alert('navigator.share not available');
}

})
});
