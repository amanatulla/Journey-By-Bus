function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-green-400');
}


function allowElementById(elementId){
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled'); 
}

function disabledElementById(elementId){
    const element = document.getElementById(elementId);
    element.setAttribute("disabled", "");   
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


