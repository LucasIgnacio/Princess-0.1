// ---- Idiomas: português, inglês, espanhol e chinês simplificado ----
const LANGUAGE_STORAGE_KEY = 'mp-language';
const translations = {
  "pt-BR": {
    "page.title": "Malharia Princesa — Moda que inspira movimento",
    "page.description": "Malharia Princesa, há mais de 70 anos produzindo os melhores tecidos do mercado brasileiro em Joinville, SC.",
    "language.select": "Selecionar idioma",
    "theme.toggle": "Alternar entre tema claro e escuro",
    "menu.open": "Abrir menu",
    "menu.close": "Fechar menu",
    "carousel.previous": "Tecnologia anterior",
    "carousel.next": "Próxima tecnologia",
    "carousel.goToGroup": "Ir para o grupo {number}",
    "nav.about": "Sobre",
    "nav.fabrics": "Tecidos",
    "nav.technologies": "Tecnologias",
    "nav.services": "Serviços",
    "nav.sustainability": "Sustentabilidade",
    "nav.contact": "Fale conosco",
    "hero.location": "Joinville · SC · Brasil",
    "hero.title": "Moda que inspira movimento.",
    "hero.lede": "Há mais de sete décadas transformamos fio em tecido, da malharia à tinturaria, do acabamento à estamparia, vestindo as marcas de moda íntima, esportiva e praia de todo o país.",
    "hero.fabricsCta": "Conhecer os tecidos",
    "hero.quoteCta": "Solicitar orçamento",
    "hero.statFounded": "Ano de fundação",
    "hero.statYears": "Anos de mercado",
    "hero.statLocation": "Sede em Joinville",
    "about.eyebrow": "Nossa história",
    "about.title": "Raízes na Cidade dos Príncipes",
    "about.p1": "Com mais de 70 anos de atuação no mercado, a Malharia Princesa consolidou sua trajetória a partir de suas raízes em Joinville, SC, reconhecida como a Cidade dos Príncipes. Seu nome presta homenagem à Princesa Dona Francisca e traduz uma história construída com tradição, conhecimento e compromisso com a indústria têxtil.",
    "about.p2": "Somos especialistas na produção de tecidos para os segmentos de moda íntima, esportiva e praia, além de oferecermos serviços de beneficiamento têxtil para grandes marcas em todo o território nacional.",
    "about.p3": "Em constante evolução, investimos continuamente no aprimoramento de nossos processos, na incorporação de novas tecnologias e no desenvolvimento de soluções de produção mais eficientes e sustentáveis.",
    "fabrics.eyebrow": "O que tecemos",
    "fabrics.title": "Nossos tecidos",
    "fabrics.intro": "Do primeiro amor de tecer sonhos até a peça final: cada processo carrega uma técnica própria, herdada e aperfeiçoada ao longo de sete décadas.",
    "fabrics.card1.label": "01 — Malharia",
    "fabrics.card1.title": "Circular e por urdume",
    "fabrics.card1.text": "Criamos artigos lisos, de baixa e alta gramatura, listrados ou com efeitos de desenho. Com os melhores fios do mercado e nanotecnologia, nossas malhas oferecem elasticidade, compressão, conforto térmico, proteção solar e ação anticelulite.",
    "fabrics.card2.label": "02 — Tecelagem",
    "fabrics.card2.title": "Kettenstuhl e Raschel",
    "fabrics.card2.text": "Máquinas por urdume entrelaçam os fios de forma que o ponto não se desfaça, conferindo resistência e delicadeza. É assim que nascem rendas, tules e as linhas sem costura e de compressão das nossas coleções.",
    "fabrics.card3.label": "03 — Especialidade",
    "fabrics.card3.title": "Rendas e tules",
    "fabrics.card3.text": "Reconhecidos no mercado nacional, aplicamos o que existe de melhor em fios e matéria-prima. Tecidos delicados exigem cuidado especial, e é nisso que a Princesa se especializou.",
    "tech.eyebrow": "Inovação em fios",
    "tech.title": "Tecnologias e selos",
    "tech.intro": "Trabalhamos com fios e acabamentos desenvolvidos para ir além do toque, sustentabilidade, performance e cuidado com a pele em cada fibra.",
    "tech.amni": "Fio de poliamida 6.6 com aditivos que aceleram sua decomposição, até 10x mais rápido em aterros e 40x mais rápido nos oceanos que uma fibra sintética comum.",
    "tech.creora": "Tecnologia que dá ao elastano maior resistência ao cloro, protetores solares e luz UV, com durabilidade até 10x maior que o elastano convencional.",
    "tech.tencel": "Fibra extraída da madeira de faia, de processo autossuficiente em energia. Suavidade excepcional, biodegradável e resistente a repetidos ciclos de lavagem.",
    "tech.kelp": "Fio inteligente com micropartículas de cristais bioativos: ajuda a reduzir sinais de celulite, melhora performance esportiva, firmeza da pele e circulação.",
    "tech.aloe": "Nanopolímero com extrato de aloe vera aplicado por impregnação. Ação regeneradora, hidratante e anti-inflamatória, disponível em qualquer artigo da coleção.",
    "tech.exampleTitle": "Nome da Tecnologia™",
    "tech.exampleText": "Texto de exemplo descrevendo o benefício desta tecnologia ou selo. Substitua por informações reais sobre o fio, acabamento ou certificação.",
    "services.eyebrow": "De ponta a ponta",
    "services.title": "Nossos serviços",
    "services.intro": "Beneficiamento têxtil completo, para as coleções Princesa e para marcas que confiam seus tecidos ao nosso processo.",
    "services.dyeing.label": "Tinturaria",
    "services.dyeing.title": "Cor com precisão",
    "services.dyeing.text": "Um dos nossos maiores orgulhos, reconhecido no mercado por processos inteligentes e produtos químicos tecnológicos. Tingimos poliamida, poliéster, modal, algodão e viscose, sempre buscando minimizar o impacto ambiental.",
    "services.printing.label": "Estamparia",
    "services.printing.title": "Tramas que traduzem sonhos",
    "services.printing.text": "Florais, listras e padrões que criam valor agregado. Trabalhamos com pigmentos que brilham no escuro, refletem luz, se revelam na água ou criam relevo com a temperatura (efeito puff).",
    "services.finishing.label": "Acabamento",
    "services.finishing.title": "O toque final",
    "services.finishing.text": "Lisura, maciez ou volume, e acabamentos especiais sob consulta, como antibacteriano, hidrofílico e repelente à água. É aqui que construímos o caimento que diferencia a Princesa.",
    "sustainability.eyebrow": "Um cuidado com o futuro",
    "sustainability.intro": "Acreditamos que produzir moda e cuidar do planeta caminham juntos, em cada etapa do nosso processo industrial.",
    "sustainability.renewable.label": "Energia renovável",
    "sustainability.renewable.title": "Desde 2021",
    "sustainability.renewable.text": "Aderimos ao Programa Perfil Energia + Limpa, passando a utilizar energia elétrica de fontes renováveis através do Mercado Livre de Energia.",
    "sustainability.kyoto.label": "Protocolo de Quioto",
    "sustainability.kyoto.title": "Redução de GEE",
    "sustainability.kyoto.text": "O Programa Perfil Sustentável certifica anualmente os gases de efeito estufa que deixamos de emitir com a adesão à energia renovável.",
    "sustainability.water.label": "Recursos hídricos",
    "sustainability.water.title": "Tratamento de efluentes",
    "sustainability.water.text": "Investimos continuamente no tratamento de efluentes, tornando nosso processo industrial cada vez mais inteligente e sustentável para as próximas gerações.",
    "testimonials.eyebrow": "O que dizem da Princesa",
    "testimonials.title": "Parceria em primeiro lugar",
    "testimonials.intro": "A relação com nossos clientes é um dos nossos maiores diferenciais.",
    "testimonials.quote1": "Fui muito bem atendida desde o primeiro contato pelo departamento comercial, tão prestativo que mudei meu plano de compra pela atenção e pelas condições de negociação. Os tules e as rendas são lindos, qualidade nota dez.",
    "testimonials.quote2": "Uma empresa que realmente busca a satisfação do cliente do início ao fim do processo.",
    "contact.eyebrow": "Venha nos visitar",
    "contact.title": "Vamos tecer algo juntos",
    "contact.address": "Endereço",
    "contact.contact": "Contato",
    "contact.submit": "Enviar mensagem",
    "footer.tagline": "Moda que inspira movimento, desde 1951.",
    "footer.copyright": "© 2026 Malharia Princesa. Todos os direitos reservados.",
    "form.name": "Seu nome",
    "form.email": "Seu e-mail",
    "form.company": "Empresa (opcional)",
    "form.message": "Conte o que você precisa",
    "form.subject": "Novo contato — site Malharia Princesa",
    "alt.about": "Tecido produzido pela Malharia Princesa",
    "alt.knitting": "Malharia circular e por urdume",
    "alt.weaving": "Tecelagem Kettenstuhl e Raschel",
    "alt.laces": "Rendas e tules Malharia Princesa",
    "alt.dyeing": "Tinturaria Malharia Princesa",
    "alt.printing": "Estamparia Malharia Princesa",
    "alt.finishing": "Acabamento Malharia Princesa",
    "alt.water": "Recursos hídricos",
    "alt.customer": "Cliente Malharia Princesa",
    "alt.cleanEnergy": "Selo Energia Limpa"
  },
  "en": {
    "page.title": "Malharia Princesa — Fashion that inspires movement",
    "page.description": "For more than 70 years, Malharia Princesa has produced high-quality fabrics for the Brazilian market from Joinville, Brazil.",
    "language.select": "Select language",
    "theme.toggle": "Switch between light and dark theme",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "carousel.previous": "Previous technology",
    "carousel.next": "Next technology",
    "carousel.goToGroup": "Go to group {number}",
    "nav.about": "About",
    "nav.fabrics": "Fabrics",
    "nav.technologies": "Technologies",
    "nav.services": "Services",
    "nav.sustainability": "Sustainability",
    "nav.contact": "Contact us",
    "hero.location": "Joinville · SC · Brazil",
    "hero.title": "Fashion that inspires movement.",
    "hero.lede": "For more than seven decades, we have transformed yarn into fabric—from knitting and dyeing to finishing and printing—supplying intimate apparel, sportswear and beachwear brands throughout Brazil.",
    "hero.fabricsCta": "Explore our fabrics",
    "hero.quoteCta": "Request a quote",
    "hero.statFounded": "Year founded",
    "hero.statYears": "Years in business",
    "hero.statLocation": "Headquartered in Joinville",
    "about.eyebrow": "Our history",
    "about.title": "Roots in the City of Princes",
    "about.p1": "With more than 70 years in the market, Malharia Princesa has built its history from its roots in Joinville, Santa Catarina, known as the City of Princes. Its name pays tribute to Princess Dona Francisca and reflects a journey shaped by tradition, expertise and commitment to the textile industry.",
    "about.p2": "We specialize in fabrics for intimate apparel, sportswear and beachwear, while also providing textile finishing services to leading brands throughout Brazil.",
    "about.p3": "Always evolving, we continuously invest in improving our processes, adopting new technologies and developing more efficient and sustainable production solutions.",
    "fabrics.eyebrow": "What we weave",
    "fabrics.title": "Our fabrics",
    "fabrics.intro": "From the first idea to the finished piece, every stage carries a distinct technique inherited and refined over seven decades.",
    "fabrics.card1.label": "01 — Knitting",
    "fabrics.card1.title": "Circular and warp knitting",
    "fabrics.card1.text": "We create solid fabrics in light and heavy weights, as well as stripes and engineered patterns. Using premium yarns and nanotechnology, our fabrics provide stretch, compression, thermal comfort, UV protection and anti-cellulite properties.",
    "fabrics.card2.label": "02 — Weaving",
    "fabrics.card2.title": "Kettenstuhl and Raschel",
    "fabrics.card2.text": "Warp-knitting machines interlace yarns so the stitch does not unravel, combining strength with delicacy. This is how our lace, tulle, seamless and compression collections are created.",
    "fabrics.card3.label": "03 — Specialty",
    "fabrics.card3.title": "Lace and tulle",
    "fabrics.card3.text": "Recognized across the Brazilian market, we use premium yarns and raw materials. Delicate fabrics require exceptional care—and that is one of Princesa’s specialties.",
    "tech.eyebrow": "Innovation in yarns",
    "tech.title": "Technologies and certifications",
    "tech.intro": "We work with yarns and finishes designed to go beyond touch, combining sustainability, performance and skin care in every fiber.",
    "tech.amni": "A polyamide 6.6 yarn with additives that accelerate decomposition—up to 10 times faster in landfills and 40 times faster in oceans than conventional synthetic fiber.",
    "tech.creora": "Technology that gives elastane greater resistance to chlorine, sunscreen and UV light, with durability up to 10 times greater than conventional elastane.",
    "tech.tencel": "A fiber extracted from beech wood through an energy self-sufficient process. Exceptionally soft, biodegradable and resistant to repeated washing cycles.",
    "tech.kelp": "An intelligent yarn with bioactive crystal microparticles that may help reduce the appearance of cellulite and support sports performance, skin firmness and circulation.",
    "tech.aloe": "A nanopolymer with aloe vera extract applied by impregnation. It offers regenerating, moisturizing and anti-inflammatory properties and can be added to any item in the collection.",
    "tech.exampleTitle": "Technology Name™",
    "tech.exampleText": "Sample text describing the benefits of this technology or certification. Replace it with verified information about the yarn, finish or certification.",
    "services.eyebrow": "From end to end",
    "services.title": "Our services",
    "services.intro": "Complete textile processing for Princesa collections and for brands that entrust their fabrics to our expertise.",
    "services.dyeing.label": "Dyeing",
    "services.dyeing.title": "Precision in color",
    "services.dyeing.text": "One of our greatest strengths, recognized in the market for intelligent processes and advanced chemical solutions. We dye polyamide, polyester, modal, cotton and viscose while continually working to minimize environmental impact.",
    "services.printing.label": "Printing",
    "services.printing.title": "Patterns that bring dreams to life",
    "services.printing.text": "Florals, stripes and patterns that add value. We work with pigments that glow in the dark, reflect light, appear in water or create heat-activated texture through a puff effect.",
    "services.finishing.label": "Finishing",
    "services.finishing.title": "The final touch",
    "services.finishing.text": "Smoothness, softness or volume, along with special finishes available on request, including antibacterial, hydrophilic and water-repellent treatments. This is where we create the drape that distinguishes Princesa.",
    "sustainability.eyebrow": "Caring for the future",
    "sustainability.intro": "We believe fashion production and environmental responsibility must move together at every stage of our industrial process.",
    "sustainability.renewable.label": "Renewable energy",
    "sustainability.renewable.title": "Since 2021",
    "sustainability.renewable.text": "We joined the Perfil Energia + Limpa program and began sourcing electricity from renewable sources through Brazil’s free energy market.",
    "sustainability.kyoto.label": "Kyoto Protocol",
    "sustainability.kyoto.title": "GHG reduction",
    "sustainability.kyoto.text": "The Perfil Sustentável program annually certifies the greenhouse gas emissions avoided through our use of renewable energy.",
    "sustainability.water.label": "Water resources",
    "sustainability.water.title": "Effluent treatment",
    "sustainability.water.text": "We continuously invest in effluent treatment, making our industrial process increasingly intelligent and sustainable for future generations.",
    "testimonials.eyebrow": "What people say about Princesa",
    "testimonials.title": "Partnership comes first",
    "testimonials.intro": "Our relationship with customers is one of our greatest strengths.",
    "testimonials.quote1": "I received excellent support from the very first contact with the sales team. They were so attentive that I changed my purchasing plan because of the service and negotiation terms. The tulles and laces are beautiful—top-quality products.",
    "testimonials.quote2": "A company that truly pursues customer satisfaction from the beginning to the end of the process.",
    "contact.eyebrow": "Come visit us",
    "contact.title": "Let’s weave something together",
    "contact.address": "Address",
    "contact.contact": "Contact",
    "contact.submit": "Send message",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.company": "Company (optional)",
    "form.message": "Tell us what you need",
    "form.subject": "New contact — Malharia Princesa website",
    "footer.tagline": "Fashion that inspires movement, since 1951.",
    "footer.copyright": "© 2026 Malharia Princesa. All rights reserved.",
    "alt.about": "Fabric produced by Malharia Princesa",
    "alt.knitting": "Circular and warp knitting",
    "alt.weaving": "Kettenstuhl and Raschel weaving",
    "alt.laces": "Malharia Princesa lace and tulle",
    "alt.dyeing": "Malharia Princesa dyeing",
    "alt.printing": "Malharia Princesa printing",
    "alt.finishing": "Malharia Princesa finishing",
    "alt.water": "Water resources",
    "alt.customer": "Malharia Princesa customer",
    "alt.cleanEnergy": "Clean Energy certification"
  },
  "es": {
    "page.title": "Malharia Princesa — Moda que inspira movimiento",
    "page.description": "Desde hace más de 70 años, Malharia Princesa produce tejidos de alta calidad para el mercado brasileño desde Joinville, Brasil.",
    "language.select": "Seleccionar idioma",
    "theme.toggle": "Alternar entre el tema claro y oscuro",
    "menu.open": "Abrir menú",
    "menu.close": "Cerrar menú",
    "carousel.previous": "Tecnología anterior",
    "carousel.next": "Siguiente tecnología",
    "carousel.goToGroup": "Ir al grupo {number}",
    "nav.about": "Nosotros",
    "nav.fabrics": "Tejidos",
    "nav.technologies": "Tecnologías",
    "nav.services": "Servicios",
    "nav.sustainability": "Sostenibilidad",
    "nav.contact": "Contáctenos",
    "hero.location": "Joinville · SC · Brasil",
    "hero.title": "Moda que inspira movimiento.",
    "hero.lede": "Desde hace más de siete décadas transformamos hilos en tejidos, desde el tejido de punto y el teñido hasta el acabado y la estampación, abasteciendo a marcas de moda íntima, deportiva y de playa de todo Brasil.",
    "hero.fabricsCta": "Conozca nuestros tejidos",
    "hero.quoteCta": "Solicitar cotización",
    "hero.statFounded": "Año de fundación",
    "hero.statYears": "Años en el mercado",
    "hero.statLocation": "Sede en Joinville",
    "about.eyebrow": "Nuestra historia",
    "about.title": "Raíces en la Ciudad de los Príncipes",
    "about.p1": "Con más de 70 años de trayectoria, Malharia Princesa consolidó su historia a partir de sus raíces en Joinville, Santa Catarina, reconocida como la Ciudad de los Príncipes. Su nombre rinde homenaje a la princesa Doña Francisca y representa una historia construida con tradición, conocimiento y compromiso con la industria textil.",
    "about.p2": "Somos especialistas en la producción de tejidos para los segmentos de moda íntima, deportiva y de playa, y también ofrecemos servicios de procesamiento y acabado textil para grandes marcas de todo Brasil.",
    "about.p3": "En constante evolución, invertimos continuamente en la mejora de nuestros procesos, la incorporación de nuevas tecnologías y el desarrollo de soluciones de producción más eficientes y sostenibles.",
    "fabrics.eyebrow": "Lo que tejemos",
    "fabrics.title": "Nuestros tejidos",
    "fabrics.intro": "Desde la primera idea hasta la pieza final, cada proceso reúne una técnica propia, heredada y perfeccionada a lo largo de más de siete décadas.",
    "fabrics.card1.label": "01 — Tejido de punto",
    "fabrics.card1.title": "Circular y por urdimbre",
    "fabrics.card1.text": "Creamos artículos lisos de bajo y alto gramaje, rayados o con efectos de diseño. Con los mejores hilos del mercado y nanotecnología, nuestros tejidos ofrecen elasticidad, compresión, confort térmico, protección solar y acción anticelulítica.",
    "fabrics.card2.label": "02 — Tejeduría",
    "fabrics.card2.title": "Kettenstuhl y Raschel",
    "fabrics.card2.text": "Las máquinas de urdimbre entrelazan los hilos de manera que el punto no se deshaga, aportando resistencia y delicadeza. Así nacen los encajes, tules y las líneas sin costuras y de compresión de nuestras colecciones.",
    "fabrics.card3.label": "03 — Especialidad",
    "fabrics.card3.title": "Encajes y tules",
    "fabrics.card3.text": "Reconocidos en el mercado brasileño, aplicamos lo mejor en hilos y materias primas. Los tejidos delicados exigen un cuidado especial, y esa es una de las principales especialidades de Princesa.",
    "tech.eyebrow": "Innovación en hilos",
    "tech.title": "Tecnologías y certificaciones",
    "tech.intro": "Trabajamos con hilos y acabados desarrollados para ir más allá del tacto, integrando sostenibilidad, rendimiento y cuidado de la piel en cada fibra.",
    "tech.amni": "Hilo de poliamida 6.6 con aditivos que aceleran su descomposición: hasta 10 veces más rápido en vertederos y 40 veces más rápido en los océanos que una fibra sintética convencional.",
    "tech.creora": "Tecnología que proporciona al elastano una mayor resistencia al cloro, los protectores solares y la radiación UV, con una durabilidad hasta 10 veces superior a la del elastano convencional.",
    "tech.tencel": "Fibra extraída de madera de haya mediante un proceso autosuficiente en energía. Ofrece una suavidad excepcional, es biodegradable y resiste repetidos ciclos de lavado.",
    "tech.kelp": "Hilo inteligente con micropartículas de cristales bioactivos que ayuda a reducir los signos de celulitis y favorece el rendimiento deportivo, la firmeza de la piel y la circulación.",
    "tech.aloe": "Nanopolímero con extracto de aloe vera aplicado por impregnación. Ofrece propiedades regeneradoras, hidratantes y antiinflamatorias y puede incorporarse a diferentes artículos de la colección.",
    "tech.exampleTitle": "Nombre de la Tecnología™",
    "tech.exampleText": "Texto de ejemplo que describe los beneficios de esta tecnología o certificación. Sustitúyalo por información real sobre el hilo, el acabado o la certificación.",
    "services.eyebrow": "De principio a fin",
    "services.title": "Nuestros servicios",
    "services.intro": "Procesamiento textil completo para las colecciones Princesa y para las marcas que confían sus tejidos a nuestros procesos.",
    "services.dyeing.label": "Tintorería",
    "services.dyeing.title": "Color con precisión",
    "services.dyeing.text": "Uno de nuestros mayores orgullos, reconocido en el mercado por sus procesos inteligentes y soluciones químicas avanzadas. Teñimos poliamida, poliéster, modal, algodón y viscosa, siempre buscando minimizar el impacto ambiental.",
    "services.printing.label": "Estampación",
    "services.printing.title": "Tramas que traducen sueños",
    "services.printing.text": "Flores, rayas y patrones que agregan valor. Trabajamos con pigmentos que brillan en la oscuridad, reflejan la luz, aparecen al entrar en contacto con el agua o crean relieve con la temperatura mediante el efecto puff.",
    "services.finishing.label": "Acabado",
    "services.finishing.title": "El toque final",
    "services.finishing.text": "Lisura, suavidad o volumen, además de acabados especiales bajo consulta, como antibacterianos, hidrófilos y repelentes al agua. Aquí construimos la caída que distingue a Princesa.",
    "sustainability.eyebrow": "Cuidamos el futuro",
    "sustainability.intro": "Creemos que producir moda y cuidar el planeta deben avanzar juntos en cada etapa de nuestro proceso industrial.",
    "sustainability.renewable.label": "Energía renovable",
    "sustainability.renewable.title": "Desde 2021",
    "sustainability.renewable.text": "Nos adherimos al programa Perfil Energia + Limpa y comenzamos a utilizar electricidad procedente de fuentes renovables a través del Mercado Libre de Energía de Brasil.",
    "sustainability.kyoto.label": "Protocolo de Kioto",
    "sustainability.kyoto.title": "Reducción de GEI",
    "sustainability.kyoto.text": "El programa Perfil Sustentável certifica anualmente las emisiones de gases de efecto invernadero que evitamos gracias al uso de energía renovable.",
    "sustainability.water.label": "Recursos hídricos",
    "sustainability.water.title": "Tratamiento de efluentes",
    "sustainability.water.text": "Invertimos continuamente en el tratamiento de efluentes para hacer que nuestro proceso industrial sea cada vez más inteligente y sostenible para las futuras generaciones.",
    "testimonials.eyebrow": "Lo que dicen de Princesa",
    "testimonials.title": "La colaboración es lo primero",
    "testimonials.intro": "La relación con nuestros clientes es uno de nuestros mayores diferenciales.",
    "testimonials.quote1": "Recibí una excelente atención desde el primer contacto con el equipo comercial. Fueron tan atentos que cambié mi plan de compra por la calidad del servicio y las condiciones de negociación. Los tules y los encajes son hermosos, con una calidad excepcional.",
    "testimonials.quote2": "Una empresa que realmente busca la satisfacción del cliente desde el inicio hasta el final del proceso.",
    "contact.eyebrow": "Visítenos",
    "contact.title": "Tejamos algo juntos",
    "contact.address": "Dirección",
    "contact.contact": "Contacto",
    "contact.submit": "Enviar mensaje",
    "footer.tagline": "Moda que inspira movimiento, desde 1951.",
    "footer.copyright": "© 2026 Malharia Princesa. Todos los derechos reservados.",
    "form.name": "Su nombre",
    "form.email": "Su correo electrónico",
    "form.company": "Empresa (opcional)",
    "form.message": "Cuéntenos qué necesita",
    "form.subject": "Nuevo contacto — sitio web de Malharia Princesa",
    "alt.about": "Tejido producido por Malharia Princesa",
    "alt.knitting": "Tejido de punto circular y por urdimbre",
    "alt.weaving": "Tejeduría Kettenstuhl y Raschel",
    "alt.laces": "Encajes y tules de Malharia Princesa",
    "alt.dyeing": "Tintorería de Malharia Princesa",
    "alt.printing": "Estampación de Malharia Princesa",
    "alt.finishing": "Acabado de Malharia Princesa",
    "alt.water": "Recursos hídricos",
    "alt.customer": "Cliente de Malharia Princesa",
    "alt.cleanEnergy": "Certificación de Energía Limpia"
  },
  "zh-CN": {
    "page.title": "Malharia Princesa — 激发活力的时尚",
    "page.description": "Malharia Princesa 扎根巴西若因维利，拥有七十多年的高品质面料生产经验。",
    "language.select": "选择语言",
    "theme.toggle": "切换浅色和深色主题",
    "menu.open": "打开菜单",
    "menu.close": "关闭菜单",
    "carousel.previous": "上一项技术",
    "carousel.next": "下一项技术",
    "carousel.goToGroup": "前往第 {number} 组",
    "nav.about": "关于我们",
    "nav.fabrics": "面料",
    "nav.technologies": "技术",
    "nav.services": "服务",
    "nav.sustainability": "可持续发展",
    "nav.contact": "联系我们",
    "hero.location": "巴西 · 圣卡塔琳娜州 · 若因维利",
    "hero.title": "激发活力的时尚。",
    "hero.lede": "七十多年来，我们将纱线转化为面料，业务涵盖针织、染色、后整理和印花，为巴西各地的内衣、运动服和泳装品牌提供产品。",
    "hero.fabricsCta": "了解我们的面料",
    "hero.quoteCta": "申请报价",
    "hero.statFounded": "创立年份",
    "hero.statYears": "行业经验",
    "hero.statLocation": "总部位于若因维利",
    "about.eyebrow": "我们的历史",
    "about.title": "扎根“王子之城”",
    "about.p1": "Malharia Princesa 深耕市场七十多年，起源于圣卡塔琳娜州若因维利——这座城市素有“王子之城”之称。公司名称旨在致敬多娜·弗朗西斯卡公主，也象征着我们以传统、专业知识和对纺织行业的承诺所铸就的发展历程。",
    "about.p2": "我们专注于内衣、运动服和泳装面料的生产，同时为巴西各地的知名品牌提供纺织品后整理服务。",
    "about.p3": "我们持续进步，不断优化生产流程、引入新技术，并开发更高效、更可持续的生产解决方案。",
    "fabrics.eyebrow": "我们的织造",
    "fabrics.title": "我们的面料",
    "fabrics.intro": "从最初构想到最终成品，每一道工序都承载着历经七十多年传承与完善的专业技术。",
    "fabrics.card1.label": "01 — 针织",
    "fabrics.card1.title": "圆机针织与经编",
    "fabrics.card1.text": "我们生产不同克重的素色面料、条纹面料和提花效果面料。凭借优质纱线和纳米技术，产品可提供弹性、压力支撑、热舒适性、防晒和改善橘皮组织等性能。",
    "fabrics.card2.label": "02 — 经编织造",
    "fabrics.card2.title": "Kettenstuhl 与 Raschel",
    "fabrics.card2.text": "经编设备通过交织纱线形成不易脱散的线圈结构，兼具强度与精致感。我们的蕾丝、网纱、无缝及压力系列由此诞生。",
    "fabrics.card3.label": "03 — 专业产品",
    "fabrics.card3.title": "蕾丝与网纱",
    "fabrics.card3.text": "我们在巴西市场广受认可，坚持采用优质纱线和原材料。精细面料需要格外用心，而这正是 Princesa 的专业所在。",
    "tech.eyebrow": "纱线创新",
    "tech.title": "技术与认证",
    "tech.intro": "我们采用超越触感体验的纱线与后整理技术，将可持续性、性能与肌肤呵护融入每一根纤维。",
    "tech.amni": "采用特殊添加剂的聚酰胺 6.6 纱线，可加速分解；与普通合成纤维相比，在填埋环境中的分解速度最高可提升 10 倍，在海洋环境中最高可提升 40 倍。",
    "tech.creora": "增强氨纶对氯、 防晒产品和紫外线的耐受性，耐久性最高可达普通氨纶的 10 倍。",
    "tech.tencel": "以山毛榉木为原料，并采用能源自给型生产工艺。触感格外柔软、可生物降解，并能承受多次洗涤。",
    "tech.kelp": "含有生物活性晶体微粒的智能纱线，有助于改善橘皮组织外观，并支持运动表现、皮肤紧致度和循环。",
    "tech.aloe": "通过浸渍工艺将含芦荟提取物的纳米聚合物应用于面料，具有修护、保湿和舒缓特性，可用于系列中的多种产品。",
    "tech.exampleTitle": "技术名称™",
    "tech.exampleText": "此处为技术或认证优势的示例说明，请替换为经核实的纱线、后整理或认证信息。",
    "services.eyebrow": "全流程服务",
    "services.title": "我们的服务",
    "services.intro": "为 Princesa 系列以及信赖我们专业能力的品牌提供完整的纺织品加工服务。",
    "services.dyeing.label": "染色",
    "services.dyeing.title": "精准呈色",
    "services.dyeing.text": "染色是我们引以为傲的核心能力之一，凭借智能流程和先进化学解决方案获得市场认可。我们可染聚酰胺、聚酯、莫代尔、棉和粘胶，并持续降低对环境的影响。",
    "services.printing.label": "印花",
    "services.printing.title": "让梦想化为纹样",
    "services.printing.text": "花卉、条纹及各类图案为面料创造更高价值。我们采用可夜光、反光、遇水显现或受热形成立体发泡效果的颜料。",
    "services.finishing.label": "后整理",
    "services.finishing.title": "最后一道精工",
    "services.finishing.text": "我们可实现平滑、柔软或蓬松等不同手感，并可按需提供抗菌、亲水和防泼水等特殊后整理。这一步塑造了 Princesa 与众不同的垂坠感。",
    "sustainability.eyebrow": "关爱未来",
    "sustainability.intro": "我们相信，时尚生产与环境责任应贯穿工业流程的每一个环节。",
    "sustainability.renewable.label": "可再生能源",
    "sustainability.renewable.title": "自 2021 年起",
    "sustainability.renewable.text": "我们加入 Perfil Energia + Limpa 项目，并通过巴西自由能源市场使用来自可再生能源的电力。",
    "sustainability.kyoto.label": "《京都议定书》",
    "sustainability.kyoto.title": "减少温室气体排放",
    "sustainability.kyoto.text": "Perfil Sustentável 项目每年认证我们因使用可再生能源而减少的温室气体排放量。",
    "sustainability.water.label": "水资源",
    "sustainability.water.title": "废水处理",
    "sustainability.water.text": "我们持续投资废水处理，使工业流程更加智能、更加可持续，为下一代守护未来。",
    "testimonials.eyebrow": "客户评价",
    "testimonials.title": "合作伙伴关系至上",
    "testimonials.intro": "与客户建立的长期关系，是我们最重要的优势之一。",
    "testimonials.quote1": "从第一次联系销售团队开始，我就得到了非常周到的服务。正是他们的专业支持和洽谈条件，让我调整了采购计划。网纱和蕾丝都非常漂亮，品质出色。",
    "testimonials.quote2": "这是一家从流程开始到结束都真正重视客户满意度的企业。",
    "contact.eyebrow": "欢迎到访",
    "contact.title": "让我们共同织就新的可能",
    "contact.address": "地址",
    "contact.contact": "联系方式",
    "contact.submit": "发送信息",
    "form.name": "您的姓名",
    "form.email": "您的电子邮箱",
    "form.company": "公司（选填）",
    "form.message": "请告诉我们您的需求",
    "form.subject": "新咨询 — Malharia Princesa 官网",
    "footer.tagline": "激发活力的时尚，始于 1951 年。",
    "footer.copyright": "© 2026 Malharia Princesa。保留所有权利。",
    "alt.about": "Malharia Princesa 生产的面料",
    "alt.knitting": "圆机针织与经编面料",
    "alt.weaving": "Kettenstuhl 与 Raschel 经编",
    "alt.laces": "Malharia Princesa 蕾丝与网纱",
    "alt.dyeing": "Malharia Princesa 染色工艺",
    "alt.printing": "Malharia Princesa 印花工艺",
    "alt.finishing": "Malharia Princesa 后整理工艺",
    "alt.water": "水资源",
    "alt.customer": "Malharia Princesa 客户",
    "alt.cleanEnergy": "清洁能源认证"
  }
};
let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
if (!translations[currentLanguage]) currentLanguage = 'pt-BR';

function t(key, params = {}) {
  const value = translations[currentLanguage]?.[key] ?? translations['pt-BR']?.[key] ?? key;
  return Object.entries(params).reduce((text, [name, replacement]) =>
    text.replaceAll(`{${name}}`, String(replacement)), value);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'pt-BR';
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = t('page.title');

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', t('page.description'));

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', t(element.dataset.i18nAlt));
  });

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) languageSelect.value = currentLanguage;

  const burgerButton = document.getElementById('burger');
  if (burgerButton) {
    const isOpen = burgerButton.getAttribute('aria-expanded') === 'true';
    burgerButton.setAttribute('aria-label', t(isOpen ? 'menu.close' : 'menu.open'));
  }

  document.querySelectorAll('#badgeDots button').forEach((dot, index) => {
    dot.setAttribute('aria-label', t('carousel.goToGroup', { number: index + 1 }));
  });

  const subject = document.querySelector('input[name="_subject"]');
  if (subject) subject.value = t('form.subject');
}

const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
  languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));
}

// ---- Alternância de tema claro/escuro ----
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const STORAGE_KEY = 'mp-theme';

const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem(STORAGE_KEY, next);
});

// ---- Header some ao rolar para baixo, reaparece ao rolar para cima ----
const siteHeader = document.getElementById('siteHeader');
let lastScrollY = window.pageYOffset;
window.addEventListener('scroll', () => {
  const currentY = window.pageYOffset;
  if (currentY > lastScrollY && currentY > 100){
    siteHeader.classList.add('nav-hidden');
  } else {
    siteHeader.classList.remove('nav-hidden');
  }
  lastScrollY = currentY <= 0 ? 0 : currentY;
}, { passive: true });

// ---- Menu mobile ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', t('menu.open'));
}));

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal, .card, .badge');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ---- Vídeo de fundo da hero: respeita reduced-motion e pausa em aba oculta ----
(function initHeroVideo(){
  const heroVideo = document.querySelector('.hero-video');
  if (!heroVideo) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion){
    heroVideo.pause();
    heroVideo.removeAttribute('autoplay');
    return;
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden){
      heroVideo.pause();
    } else {
      heroVideo.play().catch(() => {});
    }
  });
})();

// ---- Carrossel responsivo (Tecnologias e selos) ----
(function initBadgeCarousel(){
  const carousel = document.getElementById('badgeCarousel');
  const track = document.getElementById('badgeTrack');
  const prevBtn = document.getElementById('badgePrev');
  const nextBtn = document.getElementById('badgeNext');
  const dotsWrap = document.getElementById('badgeDots');
  if (!carousel || !track || !prevBtn || !nextBtn || !dotsWrap) return;

  const slides = Array.from(track.children);
  let itemsPerView = 3;
  let currentPage = 0;

  function getItemsPerView(){
    const w = window.innerWidth;
    if (w <= 720) return 1;
    if (w <= 920) return 2;
    return 3;
  }

  function pageCount(){
    return Math.max(1, Math.ceil(slides.length / itemsPerView));
  }

  function buildDots(){
    dotsWrap.innerHTML = '';
    const total = pageCount();
    for (let i = 0; i < total; i++){
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', t('carousel.goToGroup', { number: i + 1 }));
      dot.addEventListener('click', () => goToPage(i));
      dotsWrap.appendChild(dot);
    }
  }

  function updateUI(){
    const total = pageCount();
    Array.from(dotsWrap.children).forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentPage);
    });
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === total - 1;
    const offset = currentPage * itemsPerView * (100 / itemsPerView);
    track.style.transform = `translateX(-${offset}%)`;
  }

  function goToPage(page){
    const total = pageCount();
    currentPage = Math.min(Math.max(page, 0), total - 1);
    updateUI();
  }

  function handleResize(){
    const newItemsPerView = getItemsPerView();
    if (newItemsPerView !== itemsPerView){
      itemsPerView = newItemsPerView;
      buildDots();
      currentPage = Math.min(currentPage, pageCount() - 1);
      updateUI();
    }
  }

  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

  carousel.setAttribute('tabindex', '0');
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
    if (e.key === 'ArrowRight') goToPage(currentPage + 1);
  });

  // Swipe (touch) support
  let touchStartX = 0;
  let touchDeltaX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });
  track.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });
  track.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40){
      goToPage(touchDeltaX < 0 ? currentPage + 1 : currentPage - 1);
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 150);
  });

  itemsPerView = getItemsPerView();
  buildDots();
  updateUI();
})();


applyLanguage(currentLanguage);
