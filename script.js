// Animasi saat scroll
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(container);
});

// Efek hover di button
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.boxShadow = "0 0 15px rgba(106, 0, 244, 0.8)";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.boxShadow = "none";
    });
});