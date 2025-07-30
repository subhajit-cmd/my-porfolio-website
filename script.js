function viewCV() {
        window.open('files/your-cv.pdf', '_blank');
    }

    const toggle = document.getElementById("toggleMode");
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
