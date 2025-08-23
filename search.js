

// Filter Topics by Search
function filterTopics() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let cards = document.querySelectorAll(".topic-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "" : "none";
    });
}

// Toggle completion status
function toggleComplete(button) {
    if (button.textContent.trim() === 'Pending') {
        button.textContent = 'Completed';
        button.className = 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105';
    } else {
        button.textContent = 'Pending';
        button.className = 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-3 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}
