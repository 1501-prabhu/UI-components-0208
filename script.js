

let currentSlide = 0;
const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Optional: Auto-slide every 4 seconds
setInterval(nextSlide, 4000);


// Dropdown functionality
function showNavDropdown(id) {
    document.getElementById(id).style.display = 'block';
}

function hideNavDropdown(id) {
    setTimeout(() => {
        document.getElementById(id).style.display = 'none';
    }, 150);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let rowCount = 1;

function addRow() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    if (!name || !email) {
        alert("Please enter both name and email.");
        return;
    }

    rowCount++;
    const table = document.getElementById("crudTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
    <td style="padding:1rem;">${rowCount}</td>
    <td style="padding:1rem;">${name}</td>
    <td style="padding:1rem;">${email}</td>
    <td style="padding:1rem;">
      <button onclick="editRow(this)" style="background:#ffc107; color:#000; border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer;">Edit</button>
      <button onclick="deleteRow(this)" style="background:#dc3545; color:#fff; border:none; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer;">Delete</button>
    </td>
  `;

    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
}

function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
}

function editRow(button) {
    const row = button.closest("tr");
    const nameCell = row.cells[1];
    const emailCell = row.cells[2];

    const newName = prompt("Edit name:", nameCell.innerText);
    const newEmail = prompt("Edit email:", emailCell.innerText);

    if (newName !== null && newName.trim() !== "") {
        nameCell.innerText = newName;
    }
    if (newEmail !== null && newEmail.trim() !== "") {
        emailCell.innerText = newEmail;
    }
}


