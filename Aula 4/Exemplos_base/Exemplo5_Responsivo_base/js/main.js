document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const body = document.body;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        body.classList.toggle('nav-panel-visible');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.remove('nav-panel-visible');
        });
    }

    document.addEventListener('click', (e) => {
        if (body.classList.contains('nav-panel-visible') &&
            !e.target.closest('#navPanel') &&
            !e.target.closest('#titleBar')) {
            body.classList.remove('nav-panel-visible');
        }
    });
});
