
// // Navigation functionality
// function showSection(sectionName) {
//     // Hide all sections
//     const sections = document.querySelectorAll('.section-content');
//     sections.forEach(section => section.classList.add('hidden'));

//     // Show selected section
//     document.getElementById(sectionName).classList.remove('hidden');
// }

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

// Initialize with daily section visible
// document.addEventListener('DOMContentLoaded', function () {
//     showSection('daily');
// });
// (function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'973ae81516826ee9',t:'MTc1NTk1NTIxOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
