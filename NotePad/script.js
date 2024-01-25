function createDiv() {
    // Create the div element
    let main = document.getElementById("book")
    var div = document.createElement('div');
    div.setAttribute('id', 'textarea');

    // Create the textarea element
    var textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'text');
    textarea.setAttribute('id', 'textbox');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('placeholder', 'Enter your text');

    // Create the img element
    var img = document.createElement('img');
    img.setAttribute('src', 'delete.png');
    img.setAttribute('id', 'delete');
    img.setAttribute('alt', 'delete.png');
    img.setAttribute('onclick', 'deleteDiv()'); // Add onclick event for deletion

    // Append textarea and img to div
    div.appendChild(textarea);
    div.appendChild(img);

    // Append div to the body
    main.appendChild(div);
}

function deleteDiv() {
    var div = document.getElementById('textarea');
    div.parentNode.removeChild(div); // Remove the div element
}