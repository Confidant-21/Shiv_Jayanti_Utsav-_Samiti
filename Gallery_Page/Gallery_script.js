let full_img_box=document.getElementById("full-img-box");
let full_img=document.getElementById("full-img");
let full_img_background=document.getElementById("full-img-background");
function openFullImg(picture){
    full_img_box.style.display="flex";
    full_img.src=picture;
    full_img_background.src=picture;
}

function closeFullImg(){
    full_img_box.style.display="none";
}