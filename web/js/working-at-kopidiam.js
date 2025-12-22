function openTab(clickedBox, contentId) {
    // 1. RESET ALL BUTTONS
    // Remove the 'active' class (Green color) from all boxes
    const allBoxes = document.querySelectorAll('.career-paths .box');
    allBoxes.forEach(box => {
        box.classList.remove('active');
    });

    // 2. ACTIVATE THE CLICKED BUTTON
    // Add the 'active' class to the specific box you clicked
    clickedBox.classList.add('active');

    // 3. HIDE ALL CONTENT SECTIONS
    const allContents = document.querySelectorAll('.tab-content');
    allContents.forEach(content => {
        content.style.display = 'none';
    });

    // 4. SHOW THE TARGET CONTENT
    // We use 'flex' because your CSS for .retail uses display: flex
    const target = document.getElementById(contentId);
    if (target) {
        target.style.display = 'flex';
    }
}