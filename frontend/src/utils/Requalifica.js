export function gerarTrilhasAprendizado(profissional) {
  const trilhas = [];

  const bancoDeHabilidades = {
    "Tecnologia": {
      requeridas: ["Python", "Machine Learning", "Cloud", "APIs", "DevOps"],
      cursos: [
        "Introdução ao Machine Learning (Coursera)",
        "Arquitetura em Cloud AWS (FIAP ON)",
        "APIs REST com Node.js e Express",
        "Pipelines de DevOps com GitHub Actions"
      ]
    },
    "Design": {
      requeridas: ["UX Research", "UI Design", "Prototipagem", "Design Thinking"],
      cursos: [
        "UX Research na Prática (Alura)",
        "Design Thinking Avançado (FIAP)",
        "Prototipagem com Figma",
        "Interface Responsiva com Tailwind"
      ]
    },
    "Marketing": {
      requeridas: ["Data Analytics", "SEO", "Copywriting", "Growth Hacking"],
      cursos: [
        "Google Analytics for Business",
        "SEO e Marketing de Conteúdo (Rock Content)",
        "Copywriting Estratégico (Udemy)",
        "Growth Hacking com Dados"
      ]
    },
    "Educação": {
      requeridas: ["Metodologias Ativas", "Gamificação", "IA na Educação"],
      cursos: [
        "Metodologias Ativas de Aprendizagem (Coursera)",
        "Gamificação no Ensino (FIAP ON)",
        "ChatGPT e IA em Ambientes Educacionais"
      ]
    },
    "Administração": {
      requeridas: ["Power BI", "Gestão de Projetos", "Finanças", "Análise de Dados"],
      cursos: [
        "Excel e Power BI para Gestores",
        "Gestão de Projetos Ágeis com Scrum (FIAP)",
        "Planejamento Financeiro e Estratégico"
      ]
    },
    "Saúde": {
      requeridas: ["Telemedicina", "Prontuário Digital", "Gestão Hospitalar"],
      cursos: [
        "Telemedicina e Novas Tecnologias na Saúde",
        "Gestão de Prontuários Eletrônicos (SUS Digital)",
        "Inovação Hospitalar e IoT"
      ]
    }
  };

  const area = profissional.area;
  const base = bancoDeHabilidades[area];

  if (!base) return [];

  const faltantes = base.requeridas.filter(
    (skill) => !profissional.habilidadesTecnicas.includes(skill)
  );

  if (faltantes.length > 0) {
    trilhas.push({
      tipo: "Lacunas detectadas",
      descricao: `Faltam algumas habilidades em ${area}: ${faltantes.join(", ")}.`,
      recomendacoes: base.cursos
    });
  } else {
    trilhas.push({
      tipo: "Perfil completo 🎯",
      descricao: `Seu perfil em ${area} está muito bem desenvolvido! Continue aprimorando com essas trilhas recomendadas:`,
      recomendacoes: base.cursos.slice(0, 2)
    });
  }

  return trilhas;
}
