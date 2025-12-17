// Get the elements
const toggleButton = document.getElementById('method-toggle');
const pourOverSteps = document.getElementById('pour-over-steps');
const frenchPressSteps = document.getElementById('french-press-steps');

function toggleMethod() {
    // 1. Check which method is currently active
    const isPourOverActive = pourOverSteps.classList.contains('active');

    if (isPourOverActive) {
        // --- SWITCH TO FRENCH PRESS ---

        // a. Hide Pour Over, Show French Press steps
        pourOverSteps.classList.remove('active');
        pourOverSteps.classList.add('hidden');

        frenchPressSteps.classList.remove('hidden');
        frenchPressSteps.classList.add('active');

        // b. Change button text
        toggleButton.textContent = 'VIEW POUR OVER';

    } else {
        // --- SWITCH TO POUR OVER ---

        // a. Hide French Press, Show Pour Over steps
        frenchPressSteps.classList.remove('active');
        frenchPressSteps.classList.add('hidden');

        pourOverSteps.classList.remove('hidden');
        pourOverSteps.classList.add('active');

        // b. Change button text
        toggleButton.textContent = 'VIEW FRENCH PRESS';
    }
}