const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    face = document.getElementById('openIcon');
    if (document.body.dataset.nav === "true") {
        face.className = 'activate';
    }
    else {
        face.className = 'deactivate';
    }
}
