// ----------------------
// Modal Photo Section
// ----------------------

// Get elements
const openPhoto = document.getElementById('open-photo');
const photoModal = document.getElementById('photo-modal');
const closeBtn = document.querySelector('.close-btn');

// ✅ Optional: Auto-open modal when page loads
// Uncomment the line below if you want it to open automatically
// window.addEventListener('load', () => {
//   photoModal.style.display = 'flex';
// });

// 👆 Manual click to open modal
if (openPhoto) {
  openPhoto.addEventListener('click', () => {
    photoModal.style.display = 'flex';
  });
}

// ❌ Close modal when X is clicked
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    photoModal.style.display = 'none';
  });
}

// ❌ Close modal when clicking outside the image
window.addEventListener('click', (e) => {
  if (e.target === photoModal) {
    photoModal.style.display = 'none';
  }
});


// ----------------------
// Dark / Light Mode Toggle
// ----------------------

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// ✅ Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  updateIcon(savedTheme);
}

// 👆 Click button to toggle theme
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
      updateIcon('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      updateIcon('dark-mode');
    }
  });
}

// ✅ Function to update icon
function updateIcon(mode) {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  if (mode === 'dark-mode') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}
