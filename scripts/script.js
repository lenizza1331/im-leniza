let myPhoto = document.querySelector("#myPhoto");
let myPhotoArray = ['https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(25).png?v=1639966299494',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(7).png?v=1639966299570',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(22).png?v=1639966299592',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(37).png?v=1639966300001',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(6).png?v=1639966300018',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(21).png?v=1639966300356',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(5).png?v=1639966300303',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(33).png?v=1639966300490',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(3).jpg?v=1639966299238',
'https://cdn.glitch.me/2a3696f3-76a8-4bc5-8e54-9b355f7d5d50/lz%20(31).png?v=1639966300975'];
let b=0;
myPhoto.addEventListener("mouseenter", ()=> { 
    b++;
        if (b>myPhotoArray.length-1) {
            b=0
        }
    document.querySelector('#myPhoto').src=myPhotoArray[b];
});
myPhoto.addEventListener("click", ()=> { 
    b++;
        if (b>myPhotoArray.length-1) {
            b=0
        }
    document.querySelector('#myPhoto').src=myPhotoArray[b];
});