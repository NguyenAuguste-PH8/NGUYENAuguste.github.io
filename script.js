// Toggle Contact Information
function showContact() {
    const contact = document.getElementById("contact-info");
    const button = document.getElementById("button");

    if (contact.style.display === "none") {
      contact.style.display = "block";
      button.textContent = "Hide Contact Form";
    } else {
      contact.style.display = "none";
      button.textContent = "Leave a Message";
    }
  }
document.addEventListener("DOMContentLoaded", () => {
    const words = ["Contact", "Hire", "Message", "Ping", "Reach"];
    let index = 0;
    const rotating = document.getElementById("rotating-word");
  
    function rotateWord() {
      rotating.classList.remove("fade-in");
      rotating.classList.add("fade-out");
  
      setTimeout(() => {
        index = (index + 1) % words.length;
        rotating.textContent = words[index];
  
        rotating.classList.remove("fade-out");
        rotating.classList.add("fade-in");
      }, 300);
    }
  
    setInterval(rotateWord, 2500);
  });
  
  const skills = [
    { name: "JavaScript", value: 73 },
    { name: "HTML", value: 83 },
    { name: "CSS", value: 78 },
    { name: "Python", value: 90 },
    { name: "Java", value: 69 },
    { name: "Bash", value: 47 },
    { name: "Powershell", value: 55 },
    { name: "Azure", value: 40 },
    { name: "AWS", value: 28 },
    { name: "Microsoft365", value: 87 },
    { name: "Automation", value: 65 },
    { name: "Docker", value: 40 }
];

function getColorForSkill(value) {
    if (value >= 80) return "#28a745";
    if (value >= 60) return "#ffc107";
    return "#dc3545";
}

function displaySkills() {
    const skillList = document.getElementById("skill-list");
    skillList.innerHTML = ""; // clear old content

    skills.forEach((skill, index) => {
        const skillBar = document.createElement("div");
        skillBar.className = "skill-bar";

        const skillProgress = document.createElement("span");
        skillProgress.className = "skill-progress";
        skillProgress.style.backgroundColor = getColorForSkill(skill.value);
        skillProgress.textContent = `${skill.name}`;

        skillBar.appendChild(skillProgress);
        skillList.appendChild(skillBar);

        // Delay animation
        setTimeout(() => {
            skillProgress.style.width = skill.value + "%";
            skillProgress.style.opacity = "1";
        }, index * 200);
    });
}

// Trigger animation on hover
const skillsSection = document.getElementById("skills");
skillsSection.addEventListener("mouseenter", displaySkills);


// Helper function to get a color based on the skill value
function getColorForSkill(value) {
    if (value >= 80) return '#0a2472'; 
    if (value >= 60) return '#023e8a'; 
    if (value >= 20) return '#0077b6';
    return '#a6e1fa';
}


const flagImages = [
    "Logos/flag_viet.png",
    "Logos/flag_lux.png",
    "Logos/flag_uk.png",
    "Logos/flag_france.png",
    "Logos/flag_german.png",
  ];
  
  let currentFlagIndex = 0;
  
  function rotateFlags() {
    const flagElement = document.getElementById("flag-icon");
  
    setInterval(() => {
      currentFlagIndex = (currentFlagIndex + 1) % flagImages.length;
      flagElement.src = flagImages[currentFlagIndex];
    }, 2200);
  }
  
  document.addEventListener("DOMContentLoaded", rotateFlags);
  
const flagGreetings = [
    "Logos/xinchao.gif",
    "Logos/moien.gif",
    "Logos/hello.gif",
    "Logos/bonjour.gif",
    "Logos/hallo.gif",
  ];
  
  let currentGreetingIndex = 0;
  
  function rotateGreetings() {
    const greetElement = document.getElementById("greetings");
  
    setInterval(() => {
      currentGreetingIndex = (currentGreetingIndex + 1) % flagGreetings.length;
      greetElement.src = flagGreetings[currentGreetingIndex];
    }, 2200);
  }
  
  document.addEventListener("DOMContentLoaded", rotateGreetings);
    

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



// Sample hobbies data with names and optional icons
const hobbies = [
    { name: "Chess", icons: ["Logos/chess-icon.png",  "Logos/stat.png",  "Logos/chess.gif" ]},
    { name: "Breakdance", icons: ["Logos/breaking-icon.png", "Logos/test0.gif", "Logos/test0.gif",  "Pictures/break.jpg", "Logos/break.gif", "Logos/break.gif"] },
    { name: "Martial Arts", icons: ["Logos/martialart.png", "Logos/boxing.png", "Logos/muay.png", "Logos/karate.png", "Logos/jujitsu.png"  ]},
    { name: "Foodie", icons: ["Logos/foodie.png", "Logos/pho.jpeg", "Logos/friedrice.jpg","Logos/steak.jpg", "Logos/banhmi.gif", "Logos/bunbohue.jpg"] },
    { name: "Coding", icons: ["Logos/coding.png", "Logos/fun1.gif", "Logos/fun.gif"]},
    { name: "Traveling", icons: ["Logos/travelling.png", "Logos/travelling.jpg", "Logos/you.jpg", "Pictures/ninhbinh.jpg","Pictures/hagiang.jpg", "Pictures/buddha.jpg" ] }
];

const hobbiesSection = document.getElementById('hobbies');

document.addEventListener('mouseover', (e) => {
    if (
        hobbiesSection.contains(e.target) || 
        (activeClone && activeClone.contains(e.target))
    ) {
        hobbiesSection.classList.add('hovering-hobbies');
    } else {
        hobbiesSection.classList.remove('hovering-hobbies');
    }
});

let activeClone = null;
// Function to generate the hobbies list
function displayHobbies() {
    const hobbyList = document.getElementById('hobby-list');

    hobbies.forEach(hobby => {
        const hobbyItem = document.createElement('li');
        hobbyItem.className = 'hobby-item';

        if (hobby.icons && hobby.icons.length > 0) {
            const hobbyIcon = document.createElement('img');
            hobbyIcon.className = 'hobby-icon';
            hobbyIcon.src = hobby.icons[0]; // Start with the first icon
            hobbyIcon.alt = hobby.name;

            let intervalId;


            hobbyIcon.addEventListener('mouseenter', () => {
                if (hobby.icons.length > 1) {
                    let index = 1; // Start at the second image
                    hobbyIcon.src = hobby.icons[index]; // Instantly switch to the second image
            
                    intervalId = setInterval(() => {
                        //index = (index + 1) % hobby.icons.length; // Cycle through images
                        index = index + 1; // Move to the next image
                        if (index >= hobby.icons.length) index = 1; // Skip first image, loop from second one
                        hobbyIcon.src = hobby.icons[index]; 
                    }, 3500); // Change every 3.5 seconds
                }
            });
            

            hobbyIcon.addEventListener('mouseleave', () => {
                clearInterval(intervalId); // Stop the slideshow
                hobbyIcon.src = hobby.icons[0]; // Reset to the first image
            });

            hobbyIcon.addEventListener('click', () => {
                if (activeClone) {
                    document.body.removeChild(activeClone);
                    activeClone = null;
                    return;
                }
            
                // Create a new image element
                const clone = document.createElement('img');
                clone.src = hobbyIcon.src;
                clone.alt = hobbyIcon.alt;
                clone.classList.add('half-screen');
            
                // Styling
                clone.style.position = 'fixed';
                clone.style.top = '5%';
                clone.style.left = '5%';
                clone.style.width = '90%';
                clone.style.height = '90%';
                clone.style.zIndex = '9999';
                clone.style.boxShadow = '0 0 20px rgba(0,0,0,0.6)';
                clone.style.borderRadius = '12px';
                clone.style.transition = 'all 0.3s ease';
            
                // Slideshow logic
                let cloneInterval;
                if (hobby.icons.length > 1) {
                    let index = 1;
                    cloneInterval = setInterval(() => {
                        index = index + 1;
                        if (index >= hobby.icons.length) index = 1;
                        clone.src = hobby.icons[index];
                    }, 3500);
                }
            
                // Close on click
                clone.addEventListener('click', () => {
                    clearInterval(cloneInterval);
                    document.body.removeChild(clone);
                    activeClone = null;
                    // Enable scrolling when the clone is removed
                  
                });

                
               
                
            
                // Close on mouse leave
                clone.addEventListener('mouseleave', () => {
                    clearInterval(cloneInterval);
                    document.body.removeChild(clone);
                    activeClone = null;
                    
                });
            
                // Or close if mouse leaves the bounds of the image
                document.addEventListener('mousemove', (e) => {
                    if (!activeClone) return;
                    const bounds = clone.getBoundingClientRect();
                    const inBounds = (
                        e.clientX >= bounds.left &&
                        e.clientX <= bounds.right &&
                        e.clientY >= bounds.top &&
                        e.clientY <= bounds.bottom
                    );
            
                    if (!inBounds) {
                        clearInterval(cloneInterval);
                        document.body.removeChild(clone);
                        activeClone = null;
                    }
                });
            
                // Add to DOM
                document.body.appendChild(clone);
                activeClone = clone;
            });
            hobbyItem.appendChild(hobbyIcon);
        }

        hobbyItem.appendChild(document.createTextNode(hobby.name));
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
    if (index >= totalProjects) {
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


