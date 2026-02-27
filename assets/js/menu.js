// Mobile menu toggle
function toggleMenu() {
    const nav = document.getElementById('nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

// Close menu on link click
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.classList.remove('active');
        }
    });
});
