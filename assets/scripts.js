const postsW7Busca = [{"titulo":"Iphone 17 Pro Max Ultra","slug":"iphone-17-pro-max-ultra","categoria":"Mundo","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/iphone.png","data":"23/08/2026 00:00","resumo":"Iphone 17 Pro Max Ultra Iphone 17 pro max ultra saiba mais no botão comprar","textoBusca":"Iphone 17 Pro Max Ultra Mundo Iphone 17 Pro Max Ultra Iphone 17 pro max ultra saiba mais no botão comprar <h2 style=\"margin: 0px 0px 10px; padding: 0px; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0);\">Iphone 17 Pro Max Ultra</h2><p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;\">Iphone 17 pro max ultra saiba mais no botão comprar</p><p><br></p><p style=\"margin: 0px 28.7969px 0px 14.3906px; padding: 0px; width: 436.797px; float: right; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;\"></p>"},{"titulo":"Caixa de Som Umega Prime","slug":"caixa-de-som-umega-prime","categoria":"Curiosidades","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/Caixa_Som.png","data":"22/08/2026 00:00","resumo":"Caixa de Som Umega Prime Lorem Ipsum is simply dummy text of the printing and typesetting","textoBusca":"Caixa de Som Umega Prime Curiosidades Caixa de Som Umega Prime Lorem Ipsum is simply dummy text of the printing and typesetting <h2 style=\"margin: 0px 0px 10px; padding: 0px; font-weight: 400; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0);\">Caixa de Som Umega Prime</h2><p style=\"margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;\"><strong style=\"margin: 0px; padding: 0px;\">Lorem Ipsum</strong> is simply dummy text of the printing and typesetting</p>"},{"titulo":"HeadSet Prime Scribus Fonts","slug":"headset-prime-scribus-fonts","categoria":"Mundo","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/Headset.png","data":"21/08/2026 00:00","resumo":"HeadSet Prime Scribus Fonts Marca: InfoJobs Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega g...","textoBusca":"HeadSet Prime Scribus Fonts Mundo HeadSet Prime Scribus Fonts Marca: InfoJobs Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega g... <h2 style=\"margin-top: 0px; margin-bottom: 10px; padding: 0px; font-weight: 400; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0);\">HeadSet Prime Scribus Fonts</h2><p style=\"margin-bottom: 15px; padding: 0px; text-align: justify;\"><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">Marca: InfoJobs<br></span></font><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">Características: Um produto de qualidade superior<br></span></font><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">com especificações técnicas de fácil entendimento<br></span></font><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">Garantia, Nota Fiscal e entrega garantidas por ML</span></font></p>"},{"titulo":"Playstation 5 Online","slug":"playstation-5-online","categoria":"Curiosidades","imagem":"https://raw.githubusercontent.com/alexusbsb-ctrl/img/refs/heads/main/Playstation.png","data":"21/08/2026 00:00","resumo":"Playstation 5 Online Marca: Macrosoft Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garanti...","textoBusca":"Playstation 5 Online Curiosidades Playstation 5 Online Marca: Macrosoft Características: Um produto de qualidade superior com especificações técnicas de fácil entendimento Garantia, Nota Fiscal e entrega garanti... <h2 style=\"margin-top: 0px; margin-bottom: 10px; padding: 0px; font-weight: 400; font-family: DauphinPlain; font-size: 24px; line-height: 24px; color: rgb(0, 0, 0);\">Playstation 5 Online</h2><p style=\"margin-bottom: 15px; padding: 0px; text-align: justify;\"><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">Marca: Macrosoft<br></span></font><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">Características: Um produto de qualidade superior<br></span></font><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">com especificações técnicas de fácil entendimento<br></span></font><font color=\"#000000\" face=\"Open Sans, Arial, sans-serif\"><span style=\"font-size: 14px;\">Garantia, Nota Fiscal e entrega garantidas por ML</span></font></p>"}];
;
"use strict";
const formularioBusca = document.getElementById("formBusca");
const campoBusca = document.getElementById("campoBusca");
const resultadoBusca = document.getElementById("resultadoBusca");
function normalizarTextoBusca(texto) {
  return String(texto || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function escaparBusca(texto) {
  return String(texto == null ? "" : texto).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function executarBusca(consulta) {
  const termo = normalizarTextoBusca(consulta);
  if (!termo) { mostrarEstadoBusca("Digite algo para pesquisar."); return; }
  const palavras = termo.split(/\s+/).filter(Boolean);
  const resultados = postsW7Busca.filter(function(post) {
    const texto = normalizarTextoBusca(post.textoBusca);
    return palavras.every(function(palavra) { return texto.indexOf(palavra) !== -1; });
  });
  renderizarResultadosBusca(resultados, consulta);
}
function renderizarResultadosBusca(resultados, consulta) {
  if (!resultados.length) {
    resultadoBusca.innerHTML = "<div class=\"empty-posts\"><p>Nenhuma notícia encontrada para <strong>\"" + escaparBusca(consulta) + "\"</strong>.</p></div>";
    return;
  }
  let html = "";
  html += "<div class=\"search-results-header\"><strong>" + resultados.length + (resultados.length === 1 ? " resultado" : " resultados") + "</strong></div>";
  html += "<div class=\"posts-list search-posts-list\">";
  resultados.forEach(function(post) {
    const url = "/posts/" + encodeURIComponent(post.slug) + ".html";
    html += "<article class=\"post-card search-post-card\">";
    if (post.imagem) {
      html += "<a href=\"" + escaparBusca(url) + "\" class=\"post-card-image\">";
      html += "<img src=\"" + escaparBusca(post.imagem) + "\" alt=\"" + escaparBusca(post.titulo) + "\" loading=\"lazy\" decoding=\"async\">";
      html += "</a>";
    }
    html += "<div class=\"post-card-body\">";
    html += "<div class=\"post-card-category\">" + escaparBusca(post.categoria) + "</div>";
    html += "<h2 class=\"post-card-title\"><a href=\"" + escaparBusca(url) + "\">" + escaparBusca(post.titulo) + "</a></h2>";
    if (post.resumo) html += "<p class=\"search-result-summary\">" + escaparBusca(post.resumo) + "</p>";
    if (post.data) html += "<div class=\"post-card-date\">" + escaparBusca(post.data) + "</div>";
    html += "</div></article>";
  });
  html += "</div>";
  resultadoBusca.innerHTML = html;
}
function mostrarEstadoBusca(mensagem) {
  resultadoBusca.innerHTML = "<div class=\"empty-posts\"><p>" + escaparBusca(mensagem) + "</p></div>";
}
formularioBusca.addEventListener("submit", function(event) {
  event.preventDefault();
  const consulta = campoBusca.value.trim();
  executarBusca(consulta);
  if (consulta) {
    const novaUrl = new URL(window.location.href);
    novaUrl.searchParams.set("q", consulta);
    window.history.replaceState({}, "", novaUrl.toString());
  }
});
function carregarBuscaInicial() {
  const parametros = new URLSearchParams(window.location.search);
  const consulta = parametros.get("q") || "";
  if (consulta) { campoBusca.value = consulta; executarBusca(consulta); }
  else { mostrarEstadoBusca("Digite uma palavra ou frase para encontrar notícias."); }
}
carregarBuscaInicial();