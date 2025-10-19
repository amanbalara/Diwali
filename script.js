document.addEventListener('DOMContentLoaded', () => {
    const diyas = document.querySelectorAll('.diya');
    const instructions = document.getElementById('instructions');
    const wishMessage = document.getElementById('wish-message');
    const body = document.body;

    let litCount = 0;
    const totalDiyas = diyas.length;

    // Remove the 'hidden' class so CSS transitions can work
    wishMessage.classList.remove('hidden');

    diyas.forEach(diya => {
        diya.addEventListener('click', () => {
            // Only light a diya if it's not already lit
            if (!diya.classList.contains('lit')) {
                diya.classList.add('lit');
                litCount++;
            }

            // Check if all diyas are lit
            if (litCount === totalDiyas) {
                // Hide instructions
                instructions.style.opacity = '0';
                
                // Light up the background
                body.style.backgroundColor = '#4c3f30';

                // Show the message after a short delay
                setTimeout(() => {
                    wishMessage.classList.add('visible');
                }, 500); // 500ms delay
            }
        });
    });
});
