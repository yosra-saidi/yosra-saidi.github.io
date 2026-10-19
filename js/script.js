document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio de Yosra Saidi chargé avec succès.");

    // =========================
    // TRADUCTIONS
    // =========================

    const translations = {

        fr: {
            // Navigation
            "nav-home": "Accueil",
            "nav-about": "À propos",
            "nav-skills": "Compétences",
            "nav-experience": "Expériences",
            "nav-projects": "Projets",
            "nav-contact": "Contact",

            // Accueil
            "hero-hello": "Bonjour, je suis",
            "hero-title": "Ingénieure en informatique",
            "hero-description":
                "Passionnée par les technologies numériques, le développement logiciel, le testing, le DevOps et l'intelligence artificielle.",
            "hero-projects-btn": "Voir mes projets",
            "hero-cv-btn": "Télécharger mon CV",

            // À propos
            "about-title": "À propos de moi",
            "about-text-1":
                "Ingénieure nouvellement diplômée, passionnée par la recherche et les projets innovants. Curieuse, rigoureuse et motivée, je m'intéresse particulièrement aux nouvelles technologies, à l'intelligence artificielle et aux solutions numériques.",
            "about-text-2":
                "Mon objectif est de contribuer au développement de projets innovants tout en enrichissant continuellement mes compétences techniques.",

            // Compétences
            "skills-title": "Compétences",
            "skills-development": "Développement",
            "skills-testing": "Testing & QA",
            "skills-devops": "DevOps",
            "skills-ai": "Intelligence Artificielle",

            // Expériences
            "experience-title": "Expériences",

            "experience-1-date": "Mars 2025 – Août 2025",
            "experience-1-title": "Stage de fin d'études",
            "experience-1-description":
                "Conception et développement d'une plateforme dédiée à la gestion des livraisons.",
            "experience-1-description-2":
                "Mise en place d'une architecture microservices, pipelines CI/CD, Docker et Kubernetes.",

            "experience-2-date": "Juin 2024 – Juillet 2024",
            "experience-2-title": "Stage d'été",
            "experience-2-description":
                "Conception et développement d'une application web de rapprochement bancaire.",
            "confidential-code": "Code source confidentiel",

            // Projets
            "projects-title": "Mes projets",

            "project-1-title": "Pipeline DevSecOps CI/CD",
            "project-1-description":
                "Conception et implémentation d'un pipeline DevSecOps automatisant le build, les tests, l'analyse de qualité et le déploiement.",

            "project-2-title":
                "Tests d'une application de gestion de contrats",
            "project-2-description":
                "Réalisation de tests de qualité logicielle selon les standards ISTQB et gestion des incidents et analyses des causes racines.",
            
"project-2-demo-title": "Démonstration de TestLink",

            "project-3-title":
                "Tests automatisés avec Playwright",
            "project-3-description":
                "Mise en place de tests automatisés end-to-end pour valider les fonctionnalités clés d'une application e-commerce MERN.",
            "project-github": "Voir sur GitHub",
            "project-4-title": "ERP conteneurisé avec MFA",
            "project-4-description":
                "Développement d'un ERP basé sur Odoo avec authentification multifactorielle et conteneurisation Docker.",

            // Projet 5 : EnniConnect
            "project-5-title":
                "EnniConnect – Plateforme d'opportunités professionnelles",
            "project-5-description":
                "Conception et développement d'une plateforme web destinée aux nouveaux étudiants de l'ENICarthage, leur permettant de découvrir des opportunités de stages et d'emploi adaptées à leurs expériences et à leurs compétences. La plateforme valorise également les retours d'expérience des anciens étudiants afin de faciliter l'orientation professionnelle, le partage de conseils et l'accès au marché du travail. Développement d'une application full-stack avec Spring Boot pour le backend et Angular pour le frontend.",
            "project-5-demo-title":
                "Démonstration de l'application",
            
"project-6-title": "Dawini – Application de prise de rendez-vous médicaux",

"project-6-description": "Développement d'une application web permettant aux utilisateurs de localiser les cabinets médicaux les plus proches et de prendre rendez-vous avec les médecins.",

"project-6-demo-title": "Démonstration de l'application",

"project-7-title": "Anomaly Detection – Machine Learning",
"project-7-description": "Développement d'un modèle de Machine Learning entraîné sur un jeu de données afin de détecter les anomalies. Création d'une interface permettant de tester de nouvelles données et de déterminer si elles présentent un comportement anormal.",

"project-8-title": "Développement de Web Services : REST, SOAP et GraphQL",
"project-8-description": "Conception et développement de services web utilisant REST, SOAP et GraphQL. Exploration de différentes approches de communication entre applications, d'échange de données et d'accès aux ressources via des API.",

"project-github": "Voir sur GitHub",



            // Certifications
            "certifications-title": "Certifications",
            "certification-1-title": "CCNA – Introduction aux réseaux",
            "certification-1-description": "Cisco Networking Academy",
            "certification-2-title": "Full Stack Development",
            "certification-2-description":
                "Spring Boot & Angular – Udemy",

            // Contact
            "contact-title": "Contact",
            "contact-description":
                "Vous avez un projet, une opportunité ou souhaitez simplement échanger ? N'hésitez pas à me contacter.",
            "contact-phone": "Téléphone : +216 20 651 644",

            // Pied de page
            "footer-text": "© 2026 Yosra Saidi — Portfolio",

            // Titre de la page
            "page-title": "Yosra Saidi | Ingénieure en informatique",

            // Description SEO
            "page-description":
                "Portfolio de Yosra Saidi, ingénieure en informatique spécialisée en développement web, software testing, DevOps et intelligence artificielle."
        },

        en: {
            // Navigation
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-experience": "Experience",
            "nav-projects": "Projects",
            "nav-contact": "Contact",

            // Home
            "hero-hello": "Hello, I am",
            "hero-title": "Computer Science Engineer",
            "hero-description":
                "Passionate about digital technologies, software development, software testing, DevOps and artificial intelligence.",
            "hero-projects-btn": "View My Projects",
            "hero-cv-btn": "Download My CV",

            // About
            "about-title": "About Me",
            "about-text-1":
                "Recently graduated computer science engineer, passionate about research and innovative projects. Curious, detail-oriented and motivated, I am particularly interested in new technologies, artificial intelligence and digital solutions.",
            "about-text-2":
                "My goal is to contribute to innovative projects while continuously developing my technical skills.",

            // Skills
            "skills-title": "Skills",
            "skills-development": "Development",
            "skills-testing": "Testing & QA",
            "skills-devops": "DevOps",
            "skills-ai": "Artificial Intelligence",

            // Experience
            "experience-title": "Experience",

            "experience-1-date": "March 2025 – August 2025",
            "experience-1-title": "Final-Year Internship",
            "experience-1-description":
                "Designed and developed a platform dedicated to delivery management.",
            "experience-1-description-2":
                "Implemented a microservices architecture, CI/CD pipelines, Docker and Kubernetes.",

            "experience-2-date": "June 2024 – July 2024",
            "experience-2-title": "Summer Internship",
            "experience-2-description":
                "Designed and developed a web application for bank reconciliation.",
            "confidential-code": "Source code confidential",
            // Projects
            "projects-title": "My Projects",

            "project-1-title": "DevSecOps CI/CD Pipeline",
            "project-1-description":
                "Designed and implemented a DevSecOps pipeline automating the build, testing, quality analysis and deployment processes.",

            "project-2-title":
                "Testing a Contract Management Application",
            "project-2-description":
                "Performed software quality testing according to ISTQB standards, including incident management and root cause analysis.",
            
"project-2-demo-title": "TestLink Demonstration",

            "project-3-title":
                "Automated Testing with Playwright",
            "project-3-description":
                "Implemented end-to-end automated tests to validate the key functionalities of a MERN e-commerce application.",
            "project-github": "View on GitHub",
            "project-4-title": "Containerized ERP with MFA",
            "project-4-description":
                "Developed an Odoo-based ERP with multi-factor authentication and Docker containerization.",

            // Project 5: EnniConnect
            "project-5-title":
                "EnniConnect – Career Opportunities Platform",
            "project-5-description":
                "Designed and developed a web platform for new ENICarthage students, helping them discover internship and job opportunities suited to their experience and skills. The platform also showcases alumni experiences and feedback to support career guidance, knowledge sharing, and access to the job market. The full-stack application was developed using Spring Boot for the backend and Angular for the frontend.",
            "project-5-demo-title":
                "Application Demo",
            
"project-6-title": "Dawini – Medical Appointment Booking Application",

"project-6-description": "Developed a web application that enables users to locate nearby medical practices and book appointments with doctors.",

"project-6-demo-title": "Application Demo",

"project-7-title": "Anomaly Detection – Machine Learning",
"project-7-description": "Developed a Machine Learning model trained on a dataset to detect anomalies. Created an interface for testing new data and determining whether it represents anomalous behavior.",

"project-8-title": "Web Services Development: REST, SOAP and GraphQL",
"project-8-description": "Designed and developed web services using REST, SOAP, and GraphQL. Explored different approaches to application communication, data exchange, and resource access through APIs.",

"project-github": "View on GitHub",


            // Certifications
            "certifications-title": "Certifications",
            "certification-1-title": "CCNA – Introduction to Networks",
            "certification-1-description": "Cisco Networking Academy",
            "certification-2-title": "Full Stack Development",
            "certification-2-description":
                "Spring Boot & Angular – Udemy",

            // Contact
            "contact-title": "Contact",
            "contact-description":
                "Do you have a project, an opportunity, or simply want to get in touch? Feel free to contact me.",
            "contact-phone": "Phone: +216 20 651 644",

            // Footer
            "footer-text": "© 2026 Yosra Saidi — Portfolio",

            // Page title
            "page-title": "Yosra Saidi | Computer Science Engineer",

            // SEO description
            "page-description":
                "Portfolio of Yosra Saidi, a computer science engineer specializing in web development, software testing, DevOps and artificial intelligence."
        }
    };


    // =========================
    // CHANGEMENT DE LANGUE
    // =========================

    function changeLanguage(language) {

        // Vérifier la langue demandée
        if (!translations[language]) {
            language = "fr";
        }

        const currentTranslations = translations[language];

        // Traduire tous les éléments data-i18n du HTML
        document.querySelectorAll("[data-i18n]").forEach(function (element) {

            const key = element.getAttribute("data-i18n");

            if (Object.prototype.hasOwnProperty.call(currentTranslations, key)) {
                element.textContent = currentTranslations[key];
            }

        });

        // Traduire les certifications
        const certificationTitles = document.querySelectorAll(
            "#certifications .certification-card h3"
        );

        const certificationDescriptions = document.querySelectorAll(
            "#certifications .certification-card p"
        );

        certificationTitles.forEach(function (element, index) {
            const key = `certification-${index + 1}-title`;

            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });

        certificationDescriptions.forEach(function (element, index) {
            const key = `certification-${index + 1}-description`;

            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });

        // Traduire le lien du téléphone
        const phoneLink = document.querySelector(
            '#contact .social-links a[href^="tel:"]'
        );

        if (phoneLink) {
            phoneLink.textContent = currentTranslations["contact-phone"];
        }

        // Traduire le pied de page
        const footerText = document.querySelector("footer p");

        if (footerText) {
            footerText.textContent = currentTranslations["footer-text"];
        }

        // Traduire le titre de l'onglet du navigateur
        document.title = currentTranslations["page-title"];

        // Mettre à jour la description SEO
        const descriptionMeta = document.querySelector(
            'meta[name="description"]'
        );

        if (descriptionMeta) {
            descriptionMeta.setAttribute(
                "content",
                currentTranslations["page-description"]
            );
        }

        // Mettre à jour la langue du document
        document.documentElement.lang = language;

        // Mettre à jour l'état visuel des boutons
        const frButton = document.getElementById("fr-btn");
        const enButton = document.getElementById("en-btn");

        if (frButton && enButton) {
            frButton.classList.toggle("active", language === "fr");
            enButton.classList.toggle("active", language === "en");

            frButton.setAttribute(
                "aria-pressed",
                String(language === "fr")
            );

            enButton.setAttribute(
                "aria-pressed",
                String(language === "en")
            );
        }

        // Enregistrer la langue choisie
        try {
            localStorage.setItem("language", language);
        } catch (error) {
            console.warn(
                "Impossible d'enregistrer la langue dans le navigateur.",
                error
            );
        }
    }


    // =========================
    // BOUTONS DE LANGUE
    // =========================

    const frButton = document.getElementById("fr-btn");
    const enButton = document.getElementById("en-btn");

    if (frButton) {
        frButton.addEventListener("click", function () {
            changeLanguage("fr");
        });
    }

    if (enButton) {
        enButton.addEventListener("click", function () {
            changeLanguage("en");
        });
    }


    // =========================
    // LANGUE AU CHARGEMENT
    // =========================

    let savedLanguage = "fr";

    try {
        savedLanguage = localStorage.getItem("language") || "fr";
    } catch (error) {
        console.warn(
            "La langue enregistrée n'est pas accessible.",
            error
        );
    }

    changeLanguage(savedLanguage);

});