$(document).ready(() => {
    //focuses on the first link.
    $("a").first()[0].focus()

    $("#image_list a").each((i, item) => {
        // getting the href links.
        const URL = item.href;      
        const title = item.title;
        // preloading rollover image.		
        const rollover = new Image();
        rollover.src = URL;
        // slide function on click event.
        $(item).click((evt) => {
            evt.preventDefault();
            $('#gallery').slideUp(1000, () =>{
                $('#caption').text(title);//showing caption
                $('#gallery img').attr("src", URL);//showing images
                $('#gallery').slideDown(1000);
              });
        })
    })
})