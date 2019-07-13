function enableEdit() {
    textEditor.document.designMode = 'On';
}

function runCommand(command) {
    textEditor.document.execCommand(command, false, null);
    console.log(event.target.nodeName.toLowerCase());
    if (event.target.nodeName.toLowerCase() == 'i' && (command === 'bold' || command === 'italic' || command === 'underline' || command === 'strikeThrough')) {
        event.target.parentElement.classList.toggle('blueClass');
    } else if (command === 'bold' || command === 'italic' || command === 'underline' || command === 'strikeThrough') {
        event.target.classList.toggle('blueClass');
    }
}

function runCommandWithArg(command, arg) {
    textEditor.document.execCommand(command, false, arg);
}

// Enable edit mode for the iFrame
enableEdit();
// Make the textEditor to focus
document.getElementById('textEditor').focus();

// Remove the loader and display textEditor
setTimeout(function () {
    document.querySelector('.loader').classList.add('hide');
    document.getElementById('app').classList.remove('app');
    document.getElementById('app').classList.add('show');
}, 5000);