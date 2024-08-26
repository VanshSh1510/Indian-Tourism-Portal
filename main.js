document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Example of a function to dynamically load content (if needed)
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Event listeners for additional interactivity
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            showLightbox(imgSrc);
        });
    });

    // Function to show images in a lightbox (simple version)
    function showLightbox(imgSrc) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `<span class="close" onclick="this.parentElement.style.display='none'">&times;</span>
                              <img src="${imgSrc}" />`;
        document.body.appendChild(lightbox);
    }
});

// Lightbox CSS (if you want to include it in your CSS file)
// You can also include it in main.js as a style element
const lightboxStyle = `
    #lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    #lightbox img {
        max-width: 90%;
        max-height: 90%;
    }
    .close {
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = lightboxStyle;
document.head.appendChild(styleSheet);
