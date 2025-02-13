document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const body = document.body;

    // Handle clicks on Experiment/Theory/Results options
    options.forEach(option => {
        option.addEventListener('click', () => {
            const target = option.getAttribute('data-target');
            
            // Add zoom-out effect
            body.classList.add('zoomed');
            setTimeout(() => body.classList.remove('zoomed'), 1000);

            // Navigate to the selected page
            switch (target) {
                case 'Changement de couleur':
                    window.location.href = 'cdc.html'; // Matches cdc.html
                    break;
                case 'Par le feu':
                    window.location.href = 'plf.html'; // Matches plf.html
                    break;
                case 'compose':
                    window.location.href = 'cc.html'; // Matches cc.html
                    break;
                default:
                    console.log('Error: Page not found');
            }
        });
    });
});
// Three-dot menu logic
function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}
// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('menuOverlay');
    if (!e.target.closest('.menu-btn') && !e.target.closest('.menu-content')) {
        overlay.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('menuOverlay').style.display = 'none';
    }
});