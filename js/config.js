/* ============================================================
   CONFIGURAÇÃO DO SITE – edite apenas este arquivo
   ============================================================ */
const SITE = {
  whatsapp: "5573999135131",                       // DDI + DDD + número
  instagram: "https://www.instagram.com/maikonpaixaoazulejista/",

  /* GALERIA
     tipo: "foto" ou "video"
     img:  caminho da imagem de prévia (salve em assets/trabalhos/)
           para vídeo, use um print/capa do vídeo
     link: endereço do post/reel no Instagram (abre ao clicar)
     legenda: texto curto que aparece sobre a imagem
     Se a imagem não existir, aparece um espaço reservado elegante. */
  /* PROJETOS (destaques do Instagram)
     grupo: "ultimos" (cards grandes), "categoria" (grade) ou "retro" (faixa larga)
     icone: ícone grande da capa (já embutido no site, não precisa de imagem).
            opções: obra, banheiro, cozinha, parede, piso, granito, pedra, rodape,
                    azulejo, piscina, retro
     link:  endereço do destaque (abre ao clicar) */
  projetos: [
    { grupo: "ultimos",   titulo: "Últimos projetos", sub: "Parte 1", icone: "obra", link: "https://www.instagram.com/stories/highlights/18146680207563192/" },
    { grupo: "ultimos",   titulo: "Últimos projetos", sub: "Parte 2", icone: "obra", link: "https://www.instagram.com/stories/highlights/18119420581644317/" },
    { grupo: "ultimos",   titulo: "Últimos projetos", sub: "Parte 3", icone: "obra", link: "https://www.instagram.com/stories/highlights/18066173798203811/" },
    { grupo: "categoria", titulo: "Banheiros",         icone: "banheiro",          link: "https://www.instagram.com/stories/highlights/18015205658732764/" },
    { grupo: "categoria", titulo: "Cozinhas",          icone: "cozinha",           link: "https://www.instagram.com/stories/highlights/18182482714324257/" },
    { grupo: "categoria", titulo: "Paredes",           icone: "parede",            link: "https://www.instagram.com/stories/highlights/18061532548972823/" },
    { grupo: "categoria", titulo: "Pisos",             icone: "piso",              link: "https://www.instagram.com/stories/highlights/18095635003594814/" },
    { grupo: "categoria", titulo: "Granitos",          icone: "granito",           link: "https://www.instagram.com/stories/highlights/18626571427020225/" },
    { grupo: "categoria", titulo: "Pedras naturais",icone: "pedra",           link: "https://www.instagram.com/stories/highlights/18468005515191470/" },
    { grupo: "categoria", titulo: "Rodapés",           icone: "rodape",            link: "https://www.instagram.com/stories/highlights/18116190322969155/" },
    { grupo: "categoria", titulo: "Azulejo trabalhado",icone: "azulejo", link: "https://www.instagram.com/stories/highlights/18085619536853187/" },
    { grupo: "categoria", titulo: "Piscinas",          icone: "piscina",           link: "https://www.instagram.com/stories/highlights/18036855740342482/" },
    { grupo: "retro",     titulo: "Retrospectiva 2025", sub: "Um ano de obras entregues", icone: "retro", link: "https://www.instagram.com/stories/highlights/18075271220318890/" }
  ],

  trabalhos: [
    { tipo: "video", img: "assets/trabalhos/video1.jpg", link: "https://www.instagram.com/p/DLWAa94O47A/", legenda: "Revestimento de cerâmica" },
    { tipo: "foto",  img: "assets/trabalhos/foto1.jpg",  link: "https://www.instagram.com/p/DLVwxKxS-mM/", legenda: "Cerâmica para piscina" },
    { tipo: "foto",  img: "assets/trabalhos/foto2.jpg",  link: "https://www.instagram.com/p/DLVK--SOO-j/", legenda: "Revestimento de parede" },
    { tipo: "video", img: "assets/trabalhos/video2.jpg", link: "https://www.instagram.com/p/DetzjNSM_sE/", legenda: "Acabamento fino" },
    { tipo: "foto",  img: "assets/trabalhos/foto3.jpg",  link: "https://www.instagram.com/p/Dc6Ro9zMUhu/", legenda: "Azuleijos" },
    { tipo: "foto",  img: "assets/trabalhos/foto4.jpg",  link: "https://www.instagram.com/p/Dc1hV5QMblo/", legenda: "Porcelanatos" },
    { tipo: "video", img: "assets/trabalhos/video3.jpg", link: "https://www.instagram.com/p/Dc_FcPGMxFH/", legenda: "Compilado de projetos" },
    { tipo: "foto",  img: "assets/trabalhos/foto5.jpg",  link: "https://www.instagram.com/p/DcjwbUmsEGl/", legenda: "Obra em banheiro" }
  ]
};
