function copy(id) {
    
    let element = document.getElementById(id);

    navigator.clipboard.writeText(element.value).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy ", err);
    })
}