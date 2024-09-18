document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
        contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const exploreGrid = document.querySelector('.explore-grid');
    
    const projects = [
        { title: 'Project 1: Awesome Web App', image: 'images/project1.jpg' },
        { title: 'Project 2: AI Chatbot', image: 'images/project2.jpg' },
        { title: 'Project 3: Data Analytics Tool', image: 'images/project3.jpg' },
        // 더 많은 프로젝트 데이터 추가 가능
    ];

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('explore-item');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const h4 = document.createElement('h4');
        h4.innerText = project.title;

        overlay.appendChild(h4);
        projectItem.appendChild(img);
        projectItem.appendChild(overlay);
        exploreGrid.appendChild(projectItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectGallery = document.getElementById('project-gallery');

    // 프로젝트 배열 예시
    const projects = []; // 현재 프로젝트가 없다고 가정

    if (projects.length === 0) {
        const noProjectsMessage = document.createElement('p');
        noProjectsMessage.innerText = '아직 프로젝트가 없습니다';
        noProjectsMessage.style.color = '#777';
        noProjectsMessage.style.textAlign = 'center';
        projectGallery.appendChild(noProjectsMessage);
    } else {
        // 프로젝트가 있을 경우 프로젝트 카드를 추가하는 로직
        projects.forEach(function(project) {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            
            const projectTitle = document.createElement('h3');
            projectTitle.innerText = project.title;
            
            const projectDescription = document.createElement('p');
            projectDescription.innerText = project.description;
            
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDescription);
            projectGallery.appendChild(projectCard);
        });
    }
});
