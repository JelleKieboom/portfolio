let projects = ["assets/donut.png", "assets/skillit.png", "assets/renatus.png"]; //add image of 1.3
let projectIndex = 0;

function changeProject() {
    projectIndex++; 

    if (projectIndex >= projects.length) {
        projectIndex = 0;
    }

    $('#homeimage1').fadeOut(300, function() {
        $(this).attr('src', projects[projectIndex]).fadeIn(300);
    });
}

setInterval(changeProject, 4000);


let art = ["assets/necrozma.jpg", "assets/garden.jpg", "assets/hk41thumbnail.jpg", "assets/hk40.png", "assets/amongusthumbnail2.jpg"]; //add images of radiance, amongus2, m0n3t and sableye here 
let artIndex = 0;

function changeArt() {
    artIndex++; 

    if (artIndex >= art.length) {
        artIndex = 0;
    }

    $('#homeimage2').fadeOut(300, function() {
        $(this).attr('src', art[artIndex]).fadeIn(300);
    });
}

setInterval(changeArt, 4000);
