
// =====================================
// LAVENDER PORTFOLIO - THEME TOGGLE
// =====================================

const themeToggle = document.getElementById("theme-toggle");

// Apply the selected theme
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

// Load previously selected theme
const savedTheme = localStorage.getItem("portfolio-theme") || "light";

applyTheme(savedTheme);

// Switch theme when button is clicked
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);

    });

}


const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme
const savedTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);

// Update button appearance
function updateThemeButton(theme) {
    if (theme === "dark") {
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
        themeToggle.setAttribute("aria-pressed", "true");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
        themeToggle.setAttribute("aria-pressed", "false");
    }
}

if (themeToggle) {
    updateThemeButton(savedTheme);

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);

        localStorage.setItem("theme", newTheme);

        updateThemeButton(newTheme);
    });
}
