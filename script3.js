var textArea = document.getElementById('textarea')
var element2 = localStorage.getItem('element2')
var new_element2 = element2.replaceAll('_',' ')

textArea.innerHTML = new_element2
