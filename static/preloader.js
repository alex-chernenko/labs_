/*preloader*/
document.body.onload=function(){
    setTimeout(function(){
    var preloader=document.getElementById('loading');
    if(!preloader.classList.contains('done')){
        preloader.classList.add('done')
    }   
    },2000)
};

function slowScroll(id) {
    var offset=0;
    $('html, body').animate({
        scrollTop: $(id).offset().top-offset
    });
}

// function showCallForm(){
//     document.getElementById("Everything").style.opacity="0.75";
//     document.getElementById('call').classList.add('visible');
// }

			
