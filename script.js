var fileWindow = document.getElementById('fileclick')
var textArea = document.getElementById('textarea')
var boldButton = document.getElementById('boldButton')
var italicButton = document.getElementById('italicButton')
var underlineButton = document.getElementById('underlineButton')
var fontSize = document.getElementById('fontSize')
var colorDisplay = document.getElementById('colorDisplay')
var colorSelector = document.getElementById('colorSelector')

if (textArea.value == "") {
    boldButton.style.color = 'white'
    underlineButton.style.color = 'white'
    italicButton.style.color = 'white'
}

document.addEventListener('dblclick', ()=>{
    if (fileWindow.style.display=='inline-block') {
        fileWindow.style.display ='none'
        console.log("hi");
    }
})


function file() {
    if (fileWindow.style.display == 'inline-block') {
        fileWindow.style.display = 'none'
    } else {
        fileWindow.style.display = 'inline-block'
    }
}

function bold() {
    textarea.style.resize = 'none'
    if (textArea.style.fontWeight != 'bold') {
        textArea.style.fontWeight = 'bold'
        boldButton.style.color = 'blue'
    } else {
        textArea.style.fontWeight = 'normal'
        boldButton.style.color = 'white'
    }
}

function italic() {
    textarea.style.resize = 'none'
    if (textArea.style.fontStyle != 'italic') {
        textArea.style.fontStyle = 'italic'
        italicButton.style.color = 'blue'
    } else {
        textArea.style.fontStyle = 'normal'
        italicButton.style.color = 'white'
    }
}

function underline() {
    if (textArea.style.textDecoration != 'underline') {
        textArea.style.textDecoration = 'underline'
        underlineButton.style.color = 'blue'
    } else {
        textArea.style.textDecoration = 'none'
        underlineButton.style.color = 'white'
    }
}

function fontIncrease() {

    if (textArea.value == '') {
        size = 2;
    }

    var size = parseInt(fontSize.innerText)
    if (size<5) {
        size++
    }
    fontSize.innerText = size
    if (size == '1') {
        textArea.style.fontSize = '0.5rem'
    } else if (size == '2') {
        textArea.style.fontSize = '1rem'
    } else if (size == '3') {
        textArea.style.fontSize = '1.5rem'
    } else if (size == '4') {
        textArea.style.fontSize = '2rem'
    } else {
        textArea.style.fontSize = '2.5rem'
    }
}

function fontDecrease() {

    if (textArea.value == '') {
        size = 2;
    }

    var size = parseInt(fontSize.innerText)
    if (size>1) {
        size--
    }
    fontSize.innerText = size
    if (size == '1') {
        textArea.style.fontSize = '0.5rem'
    } else if (size == '2') {
        textArea.style.fontSize = '1rem'
    } else if (size == '3') {
        textArea.style.fontSize = '1.5rem'
    } else if (size == '4') {
        textArea.style.fontSize = '2rem'
    } else {
        textArea.style.fontSize = '2.5rem'
    }
}

function normal() {
    textArea.style.fontFamily = 'normal'
}

function cursive() {
    textArea.style.fontFamily = 'cursive'
}

function serif() {
    textArea.style.fontFamily = 'serif'
}

function gill() {
    textArea.style.fontFamily = 'Gill Sans'
}

function arial() {
    textArea.style.fontFamily = 'arial'
}

function leftAlign() {
    textArea.style.textAlign = 'left'
}

function midAlign() {
    textArea.style.textAlign = 'center'
}

function rightAlign() {
    textArea.style.textAlign = 'right'
}

function save(){

    if (localStorage.getItem('title')==null && localStorage.getItem('text')==null) {
        var titlearr = []
        var textarr = []
    } else if (localStorage.getItem('title')==null && localStorage.getItem('text')!=null) {
        var titlearr = []
        var textarr = localStorage.getItem('text').split(',')
    } else if (localStorage.getItem('title')!=null && localStorage.getItem('text')==null) {
        var titlearr = localStorage.getItem('title').split(',')
        var textarr = []
    } else {
        var titlearr = localStorage.getItem('title').split(',')
        var textarr = localStorage.getItem('text').split(',')
    }

    var text = textArea.value
    var title = prompt("Enter Title")

    titlearr.push(title)
    textarr.push(text)

    console.log(titlearr);
    console.log(textarr);

    localStorage.setItem('title', titlearr)
    localStorage.setItem('text', textarr)

}

// colorSelector.addEventListener('click', ()=>{
//     if (colorDisplay.style.display == 'none') {
//         colorDisplay.style.display = 'inline-block'
//     } else {
//         colorDisplay.style.display = 'none'
//     }
// })
