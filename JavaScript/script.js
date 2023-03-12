//Untuk Photo Slider
var firstIndex = 0;

function automaticSlider(){
    setTimeout(automaticSlider, 5000);

    var images;
    const img = document.querySelectorAll('.photo');

    for (images = 0; images < img.length; images++){
        img[images].style.display="none";
    }
    firstIndex++;

    if(firstIndex > img.length){
        firstIndex = 1;
    }

    img[firstIndex - 1].style.display="block";
}

automaticSlider();

//Untuk Button Product
function snickerdoodles(){
    alert("Salah satu cookies dengan bertekstur seperti kue butter. Dibuat dengan taburan bubuk kayu manis dan gula.");
}

function chochip(){
    alert("Cookies dengan chocolate chip manis yang pas dan tidak pahit. Apabila dimakan saat masih hangat, akan lebih terasa lumer di mulut");
}

function oatmeal(){
    alert("Kandungan protein pada oats bisa membuatmu kenyang dua kali lipat. Cookies ini cocok untuk diet!");
}

function whoopie(){
    alert("Soft cookies yang ditengahnya terdapat marshmellow dan dibalut oleh lumuran dark chocolate. Soft dan cheewy!");
}

function biscotti(){
    alert("Melalui proses pembakaran, biscotti merupakan cookies kering yang cocok dimakan oleh segala usia~");
}

function macaron(){
    alert("Terbuat dari tepung gandum premium dengan beragam rasa untuk fillingnya. Rasanya manis dan cukup kenyal!");
}

snickerdoodles();
chochip();
oatmeal();
whoopie();
biscotti();
macaron();