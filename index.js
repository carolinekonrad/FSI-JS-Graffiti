let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
header.style.color = "magenta"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.color = "magenta"
}