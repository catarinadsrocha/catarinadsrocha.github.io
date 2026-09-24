/* DADOS DOS PROJETOS — é aqui que se edita o conteúdo do site.
   media:   { tipo: "video" | "imagem" | "pdf", src: "media/..." }
            meia: true  em dois itens seguidos = lado a lado
            capa: "media/.../foto.jpg"  define a capa de um vídeo
   links:   [{ nome: "Ver site", url: "https://..." }]
   preview: foto que segue o rato na lista de projetos
   Se mudares o nome de um ficheiro em media/, muda também o src aqui. */
const PROJETOS = [
  {
    slug: "projeto-final",
    ano: 2026,
    titulo: "Tudo no Londres",
    subtitulo: "Documentário",
    tipo: "Vídeo",
    disciplina: "Realização",
    tags: ["documentário", "Website"],
    ficha: {},
    descricao: [
      "Projeto Final da Licenciatura em Design de Comunicação (FBAUP, 2025/2026). “Tudo no Londres” consiste na documentação e preservação do Centro Comercial Londres. O objetivo foi capturar as vivências atuais do local, os sinais do tempo e as marcas de quem por ali passou e ainda passa.",
    ],
    links: [
      { nome: "Ver site", url: "https://catarinadsrocha.github.io/Tudo_no_Londres/" },
    ],
    preview: "media/projeto-final/preview.jpg",
    media: [
      { tipo: "video", src: "media/projeto-final/documentario.mp4" },
      { tipo: "imagem", src: "media/projeto-final/foto-01.jpg" },
      { tipo: "imagem", src: "media/projeto-final/foto-02.jpg" },
      { tipo: "imagem", src: "media/projeto-final/foto-05.jpg" },
      { tipo: "imagem", src: "media/projeto-final/frame-01.jpg" },
    ],
  },
  {
    slug: "pcd",
    ano: 2026,
    titulo: "PCD26",
    subtitulo: "",
    tipo: "—",
    disciplina: "—",
    tags: ["Evento", "Redes Sociais", "Video"],
    ficha: {},
    descricao: ["O PCD nasceu no Processing Community Day internacional, uma iniciativa open-source e orientada pela comunidade, enraizada na partilha de conhecimento, na experimentação e nas práticas de creative coding. Neste evento, integrei a equipa responsável pela identidade visual, incluindo a gestão das redes sociais, participando da conceção à aplicação em diferentes suportes e plataformas."],
    links: [
      { nome: "Ver site", url: "https://pcd.fba.up.pt/2026/" },
      { nome: "Instagram", url: "https://www.instagram.com/pcdporto/" },
    ],
    preview: "media/pcd/preview.jpg",
    media: [
      { tipo: "imagem", src: "media/pcd/pcd-01.jpg" },
      { tipo: "imagem", src: "media/pcd/pcd-02.jpg" },
      { tipo: "video", src: "media/pcd/pcd-03.mp4" },
      { tipo: "imagem", src: "media/pcd/pcd-04.jpg" },
      { tipo: "imagem", src: "media/pcd/pcd-05.jpg" },
      { tipo: "video", src: "media/pcd/pcd-06.mp4", meia: true },
      { tipo: "video", src: "media/pcd/pcd-07.mp4", meia: true },
    ],
  },
  {
    slug: "direto-do-ponto-ao-conto",
    ano: 2026,
    titulo: "Direto do Ponto ao Conto",
    subtitulo: "Publicação Digital",
    tipo: "Editorial",
    disciplina: "Design Editorial",
    tags: ["editorial"],
    ficha: {},
    descricao: [
      "Neste projeto foi desenvolvido um sistema de cartas modulares que exploram técnicas distintas de blackout poetry. Cada carta contém um fragmento textual sobre o tema da liberdade, e um código de cores e pontos que guiam a forma como as cartas se conectam entre si. O utilizador organiza livremente as cartas, criando diferentes percursos de leitura e composições visuais, podendo, no final, fixar a sua sequência através de fios.",
    ],
    preview: "media/direto-do-ponto-ao-conto/preview.jpg",
    media: [
      { tipo: "video", src: "media/direto-do-ponto-ao-conto/video-04.mp4" },
      { tipo: "imagem", src: "media/direto-do-ponto-ao-conto/combinacoes-1.jpg" },
      { tipo: "imagem", src: "media/direto-do-ponto-ao-conto/combinacoes-2.jpg" },
      { tipo: "imagem", src: "media/direto-do-ponto-ao-conto/conjunto.jpg" },
      { tipo: "imagem", src: "media/direto-do-ponto-ao-conto/demonstracao.jpg" },
      { tipo: "imagem", src: "media/direto-do-ponto-ao-conto/envelope-frente.jpg" },
      { tipo: "imagem", src: "media/direto-do-ponto-ao-conto/envelope-verso.jpg" },
    ],
  },
  {
    slug: "jade-neighbourhood",
    ano: 2026,
    titulo: "Jade Neighbourhood",
    subtitulo: "",
    tipo: "Vídeo",
    disciplina: "—",
    tags: ["Website"],
    ficha: {},
    descricao: [
      "Jade Neighbourhood é um jogo de aventura textual browser-based, desenvolvido no âmbito da UC de Publicação Digital, em que o jogador assume o papel de um investigador de campo encarregue de visitar dez propriedades recentemente abandonadas geradas processualmente, examinando objetos, recolhendo itens e preenchendo relatórios de avaliação perante anomalias por explicar.",
      "O sistema inclui geração processual de casas e conteúdo, salas de anomalia, minijogos de interação física, mensagens externas que escalam em registo ao longo da investigação, e um sistema de resposta a texto livre que mantém a interface como presença narrativa coerente.",
    ],
    links: [
      { nome: "Ver site", url: "https://lerolerolerola.github.io/Jade_/" },
    ],
    preview: "media/jade-neighbourhood/preview.jpg",
    media: [
      { tipo: "video", src: "media/jade-neighbourhood/video.mp4" },
      { tipo: "imagem", src: "media/jade-neighbourhood/jade-01.jpg" },
      { tipo: "imagem", src: "media/jade-neighbourhood/jade-02.jpg" },
      { tipo: "imagem", src: "media/jade-neighbourhood/jade-03.jpg" },
      { tipo: "imagem", src: "media/jade-neighbourhood/jade-04.jpg" },
    ],
  },
  {
    slug: "mesa",
    ano: 2025,
    titulo: "MESA",
    subtitulo: "Protótipo Hi-Fi",
    tipo: "App",
    disciplina: "UI / UX",
    tags: ["UI UX", "vídeo", "som"],
    ficha: {},
    descricao: [
      "Movimento de Escolhas Sustentáveis Alimentares consiste numa instalação sensorial sobre sustentabilidade alimentar na Área Metropolitana do Porto. Neste projeto cada pessoa reconstrói o seu prato com base na última refeição, percebendo o impacto ambiental do que consome.",
      "A experiência percorre três momentos, o passado, o presente e o futuro, revelando os recursos usados, o que está a ser consumido, e as suas consequências ambientais.",
    ],
    preview: "media/mesa/preview.jpg",
    media: [
      { tipo: "video", src: "media/mesa/prototipo.mp4" },
      { tipo: "imagem", src: "media/mesa/mesa-01.jpg" },
      { tipo: "imagem", src: "media/mesa/mesa-02.jpg" },
      { tipo: "imagem", src: "media/mesa/mesa-03.jpg" },
      { tipo: "imagem", src: "media/mesa/mesa-04.jpg" },
      { tipo: "imagem", src: "media/mesa/mesa-05.jpg" },
      { tipo: "imagem", src: "media/mesa/mesa-06.jpg" },
    ],
  },
  {
    slug: "design-de-som",
    ano: 2025,
    titulo: "Design de Som",
    subtitulo: "",
    tipo: "Som",
    disciplina: "Design de Som",
    tags: ["som"],
    ficha: {},
    descricao: ["Projeto desenvolvido no âmbito da cadeira de Design de Som, que consistiu na criação do som para um vídeo atribuído pelo professor. O desafio passou por explorar a criação de sons original diretamente na plataforma de trabalho, bem como a utilização de “free sounds”, posteriormente manipulados e trabalhados para se adequarem à narrativa visual do vídeo."],
    preview: "media/design-de-som/preview.jpg",
    media: [
      { tipo: "video", src: "media/design-de-som/design-de-som.mp4" },
    ],
  },
  {
    slug: "no-fundo-do-copo",
    ano: 2025,
    titulo: "No Fundo do Copo",
    subtitulo: "Design de Jogos",
    tipo: "Jogo",
    disciplina: "Game Design",
    tags: ["jogo"],
    ficha: {},
    descricao: [
      "“No Fundo do Copo” é um protótipo de jogo point and click desenvolvido para a cadeira de Design de Jogos, que explora o tema do desconforto nos videojogos através de uma narrativa sombria e satírica.",
    ],
    preview: "media/no-fundo-do-copo/preview.jpg",
    media: [
      { tipo: "video", src: "media/no-fundo-do-copo/no-fundo-do-copo.mp4" },
      { tipo: "imagem", src: "media/no-fundo-do-copo/no-fundo-do-copo-01.jpg" },
      { tipo: "imagem", src: "media/no-fundo-do-copo/no-fundo-do-copo-02.jpg" },
    ],
  },
  {
    slug: "animacao-ciclo",
    ano: 2024,
    titulo: "Ciclo",
    subtitulo: "Curta de animação",
    tipo: "Vídeo",
    disciplina: "Animação",
    tags: ["animação", "vídeo"],
    ficha: {},
    descricao: [
      "Este trabalho explora a sensação de estar preso num ciclo, onde o esforço não traz progresso e tudo regressa ao ponto de partida. Através de cenários e fundos, por vezes abstratos, e do contraste entre o preto e o branco, cria-se uma atmosfera de inquietação e desconforto. A repetição surge como parte central do ciclo, mostrando desgaste e falta de resolução.",
    ],
    preview: "media/animacao-ciclo/preview.jpg",
    media: [
      { tipo: "video", src: "media/animacao-ciclo/animacao.mp4" },
      { tipo: "imagem", src: "media/animacao-ciclo/animacao-ciclo-01.jpg" },
      { tipo: "imagem", src: "media/animacao-ciclo/animacao-ciclo-02.jpg" },
      { tipo: "imagem", src: "media/animacao-ciclo/animacao-ciclo-03.jpg" },
      { tipo: "imagem", src: "media/animacao-ciclo/animacao-ciclo-04.jpg" },
    ],
  },
];

/* ---------------- Funcionamento do site ---------------- */
const $ = (sel) => document.querySelector(sel);
const paginaPrincipal = $("#pagina-principal");
const paginaProjeto = $("#pagina-projeto");
const lista = $("#lista-projetos");
const preview = $("#preview");
const previewImg = preview.querySelector("img");

/* Lista de projetos */
function construirLista() {
  lista.innerHTML = PROJETOS.map((p, i) => `
    <li class="lista__item" data-slug="${p.slug}" data-tipo="${p.tipo}" data-disciplina="${p.disciplina}" data-ano="${p.ano}">
      <span class="lista__ano">${p.ano}</span>
      <span class="lista__nome">${p.titulo}</span>
      <span class="lista__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</span>
    </li>`).join("");

  lista.querySelectorAll(".lista__item").forEach((item) => {
    item.addEventListener("click", () => (location.hash = `projeto/${item.dataset.slug}`));
    item.addEventListener("mouseenter", () => mostrarPreview(item.dataset.slug));
    item.addEventListener("mouseleave", esconderPreview);
  });
}

/* Preview que segue o rato */
function mostrarPreview(slug) {
  const p = PROJETOS.find((x) => x.slug === slug);
  if (!p || !p.preview) return;
  previewImg.src = p.preview;
  preview.classList.add("visivel");
}
function esconderPreview() {
  preview.classList.remove("visivel");
}
document.addEventListener("mousemove", (e) => {
  preview.style.left = e.clientX + "px";
  preview.style.top = e.clientY + "px";
});

/* Página de projeto */
function abrirProjeto(slug) {
  const p = PROJETOS.find((x) => x.slug === slug);
  if (!p) return fecharProjeto();

  $("#projeto-titulo").textContent = p.titulo;
  $("#projeto-descricao").innerHTML = p.descricao.map((t) => `<p>${t}</p>`).join("");

  $("#projeto-ficha").innerHTML = `<dl>${Object.entries(p.ficha)
    .map(([k, v]) => `<dt>${k}</dt>${v.map((x) => `<dd>${x}</dd>`).join("")}`)
    .join("")}</dl>`;

  $("#projeto-links").innerHTML = (p.links || [])
    .map((l) => `<a class="label" href="${l.url}" target="_blank" rel="noopener">${l.nome} ↗</a>`)
    .join("");

  $("#projeto-grelha").innerHTML = p.media.map((m) => {
    // "#t=0.5" mostra o frame aos 0,5s como capa (o 1.º é muitas vezes preto)
    const meia = m.meia ? "meia" : "";
    if (m.tipo === "video") return `<video class="${meia}" src="${m.src}#t=0.5" ${m.capa ? `poster="${m.capa}"` : ""} controls playsinline preload="metadata"></video>`;
    if (m.tipo === "imagem") return `<img class="${meia}" src="${m.src}" alt="${p.titulo}" loading="lazy">`;
    if (m.tipo === "pdf") return `<a class="pdf label ${meia}" href="${m.src}" target="_blank" rel="noopener">${m.nome || "PDF"} ↗</a>`;
    return "";
  }).join("");

  $("#projeto-grelha").querySelectorAll("video:not([poster])").forEach((v) => {
    v.addEventListener("loadedmetadata", () => { if (v.currentTime < 0.5) v.currentTime = 0.5; }, { once: true });
  });

  esconderPreview();
  paginaPrincipal.hidden = true;
  paginaProjeto.hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" });
  document.title = `${p.titulo} — Catarina Rocha`;
}

function fecharProjeto() {
  paginaProjeto.querySelectorAll("video").forEach((v) => v.pause());
  paginaProjeto.hidden = true;
  paginaPrincipal.hidden = false;
  document.title = "Catarina Rocha — Portfólio";
}

/* Navegação por #hash (faz o botão "voltar" do browser funcionar) */
function rotear() {
  const hash = location.hash.replace("#", "");
  if (hash.startsWith("projeto/")) {
    abrirProjeto(hash.slice("projeto/".length));
  } else {
    const estavaNoProjeto = !paginaProjeto.hidden;
    fecharProjeto();
    if (estavaNoProjeto && hash) {
      const alvo = document.getElementById(hash);
      if (alvo) alvo.scrollIntoView({ behavior: "instant" });
    }
  }
}
window.addEventListener("hashchange", rotear);

/* Vídeo da landing: o iPhone bloqueia o arranque automático em Poupança de
   Energia, por isso tentamos de novo na primeira interação da pessoa. */
const videoLanding = $(".hero__media");
const EVENTOS_INTERACAO = ["pointerdown", "touchstart", "click", "scroll", "keydown"];

function pararDeTentar() {
  EVENTOS_INTERACAO.forEach((e) => window.removeEventListener(e, tentarTocarVideo));
  videoLanding.removeEventListener("canplay", tentarTocarVideo);
}

function tentarTocarVideo() {
  if (!videoLanding || !videoLanding.paused) return;
  videoLanding.muted = true;   // obrigatório, senão o browser recusa
  const p = videoLanding.play();
  if (p && p.then) p.then(pararDeTentar).catch(() => {});
}

if (videoLanding) {
  tentarTocarVideo();
  videoLanding.addEventListener("canplay", tentarTocarVideo);
  EVENTOS_INTERACAO.forEach((e) =>
    window.addEventListener(e, tentarTocarVideo, { passive: true })
  );
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tentarTocarVideo();
  });
}

/* Menu de telemóvel */
const cabecalho = $(".nav");
const botaoMenu = $("#abrir-menu");
function alternarMenu(abrir) {
  const aberto = abrir !== undefined ? abrir : !cabecalho.classList.contains("nav--aberta");
  cabecalho.classList.toggle("nav--aberta", aberto);
  document.body.style.overflow = aberto ? "hidden" : "";
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}
botaoMenu.addEventListener("click", () => alternarMenu());
$("#nav-links").addEventListener("click", () => alternarMenu(false));
document.addEventListener("click", (e) => {
  if (!cabecalho.contains(e.target)) alternarMenu(false);
});

/* Pop-up "Sobre" */
const modalSobre = $("#sobre");
function abrirSobre() { modalSobre.hidden = false; document.body.style.overflow = "hidden"; }
function fecharSobre() { modalSobre.hidden = true; document.body.style.overflow = ""; }
$("#abrir-sobre").addEventListener("click", abrirSobre);
modalSobre.querySelectorAll("[data-fechar]").forEach((el) => el.addEventListener("click", fecharSobre));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modalSobre.hidden) fecharSobre(); });

/* Nav: branca na landing, escura no resto */
const nav = $(".nav");
const hero = $(".hero");
function atualizarNav() {
  const naLanding = paginaProjeto.hidden && window.scrollY < hero.offsetHeight - 60;
  nav.classList.toggle("nav--escura", !naLanding);
}
window.addEventListener("scroll", atualizarNav, { passive: true });
window.addEventListener("hashchange", atualizarNav);
window.addEventListener("resize", atualizarNav);
window.addEventListener("orientationchange", atualizarNav);
window.addEventListener("load", atualizarNav);

/* Iniciar */
construirLista();
rotear();
atualizarNav();
