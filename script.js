document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = this[0].value;
    const password = this[1].value;

    // Simpan log ke local storage atau backend
    localStorage.setItem('userLog', JSON.stringify({ email, password }));
    
    // Redirect ke halaman beranda
    window.location.href = 'index.html';
});

document.getElementById('registerForm').addEventListener('submit', function (