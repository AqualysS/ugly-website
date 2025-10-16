document.addEventListener('DOMContentLoaded', function() {
    // Animation de texte arc-en-ciel
    const colors = ['red', 'orange', 'yellow', 'lime', 'cyan', 'blue'];
    let index = 0;

    setInterval(function() {
        const el = document.getElementById('rainbow-text');
        if (el) {
            el.style.color = colors[index];
            index = (index + 1) % colors.length;
        }
    }, 100);

    // Vérification de compatibilité pour PerformanceObserver avec 'longtask'
    if ('PerformanceObserver' in window && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes('longtask')) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log('Long task detected:', entry);
            }
        });
        observer.observe({ entryTypes: ['longtask'] });
    } else {
        console.warn('PerformanceObserver avec "longtask" non pris en charge par ce navigateur.');
    }
});
