// Get the modal
(function(){
    $(document).ready(function($){
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = $('img[id^="myImg"]');
        console.log(img)
        var modalImg = document.getElementById("modalImg");
        var captionText = document.getElementById("caption");
        img.on('click', function(el){
                console.log(this.src);
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                captionText.innerHTML = this.alt;
        })
        // for (var i = 0; i < img.length; i += i){
        //     img[i].on('click', function(imm){
        //         console.log(imm)
        //     })
        // }
        console.log($('<h1>hello world</h1>'), '<<<<<<<<<<<<<')

        // img[0].onclick = function(){
        //     console.log(this.src);
        //     modal.style.display = "block";
        //     modalImg.src = this.src;
        //     modalImg.alt = this.alt;
        //     captionText.innerHTML = this.alt;
        // }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    })

})($)
