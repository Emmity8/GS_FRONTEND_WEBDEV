export function gerarTrilhasAprendizado(profissional) {
  const trilhas = [];

  const bancoDeHabilidades = {
    "Tecnologia": {
      requeridas: ["Python", "Machine Learning", "Cloud", "APIs", "DevOps"],
      cursos: [
        "Introdução ao Machine Learning",
        "Arquitetura em Cloud AWS",
        "APIs REST com Node.js e Express",
        "Pipelines de DevOps com GitHub Actions"
      ]
    },
    "Design": {
      requeridas: ["UX Research", "UI Design", "Prototipagem", "Design Thinking"],
      cursos: [
        "UX Research na Prática",
        "Design Thinking Avançado",
        "Prototipagem com Figma",
        "Interface Responsiva com Tailwind"
      ]
    },
    "Marketing": {
      requeridas: ["Data Analytics", "SEO", "Copywriting", "Growth Hacking"],
      cursos: [
        "Google Analytics for Business",
        "SEO e Marketing de Conteúdo",
        "Copywriting Estratégico",
        "Growth Hacking com Dados"
      ]
    },
    "Educação": {
      requeridas: ["Metodologias Ativas", "Gamificação", "IA na Educação"],
      cursos: [
        "Metodologias Ativas de Aprendizagem",
        "Gamificação no Ensino",
        "ChatGPT e IA em Ambientes Educacionais"
      ]
    },
    "Administração": {
      requeridas: ["Power BI", "Gestão de Projetos", "Finanças", "Análise de Dados"],
      cursos: [
        "Excel e Power BI para Gestores",
        "Gestão de Projetos Ágeis com Scrum",
        "Planejamento Financeiro e Estratégico"
      ]
    },
    "Saúde": {
      requeridas: ["Telemedicina", "Prontuário Digital", "Gestão Hospitalar"],
      cursos: [
        "Telemedicina e Novas Tecnologias na Saúde",
        "Gestão de Prontuários Eletrônicos",
        "Inovação Hospitalar e IoT"
      ]
    },
    "Sustentabilidade": {
      requeridas: [
        "Análise Ambiental",
        "ESG",
        "Economia Circular",
        "Gestão de Resíduos",
        "Relatórios de Sustentabilidade"
      ],
      cursos: [
        "ESG na Prática – Environmental, Social & Governance",
        "Gestão Ambiental e Relatórios de Sustentabilidade",
        "Economia Circular e Negócios Sustentáveis",
        "Introdução à Sustentabilidade Corporativa",
        "Análise de Impacto Ambiental e Riscos Climáticos"
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
      descricao: `Este perfil em ${area} está muito bem desenvolvido! Continue aprimorando com essas trilhas recomendadas:`,
      recomendacoes: base.cursos.slice(0, 2)
    });
  }

  return trilhas;
}
