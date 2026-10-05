import type { Metadata } from "next";
import type { IconName } from "@/components/Icons";

export type Locale = "es" | "pt";

export type Dictionary = {
  htmlLang: "es" | "pt-BR";
  ogLocale: "es_LA" | "pt_BR";
  pixelScript: "en_US" | "pt_BR";
  path: "/" | "/br";
  metadata: {
    description: string;
    keywords: string[];
    shareDescription: string;
    imageAlt: string;
  };
  cta: string;
  ctaHint: string;
  checkoutUrl: string;
  header: {
    designs: string;
    includes: string;
    questions: string;
    access: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    body: string;
    aboveCta?: string;
    mockupAlt: string;
  };
  trust: { value: string; label: string }[];
  problem: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    body: string;
    cards: { title: string; text: string }[];
  };
  positioning: { eyebrow: string; title: string; body: string };
  gallery: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    body: string;
    exclusiveAlt: string;
    premiumAlt: string;
    footnote: string;
  };
  testimonials: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    verified: string;
    items: { name: string; photo: string; quote: string }[];
  };
  why: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    items: { title: string; description: string; icon: IconName }[];
  };
  benefits: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    cases: { title: string; icon: IconName }[];
  };
  guarantee: {
    sealTop: string;
    sealBottom: string;
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    before: string;
    highlight: string;
    after: string;
  };
  finalCta: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    body: string;
    benefits: string[];
    secure: string;
    mockupAlt: string;
  };
  faq: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    rights: string;
    designs: string;
    includes: string;
    questions: string;
    access: string;
  };
  whatsapp: {
    message: string;
    talk: string;
    talkAria: string;
    openAria: string;
  };
  carousel: { prev: string; next: string };
  artAlt: string;
  hotmart: { accept: string; decline: string };
};

const es: Dictionary = {
  htmlLang: "es",
  ogLocale: "es_LA",
  pixelScript: "en_US",
  path: "/",
  metadata: {
    description:
      "La colección más exclusiva de Criativarts. Más de 200 diseños premium con alto valor percibido, uso comercial y actualizaciones de por vida para elevar tus productos.",
    keywords: [
      "Mega Pack Deluxe",
      "Criativarts",
      "diseños premium",
      "diseños exclusivos",
      "alta resolución",
      "uso comercial",
      "DTF",
      "sublimación",
    ],
    shareDescription:
      "Diseños exclusivos de alto valor percibido para cuadros, playeras, DTF y productos premium.",
    imageAlt: "Mega Pack Deluxe — Colección Premium Criativarts",
  },
  cta: "Quiero el Mega Pack Deluxe",
  ctaHint: "Acceso inmediato · Uso comercial · Actualizaciones de por vida",
  checkoutUrl: "https://pay.hotmart.com/E106660148F?checkoutMode=10",
  header: {
    designs: "Diseños",
    includes: "Qué incluye",
    questions: "Preguntas",
    access: "Obtener acceso",
  },
  hero: {
    badge: "Colección Premium",
    subtitle:
      "Diseños exclusivos de alto valor percibido para productos que se venden como lujo.",
    body: "No es un pack más. Es una curaduría premium de arte sofisticado, lista para cuadros, playeras, DTF, sublimación y regalos que merecen un precio más alto. Acceso inmediato. Uso comercial incluido.",
    mockupAlt: "Mega Pack Deluxe — Colección Premium Criativarts",
  },
  trust: [
    { value: "+200", label: "Diseños exclusivos" },
    { value: "Alta", label: "Resolución de impresión" },
    { value: "100%", label: "Uso comercial" },
    { value: "Gratis", label: "Actualizaciones de por vida" },
  ],
  problem: {
    eyebrow: "El verdadero problema",
    titleBefore: "Tus productos compiten con",
    titleHighlight: "miles iguales",
    body: "El mercado está lleno de los mismos archivos. Cuando el diseño se ve genérico, el cliente no percibe lujo: compara precio, pide descuento y se va con el más barato. Tú produces más… y ganas menos.",
    cards: [
      {
        title: "Diseños quemados",
        text: "Los packs comunes reciclan las mismas piezas. El cliente ya las vio en otro lado.",
      },
      {
        title: "Se ven baratos",
        text: "Sin acabado premium, tu producto parece promocional. El precio se viene abajo.",
      },
      {
        title: "Cero diferenciación",
        text: "Si tu catálogo no destaca, compites por volumen. El Deluxe existe para romper eso.",
      },
    ],
  },
  positioning: {
    eyebrow: "No es cantidad. Es curaduría.",
    title: "La colección más exclusiva de Criativarts",
    body: "Creada para emprendedores y negocios que quieren productos con cara de lujo — y un margen que lo acompañe.",
  },
  gallery: {
    eyebrow: "Vista previa",
    titleBefore: "Arte que se siente",
    titleHighlight: "exclusivo",
    body: "Una muestra de la curaduría Deluxe. Piezas pensadas para verse sofisticadas en el producto final — no para llenar carpetas.",
    exclusiveAlt: "Diseño exclusivo Deluxe",
    premiumAlt: "Diseño premium Deluxe",
    footnote:
      "Esto es solo una muestra. El pack completo incluye más de 200 diseños exclusivos.",
  },
  testimonials: {
    eyebrow: "Testimonios",
    titleBefore: "Lo que dicen quienes ya tienen el",
    titleHighlight: "Deluxe",
    verified: "Verificado",
    items: [
      {
        name: "Camilo Soto",
        photo: "/images/testimonials/camilo.webp",
        quote:
          "La verdad tenía recelo de comprar. Pensé que iba a ser otro pack más de los que ya todos usan. No. Se nota que está seleccionado, y en el producto se ve lujo.",
      },
      {
        name: "Mateo Rivas",
        photo: "/images/testimonials/mateo.webp",
        quote:
          "El contenido completo es tan bueno como las imágenes que muestran en la página, incluso diría que es mejor. La verdad, ¡felicitaciones por el trabajo!",
      },
      {
        name: "Daniel Peña",
        photo: "/images/testimonials/daniel-pena.webp",
        quote:
          "Definitivamente no es otro pack más de internet. El contenido está muy bien hecho y tiene un estilo original. Lo recomiendo totalmente.",
      },
    ],
  },
  why: {
    eyebrow: "La diferencia",
    titleBefore: "Por qué tus productos se ven más",
    titleHighlight: "caros",
    items: [
      {
        title: "Diseños Premium",
        description:
          "Arte curado con acabado de galería. Cada pieza está pensada para que tu producto se vea caro a primera vista.",
        icon: "sparkles",
      },
      {
        title: "Selección Exclusiva",
        description:
          "No es un dump de archivos. Es una colección que no vas a encontrar en packs genéricos ni en bancos de imágenes.",
        icon: "diamond",
      },
      {
        title: "Alta Resolución",
        description:
          "Listos para impresión en gran formato, DTF y sublimación sin pixelar ni perder detalle.",
        icon: "resolution",
      },
      {
        title: "Uso Comercial",
        description:
          "Vende cuadros, playeras, tazas y regalos con tranquilidad. La licencia comercial va incluida.",
        icon: "commercial",
      },
      {
        title: "Mayor Valor Percibido",
        description:
          "Cuando el diseño se ve premium, el cliente deja de pelear por precio y acepta pagar más.",
        icon: "value",
      },
      {
        title: "Actualizaciones Gratuitas",
        description:
          "Nuevas piezas se suman al pack sin costo extra. Compras una vez y la colección crece contigo.",
        icon: "updates",
      },
    ],
  },
  benefits: {
    eyebrow: "Aplicaciones",
    titleBefore: "Diseños premium para",
    titleHighlight: "tu negocio",
    cases: [
      { title: "Cuadros", icon: "frame" },
      { title: "Playeras", icon: "shirt" },
      { title: "Tazas", icon: "mug" },
      { title: "DTF", icon: "print" },
      { title: "Sublimación", icon: "sublimation" },
      { title: "Decoración", icon: "decor" },
      { title: "Regalos", icon: "gift" },
      { title: "Productos Premium", icon: "premium" },
    ],
  },
  guarantee: {
    sealTop: "GARANTÍA",
    sealBottom: "EXCLUSIVA",
    eyebrow: "Compra protegida",
    titleBefore: "Garantía",
    titleHighlight: "incondicional",
    before:
      "Si no estás 100% satisfecho con el Mega Pack Deluxe, pides tu dinero de vuelta. Sin letras chicas y ",
    highlight: "en cualquier momento",
    after: ". Tu compra está protegida de principio a fin.",
  },
  finalCta: {
    eyebrow: "Empieza hoy",
    titleBefore: "Eleva el nivel de",
    titleHighlight: "tus productos",
    body: "Obtén ahora la colección premium de Criativarts y ofrece diseños que destacan por calidad, elegancia y alto valor percibido.",
    benefits: [
      "+200 diseños JPG/PNG exclusivos de alto valor percibido",
      "Licencia de uso comercial incluida",
      "Alta resolución para gran formatos (hasta 2,5 metros)",
      "Actualizaciones gratuitas de por vida",
      "Acceso inmediato después de la compra",
      "Ideal para cuadros, playeras, tazas y regalos premium",
    ],
    secure: "Pago Seguro",
    mockupAlt: "Mega Pack Deluxe — Colección Premium Criativarts",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    titleBefore: "Todo claro,",
    titleHighlight: "sin letras chicas",
    items: [
      {
        question: "¿Qué incluye el Mega Pack Deluxe?",
        answer:
          "Una colección premium con más de 200 diseños JPG/PNG exclusivos, curados para verse sofisticados en el producto final. Incluye uso comercial, archivos en alta resolución hasta 2,5 metros y actualizaciones de por vida.",
      },
      {
        question: "¿Puedo usar los diseños para vender?",
        answer:
          "Sí. El pack incluye licencia de uso comercial. Puedes aplicarlos en cuadros, playeras, tazas, DTF, sublimación, decoración y otros productos de tu negocio.",
      },
      {
        question: "¿Cómo recibo el acceso?",
        answer:
          "El acceso es inmediato después de la compra. Entras al pack y empiezas a descargar los diseños para producir el mismo día.",
      },
      {
        question: "¿Sirve para DTF, sublimación y gran formato?",
        answer:
          "Sí. Los archivos están en alta resolución para que puedas imprimir en gran formato y aplicarlos en DTF, sublimación y productos promocionales sin perder calidad.",
      },
      {
        question: "¿En qué se diferencia de otros packs?",
        answer:
          "La mayoría de packs venden volumen. El Deluxe vende curaduría: menos ruido, más piezas con acabado premium y mayor valor percibido. Está pensado para que tus productos se vean — y se vendan — más caros.",
      },
      {
        question: "¿Hay actualizaciones?",
        answer:
          "Sí. Las actualizaciones son de por vida y sin costo extra. Cuando sumemos nuevas piezas a la colección, las recibes tú también.",
      },
      {
        question: "¿Es un pago único?",
        answer:
          "Sí. Pagas una vez, obtienes el pack y las actualizaciones futuras quedan incluidas. No hay suscripción mensual.",
      },
      {
        question: "¿La compra es segura?",
        answer:
          "Sí. El pago se procesa de forma protegida. Si tienes cualquier duda después de comprar, el soporte de Criativarts te acompaña.",
      },
    ],
  },
  footer: {
    rights: "Mega Pack Deluxe — Todos los derechos reservados",
    designs: "Diseños",
    includes: "Qué incluye",
    questions: "Preguntas",
    access: "Obtener acceso",
  },
  whatsapp: {
    message: "Hola, me gustaría obtener más información sobre el Mega Pack Deluxe",
    talk: "Hablar con representante",
    talkAria: "Hablar con representante por WhatsApp",
    openAria: "Abrir soporte de WhatsApp",
  },
  carousel: { prev: "Ver diseños anteriores", next: "Ver más diseños" },
  artAlt: "Diseño premium Deluxe",
  hotmart: {
    accept: "Sí, también quiero el Mega Pack Deluxe",
    decline: "No quiero esta oferta especial",
  },
};

const pt: Dictionary = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  pixelScript: "pt_BR",
  path: "/br",
  metadata: {
    description:
      "A coleção mais exclusiva da Criativarts. Mais de 200 artes premium com alto valor percebido, uso comercial e atualizações vitalícias para elevar os seus produtos.",
    keywords: [
      "Mega Pack Deluxe",
      "Criativarts",
      "artes premium",
      "artes exclusivas",
      "alta resolução",
      "uso comercial",
      "DTF",
      "sublimação",
      "camisetas",
      "quadros",
    ],
    shareDescription:
      "Artes exclusivas de alto valor percebido para quadros, camisetas, DTF e produtos premium.",
    imageAlt: "Mega Pack Deluxe — Coleção Premium Criativarts",
  },
  cta: "Quero o Mega Pack Deluxe",
  ctaHint: "Acesso imediato · Uso comercial · Atualizações vitalícias",
  checkoutUrl:
    "https://pay.hotmart.com/E106660148F?off=vv6dld46&checkoutMode=10",
  header: {
    designs: "Artes",
    includes: "O que inclui",
    questions: "Dúvidas",
    access: "Garantir acesso",
  },
  hero: {
    badge: "Coleção Premium",
    subtitle:
      "Artes exclusivas de alto valor percebido para produtos que vendem como luxo.",
    body: "Não é mais um pack de artes. O Mega Pack Deluxe foi pensado para pessoas que querem se diferenciar dos concorrentes. Essa coleção foi produzida com artes novas, atuais, dos temas mais procurados pra quem deseja vender artigos luxuosos com muito valor percebido.",
    aboveCta:
      "Receba acesso imediato a um arsenal de artes em alta resolução exclusivas, para fazer quadros de qualquer tamanho ou qualquer projeto que demande artes diferentes de todas as outras.",
    mockupAlt: "Mega Pack Deluxe — Coleção Premium Criativarts",
  },
  trust: [
    { value: "+200", label: "Artes exclusivas" },
    { value: "Alta", label: "Resolução de impressão" },
    { value: "100%", label: "Uso comercial" },
    { value: "Grátis", label: "Atualizações vitalícias" },
  ],
  problem: {
    eyebrow: "O problema de verdade",
    titleBefore: "Seus produtos competem com",
    titleHighlight: "milhares iguais",
    body: "O mercado está lotado dos mesmos arquivos. Quando a arte parece genérica, o cliente não vê luxo: compara preço, pede desconto e fecha com quem cobra menos. Você produz mais… e ganha menos.",
    cards: [
      {
        title: "Artes queimadas",
        text: "Os packs comuns repetem as mesmas peças. O cliente já viu em outro lugar.",
      },
      {
        title: "Parecem baratas",
        text: "Sem acabamento premium, o produto parece brinde. O preço desaba.",
      },
      {
        title: "Sem diferencial",
        text: "Se o catálogo não chama atenção, você compete por volume. O Deluxe existe para romper isso.",
      },
    ],
  },
  positioning: {
    eyebrow: "Não é quantidade. É curadoria.",
    title: "A coleção mais exclusiva da Criativarts",
    body: "Feita para empreendedores e negócios que querem produto com cara de luxo — e uma margem à altura.",
  },
  gallery: {
    eyebrow: "Prévias",
    titleBefore: "Designs únicos que você só acha no",
    titleHighlight: "Deluxe",
    body: "Uma amostra das artes e estilos que você vai encontrar no pack completo. Tudo organizado, fácil de achar e baixar, além da qualidade única das imagens. Cada arte foi pensada pra ser única e dar um tom especial no produto final.",
    exclusiveAlt: "Arte exclusiva Deluxe",
    premiumAlt: "Arte premium Deluxe",
    footnote:
      "Isso é só uma amostra. O pack completo tem mais de 200 artes exclusivas.",
  },
  testimonials: {
    eyebrow: "Depoimentos",
    titleBefore: "O que diz quem já tem o",
    titleHighlight: "Deluxe",
    verified: "Verificado",
    items: [
      {
        name: "Camilo Soto",
        photo: "/images/testimonials/camilo.webp",
        quote:
          "Eu estava com o pé atrás. Achei que ia ser mais um pack daqueles que todo mundo já usa. Não é. Dá para ver que foi selecionado de verdade, e no produto o visual é de luxo.",
      },
      {
        name: "Mateo Rivas",
        photo: "/images/testimonials/mateo.webp",
        quote:
          "O conteúdo completo é tão bom quanto as imagens da página. Na real, eu diria que é melhor. Parabéns pelo trabalho.",
      },
      {
        name: "Daniel Peña",
        photo: "/images/testimonials/daniel-pena.webp",
        quote:
          "Definitivamente não é mais um pack qualquer da internet. O conteúdo é muito bem feito e tem um estilo original. Recomendo de olhos fechados.",
      },
    ],
  },
  why: {
    eyebrow: "A diferença",
    titleBefore: "Por que seus produtos parecem mais",
    titleHighlight: "caros",
    items: [
      {
        title: "Artes premium",
        description:
          "Arte com acabamento de galeria. Cada peça foi pensada para o seu produto parecer caro à primeira vista.",
        icon: "sparkles",
      },
      {
        title: "Seleção exclusiva",
        description:
          "Não é um monte de arquivo jogado na pasta. É uma coleção que você não encontra em pack genérico nem em banco de imagem.",
        icon: "diamond",
      },
      {
        title: "Alta resolução",
        description:
          "Prontas para impressão em grande formato, DTF e sublimação, sem pixelar e sem perder detalhe.",
        icon: "resolution",
      },
      {
        title: "Uso comercial",
        description:
          "Venda quadros, camisetas, canecas e presentes com tranquilidade. A licença comercial já vem inclusa.",
        icon: "commercial",
      },
      {
        title: "Mais valor percebido",
        description:
          "Quando a arte parece premium, o cliente para de pechinchar e aceita pagar mais.",
        icon: "value",
      },
      {
        title: "Atualizações grátis",
        description:
          "Novas peças entram no pack sem custo extra. Você compra uma vez e a coleção cresce com você.",
        icon: "updates",
      },
    ],
  },
  benefits: {
    eyebrow: "Onde usar",
    titleBefore: "Artes premium para",
    titleHighlight: "o seu negócio",
    cases: [
      { title: "Quadros", icon: "frame" },
      { title: "Camisetas", icon: "shirt" },
      { title: "Canecas", icon: "mug" },
      { title: "DTF", icon: "print" },
      { title: "Sublimação", icon: "sublimation" },
      { title: "Decoração", icon: "decor" },
      { title: "Presentes", icon: "gift" },
      { title: "Produtos premium", icon: "premium" },
    ],
  },
  guarantee: {
    sealTop: "GARANTIA",
    sealBottom: "EXCLUSIVA",
    eyebrow: "Compra protegida",
    titleBefore: "Garantia",
    titleHighlight: "incondicional",
    before:
      "Se você não ficar 100% satisfeito com o Mega Pack Deluxe, é só pedir o dinheiro de volta. Sem letra miúda e ",
    highlight: "a qualquer momento",
    after: ". Sua compra fica protegida do começo ao fim.",
  },
  finalCta: {
    eyebrow: "Comece hoje",
    titleBefore: "Eleve o nível dos",
    titleHighlight: "seus produtos",
    body: "Garanta agora a coleção premium da Criativarts e ofereça artes que se destacam por qualidade, elegância e alto valor percebido.",
    benefits: [
      "+200 artes JPG/PNG exclusivas, de alto valor percebido",
      "Licença de uso comercial inclusa",
      "Alta resolução para grande formato (até 2,5 metros)",
      "Atualizações grátis e vitalícias",
      "Acesso imediato depois da compra",
      "Ideal para quadros, camisetas, canecas e presentes premium",
      "Receba acesso direto ao Drive organizado (baixe de uma vez ou à medida que quiser)",
    ],
    secure: "Pagamento seguro",
    mockupAlt: "Mega Pack Deluxe — Coleção Premium Criativarts",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    titleBefore: "Tudo claro,",
    titleHighlight: "sem letra miúda",
    items: [
      {
        question: "O que vem no Mega Pack Deluxe?",
        answer:
          "Uma coleção premium com mais de 200 artes exclusivas em JPG e PNG, selecionadas para ficarem sofisticadas no produto final. Inclui uso comercial, arquivos em alta resolução de até 2,5 metros e atualizações vitalícias.",
      },
      {
        question: "Posso usar as artes para vender?",
        answer:
          "Pode. O pack inclui licença de uso comercial. Você aplica em quadros, camisetas, canecas, DTF, sublimação, decoração e nos outros produtos do seu negócio.",
      },
      {
        question: "Como eu recebo o acesso?",
        answer:
          "O acesso é imediato depois da compra. Você entra no pack e já começa a baixar as artes para produzir no mesmo dia.",
      },
      {
        question: "Serve para DTF, sublimação e grande formato?",
        answer:
          "Serve. Os arquivos estão em alta resolução para você imprimir em grande formato e aplicar em DTF, sublimação e produtos promocionais sem perder qualidade.",
      },
      {
        question: "Qual a diferença para os outros packs?",
        answer:
          "A maioria dos packs vende volume. O Deluxe vende curadoria: menos ruído, mais peças com acabamento premium e maior valor percebido. Foi feito para os seus produtos parecerem — e venderem — mais caros.",
      },
      {
        question: "Tem atualização?",
        answer:
          "Tem. As atualizações são vitalícias e sem custo extra. Quando entrarem novas peças na coleção, você recebe também.",
      },
      {
        question: "É pagamento único?",
        answer:
          "É. Você paga uma vez, leva o pack e as próximas atualizações já estão inclusas. Não tem mensalidade.",
      },
      {
        question: "A compra é segura?",
        answer:
          "É. O pagamento é processado de forma protegida. Se ficar qualquer dúvida depois de comprar, o suporte da Criativarts te acompanha.",
      },
    ],
  },
  footer: {
    rights: "Mega Pack Deluxe — Todos os direitos reservados",
    designs: "Artes",
    includes: "O que inclui",
    questions: "Dúvidas",
    access: "Garantir acesso",
  },
  whatsapp: {
    message: "Oi! Quero mais informações sobre o Mega Pack Deluxe",
    talk: "Falar com um consultor",
    talkAria: "Falar com um consultor pelo WhatsApp",
    openAria: "Abrir suporte no WhatsApp",
  },
  carousel: { prev: "Ver artes anteriores", next: "Ver mais artes" },
  artAlt: "Arte premium Deluxe",
  hotmart: {
    accept: "Sim, eu também quero o Mega Pack Deluxe",
    decline: "Não quero essa oferta",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/br" || pathname.startsWith("/br/") ? "pt" : "es";
}

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);

  return {
    metadataBase: new URL("https://mp-deluxe.vercel.app"),
    title: "Mega Pack Deluxe — Criativarts",
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: t.path,
      languages: {
        es: "/",
        "pt-BR": "/br",
      },
    },
    openGraph: {
      title: "Mega Pack Deluxe — Criativarts",
      description: t.metadata.shareDescription,
      url: t.path,
      siteName: "Mega Pack Deluxe",
      type: "website",
      locale: t.ogLocale,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: t.metadata.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mega Pack Deluxe — Criativarts",
      description: t.metadata.shareDescription,
      images: ["/og.jpg"],
    },
    robots: { index: true, follow: true },
  };
}
