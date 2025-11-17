document.addEventListener('DOMContentLoaded', function() {
    const projectData = {
        'game5': {
            title: 'Game 5',
            name: 'Game 5',
            description: 'The final and most complex game project featuring physics simulation, collision detection, and particle effects. This project demonstrates advanced programming concepts and game development techniques.',
            previewPath: 'game5/sketch.html',
            descriptionPath: 'game5/README.md',
            codePath: ['game5/game5.js', 'game5/ball.js', 'game5/box.js', 'game5/ground.js', 'game5/particle.js'],
            category: 'Games',
            thumbnailPath: 'thumbnails/Game 5.png'
        },
        'game4': {
            title: 'Game 4',
            name: 'Game 4',
            description: 'An interactive physics-based game with collision detection and particle effects. This is one of the more complex projects that combines multiple programming concepts.',
            previewPath: 'game4/sketch.html',
            descriptionPath: 'game4/README.md',
            codePath: ['game4/game4.js', 'game4/ball.js', 'game4/box.js', 'game4/ground.js', 'game4/particle.js'],
            category: 'Games',
            thumbnailPath: 'thumbnails/Game 4.png'
        },
        'number1234': {
            title: 'Number 1234',
            name: 'Number 1234',
            description: 'A stylized number display project that demonstrates text rendering and positioning in p5.js. The numbers are displayed with custom styling and positioning.',
            previewPath: 'number1234/index.html',
            descriptionPath: 'number1234/README.md',
            codePath: 'number1234/sketch.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/Number 1234.png'
        },
        'shape1': {
            title: 'Shape 1',
            name: 'Shape 1',
            description: 'Basic shape drawing and positioning project. This is one of the first projects that demonstrates fundamental drawing functions in p5.js.',
            previewPath: 'shape_1/index.html',
            descriptionPath: 'shape_1/README.md',
            codePath: 'shape_1/shape.js',
            category: 'Drawing & Shapes',
            thumbnailPath: 'thumbnails/Shape 1.png'
        },
        'shape_2': {
            title: 'Shape 2',
            name: 'Shape 2',
            description: 'A geometric shapes project showcasing different colored shapes including rectangles, squares, circles, and ovals. This project demonstrates basic drawing functions and color manipulation in p5.js.',
            previewPath: 'shape_2/index.html',
            descriptionPath: 'shape_2/README.md',
            codePath: 'shape_2/shape_1.js',
            category: 'Drawing & Shapes',
            thumbnailPath: 'thumbnails/Shape 2.png'
        },
        'car': {
            title: 'Moving Car',
            name: 'Moving Car',
            description: 'An animated car with wheels, windows, and headlights. This project shows object-oriented programming concepts and animation techniques using p5.js.',
            previewPath: 'car/car.html',
            descriptionPath: 'car/README.md',
            codePath: 'car/car.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Moving Car.png'
        },
        'draw': {
            title: 'Free Draw',
            name: 'Free Draw',
            description: 'An interactive drawing canvas where users can create free-form drawings using mouse input. This project demonstrates mouse event handling and drawing functions.',
            previewPath: 'draw/draw.html',
            descriptionPath: 'draw/README.md',
            codePath: 'draw/draw.js',
            category: 'Mouse Interaction',
            thumbnailPath: 'thumbnails/Free Draw.png'
        },
        'draw_press': {
            title: 'Click Draw',
            name: 'Click Draw',
            description: 'A drawing project that responds to mouse click events. This demonstrates event handling and interactive drawing techniques.',
            previewPath: 'draw_mousePressed/draw_Press.html',
            descriptionPath: 'draw_mousePressed/README.md',
            codePath: 'draw_mousePressed/draw_Press.js',
            category: 'Mouse Interaction',
            thumbnailPath: 'thumbnails/Click Draw.png'
        },
        'draw_drag': {
            title: 'Lagging Circles',
            name: 'Lagging Circles',
            description: 'Interactive circles that follow mouse movement with a lagging effect. This project demonstrates mouse tracking and smooth animation.',
            previewPath: 'draw_mouseDragged/draw_Drag.html',
            descriptionPath: 'draw_mouseDragged/README.md',
            codePath: 'draw_mouseDragged/draw_Drag.js',
            category: 'Mouse Interaction',
            thumbnailPath: 'thumbnails/Lagging Circles.png'
        },
        'draw_alpha': {
            title: 'Ghost Drawing',
            name: 'Ghost Drawing',
            description: 'A drawing project with alpha transparency effects creating ghost-like visual effects. This demonstrates transparency and layering techniques.',
            previewPath: 'draw_Alpha/draw_Alpha.html',
            descriptionPath: 'draw_Alpha/README.md',
            codePath: 'draw_Alpha/draw_Alpha.js',
            category: 'Mouse Interaction',
            thumbnailPath: 'thumbnails/Ghost Drawing.png'
        },
        'color_change': {
            title: 'Color Dancing Car',
            name: 'Color Dancing Car',
            description: 'An animated car with dynamic color changes and dancing effects. This project combines animation with color manipulation.',
            previewPath: 'ColorChange/ColorChange.html',
            descriptionPath: 'ColorChange/README.md',
            codePath: 'ColorChange/ColorChange.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Color Dancing Car.png'
        },
        'random1': {
            title: 'Random Colors',
            name: 'Random Colors',
            description: 'A project that generates random colorful elements on the canvas. This demonstrates random number generation and color manipulation in p5.js.',
            previewPath: 'Random_1/random_1.html',
            descriptionPath: 'Random_1/README.md',
            codePath: 'Random_1/random_1.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/Random Colors.png'
        },
        'random2': {
            title: 'Random Fireworks',
            name: 'Random Fireworks',
            description: 'Randomly generated firework animations with colorful particle effects. This project demonstrates particle systems and random generation.',
            previewPath: 'Random_2/random_2.html',
            descriptionPath: 'Random_2/README.md',
            codePath: 'Random_2/random_2.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/Random Fireworks.png'
        },
        'position_input': {
            title: 'Position&Input',
            name: 'Position&Input',
            description: 'A project demonstrating position tracking and user input handling. This shows how to respond to various input methods.',
            previewPath: 'Position and Input/PandI.html',
            descriptionPath: 'Position and Input/README.md',
            codePath: 'Position and Input/PandI.js',
            category: 'Mouse Interaction',
            thumbnailPath: 'thumbnails/Position&Input.png'
        },
        'bounce': {
            title: 'Bouncy Ball',
            name: 'Bouncy Ball',
            description: 'A physics-based bouncing ball animation that demonstrates collision detection and basic physics simulation using p5.js.',
            previewPath: 'Bounce/Bounce.html',
            descriptionPath: 'Bounce/README.md',
            codePath: 'Bounce/Bounce.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Bouncy Ball.png'
        },
        'bounce_random': {
            title: 'Party Bouncy Ball',
            name: 'Party Bouncy Ball',
            description: 'An enhanced bouncing ball with party effects and colorful animations. This project combines physics simulation with visual effects.',
            previewPath: 'Bounce+Random/Bounce+Random.html',
            descriptionPath: 'Bounce+Random/README.md',
            codePath: 'Bounce+Random/Bounce+Random.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Party Bouncy Ball.png'
        },
        'for_1': {
            title: 'For_1',
            name: 'For_1',
            description: 'A project demonstrating basic for loop concepts and iteration. This shows fundamental programming control structures.',
            previewPath: 'for_1/for_1.html',
            descriptionPath: 'for_1/README.md',
            codePath: 'for_1/for_1.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/For_1.png'
        },
        'for_2': {
            title: 'For_2',
            name: 'For_2',
            description: 'An advanced for loop project with nested iterations and complex patterns. This demonstrates advanced loop programming techniques.',
            previewPath: 'for_2/for_2.html',
            descriptionPath: 'for_2/README.md',
            codePath: 'for_2/for_2.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/For_2.png'
        },
        'ball_element': {
            title: 'Bouncy Ball Element',
            name: 'Bouncy Ball Element',
            description: 'A bouncing ball implemented using object-oriented programming principles. This demonstrates class-based programming concepts.',
            previewPath: 'Ball_element/Ball_element.html',
            descriptionPath: 'Ball_element/README.md',
            codePath: 'Ball_element/Ball_element.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Bouncy Ball Element.png'
        },
        'ball_element_function': {
            title: 'Ball Element Function',
            name: 'Ball Element Function',
            description: 'A bouncing ball project using functional programming approaches. This demonstrates function-based programming patterns.',
            previewPath: 'Ball_element_function/Ball_element_function.html',
            descriptionPath: 'Ball_element_function/README.md',
            codePath: 'Ball_element_function/Ball_element_function.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Ball Element Function.png'
        },
        'jeffrey': {
            title: 'Jeffrey',
            name: 'Jeffrey',
            description: 'A character-based animation project featuring Jeffrey. This demonstrates character design and animation techniques.',
            previewPath: 'Jeffrey/Jeffrey.html',
            descriptionPath: 'Jeffrey/README.md',
            codePath: 'Jeffrey/Jeffrey.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Jeffrey.png'
        },
        'pushpop1': {
            title: 'PushPop 1',
            name: 'PushPop 1',
            description: 'A project demonstrating push/pop matrix transformations. This shows fundamental transformation concepts in graphics programming.',
            previewPath: 'PushPop_1/PushPop_1.html',
            descriptionPath: 'PushPop_1/README.md',
            codePath: 'PushPop_1/PushPop_1.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/PushPop 1.png'
        },
        'pushpop2': {
            title: 'PushPop 2',
            name: 'PushPop 2',
            description: 'Character animation with push/pop matrix transformations. This project demonstrates matrix transformations and character animation.',
            previewPath: 'PushPop_2/PushPop_2.html',
            descriptionPath: 'PushPop_2/README.md',
            codePath: 'PushPop_2/PushPop_2.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/PushPop 2.png'
        },
        'jitterbug': {
            title: 'JitterBug',
            name: 'JitterBug',
            description: 'Animated characters with jittery movement effects. This project demonstrates animation loops and character movement patterns.',
            previewPath: 'JitterBug/JitterBug.html',
            descriptionPath: 'JitterBug/README.md',
            codePath: 'JitterBug/JitterBug.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/JitterBug.png'
        },
        'array': {
            title: 'Array',
            name: 'Array',
            description: 'Multiple elements managed using arrays. This project demonstrates array manipulation and iteration in p5.js.',
            previewPath: 'Array/Array.html',
            descriptionPath: 'Array/README.md',
            codePath: 'Array/Array.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/Array.png'
        },
        'array_function': {
            title: 'JitterArray',
            name: 'JitterArray',
            description: 'An array-based project with jittery animation effects. This combines array management with animation techniques.',
            previewPath: 'Array_function/JitterArray.html',
            descriptionPath: 'Array_function/README.md',
            codePath: 'Array_function/JitterArray.js',
            category: 'Array & Iteration',
            thumbnailPath: 'thumbnails/JitterArray.png'
        },
        'class_1': {
            title: 'Class',
            name: 'Class',
            description: 'A basic class implementation project. This demonstrates object-oriented programming fundamentals.',
            previewPath: 'Class_1/Class_1.html',
            descriptionPath: 'Class_1/README.md',
            codePath: 'Class_1/Class_1.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Class.png'
        },
        'class_2': {
            title: 'Class: ClickJitter',
            name: 'Class: ClickJitter',
            description: 'A class-based project with click-triggered jitter effects. This demonstrates event handling within classes.',
            previewPath: 'Class_2/Class_2.html',
            descriptionPath: 'Class_2/README.md',
            codePath: 'Class_2/Class_2.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Class_ ClickJitter.png'
        },
        'class_mouse_1': {
            title: 'Class: Mouse Click',
            name: 'Class: Mouse click',
            description: 'A class-based project responding to mouse click events. This demonstrates mouse interaction within object-oriented programming.',
            previewPath: 'Class_mouseInput_1/Class_mouseInput_1.html',
            descriptionPath: 'Class_mouseInput_1/README.md',
            codePath: 'Class_mouseInput_1/Class_mouseInput_1.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Class_ Mouse click.png'
        },
        'class_mouse_2': {
            title: 'Class: Mouse Click 2',
            name: 'Class: Mouse click 2',
            description: 'An advanced class-based project with enhanced mouse click interactions. This demonstrates complex event handling patterns.',
            previewPath: 'Class_mouseInput_2/Class_mouseInput_2.html',
            descriptionPath: 'Class_mouseInput_2/README.md',
            codePath: 'Class_mouseInput_2/Class_mouseInput_2.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Class_ Mouse click 2.png'
        },
        'class_mouse_array': {
            title: 'Class: Jitter Erase',
            name: 'Class: Jitter Erase',
            description: 'A class-based project combining array management with jitter effects and erase functionality. This demonstrates complex object interactions.',
            previewPath: 'Class_mouseInput_Array/Class_mouseInput_Array.html',
            descriptionPath: 'Class_mouseInput_Array/README.md',
            codePath: 'Class_mouseInput_Array/Class_mouseInput_Array.js',
            category: 'Motion & Interaction',
            thumbnailPath: 'thumbnails/Class_ Jitter Erase.png'
        },
        'bumping': {
            title: 'Black & White Bumping Circles',
            name: 'Black & White Bumping Circles',
            description: 'Interactive circles that bump into each other with collision detection. This project demonstrates object interaction and collision physics.',
            previewPath: 'bumping/bumping.html',
            descriptionPath: 'bumping/README.md',
            codePath: 'bumping/bumping.js',
            category: 'Collision & Effects',
            thumbnailPath: 'thumbnails/Black & White Bumping Circles.png'
        },
        'explode': {
            title: 'Explode',
            name: 'Explode',
            description: 'A particle explosion effect project. This demonstrates particle systems and visual effects programming.',
            previewPath: 'explode/explode.html',
            descriptionPath: 'explode/README.md',
            codePath: 'explode/explode.js',
            category: 'Collision & Effects',
            thumbnailPath: 'thumbnails/Explode.png'
        },
        'ball_drop': {
            title: 'Ball Drop',
            name: 'Ball Drop',
            description: 'A physics simulation of balls dropping with gravity effects. This demonstrates physics simulation and gravity programming.',
            previewPath: 'ball drop/ball drop.html',
            descriptionPath: 'ball drop/README.md',
            codePath: 'ball drop/ball drop.js',
            category: 'Collision & Effects',
            thumbnailPath: 'thumbnails/Ball Drop.png'
        },
        'ball_canvases': {
            title: 'Canvases Practice 1',
            name: 'Canvases Practice 1',
            description: 'A practice project working with multiple canvases. This demonstrates canvas management and multi-canvas programming.',
            previewPath: 'Ball_Canvases/Ball_Canvases.html',
            descriptionPath: 'Ball_Canvases/README.md',
            codePath: 'Ball_Canvases/Ball_Canvases.js',
            category: 'Canvas Practice',
            thumbnailPath: 'thumbnails/Canvases Practice 1.png'
        },
        'canvases': {
            title: 'Canvases Practice 2',
            name: 'Canvases Practice 2',
            description: 'An advanced multi-canvas project with complex interactions. This demonstrates advanced canvas programming techniques.',
            previewPath: 'Canvases/Canvases.html',
            descriptionPath: 'Canvases/README.md',
            codePath: 'Canvases/Canvases.js',
            category: 'Canvas Practice',
            thumbnailPath: 'thumbnails/Canvases Practice 2.png'
        },
        'game1': {
            title: 'Game 1',
            name: 'Game 1',
            description: 'The first game project featuring basic game mechanics and interactions. This demonstrates fundamental game development concepts.',
            previewPath: 'game1/index.html',
            descriptionPath: 'game1/README.md',
            codePath: ['game1/sketch.js', 'game1/Box.js', 'game1/Circle.js'],
            category: 'Games',
            thumbnailPath: 'thumbnails/Game 1.png'
        },
        'game2': {
            title: 'Game 2',
            name: 'Game 2',
            description: 'An intermediate game project with enhanced mechanics and visual effects. This builds upon basic game development concepts.',
            previewPath: 'game2/sketch.html',
            descriptionPath: 'game2/README.md',
            codePath: ['game2/game2.js', 'game2/box.js'],
            category: 'Games',
            thumbnailPath: 'thumbnails/Game 2.png'
        },
        'game3': {
            title: 'Game 3',
            name: 'Game 3',
            description: 'An advanced game project with complex interactions and physics. This demonstrates sophisticated game development techniques.',
            previewPath: 'game3/sketch.html',
            descriptionPath: 'game3/README.md',
            codePath: ['game3/game3.js', 'game3/ball.js', 'game3/box.js', 'game3/ground.js'],
            category: 'Games',
            thumbnailPath: 'thumbnails/Game 3.png'
        }
    };

    const projectThumbnails = document.querySelectorAll('.project-thumbnail');
    const modal = document.getElementById('projectModal');
    
    projectThumbnails.forEach(thumbnail => {
        const projectKey = thumbnail.getAttribute('data-project');
        const project = projectData[projectKey];
        
        if (project && project.thumbnailPath) {
            const img = thumbnail.querySelector('.thumbnail-image');
            if (img) {
                img.src = project.thumbnailPath;
                img.alt = project.title;
            }
        }
        
        thumbnail.addEventListener('click', function() {
            openProjectModal(projectKey);
        });
    });

    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '#projects') {
                document.querySelector('.categories').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (href === '#about') {
                // Navigate to about
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

    // Observe all project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Add category filtering functionality
    const categories = document.querySelectorAll('.category');
    const allProjects = document.querySelectorAll('.project-item');
    const categoriesTitle = document.querySelector('.categories-title');
    
    // Add click event to "All Projects" title
    categoriesTitle.addEventListener('click', function() {
        // Remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
        
        // Show all projects
        allProjects.forEach(project => {
            project.style.display = 'flex';
        });
    });
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // Get the category text (remove the "/ " prefix)
            const categoryText = this.textContent.replace('/ ', '').trim();
            
            // Filter projects based on category
            allProjects.forEach(project => {
                const projectKey = project.querySelector('.project-thumbnail').getAttribute('data-project');
                const projectInfo = projectData[projectKey];
                
                if (projectInfo.category === categoryText) {
                    project.style.display = 'flex';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

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

    // Modal functions
    function openProjectModal(projectKey) {
        const project = projectData[projectKey];
        if (!project) {
            console.warn(`Project data not found for: ${projectKey}`);
            return;
        }

        // Update modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('projectDescription').textContent = project.description;
        
        // Set preview iframe source
        const previewFrame = document.getElementById('previewFrame');
        previewFrame.src = project.previewPath;
        
        // Load code content
        loadCodeContent(project.codePath);
        loadDescriptionContent(project.descriptionPath);
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // Clear iframe source to stop any running animations
        const previewFrame = document.getElementById('previewFrame');
        previewFrame.src = '';
    }

    function loadCodeContent(codePath) {
        const codeContent = document.getElementById('codeContent');
        codeContent.textContent = 'Loading code...';
        
        // Check if codePath is an array (multiple files) or single file
        if (Array.isArray(codePath)) {
            loadMultipleCodeFiles(codePath, codeContent);
        } else {
            loadSingleCodeFile(codePath, codeContent);
        }
    }
    
    function loadSingleCodeFile(codePath, codeContent) {
        fetch(codePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Code file not found');
                }
                return response.text();
            })
            .then(code => {
                // Create a pre element with code element for syntax highlighting
                codeContent.innerHTML = `<pre><code class="language-javascript">${code}</code></pre>`;
                
                // Apply syntax highlighting
                hljs.highlightElement(codeContent.querySelector('code'));
            })
            .catch(error => {
                console.warn(`Could not load code for ${codePath}:`, error);
                codeContent.textContent = `// Code file not available: ${codePath}\n// This project's source code could not be loaded.`;
            });
    }
    
    function loadMultipleCodeFiles(codePaths, codeContent) {
        const promises = codePaths.map(path => 
            fetch(path)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Code file not found: ${path}`);
                    }
                    return response.text();
                })
                .then(code => ({ path, code }))
                .catch(error => {
                    console.warn(`Could not load code for ${path}:`, error);
                    return { path, code: `// Code file not available: ${path}\n// This file could not be loaded.` };
                })
        );
        
        Promise.all(promises)
            .then(results => {
                let combinedCode = '';
                results.forEach(({ path, code }, index) => {
                    const fileName = path.split('/').pop();
                    if (index > 0) combinedCode += '\n\n';
                    combinedCode += `// ===== ${fileName} =====\n`;
                    combinedCode += code;
                });
                
                // Create a pre element with code element for syntax highlighting
                codeContent.innerHTML = `<pre><code class="language-javascript">${combinedCode}</code></pre>`;
                
                // Apply syntax highlighting
                hljs.highlightElement(codeContent.querySelector('code'));
            })
            .catch(error => {
                console.error('Error loading multiple code files:', error);
                codeContent.textContent = '// Error loading code files';
            });
    }

    function loadDescriptionContent(descriptionPath) {
        const descriptionContent = document.getElementById('projectDescription');
        descriptionContent.textContent = 'Loading description...';
        
        fetch(descriptionPath)
            .then(response => {
                return response.text();
            })
            .then(description => {
                descriptionContent.textContent = description;
            })
            .catch(error => {
                console.warn(`Could not load description for ${descriptionPath}:`, error);
                descriptionContent.textContent = `// Description file not available: ${descriptionPath}\n// This project's description could not be loaded.`;
            });
    }

    // Tab switching functionality
    function switchTab(tabName) {
        // Remove active class from all tabs and panes
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to selected tab and pane
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    // Event listeners for modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});

