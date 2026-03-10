const layoutHTML = `
    <header>
        <div class="header-container">
            <img src="logo.jpg" alt="Logo" class="logo">
            <h1>Dhruv Sharma</h1>
        </div>
    </header>		
    <nav>
        <ul>
            <li><a href="index.html" id="nav-home">Home</a></li>
            <li><a href="about.html" id="nav-about">About</a></li>
            <li><a href="projects.html" id="nav-projects">Projects</a></li>
            <li><a href="contact.html" id="nav-contact">Contact me</a></li>
        </ul>
    </nav>
`;

function loadLayout() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = layoutHTML;

        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        
        const navLinks = {
            "index.html": "nav-home",
            "about.html": "nav-about",
            "projects.html": "nav-projects",
            "contact.html": "nav-contact"
        };

        const activeLinkId = navLinks[currentPage];
        if (activeLinkId) {
            const activeLink = document.getElementById(activeLinkId);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', loadLayout);
