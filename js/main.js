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
})();
