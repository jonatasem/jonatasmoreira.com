import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home-title": "I work with",
          "frontend": "Frontend",
          "backend": "Backend",
          "database": "Database",
          "home": "Home",
          "about": "About Me",
          "resume": "Resume",
          "portfolio": "Portfolio",
          "skills": "Skills",
          "resumeAbout": "Fullstack Developer with experience in creating responsive and scalable systems, seeking new opportunities to apply skills in front-end and back-end development.",
          "functionAbout": "FullStack Developer | DevOps",
          "email": "E-Mail",
          "freelance": "Freelance",
          "available": "Available",
          "language": "Language",
          "portuguese": "Portuguese - Native",
          "english": "English - B1",
          "spanish": "Spanish - A1",
          "resumeDescription": "I began my career as a Frontend Developer, utilizing React.js, TypeScript, SCSS, and other tools to transform layouts into functional code, always prioritizing user experience and application usability. Currently, I work as a Mid-Level Fullstack Developer, creating comprehensive solutions for confectionery systems, marketplaces, and e-commerce platforms, employing Node.js for back-end development and utilizing both SQL and NoSQL databases, such as MySQL and MongoDB. I also have experience in enhanced development environments supported by DevOps practices, including continuous integration and delivery (CI/CD) and process automation with Docker.",
          "training": "Training",
          "bachelor": "Bachelor of Computer Engineering",
          "bachelorData": "June 2023 - July 2028",
          "bacharelorLocation": "Univesp, Lucélia, São Paulo, Brazil",
          "bacharelorResume": "Solid background in software development, with a focus on creating innovative and scalable solutions.",
          "technical": "Integrated High School with a Technical Degree in Agriculture",
          "technicalData": "Completed in 2018",
          "technicalLocation": "E.T.E.C Herval Bellusci, Adamantina, São Paulo, Brazil",
          "technicalResume": "Technical training with an emphasis on agricultural practices and the development of practical skills.",
          "experience": "Professional Experience",
          "experienceOneTitle": "Magazine Luiza - Adamantina, São Paulo",
          "experienceOne": "Salesperson",
          "experienceOneData": "Dec 2023 to Feb 2025",
          "experienceOneDescript": "Provided 360° service, including negotiation and maintenance of an active client portfolio.",
          "experienceOneDescriptTwo": "I was a member of the employee council, contributing to the continuous improvement of the team.",
          "experienceTwoTitle": "Eixo SP Dealership - Inúbia Paulista, São Paulo",
          "experienceTwoData": "Apr 2021 - Oct 2021",
          "experienceTwo": "Agent 3",
          "experienceTwoDescript": "Coordinated the cash count and vehicle documentation, in addition to managing the team's work schedule.",
          "portfolioResume": "Here are some of the projects I have developed throughout my career. Each of them reflects my passion for creating effective and innovative solutions, using the best practices in development and design.",
          "all": "All",
          "tools": "Tools & DevOps",
          "reserved": "All Rights Reserved"
        }
      },
      pt: {
        translation: {
          "home-title": "Eu trabalho com",
          "frontend": "Frontend",
          "backend": "Backend",
          "database": "Banco de Dados",
          "home": "Início",
          "about": "Sobre Mim",
          "resume": "Resumo",
          "portfolio": "Portfólio",
          "skills": "Habilidades",
          "resumeAbout": "Desenvolvedor Fullstack com experiência em criação de sistemas responsivos e escaláveis, buscando novas oportunidades para aplicar habilidades em desenvolvimento front-end e back-end.",
          "functionAbout": "FullStack Developer | DevOps",
          "email": "Mail",
          "freelance": "Autônomo",
          "available": "Disponível",
          "language": "Idiomas",
          "portuguese": "Português - Nativo",
          "english": "Inglês - B1",
          "spanish": "Espanhol - A1",
          "resumeDescription": "Iniciei minha carreira como desenvolvedor Frontend, utilizando React.js, TypeScript, SCSS e outras ferramentas para transformar layouts em código funcional, sempre priorizando a experiência do usuário e a usabilidade das aplicações. Atualmente, atuo como desenvolvedor Fullstack Pleno, criando soluções completas para sistemas de brigadeiras, marketplaces e lojas virtuais, empregando Node.js para o desenvolvimento back-end e utilizando bancos de dados SQL e NoSQL, como MySQL e MongoDB. Também tenho experiência em ambientes de desenvolvimento aprimorados por práticas DevOps, incluindo integração e entrega contínua (CI/CD) e automação de processos com Docker.",
          "training": "Formação",
          "bachelor": "Bacharel em Engenharia da Computação",
          "bachelorData": "Junho de 2023 - Julho de 2028",
          "bacharelorLocation": "Univesp, Lucélia, São Paulo, Brasil",
          "bacharelorResume": "Formação sólida em desenvolvimento de software, com foco na criação de soluções inovadoras e escaláveis.",
          "technical": "Ensino Médio Integrado com Técnico em Agropecuária",
          "technicalData": "Concluído em 2018",
          "technicalLocation": "E.T.E.C Herval Bellusci, Adamantina, São Paulo, Brasil",
          "technicalResume": "Formação técnica com ênfase em práticas de agropecuária e desenvolvimento de habilidades práticas.",
          "experience": "Experiência Profissional",
          "experienceOneTitle": "Magazine Luiza - Adamantina, São Paulo",
          "experienceOne": "Vendedor",
          "experienceOneData": "Dez de 2023 a Fev de 2025",
          "experienceOneDescript": "Realizei atendimento 360°, englobando negociação e manutenção de uma carteira ativa de clientes.",
          "experienceOneDescriptTwo": "Fui membro do conselho de colaboradores, contribuindo para a melhoria contínua da equipe.",
          "experienceTwoTitle": "Eixo SP Concessionária - Inúbia Paulista, São Paulo",
          "experienceTwoData": "Abr 2021 - Out 2021",
          "experienceTwo": "Agente 3",
          "experienceTwoDescript": "Coordenei a contagem de cofre e a documentação de veículos, além de gerenciar a escala de trabalho da equipe.",
          "portfolioResume": "Aqui estão alguns dos projetos que desenvolvi ao longo da minha carreira. Cada um deles reflete minha paixão por criar soluções eficazes e inovadoras, utilizando as melhores práticas de desenvolvimento e design.",
          "all": "Todos",
          "tools": "Ferramentas e DevOps",
          "reserved": "Todos os Direitos Reservados"
        }
      }
    },
    lng: "en", // idioma padrão
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;