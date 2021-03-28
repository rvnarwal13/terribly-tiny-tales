document.getElementById("form").addEventListener("submit", disable);

function disable() {
    document.getElementById('msg').innerHTML = "Please Wait! this will take some time..."
    document.getElementById('submit').style.cursor = "not-allowed";
    document.getElementById('submit').value = "Please Wait...";
    document.getElementById('submit').disabled = true;
    document.getElementById("form").submit();
}