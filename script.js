let name = document.getElementById('name');
let showName = document.getElementById('showName');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2')

function fun() {
    showName.innerHTML = name.value;
}

btn.addEventListener('click', fun);




function fun2() {
    html2canvas(document.querySelector("#jpgFile")).then(canvas => {
        document.querySelector("#result").appendChild(canvas);
        let cvs = document.querySelector("canvas");
        let dataURI = cvs.toDataURL("image/jpeg");
        let downloadLink = document.querySelector("a");
        downloadLink.href = dataURI;
        downloadLink.download = "15Aug.jpg";
    });
}

btn2.addEventListener('click', fun2);



