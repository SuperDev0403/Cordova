function check() {

    // localStorage.removeItem('')
    if (localStorage.getItem('reloadState') === 'reload') {
        console.log('refresh Startqqqqqqqqq');
        // checkLoaded();
    } else {
        console.log('refresh Startaaaaaaaaaaa');
        localStorage.setItem('reloadState', 'reload');
        checkLoaded();
        localStorage.clear();
    }
}

function checkLoaded() {
    if (document.getElementById('list_content') === null || typeof (document.getElementById('list_content')) ===
        'undefined') {
        setTimeout(() => {
            checkLoaded();
        }, 100);
    } else {
        window.location.reload();
    }
}