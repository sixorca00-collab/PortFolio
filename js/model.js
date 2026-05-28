// ============================================
// MODEL — Datos y métodos de acceso
// ============================================
const Model = {
    // --- Datos del perfil ---
    profile: {
        name: "Juan Olarte",
        role: "Junior FullStack Developer",
        bio: "Apasionado por construir soluciones digitales robustas y escalables. Enfocado en el detalle, la arquitectura limpia y la experiencia de usuario.",
        email: "sixorca00@gmail.com",
        social: [
            {
                id: "linkedin",
                label: "LinkedIn",
                url: "https://github.com/sixorca00-collab",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
            },
            {
                id: "github",
                label: "GitHub",
                url: "https://github.com/sixorca00-collab",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
            }
        ]
    },

    // --- Proyectos ---
    projects: [
        {
            id: 1,
            title: "Zenflow",
            description: "Plataforma para medir la eficiendia de una persona segun sus actividades con temporizador y metricas.",
            technologies: ["Java", "JavaFX", "Firebase"],
            category: "Backend",
            url: "https://github.com/sixorca00-collab",
            status: "soon.."
        },
        {
            id: 2,
            title: "TaskGester",
            description: "Organizador de tareas por prioridad, nivel de urgencia y advertencai de cuanto tiempo te queda para cumplirla.",
            technologies: ["Java", "Spring", "MongoDB"],
            category: "Frontend",
            url: "https://github.com/sixorca00-collab",
             status: "soon.."
        },
        {
            id: 3,
            title: "Cashier Analytics",
            description: "Sistema interactivo para gestion de tu salario con ayuda de metricas y recibir feedback.",
            technologies: ["Java","Tailwind", "Js", "Firebase"],
            category: "Frontend",
            url: "https://github.com/sixorca00-collab",
             status: "soon.."
        },
        {
            id: 4,
            title: "API REST Escalable",
            description: "API RESTful robusta con autenticación JWT, validación de datos y documentación completa con Swagger.",
            technologies: ["Spring Boot", "Java", "H2Databases"],
            category: "Backend",
            url: "https://github.com/sixorca00-collab",
             status: "soon.."
        },
        {
            id: 5,
            title: "Chat en Tiempo Real",
            description: "Sistema de mensajería en tiempo real con WebSockets, soporte para múltiples canales y notificaciones push.",
            technologies: ["Spring Boot", "WebSocket", "HTML-CSS"],
            category: "Backend",
            url: "https://github.com/sixorca00-collab",
             status: "soon.."
        },
        {
            id: 6,
            title: "Portafolio Interactivo",
            description: "Portafolio personal con diseño responsivo, animaciones suaves y arquitectura MVC frontal.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            category: "Frontend",
            url: "https://github.com/sixorca00-collab",
             status: "soon.."
        }
    ],

    // --- Habilidades ---
    skills: [
        { name: "Java",        category: "Backend" },
        { name: "Spring Boot", category: "Backend" },
        { name: "REST APIs",   category: "Backend" },
        { name: "Node.js",     category: "Backend" },

        { name: "Tailwind",    category: "Frontend" },
        { name: "React",       category: "Frontend" },
        { name: "JavaScript",  category: "Frontend" },

        { name: "PostgreSQL",  category: "Base de Datos" },
        { name: "MongoDB",     category: "Base de Datos" },

        { name: "Docker",      category: "DevOps" },
        { name: "Git",         category: "DevOps" },
        
    ],

    // --- Métodos del Model ---

    getAllProjects() {
        return this.projects;
    },

    getProjectsByCategory(category) {
        if (category === "Todos") return this.projects;
        return this.projects.filter(p => p.category === category);
    },

    getProjectCategories() {
        const cats = ["Todos", ...new Set(this.projects.map(p => p.category))];
        return cats;
    },

    getAllSkills() {
        return this.skills;
    },

    getSkillsByCategory(category) {
        if (category === "Todos") return this.skills;
        return this.skills.filter(s => s.category === category);
    },

    getSkillCategories() {
        const cats = ["Todos", ...new Set(this.skills.map(s => s.category))];
        return cats;
    },

    getProfile() {
        return this.profile;
    }
};
