import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-card-container">
                <div class="project-card">
                    <a href="https://mustajab01.github.io/Age-Calculator/" target="noopener">
                        <img src="images/projects/age_calculator.png" alt="Age Calculator"/>
                        <h3>Age Calculator</h3>
                    </a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div class="project-card">
                    <a href="https://mustajab01.github.io/GPA-Calculator/" target="noopener">
                        <img src="images/projects/gpa_calculator.png" alt="GPA Calculator"/>
                        <h3>GPA Calculator</h3>
                    </a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div class="project-card">
                    <a href="https://mustajab01.github.io/Calculator/" target="noopener">
                        <img src="images/projects/simple_calculator.png" alt="Aritmetic Calculator"/>
                        <h3>Aritmetic Calculator</h3>
                    </a>    
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div class="project-card">
                    <a href="https://mustajab01.github.io/Countdown-Timer/" target="noopener">
                        <img src="images/projects/countown_timer.png" alt="Countdown Timer"/>
                        <h3>Countdown Timer</h3>
                    </a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div class="project-card">
                    <a href="https://mustajab01.github.io/Algorithms-Web-App/" target="noopener">
                        <img src="images/projects/sorting_algorithms_visualizer.png" alt="Sorting Algorithms Visualizer"/>
                        <h3>Sorting Algorithms Visualizer</h3>
                    </a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
                <div class="project-card">
                    <a href="https://mustajab01.github.io/OS-Algorithms/" target="noopener">
                        <img src="images/projects/scheduling_algorithms.png" alt="Scheduling Algorithms Visualizer"/>
                        <h3>Scheduling Algorithms Visualizer</h3>
                    </a>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
