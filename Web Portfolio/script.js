

// Toggle Contact Information
function showContact() {
    const contactInfo = document.getElementById("contact-info");
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
}

// Sample skills data with names and values (percentage)
const skills = [
    { name: "JavaScript", value: 72 },
    { name: "HTML", value: 68 },
    { name: "CSS", value: 73 },
    { name: "Python", value: 93 },
    { name: "Java", value:  69},
    { name: "Dash", value: 30 },
    { name: "Powershell", value:  35},
    { name: "Azure", value:  30},
    { name: "AWS", value:  22},
    { name: "Microsoft365", value:  85},
    { name: "Automation", value:  60},
    { name: "Docker", value:  33}
];

// Function to generate the skill bars dynamically
// Function to generate the skill bars dynamically
function displaySkills() {
    const skillList = document.getElementById('skill-list');
    
    skills.forEach((skill, index) => {
        // Create a div for the skill bar
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';

        // Create a span element to represent the progress
        const skillProgress = document.createElement('span');
        skillProgress.className = 'skill-progress';
        skillProgress.style.backgroundColor = getColorForSkill(skill.value); // Set color
        skillProgress.textContent = `${skill.name}`; // Add skill name
        
        // Append the progress to the skill bar
        skillBar.appendChild(skillProgress);
        skillList.appendChild(skillBar);

        // Delay animation for each bar
        setTimeout(() => {
            skillProgress.style.width = skill.value + '%'; // Apply the animation
        }, index * 200); // Delay each bar by 200ms
    });
}

// Helper function to get a color based on the skill value
function getColorForSkill(value) {
    if (value >= 80) return '#0a2472'; 
    if (value >= 60) return '#023e8a'; 
    if (value >= 20) return '#0077b6';
    return '#a6e1fa';
}


// Call the function to display skills when the page loads
window.onload = displaySkills;


// Sample languages data with names and values (percentage)
const languages = [
    { name: "Vietnamese", value: 100 },
    { name: "Luxemburgish", value: 100 },
    { name: "English", value: 80 },
    { name: "French", value: 80 },
    { name: "German", value: 60 }
];

// Function to generate the language skills with stars
function displayLanguages() {
    const languageList = document.getElementById('language-list');
    languages.forEach(language => {
        // Create a div for the language skill
        const languageSkill = document.createElement('li');
        languageSkill.className = 'language-skill';
        
        // Create the stars for the skill level
        const stars = getStarsForSkill(language.value);
        
        // Add the language name and stars to the skill element
        languageSkill.textContent = `${language.name}: ` + stars;
        
        // Append the language skill to the language list
        languageList.appendChild(languageSkill);
    });
}

// Helper function to get stars based on the skill value
function getStarsForSkill(value) {
    const totalStars = 5; // Total number of stars
    const filledStars = Math.round(value / 20); // Calculate how many stars should be filled
    let stars = '';

    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
        stars += '★'; // Filled star
    }

    // Add empty stars
    for (let i = filledStars; i < totalStars; i++) {
        stars += '☆'; // Empty star
    }

    return stars;
}

// Call the function to display languages when the page loads
window.onload = function() {
    displaySkills(); // Assuming displaySkills() is already defined for programming skills
    displayLanguages(); // Display languages
};


// Sample hobbies data with names and optional icons
const hobbies = [
    { name: "Chess", icon: "chess-icon.png" },
    { name: "Breakdance", icon: "breaking-icon.png" },
    { name: "Martial Arts", icon: "martialart.png" },
    { name: "Boxing", icon: "boxing.png" },
    { name: "Coding", icon: "coding.png" },
    { name: "Traveling", icon: "travelling.png" }
];

// Function to generate the hobbies list
function displayHobbies() {
    const hobbyList = document.getElementById('hobby-list');
    hobbies.forEach(hobby => {
        // Create a div for each hobby
        const hobbyItem = document.createElement('li');
        hobbyItem.className = 'hobby-item';
        
        // If the hobby has an icon, add it
        if (hobby.icon) {
            const hobbyIcon = document.createElement('img');
            hobbyIcon.className = 'hobby-icon';
            hobbyIcon.src = hobby.icon;
            hobbyIcon.alt = hobby.name;
            hobbyItem.appendChild(hobbyIcon);
        }
        
        // Add the hobby name
        hobbyItem.appendChild(document.createTextNode(hobby.name));
        
        // Append the hobby item to the hobby list
        hobbyList.appendChild(hobbyItem);
    });
}

// Call the function to display hobbies when the page loads
window.onload = function() {
    displaySkills(); // Assuming displaySkills() is already defined for programming skills
    displayLanguages(); // Assuming displayLanguages() is already defined for languages
    displayHobbies(); // Display hobbies
};



const carousel = document.querySelector('.carousel');
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;
let index = 0;

function showNextSlide() {
    index++;
    if (index >= totalProjects-2) {
        index = 0; // Reset index to loop
    }
    updateCarousel();
}

function showPrevSlide() {
    index--;
    if (index < 0) {
        index = totalProjects - 1; // Go back to the last slide
    }
    updateCarousel();
}

function updateCarousel() {
    const projectWidth = projects[0].clientWidth; // Get the width of one project
    carousel.style.transform = `translateX(-${index * projectWidth}px)`;
}

let autoSlide = setInterval(showNextSlide, 4000); // Start auto-slide

function resetAutoSlide() {
    clearInterval(autoSlide); // Stop auto-slide
    autoSlide = setInterval(showNextSlide, 105000); // Restart after 8s of inactivity
}

// Event Listeners for Buttons
document.querySelector('.arrow.left').addEventListener('click', () => {
    showPrevSlide();
    resetAutoSlide(); // Restart auto-slide timer
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    showNextSlide();
    resetAutoSlide(); // Restart auto-slide timer
});
