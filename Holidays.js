document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".search-btn button").addEventListener("click", function () {
        const fromCity = document.querySelector("input[placeholder='Enter departure city']").value.trim();
        const toCity = document.querySelector("input[placeholder='Enter destination']").value.trim();
        const departureDate = document.querySelector("input[type='date']").value.trim();
        const roomsGuests = document.querySelector("select:first-of-type").value.trim();

        // Validation for empty fields
        if (!fromCity || !toCity || !departureDate || roomsGuests === "Select Rooms") {
            alert("Please fill in all required fields before searching.");
            return;
        }

        // Example alert for search results (replace with actual functionality)
        alert(`Searching holidays from ${fromCity} to ${toCity} on ${departureDate} for ${roomsGuests}`);
    });
});
const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const destination = card.querySelector('h3').innerText;
        const price = card.querySelector('.price').innerText;

        alert(`🎉 Booking confirmed!\nDestination: ${destination}\nPrice: ${price}`);
    });
});