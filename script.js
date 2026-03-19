function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Theme Toggle Functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Run on page load
initTheme();

const projectData = {
  tpb: {
    img: './assets/fnf.png',
    title: 'Title Plant Builder (TPB)',
    desc: 'At Legacies Techno Pvt Ltd, I worked on an enterprise application for document processing and property record management.',
    heading: 'Tech Stack',
    tags: ['SvelteKit', 'Node JS', 'Express JS', 'Ms SQL', 'Flowbite Svelte', 'Tailwind CSS', 'Azure OCR', 'REST API'],
    features: [
      'Developed data processing and validation workflows using Node.js, Express.js, and Sequelize with MS SQL Server, including OCR pipelines powered by Azure OCR and Tesseract.js',
      'Built responsive, component-driven UI modules with SvelteKit, Flowbite Svelte, and Tailwind CSS for document classification, cross-referencing, and property record visualization.',
      'Designed relational database models in MS SQL Server to manage county property records, indexing structures, and automated validation rules.',
    ],
    role: 'Collaborated with cross-functional teams to design and develop full-stack features, contributing to backend data processing, OCR-based validation workflows, frontend UI development, and database design for property record management systems.',
  },
  fm: {
    img: './assets/factory_tool.png',
    title: 'Factory Tool – IoT Monitoring & Automation System',
    desc: 'At Legacies Techno Pvt Ltd, I worked on developing an enterprise grade IoT based system designed to monitor and automate industrial operations in real time.',
    heading: 'Tech Stack',
    tags: ['React Js', 'Node JS', 'Express JS', 'Ms SQL', 'Tailwind CSS', 'MQTT', 'IoT Devices', 'Arduino'],
    features: [
      'This is an enterprise-level application designed to monitor and automate factory operations using IoT devices. The system integrates sensors such as air quality, vibration, and sound using MQTT-based communication with devices like Arduino and ESP32.',
      'I developed real-time dashboards to visualize machine data, enabling operators to monitor performance and detect anomalies. The backend was built using Node.js and Express.js to handle high-frequency sensor data and provide secure APIs. MongoDB was used to store and manage device and analytics data.',
      'The system also includes automation features such as machine shutdown based on threshold conditions, improving safety and operational efficiency. Additionally, I implemented modules for employee management and machine analytics to support decision-making.',
      
    ],
    role: 'Collaborated with team members and stakeholders during development, while also taking ownership of end-to-end implementation including frontend, backend, and system integration.',

  },
  vault: {
    img: './assets/lynt_X.png',
    title: 'Lyntx Labs – Vault (Billing & AI Data Validator)',
    desc: 'At Legacies Techno Pvt Ltd, I worked on Lynt X Vault, the company’s proprietary enterprise application for document processing and property record management.',
    heading: 'Tech Stack',
    tags: ['Next JS', 'Node JS', 'Express JS', 'MongoDB', 'Tailwind CSS', 'OpenAI' ],
    features: [
      'Built billing dashboards and validation workflows using Next.js and Tailwind CSS, improving data visibility and user experience.',
      'Developed AI-assisted data validation features using OpenAI to detect anomalies, mismatches, and billing inconsistencies.',
      'Implemented backend data-cleanup and monitoring pipelines with PostgreSQL, ensuring accurate and reliable billing records.',
    ],
    role: 'Built the full stack Next js frontend with real-time updates and a Node/Express backend connected to MongoDB.',

  },
};

function openProjectSlider(key) {
  const p = projectData[key];
  if (!p) return;

  document.getElementById('sliderImg').src = p.img;
  document.getElementById('sliderImg').alt = p.title;
  document.getElementById('sliderTitle').textContent = p.title;
  document.getElementById('sliderDesc').textContent = p.desc;
  document.getElementById('sliderRole').textContent = p.role;

  document.getElementById('sliderTags').innerHTML = p.tags
    .map(t => `<span class="slider-tag">${t}</span>`).join('');

  document.getElementById('sliderFeatures').innerHTML = p.features
    .map(f => `<li>${f}</li>`).join('');

  const btns = document.getElementById('sliderBtns');
  btns.innerHTML = '';
  if (p.github) btns.innerHTML += `<button class="btn btn-color-2 project-btn" onclick="window.open('${p.github}')">GitHub</button>`;
  if (p.demo) btns.innerHTML += `<button class="btn btn-color-1 project-btn" onclick="window.open('${p.demo}')">Live Demo</button>`;

  document.getElementById('projectSlider').classList.add('open');
  document.getElementById('projectOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectSlider() {
  document.getElementById('projectSlider').classList.remove('open');
  document.getElementById('projectOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
