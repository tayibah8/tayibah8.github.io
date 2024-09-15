document.addEventListener("DOMContentLoaded"), () => {

    const images = document.querySelectorAll("img")

    for(constimage of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            images.src = data.message
            images.width = 100;
            images.height = 100;
        })
        

    }


}