const slideshowIMGs = 3;
const slideshowVIDs =0;
const slideshowTotal = slideshowIMGs+slideshowVIDs;
document.addEventListener("DOMContentLoaded", () => {
    /*const InstagramLogo = document.getElementById("Instagram");
    console.log("hi")
    // your rest of the code here...
        console.log(text.getBoundingClientRect());
        console.log("hi");*/
    
    const fwdslideshowButton = document.getElementById("fwdSlideshowButton");
    const bwdslideshowButton = document.getElementById("bwdSlideshowButton");
    let slideshowIndex = 0;
    let slideshowIMG=document.getElementById("slideshowIMG");
    slideshowIMG.src=`images/folders/Slideshow/img/img_0.png`;

    fwdslideshowButton.addEventListener("click", () => {
        slideshowIndex++;
        slideshowIndex=slideshowIndex%slideshowTotal;
        if (slideshowIndex<=slideshowIMGs) {
            slideshowIMG.src=`images/folders/Slideshow/img/img_${slideshowIndex}.png`;
        }/* else {
            slideshowIMG.src=`images/folders/Slideshow/mov/img_${slideshowIndex}.mov` // need to make it count only for pngs and movs
        }*/
    })
    bwdslideshowButton.addEventListener("click", () => {
        slideshowIndex--;
        slideshowIndex=(slideshowIndex+slideshowTotal)%slideshowTotal;
        if (slideshowIndex<=slideshowIMGs) {
            slideshowIMG.src=`images/folders/Slideshow/img/img_${slideshowIndex}.png`;
        }/* else {
            slideshowIMG.src=`images/folders/Slideshow/mov/img_${slideshowIndex}.mov`
        }*/
        
    })
    const nameField = document.getElementsById("NameInput");
    const emailField = document.getElementById("EmailInput");
    

});