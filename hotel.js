// Get the "Show More" button and the hotel information
const showMoreBtn = document.querySelector('.text button');
const information = document.querySelector('.information');

// Add a click event listener to the "Show More" button
showMoreBtn.addEventListener('click', function () {
    // Toggle the "show" class on the hotel element
    information.classList.toggle('show');

    // Toggle the text of the button
    if (showMoreBtn.textContent === 'Show More') {
        showMoreBtn.textContent = 'Show Less';
    } else {
        showMoreBtn.textContent = 'Show More';
    }
});