(function () {
  const wa = n => "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(n);
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener";
  });
  ["igBtn", "igLink"].forEach(id => { const e = document.getElementById(id); if (e) e.href = SITE.instagram; });
  document.getElementById("year").textContent = new Date().getFullYear();

  const ig = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r="1" fill="currentColor"/></svg>';
  const play = '<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';
  const g = document.getElementById("gallery");
  SITE.trabalhos.forEach(t => {
    const a = document.createElement("a");
    a.className = "item " + t.tipo; a.href = t.link; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", (t.tipo === "video" ? "Ver vídeo no Instagram: " : "Ver foto no Instagram: ") + t.legenda);
    a.innerHTML = '<img loading="lazy" alt="' + t.legenda + '" src="' + t.img + '">' +
      (t.tipo === "video" ? play : "") +
      '<span class="cap"><b>' + t.legenda + '</b><i>' + ig + ' Ver no Instagram</i></span>';
    a.querySelector("img").addEventListener("error", function () { this.remove(); a.classList.add("empty"); });
    g.appendChild(a);
  });

  const b = document.querySelector(".burger"), nav = document.querySelector(".nav");
  b.addEventListener("click", () => { const o = nav.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
  document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); b.setAttribute("aria-expanded", false); }));

  /* ---- Projetos (destaques) ---- */
  const arrow = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const ICONES = {
    obra: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"12\" y=\"24\" width=\"56\" height=\"56\" rx=\"5\"/><path d=\"M26 24v56M40 24v56M54 24v56M12 38h56M12 52h56M12 66h56\"/><path d=\"M76 8l3 11 11 3-11 3-3 11-3-11-11-3 11-3z\"/></svg>",
    banheiro: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 50V28a10 10 0 0 1 10-10h14\"/><path d=\"M46 14h16l-3 8H49z\"/><path d=\"M50 30v4M56 30v6M62 30v4\"/><path d=\"M10 50h76v8a16 16 0 0 1-16 16H26a16 16 0 0 1-16-16z\"/><path d=\"M24 74l-4 8M72 74l4 8\"/></svg>",
    cozinha: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M26 46h44v22a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6z\"/><path d=\"M22 46h52M44 46v-5h8v5M26 54h-8M70 54h8\"/><path d=\"M38 34c-4-5 4-8 0-14M50 34c-4-5 4-8 0-14M62 34c-4-5 4-8 0-14\"/><path d=\"M18 82h60\"/></svg>",
    parede: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"12\" y=\"14\" width=\"72\" height=\"62\" rx=\"3\"/><path d=\"M12 30h72M12 46h72M12 62h72M36 14v16M60 14v16M24 30v16M48 30v16M72 30v16M36 46v16M60 46v16M24 62v14M48 62v14M72 62v14\"/></svg>",
    piso: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M26 24h44l18 52H8z\"/><path d=\"M21.500 37h53M17 50h62M12.500 63h71M37 24L28 76M48 24v52M59 24l9 52\"/></svg>",
    granito: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 34h64l-10 18H10z\"/><path d=\"M10 52h64v12H10zM84 34v12l-10 18\"/><path d=\"M30 43h.01M44 40h.01M58 44h.01M66 38h.01M38 47h.01M52 48h.01M76 40h.01\" stroke-width=\"5\"/></svg>",
    rodape: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 18v40M84 18v40M12 18h72\"/><path d=\"M12 58h72v10H12z\"/><path d=\"M8 68h80v16H8z\"/><path d=\"M28 68v16M48 68v16M68 68v16\"/></svg>",
    azulejo: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"14\" y=\"14\" width=\"68\" height=\"68\" rx=\"6\"/><path d=\"M48 22l26 26-26 26-26-26z\"/><circle cx=\"48\" cy=\"48\" r=\"7\"/><circle cx=\"48\" cy=\"35\" r=\"4\"/><circle cx=\"61\" cy=\"48\" r=\"4\"/><circle cx=\"48\" cy=\"61\" r=\"4\"/><circle cx=\"35\" cy=\"48\" r=\"4\"/><path d=\"M14 28a14 14 0 0 0 14-14M68 14a14 14 0 0 0 14 14M82 68a14 14 0 0 0-14 14M28 82a14 14 0 0 0-14-14\"/></svg>",
    piscina: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M62 52V14M76 52V14M62 14a7 7 0 0 1 14 0M62 26h14M62 38h14\"/><path d=\"M8 52v26a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V52\"/><path d=\"M12 64c4.500-6 13.500-6 18 0s13.500 6 18 0 13.500-6 18 0 13.500 6 18 0M12 76c4.500-6 13.500-6 18 0s13.500 6 18 0 13.500-6 18 0 13.500 6 18 0\"/></svg>",
    retro: "<svg viewBox=\"0 0 96 96\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"16\" y=\"20\" width=\"64\" height=\"62\" rx=\"6\"/><path d=\"M16 36h64M32 12v14M64 12v14\"/><text x=\"48\" y=\"68\" text-anchor=\"middle\" font-family=\"Barlow Condensed,Arial Narrow,sans-serif\" font-size=\"22\" font-weight=\"800\" fill=\"currentColor\" stroke=\"none\">2025</text></svg>"
  };
  const box = { ultimos: document.getElementById("pUltimos"), categoria: document.getElementById("pCats"), retro: document.getElementById("pRetro") };
  (SITE.projetos || []).forEach(p => {
    const a = document.createElement("a");
    a.className = "pcard " + p.grupo; a.href = p.link; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", "Abrir destaque no Instagram: " + p.titulo + (p.sub ? " – " + p.sub : ""));
    a.innerHTML = '<span class="picon">' + (ICONES[p.icone] || ICONES.obra) + '</span>' +
      '<span class="ring"><img src="assets/logo.png" alt=""></span>' +
      '<span class="pinfo"><span><b>' + p.titulo + '</b>' + (p.sub ? '<em>' + p.sub + '</em>' : '') + '</span><span class="go">' + arrow + '</span></span>';
    (box[p.grupo] || box.categoria).appendChild(a);
  });
  const ig2 = document.getElementById("igBtn2"); if (ig2) ig2.href = SITE.instagram;
})();
