// ============================================
// VIEW — Solo renderización. Sin lógica de negocio.
// ============================================
const View = {

    // Escapa texto para evitar XSS
    _escape(str) {
        const d = document.createElement("div");
        d.appendChild(document.createTextNode(str));
        return d.innerHTML;
    },

    // --- Header ---
    renderHeader(profile, container) {
        container.innerHTML = `
            <h1 class="hero-name">${this._escape(profile.name)}</h1>
            <div class="hero-divider"></div>
            <p class="hero-role">${this._escape(profile.role)}</p>
            <p class="hero-bio">${this._escape(profile.bio)}</p>
        `;
    },

    // --- Filtros de proyectos ---
    renderProjectFilters(categories, activeCategory, container) {
        container.innerHTML = categories.map(cat => `
            <button
                class="filter-btn ${cat === activeCategory ? "filter-btn--active" : ""}"
                data-category="${this._escape(cat)}"
            >
                ${this._escape(cat)}
            </button>
        `).join("");
    },

    // --- Tarjetas de proyectos ---
    renderProjects(projects, container) {
        if (projects.length === 0) {
            container.innerHTML = `<p class="no-results">No hay proyectos en esta categoría.</p>`;
            return;
        }
        container.innerHTML = projects.map(project => `
            <div class="flip-card" role="article" aria-label="Proyecto: ${this._escape(project.title)}">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div>
                            <span class="project-category-badge">${this._escape(project.category)}</span>
                            <h3>${this._escape(project.title)}</h3>
                            <p>${this._escape(project.description)}</p>
                        </div>
                        <div class="tech-stack">
                            ${project.technologies.map(t => `<span class="tech-tag">${this._escape(t)}</span>`).join("")}
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <a href="${this._escape(project.url)}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <span>Ver Proyecto</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `).join("");
    },

    // --- Filtros de skills ---
    renderSkillFilters(categories, activeCategory, container) {
        container.innerHTML = categories.map(cat => `
            <button
                class="filter-btn ${cat === activeCategory ? "filter-btn--active" : ""}"
                data-category="${this._escape(cat)}"
            >
                ${this._escape(cat)}
            </button>
        `).join("");
    },

    // --- Tarjetas de habilidades ---
    renderSkills(skills, container) {
        container.innerHTML = skills.map(skill => `
            <div class="skill-card">
                <h3>${this._escape(skill.name)}</h3>
                <p>${this._escape(skill.category)}</p>
            </div>
        `).join("");
    },

    // --- Footer ---
    renderFooter(profile, container) {
        const year = new Date().getFullYear();
        container.innerHTML = `
            <div class="social-links">
                ${profile.social.map(s => `
                    <a href="${this._escape(s.url)}" target="_blank" rel="noopener noreferrer"
                       class="social-link" title="${this._escape(s.label)}" aria-label="${this._escape(s.label)}">
                        ${s.icon}
                    </a>
                `).join("")}
            </div>
            <p>&copy; ${year} ${this._escape(profile.name)}. Todos los derechos reservados.</p>
        `;
    },

    // --- Partículas de fondo (efecto visual, sin datos del Model) ---
    renderParticles(container) {
        container.innerHTML = "";
        const count = window.innerWidth > 768 ? 80 : 40;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < count; i++) {
            const p = document.createElement("div");
            const isMint = Math.random() > 0.5;
            p.className = `particle ${isMint ? "particle-mint" : "particle-purple"}`;

            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 5;

            Object.assign(p.style, {
                width: size + "px",
                height: size + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 - 100 + "px",
                borderRadius: "50%",
                opacity: Math.random() * 0.6 + 0.2,
                animation: `float-down ${duration}s linear ${delay}s infinite`
            });

            fragment.appendChild(p);
        }
        container.appendChild(fragment);
    },

    // --- Highlight del nav activo ---
    setActiveNav(sectionId) {
        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.toggle("nav-link--active", link.dataset.section === sectionId);
        });
    }
};
