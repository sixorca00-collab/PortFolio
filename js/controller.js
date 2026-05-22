// ============================================
// CONTROLLER — Orquesta Model y View. Maneja eventos.
// ============================================
const Controller = {

    // Estado interno del Controller
    state: {
        activeProjectCategory: "Todos",
        activeSkillCategory: "Todos"
    },

    // Referencias a elementos del DOM
    els: {},

    // --- Punto de entrada ---
    init() {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => this._setup());
        } else {
            this._setup();
        }
    },

    // --- Setup inicial ---
    _setup() {
        this._cacheDOM();
        this._renderAll();
        this._bindEvents();
    },

    // --- Cachear referencias al DOM ---
    _cacheDOM() {
        this.els = {
            header:           document.getElementById("hero-content"),
            projectFilters:   document.getElementById("project-filters"),
            projectsGrid:     document.getElementById("projects-container"),
            skillFilters:     document.getElementById("skill-filters"),
            skillsGrid:       document.getElementById("skills-container"),
            footer:           document.getElementById("footer-content"),
            particles:        document.getElementById("particle-container"),
            navLinks:         document.querySelectorAll(".nav-link"),
            sections:         document.querySelectorAll("section[id]")
        };
    },

    // --- Renderizado inicial completo ---
    _renderAll() {
        const profile = Model.getProfile();

        View.renderHeader(profile, this.els.header);
        View.renderFooter(profile, this.els.footer);
        View.renderParticles(this.els.particles);

        this._renderProjects();
        this._renderSkills();
    },

    // --- Renderizar proyectos con filtro activo ---
    _renderProjects() {
        const cat = this.state.activeProjectCategory;
        const categories = Model.getProjectCategories();
        const projects = Model.getProjectsByCategory(cat);

        View.renderProjectFilters(categories, cat, this.els.projectFilters);
        View.renderProjects(projects, this.els.projectsGrid);

        // Re-bindear botones de filtro recién renderizados
        this.els.projectFilters.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", (e) => this._onProjectFilterClick(e));
        });
    },

    // --- Renderizar skills con filtro activo ---
    _renderSkills() {
        const cat = this.state.activeSkillCategory;
        const categories = Model.getSkillCategories();
        const skills = Model.getSkillsByCategory(cat);

        View.renderSkillFilters(categories, cat, this.els.skillFilters);
        View.renderSkills(skills, this.els.skillsGrid);

        // Re-bindear botones de filtro recién renderizados
        this.els.skillFilters.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", (e) => this._onSkillFilterClick(e));
        });
    },

    // --- Binding global de eventos ---
    _bindEvents() {
        // Resize: redibujar partículas
        window.addEventListener("resize", () => {
            View.renderParticles(this.els.particles);
        });

        // Scroll: highlight de nav activo
        window.addEventListener("scroll", () => this._onScroll(), { passive: true });
    },

    // --- Evento: filtro de proyectos ---
    _onProjectFilterClick(e) {
        const category = e.currentTarget.dataset.category;
        if (category === this.state.activeProjectCategory) return;

        this.state.activeProjectCategory = category;
        this._renderProjects();
    },

    // --- Evento: filtro de skills ---
    _onSkillFilterClick(e) {
        const category = e.currentTarget.dataset.category;
        if (category === this.state.activeSkillCategory) return;

        this.state.activeSkillCategory = category;
        this._renderSkills();
    },

    // --- Evento: scroll para nav activo ---
    _onScroll() {
        let current = "";
        this.els.sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top <= 100) current = section.id;
        });
        if (current) View.setActiveNav(current);
    }
};

// Arrancar la aplicación
Controller.init();
