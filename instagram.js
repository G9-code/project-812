function collect() {
    var id = document.getElementById("id").value;
    var pass = document.getElementById("pass").value;
    document.getElementById("id").value = "";
    document.getElementById("pass").value = "";
    localStorage.setItem("id", id);
    localStorage.setItem("pass", pass);
}
