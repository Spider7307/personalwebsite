const slideshowIMGs = 3;
const slideshowVIDs = 0;
const slideshowTotal = slideshowIMGs+slideshowVIDs;
document.addEventListener("DOMContentLoaded", () => {
    /*const InstagramLogo = document.getElementById("Instagram");
    console.log("hi")
        console.log(text.getBoundingClientRect());
        console.log("hi");*/
    
    const fwdslideshowButton = document.getElementById("fwdSlideshowButton");
    const bwdslideshowButton = document.getElementById("bwdSlideshowButton");
    let slideshowIndex = 0;
    let slideshowIMG=document.getElementById("slideshowIMG");
    slideshowIMG.src=`./images/folders/Slideshow/img/img_0.png`;

    fwdslideshowButton.addEventListener("click", () => {
        slideshowIndex++;
        slideshowIndex=slideshowIndex%slideshowTotal;
        if (slideshowIndex<=slideshowIMGs) {
            slideshowIMG.src=`./images/folders/Slideshow/img/img_${slideshowIndex}.png`;
        }/* else {
            slideshowIMG.src=`images/folders/Slideshow/mov/img_${slideshowIndex}.mov` // need to make it count only for pngs and movs
        }*/
    })
    bwdslideshowButton.addEventListener("click", () => {
        slideshowIndex--;
        slideshowIndex=(slideshowIndex+slideshowTotal)%slideshowTotal;
        if (slideshowIndex<=slideshowIMGs) {
            slideshowIMG.src=`./images/folders/Slideshow/img/img_${slideshowIndex}.png`;
        }/* else {
            slideshowIMG.src=`images/folders/Slideshow/mov/img_${slideshowIndex}.mov`
        }*/
        
    })
    const fieldButton = document.getElementById("fieldButton");
    const status = document.getElementById("status");
    fieldButton.addEventListener("click",function() {
        event.preventDefault(); // Prevents the default submission
        const nameField = document.getElementById("NameInput");
        const emailField = document.getElementById("EmailInput");
        if (!nameField||!emailField) {
            status.textContent="Please fill in both fields";
            return;
        }
        if (!nameField.value.trim() || !emailField.value.trim()) {
            status.textContent = "Please fill in both fields";
            return;
        }
        console.log(`Name: ${nameField.value}`);
        console.log(`Email: ${emailField.value}`);
        nameField.value=" ";
        emailField.value=" ";
        status.textContent="Submitted Successfully";
    });
});