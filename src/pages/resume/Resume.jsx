import "./Resume.scss";

export default function Resume() {
  return (
    <section id="resume" className="container-resume section">
      <div className="container section-title">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Resumo
        </h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Iniciei minha carreira como desenvolvedor Frontend, onde trabalhei com React.js, TypeScript, SCSS e outras ferramentas para transformar layouts em código funcional, sempre priorizando a experiência do usuário e a usabilidade das aplicações.
        </p>
        <p data-aos="fade-up" data-aos-delay="100" className="resume-p">
          Atualmente, atuo como desenvolvedor Fullstack Pleno, onde desenvolvo soluções completas para sistemas de brigadeiras, mercado e loja virtual, utilizando Node.js para back-end e bancos de dados SQL e NoSQL, como MySQL e MongoDB. Tenho experiência em ambientes de desenvolvimento aprimorados por práticas DevOps, incluindo integração e entrega contínua (CI/CD) e automação de processos com Docker.
        </p>
      </div>

      <div className="container">
        <div>
          <div>
            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Educação
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Bacharel em Engenharia da Computação</h4>
              <h5>Junho de 2023 - Julho de 2028</h5>
              <p>
                <em>Univesp, Lucélia, São Paulo, Brasil</em>
              </p>
              <p>
                Formação sólida em desenvolvimento de software, com foco na
                criação de soluções inovadoras e escaláveis.
              </p>
            </div>

            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Ensino Médio Integrado com Técnico em Agropecuária</h4>
              <h5>Concluído em 2018</h5>
              <p>
                <em>E.T.E.C Herval Bellusci, Adamantina, São Paulo, Brasil</em>
              </p>
              <p>
                Formação técnica com ênfase em práticas de agropecuária e
                desenvolvimento de habilidades práticas.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <h3
              className="resume-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experiência Profissional
            </h3>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Pedro Henrique Colognese - Adamantina, São Paulo</h4>
              <h5>Set de 2024 a Maio de 2025</h5>
              <p>
                <em>Desenvolvedor Fullstack Pleno</em>
              </p>
              <ul>
                <li>Desenvolvimento de sistemas para brigadeiras, mercado e loja virtual.</li>
                <li>Criação de back-end utilizando Node.js, integrando com bancos de dados SQL (MySQL, PostgreSQL) e NoSQL (MongoDB, Firebase).</li>
                <li>Utilização de Docker em projetos para otimização de ambientes de desenvolvimento e produção.</li>
              </ul>
            </div>
            <div
              className="resume-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>Gabriel Poli Ltda - Adamantina, São Paulo</h4>
              <h5>Set de 2024 a Maio de 2025</h5>
              <p>
                <em>Desenvolvedor Frontend React</em>
              </p>
              <ul>
               <li>Transformação de layouts em código funcional, com foco em sistemas responsivos e escaláveis.</li>
               <li>Desenvolvimento de aplicações utilizando React.js, TypeScript, SCSS, Styled-Components e Bootstrap.</li>
               <li>Gerenciamento de estados e manipulação de hooks, aplicando métodos avançados de programação.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
