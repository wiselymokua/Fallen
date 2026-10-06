<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <img src="profile.jbg.webp" alt="Logo" class="logo">
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

   <main>
        <div class="hero">
            <h3>HELLO I'M WISELY MOKUA</h3>
            <p>An aspiring web developer with a passion for creating beautiful and functional websites.</p>
        </div>
        <div id="about">
            <div class="container">
                <h2>About Me</h2>
                <p>I am an undergraduate student at KCA University persuing a degree in Software Development.I stay in
                    Nairobi,Kenya where I develop my skills and knowledge in web development by taking part time gigs in
                    cyber cafes.</p>
            </div>
        </div>
        <div id="Skills">
            <div class="container">
                <h2>Skills</h2>
                <ul class="skills-list">
                    <li><img src="Skills/HTML.webp" alt="" loading="lazy"><span>HTML</span></li>
                    <li><img src="Skills/CSS.webp" alt="" loading="lazy"><span>CSS</span></li>
                    <li><img src="Skills/JavaScript.webp" alt="" loading="lazy"><span>JavaScript</span></li>
                    <li><img src="Skills/React.webp" alt="" loading="lazy"><span>React</span></li>
                    <li><img src="Skills/GitHub.webp" alt="" loading="lazy"><span>GitHub</span></li>
                    <li><img src="Skills/Vs%20Code.webp" alt="" loading="lazy"><span>VS Code</span></li>
                    <li><img src="Skills/MongoDB.webp" alt="" loading="lazy"><span>MongoDB</span></li>
                </ul>
            </div>
    </div>
        <div id="projects">
            <div class="container">
                <h2>Projects</h2>
                <p>Here are a few examples of the work I am doing done.</p>
                <ul class="project-gallery">
                    <li>
                        <button class="project-card" type="button" data-title="Exercise"
                            data-description="A project focused on exercise and fitness." data-image="Work/Exercise.webp"
                            aria-haspopup="dialog">
                            <img src="Work/Exercise.webp" alt="" loading="lazy">
                            <strong>Exercise</strong>
                            <span>A project focused on exercise and fitness.</span>
                            <span class="project-card-prompt">View details</span>
                        </button>
                    </li>
                    <li>
                        <button class="project-card" type="button" data-title="Food Delivery"
                            data-description="A project exploring a food delivery experience."
                            data-image="Work/Food%20Delivery.webp" aria-haspopup="dialog">
                            <img src="Work/Food%20Delivery.webp" alt="" loading="lazy">
                            <strong>Food Delivery</strong>
                            <span>A project exploring a food delivery experience.</span>
                            <span class="project-card-prompt">View details</span>
                        </button>
                    </li>
                    <li>
                        <button class="project-card" type="button" data-title="Maps"
                            data-description="A project focused on maps and location information."
                            data-image="Work/Maps.webp" aria-haspopup="dialog">
                            <img src="Work/Maps.webp" alt="" loading="lazy">
                            <strong>Maps</strong>
                            <span>A project focused on maps and location information.</span>
                            <span class="project-card-prompt">View details</span>
                        </button>
                    </li>
                    <li>
                        <button class="project-card" type="button" data-title="My Portfolio"
                            data-description="A project showcasing my skills and experience."
                            data-image="Work/Portfolio.webp" data-github="https://github.com/wiselymokua/walk"
                            aria-haspopup="dialog">
                            <img src="Work/Portfolio.webp" alt="My Portfolio preview" loading="lazy">
                            <strong>My Portfolio</strong>
                            <span>A project showcasing my skills and experience.</span>
                            <span class="project-card-prompt">View details</span>
                        </button>
                    </li>
                </ul>
                <dialog class="project-dialog" id="project-dialog" aria-labelledby="project-dialog-title">
                    <div class="project-dialog-heading">
                        <h3 id="project-dialog-title"></h3>
                        <button class="project-dialog-close" type="button">Close</button>
                    </div>
                    <img class="project-dialog-image" id="project-dialog-image" src="" alt="" loading="lazy">
                    <p id="project-dialog-description"></p>
                    <p><strong>Technology used for development:</strong> HTML, CSS and JavaScript.</p>
                    <p id="project-status"><strong>Status:</strong> Still Under Development. Coming soon.</p>
                    <a id="project-dialog-github" href="" target="_blank" rel="noopener noreferrer" hidden>View this
                        project on GitHub</a>
                </dialog>
            </div>
        </div>
        <div id="services">
            <div class="container">
                <h2>Services</h2>
                <ul class="service-list">
                    <li>
                        <img src="Services/Web%20Development.webp" loading="lazy"
                            alt="A hand reaches toward a glowing digital interface labeled WEB DEVELOPMENT, surrounded by icons for code, cloud services, mobile devices, documents, laptops, and databases on a dark blue connected technology background">
                        <h3>Basic Website Development</h3>
                        <p>Building websites with HTML, CSS, JavaScript, and React.</p>
                    </li>
                    <li>
                        <img src="Services/Responsive%20Design.webp" alt="Responsive design preview across screen sizes"
                            loading="lazy">
                        <h3>Basic Responsive Web Design</h3>
                        <p>Creating layouts that adapt to phones, tablets, and desktop screens.</p>
                    </li>
                    <li>
                        <img src="Services/website%20update.webp" alt="Website update preview" loading="lazy">
                        <h3>Basic Website Updates</h3>
                        <p>Improving the content, layout, and styling of existing web pages.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div id="github">
            <div class="container">
                <h2>GitHub</h2>
                <div id="github-profile" class="github-profile" aria-live="polite">
                    <div class="github-profile-loading">Loading GitHub profile…</div>
                </div>
                <ul id="github-repos" class="github-repos" aria-live="polite"></ul>
            </div>
        </div>
        <div id="contact">
            <div class="container">
                <div class="contact-left">
                    <h2>Contact Me</h2>
                    <p>If you would like to get in touch with me reach out to me via
                        email or social media.</p>
                    <ul class="contact-details">
                        <li><img src="Contact/phone.webp" alt="" loading="lazy"><a href="tel:+254727817470">072
                                781 7470</a></li>
                        <li><img src="Contact/E%20mail.webp" alt="" loading="lazy"><a
                                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=mokuawisely83%40gmail.com"
                                target="_blank" rel="noopener noreferrer">mokuawisely83@gmail.com</a></li>
                        <li><img src="Contact/Linked%20in.webp" alt="" loading="lazy"><a
                                href="https://www.linkedin.com/in/wisely-mokua-b836ab419" target="_blank"
                                rel="noopener noreferrer">LinkedIn</a></li>
                        <li><img src="Contact/Github.webp" alt="" loading="lazy"><a href="https://github.com/wiselymokua"
                                target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><img src="Contact/Location.webp" alt="" loading="lazy"><span>Nairobi, Kenya</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
