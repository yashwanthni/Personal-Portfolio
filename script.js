
// =====================================
// LAVENDER PORTFOLIO - THEME TOGGLE
// =====================================

const themeToggle = document.getElementById("theme-toggle");

// Load previously saved theme
const savedTheme =
    localStorage.getItem("portfolio-theme") || "light";

// Apply theme and update button
function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    if (themeToggle) {

        if (theme === "dark") {
            themeToggle.textContent = "☀️ Light Mode";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to light theme"
            );
            themeToggle.setAttribute("aria-pressed", "true");

        } else {
            themeToggle.textContent = "🌙 Dark Mode";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );
            themeToggle.setAttribute("aria-pressed", "false");
        }
    }

    localStorage.setItem("portfolio-theme", theme);
}

// Apply saved theme when page loads
applyTheme(savedTheme);

// Toggle theme on button click
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);
    });
}
