let imgUpload = document.querySelector("#img-upload");
let download = document.querySelector("#download");

// let stickyContent = document.querySelector("img");

imgUpload.addEventListener("change", function(){
    console.log("uploadbuttonclick")
    let file = imgUpload.files[0];

    if(file){
        let img = document.createElement("img");
        let url = URL.createObjectURL(file);
        img.src = url;
        img.setAttribute("class", "sticky-img");
        let stickyContent = createsticky();
        stickyContent.appendChild(img);
    }

});

download.addEventListener("click", function(){
    let url = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.setAttribute("href",url);
    a.setAttribute("download", "canvas.png");
    a.click();
    a.remove();
})