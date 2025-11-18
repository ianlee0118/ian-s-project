document.addEventListener('DOMContentLoaded', function() {

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '#projects') {
                window.location.href = 'portfolio.html';
            } else if (href === '#about') {
                // Navigate to about.html
                window.location.href = 'index.html';
            }
        });
    });

    // Add animation to project items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Reset any hover effects
            document.querySelectorAll('.project-thumbnail').forEach(thumb => {
                thumb.style.transform = 'translateY(0)';
            });
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Create lined text for About Me section
    function createLinedText() {
        const textContent = 
`Imagine a world where there's no competition and you can have 
a safe space where you can be alone. I created a website called 
Ian's World in hopes of creating a great game where people can 
enjoy and relax. The website features little colorful boxes that 
you can destroy with circles. There is no real objective in the 
game, like a sandbox, you let your mind do anything you want to.  
My website features calming music that is very simple and easy 
to listen to. 

Contrary to popular belief, I don't like competition because if 
people see me lose, it can feel humiliating and frustrating. When 
creating a game, I didn't want to recreate that same feeling for 
other people, so I decided to make a calming destruction game. 
Destruction games are games where you break things you have made 
or what other people have made. Some people may think that 
destroying their buildings may make them sad, but what if there 
wasn't that much effort on it? You could just make it again easily. 

When I was in Korea, I was able to build technologies with coding, 
but now without the same resources in America, I can't build some 
of the things I imagine. In Korea, I was able to build metal 
detectors, race cars, and tiny lightbulbs on a panel that I coded 
to spell my name – all things I really enjoyed. So I decided to 
code my own game. I would love to attend your school to further 
elaborate on my coding project and create things I imagine. 

My website has a lot of different components. Some parts of my 
game do not have a lot of features, while some have a lot more 
details. The first game is my first coding project. I chose to 
keep it there to show how much I've grown from coding. The next 
one is a moving car. I chose a moving car because it's one of my 
earliest projects that I chose to make, and I also like cars. All 
of this was a stepping stone toward my final game. My final game 
took me about four months to complete, as it has over 300 lines 
of JavaScript. There's a part in my game where blocks collide 
with each other and that was the hardest part to make because I 
needed to check every block to see if any glitched. Sometimes 
blocks wouldn't be able to touch other blocks so I needed to fix 
that too. It took over a week to fix the collider of a block. 
Through this, I learned how to find simpler solutions for 
difficult tasks.

My goal is for everyone, from anywhere, at any age, to play my 
game. My game isn't about skill, it's just to relax and to let 
your mind do anything with the blocks. I hope other people can 
play my game in the future so I can add more changes to it.`;

        const lines = textContent.split('\n');
        const linedTextContainer = document.getElementById('lined-text');
        
        if (linedTextContainer) {
            linedTextContainer.innerHTML = '';
            
            lines.forEach((line, index) => {
                const lineElement = document.createElement('div');
                lineElement.className = 'text-line';
                
                if (line.trim() === '') {
                    // Empty line
                    lineElement.innerHTML = '<span class="line-number"></span><span class="line-content"></span>';
                } else {
                    // Text line
                    lineElement.innerHTML = `<span class="line-number">${index + 1}</span><span class="line-content">${line}</span>`;
                }
                
                linedTextContainer.appendChild(lineElement);
            });
        }
    }

    // Initialize lined text
    createLinedText();

});

