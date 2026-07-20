export interface CompanyProfile {
  founded: string
  headquarters: string
  sector: string
  intro: string[]          // 2-3 párrafos de introducción editorial
  businessModel: string    // cómo gana dinero
  valueInvestorAngle: string // por qué importa al inversor value
  risks: string[]          // 3 riesgos específicos del negocio, no genéricos de mercado
  catalysts: string[]      // 3 catalizadores específicos que podrían mover la tesis
}

export const COMPANY_PROFILES: Record<string, CompanyProfile> = {

  AAPL: {
    founded: '1976',
    headquarters: 'Cupertino, California',
    sector: 'Tecnología / Consumo masivo',
    intro: [
      'Apple fue fundada en 1976 por Steve Jobs, Steve Wozniak y Ronald Wayne en un garaje de Los Altos, California. Durante sus primeros años fue una empresa de computadoras personales que popularizó la interfaz gráfica y democratizó el acceso a la computación. Después de la salida y el regreso de Jobs en 1997, Apple se reinventó como empresa de diseño y experiencia de usuario, lanzando el iPod (2001), el iPhone (2007) y el iPad (2010) en una secuencia de productos que transformaron industrias enteras.',
      'Hoy Apple es la empresa con mayor capitalización de mercado del mundo, con ingresos anuales superiores a $380.000 millones. Opera en más de 175 países, tiene más de 2.000 millones de dispositivos activos y un ecosistema de servicios que incluye App Store, Apple Music, iCloud, Apple TV+, Apple Pay y Apple Arcade. Su integración vertical — diseña sus propios chips (serie M y A), el sistema operativo, el hardware y gran parte del software — es única en la industria.',
    ],
    businessModel: 'El modelo de ingresos de Apple tiene dos pilares: los productos (iPhone representa ~50% de los ingresos, Mac, iPad y wearables el resto) y los servicios (App Store, suscripciones, licencias, Apple Pay), que crecen más rápido y tienen márgenes brutos del 70%+. La transición hacia servicios es estratégicamente crucial porque genera ingresos recurrentes sobre la base instalada de dispositivos, reduciendo la dependencia de los ciclos de actualización del iPhone.',
    valueInvestorAngle: 'Buffett considera a Apple una empresa de consumo masivo con fidelidad de marca excepcional, no una empresa de tecnología en el sentido tradicional. Sus clientes renuevan el iPhone con una frecuencia y lealtad que pocas marcas en la historia han logrado. El FCF yield históricamente atractivo, la recompra masiva de acciones (más de $600.000M recompradas en la última década) y los márgenes en expansión hacen de Apple uno de los ejemplos más citados de moat de marca combinado con poder de retención de ecosistema.',
    risks: [
      'Dependencia de China: cerca de una quinta parte de los ingresos y la mayor parte de la manufactura dependen de la cadena de suministro china, exponiendo a Apple a tensiones geopolíticas y aranceles.',
      'Ciclos de actualización más largos: los usuarios reemplazan sus iPhones con menor frecuencia que hace una década, presionando el crecimiento del segmento de hardware que aún representa la mitad de los ingresos.',
      'Presión regulatoria sobre el App Store: fallos antimonopolio en EE.UU. y la Digital Markets Act europea obligan a Apple a permitir tiendas alternativas y bajar comisiones, amenazando el margen del negocio de servicios.',
    ],
    catalysts: [
      'Expansión del negocio de servicios: la base instalada de más de 2.000 millones de dispositivos activos deja margen para seguir monetizando con suscripciones de mayor rentabilidad.',
      'Apple Intelligence e IA nativa: si logra diferenciar el ecosistema con funciones de IA, podría acelerar el ciclo de reemplazo de hardware.',
      'Mercados emergentes: India y el sudeste asiático son una frontera de crecimiento de usuarios nuevos donde Apple todavía tiene baja penetración relativa.',
    ],
  },

  MSFT: {
    founded: '1975',
    headquarters: 'Redmond, Washington',
    sector: 'Tecnología / Software empresarial',
    intro: [
      'Microsoft fue fundada en 1975 por Bill Gates y Paul Allen con la visión de que habría "una computadora en cada escritorio y en cada hogar". Esa visión, que parecía utópica en su momento, se materializó en las décadas siguientes gracias al sistema operativo MS-DOS y luego Windows, que se convirtieron en el estándar de la computación personal. A lo largo de los años noventa, Microsoft dominó el software de productividad con Office y el mercado de servidores con Windows Server.',
      'La transformación más significativa de Microsoft ocurrió bajo el liderazgo de Satya Nadella, quien asumió como CEO en 2014 con la consigna de convertir a la compañía en una empresa de nube. La apuesta fue correcta: Azure creció de casi nada a convertirse en el segundo proveedor de servicios en la nube del mundo, detrás de AWS de Amazon. Hoy Microsoft genera ingresos superiores a $220.000 millones anuales y opera en tres segmentos: Productivity (Office, Teams, LinkedIn), Intelligent Cloud (Azure, GitHub, SQL Server) y More Personal Computing (Windows, Xbox, Surface).',
    ],
    businessModel: 'Microsoft tiene uno de los modelos de negocio más diversificados y recurrentes de la industria tecnológica. La mayoría de sus ingresos provienen de suscripciones (Microsoft 365, Azure, Dynamics) y licencias corporativas con altos costos de cambio. Azure es el motor de crecimiento con ingresos escalando al 20-30% anual. LinkedIn genera ingresos por suscripciones premium, publicidad y soluciones de RRHH. Los márgenes brutos del negocio superan el 70% en conjunto, y el margen operativo se ha expandido consistentemente hasta superar el 40%.',
    valueInvestorAngle: 'Microsoft es considerada por muchos inversores value de la generación moderna como el negocio más cercano al ideal de Buffett en el sector tecnológico: ventajas competitivas claras en múltiples segmentos (costos de cambio en Office/Azure, efecto de red en LinkedIn), crecimiento predecible, ROIC sostenido por encima del 30% y generación de FCF masiva ($70.000M+ anuales). La disciplina de capital allocation de Nadella — inversión en IA, recompras y dividendos crecientes — ha sido ejemplar para el inversor de largo plazo.',
    risks: [
      'Intensidad de capex en IA: las inversiones multimillonarias en centros de datos para sostener el crecimiento de Azure y la relación con OpenAI presionan el flujo de caja libre en el corto plazo.',
      'Escrutinio antimonopolio: reguladores en EE.UU., la UE y Reino Unido investigan las prácticas de bundling de Microsoft 365, Teams y la relación de capital con OpenAI.',
      'Dependencia de la ejecución en la nube: Azure debe seguir ganando cuota frente a AWS y Google Cloud para justificar el nivel de inversión actual en infraestructura.',
    ],
    catalysts: [
      'Monetización de Copilot: la integración de IA generativa en Microsoft 365 es una oportunidad de upsell sobre una base de más de 400 millones de suscriptores.',
      'Crecimiento de Azure: la migración corporativa a la nube todavía tiene años de recorrido, en particular en cargas de trabajo de IA.',
      'Gaming y LinkedIn: Activision Blizzard y LinkedIn ofrecen vectores de crecimiento adicionales fuera del negocio core de software empresarial.',
    ],
  },

  GOOGL: {
    founded: '1998',
    headquarters: 'Mountain View, California',
    sector: 'Tecnología / Publicidad digital',
    intro: [
      'Google fue fundada en 1998 por Larry Page y Sergey Brin, entonces estudiantes de doctorado en Stanford, con el objetivo de "organizar la información del mundo y hacerla universalmente accesible y útil". El algoritmo PageRank, que clasificaba páginas web según la cantidad y calidad de los sitios que las enlazaban, revolucionó la búsqueda en internet y desplazó rápidamente a competidores como Yahoo y AltaVista. En 2004, Google salió a bolsa con una valoración de $23.000 millones; en 2015, se reorganizó bajo la empresa holding Alphabet.',
      'Alphabet opera hoy como un conglomerado tecnológico donde Google (búsqueda, YouTube, Maps, Cloud, Android, Chrome) representa el ~90% de los ingresos, mientras que "Other Bets" incluye proyectos como Waymo (conducción autónoma), DeepMind y Verily. Google Workspace tiene más de 6.000 millones de usuarios activos entre sus distintos productos. YouTube supera los 2.500 millones de usuarios mensuales y es la segunda plataforma de búsqueda del mundo. Google Cloud es el tercer proveedor de infraestructura en la nube global.',
    ],
    businessModel: 'El negocio central de Google es la publicidad digital: cuando una persona busca algo en Google o ve un video en YouTube, los anunciantes pagan por mostrar sus anuncios en ese contexto. Este modelo genera márgenes brutos del 55%+ y es notablemente defensivo porque los anunciantes pagan por resultados medibles, no por alcance masivo. Google Cloud es el segundo motor de crecimiento, aún deficitario pero escalando rápidamente. La posición dominante en búsqueda (más del 90% del mercado global) le otorga un poder de fijación de precios excepcional frente a los anunciantes.',
    valueInvestorAngle: 'Alphabet cotiza frecuentemente con descuento respecto a sus pares tecnológicos por la incertidumbre regulatoria antimonopolio y la percepción de que su negocio de búsqueda podría ser afectado por la inteligencia artificial. Para los inversores value, esa incertidumbre crea oportunidades: el negocio central genera más de $70.000M de FCF anual, la empresa tiene más de $100.000M de caja neta en el balance y el EV/FCF ajustado a esa posición resulta históricamente atractivo. Su inversión temprana en IA (DeepMind, Gemini, TPUs propios) sugiere que el moat de búsqueda puede extenderse, no erosionarse.',
    risks: [
      'Disrupción de la búsqueda por IA: chatbots y motores de respuesta directa amenazan con desintermediar el modelo publicitario tradicional basado en clics.',
      'Litigios antimonopolio: fallos judiciales en EE.UU. ya determinaron que Google mantiene un monopolio ilegal en búsqueda, con remedios aún por definirse que podrían incluir desinversiones forzadas.',
      'Costos crecientes de infraestructura de IA: competir en modelos de lenguaje de frontera (Gemini) exige un gasto de capital que presiona los márgenes del negocio de Cloud.',
    ],
    catalysts: [
      'Integración de IA en búsqueda: AI Overviews y Gemini podrían defender la cuota de búsqueda si Google logra monetizar las nuevas superficies con eficacia.',
      'Crecimiento de Google Cloud: el tercer proveedor de nube global sigue ganando cuota y acercándose a la rentabilidad de sus pares.',
      'Waymo y otras apuestas: la conducción autónoma podría convertirse en una línea de negocio relevante en la próxima década.',
    ],
  },

  AMZN: {
    founded: '1994',
    headquarters: 'Seattle, Washington',
    sector: 'E-commerce / Nube / Logística',
    intro: [
      'Amazon fue fundada en 1994 por Jeff Bezos en un garaje de Bellevue, Washington, inicialmente como una librería online. En sus primeras años, Bezos articuló una filosofía de largo plazo radical: invertir todos los ingresos operativos en crecimiento y nueva infraestructura, sacrificando ganancias por décadas si era necesario para construir la empresa más centrada en el cliente del mundo. Esa visión fue ridiculizada durante el crash dot-com de 2000 y reivindicada con creces en las décadas siguientes.',
      'Hoy Amazon es uno de los tres negocios más valiosos del mundo. Opera en tres grandes dimensiones: e-commerce (la mayor plataforma de comercio electrónico de Estados Unidos y varios países más), Amazon Web Services (el proveedor de nube más grande del mundo, con ~31% de cuota de mercado y márgenes operativos del 30%+) y publicidad digital (tercer mayor negocio de publicidad de EE.UU., detrás de Google y Meta). Adicionalmente, Prime Video, Amazon Pharmacy, Whole Foods y AWS Marketplace representan expansiones hacia nuevos mercados de alto valor.',
    ],
    businessModel: 'El modelo de Amazon es inusualmente complejo: el retail (e-commerce directo + marketplace de terceros + logística) opera con márgenes bajos pero genera escala masiva; AWS es el motor de rentabilidad con $100.000M+ de ingresos anuales y márgenes del 30%; la publicidad es el negocio más rentable por unidad (márgenes similares a Google). La suscripción Prime (200M+ miembros globales) ancla la retención de clientes del retail. La infraestructura logística propia (flota aérea, almacenes, última milla) es una ventaja de costos estructural que tardó 20 años en construirse.',
    valueInvestorAngle: 'Amazon es el caso de estudio más discutido en value investing moderno: la empresa reportó "pérdidas" durante años mientras acumulaba uno de los moats más defensibles jamás construidos. El inversor que miró el P/E tradicional perdió la oportunidad; el que miró el FCF libre de capex de crecimiento y la posición estratégica de AWS la aprovechó. Actualmente, AWS + publicidad generan suficiente FCF para justificar la valoración completa de la empresa, lo que hace que el retail, la logística y todo lo demás sean opcionalidad gratuita. La clave para el análisis es separar los tres negocios y valorarlos individualmente.',
    risks: [
      'Márgenes de retail estructuralmente bajos: la competencia de precios, incluyendo plataformas como Temu, Shein y Walmart, limita la rentabilidad del e-commerce core.',
      'Concentración de rentabilidad en AWS: la mayor parte del ingreso operativo del grupo depende de un solo segmento, exponiendo al conjunto si la demanda de nube se desacelera.',
      'Escrutinio regulatorio: la FTC demandó a Amazon por prácticas anticompetitivas en su marketplace, con riesgo de sanciones o cambios forzados al modelo de negocio.',
    ],
    catalysts: [
      'Publicidad digital: el negocio de ads crece a tasas de dos dígitos altos con márgenes comparables a Google, y todavía es una fracción menor de los ingresos totales.',
      'IA generativa en AWS: servicios como Bedrock y chips propios de entrenamiento buscan capturar demanda de entrenamiento e inferencia de IA.',
      'Expansión de márgenes en logística: años de inversión en la red de última milla empiezan a generar apalancamiento operativo.',
    ],
  },

  META: {
    founded: '2004',
    headquarters: 'Menlo Park, California',
    sector: 'Tecnología / Publicidad digital / Redes sociales',
    intro: [
      'Meta Platforms fue fundada en 2004 por Mark Zuckerberg y otros estudiantes de Harvard bajo el nombre de "The Facebook". En sus primeros años fue una red social universitaria que se expandió progresivamente a todo el público. Las adquisiciones de Instagram en 2012 ($1.000M) y WhatsApp en 2014 ($19.000M) fueron decisiones estratégicas que construyeron la mayor red de comunicación privada de la historia: más de 3.200 millones de personas usan al menos una aplicación de Meta diariamente.',
      'La compañía cambió su nombre a Meta Platforms en 2021 para reflejar su apuesta por el metaverso — tecnología de realidad virtual y aumentada que Zuckerberg considera la próxima plataforma computacional dominante. Esa apuesta, que hasta 2023 consumió más de $40.000M en pérdidas operativas de Reality Labs, generó críticas masivas de inversores. En respuesta, Zuckerberg lanzó en 2023 el "Año de la Eficiencia", reduciendo plantilla en más de 20.000 empleados y concentrando el capital en IA y las plataformas existentes. El resultado fue una expansión de márgenes histórica y un precio de acción que triplicó en 18 meses.',
    ],
    businessModel: 'El modelo de Meta es casi idéntico al de Google en su mecánica: vende atención humana a anunciantes. Los usuarios generan contenido, consumen contenido y se comunican gratuitamente; los anunciantes pagan por acceder a esos usuarios con mensajes altamente segmentados. La ventaja de Meta sobre otros medios tradicionales es la precisión del targeting: sabe lo que sus usuarios consumen, con quién se relacionan, qué les genera emoción positiva y negativa, lo cual permite a los anunciantes llegar a exactamente el subconjunto de personas más receptivas a su mensaje.',
    valueInvestorAngle: 'Meta en 2022 era uno de los mejores ejemplos recientes de margen de seguridad en un negocio de alta calidad: cotizaba a FCF yield del 10%+ cuando el mercado penalizaba las pérdidas del metaverso, mientras el negocio central de publicidad seguía siendo un monopolio de facto. Los inversores value que reconocieron que Reality Labs era una opción independiente — que podía liquidarse mentalmente con un descuento — y valoraron el negocio publicitario a múltiplos normales, capturaron uno de los retornos más grandes de la última década. El caso ilustra cómo los sesgos narrativos del mercado crean oportunidades estructurales.',
    risks: [
      'Dependencia casi total de publicidad: más del 97% de los ingresos provienen de un solo modelo de negocio, sensible al ciclo económico y al gasto publicitario.',
      'Gasto continuo en Reality Labs: el metaverso y los dispositivos de realidad aumentada siguen generando pérdidas operativas significativas sin fecha clara de rentabilidad.',
      'Riesgo regulatorio y de privacidad: cambios en las reglas de tracking, como el App Tracking Transparency de Apple, o nuevas regulaciones de privacidad pueden afectar la efectividad publicitaria.',
    ],
    catalysts: [
      'Monetización de Reels y WhatsApp: el video corto y la plataforma de mensajería más grande del mundo todavía están submonetizados frente al feed de Instagram y Facebook.',
      'IA aplicada a publicidad: mejoras algorítmicas en segmentación y creación automática de anuncios elevan la eficiencia del gasto publicitario de los clientes.',
      'Disciplina de costos: el "Año de la Eficiencia" demostró que Meta puede expandir márgenes agresivamente cuando prioriza rentabilidad sobre crecimiento de plantilla.',
    ],
  },

  NVDA: {
    founded: '1993',
    headquarters: 'Santa Clara, California',
    sector: 'Tecnología / Semiconductores',
    intro: [
      'NVIDIA fue fundada en 1993 por Jensen Huang, Chris Malachowsky y Curtis Priem con el objetivo de desarrollar aceleradores gráficos para videojuegos. La compañía popularizó el concepto de GPU (Graphics Processing Unit) y durante dos décadas dominó el mercado de tarjetas gráficas para consumidores y profesionales. El lanzamiento de la plataforma CUDA en 2006 fue el punto de inflexión no reconocido en su momento: permitía a los programadores usar las GPUs de NVIDIA para cálculo de propósito general, abriendo la puerta a aplicaciones científicas, de machine learning y simulación.',
      'La explosión de la inteligencia artificial generativa a partir de 2022 convirtió a NVIDIA en el proveedor de infraestructura más crítico del momento tecnológico más importante en décadas. Sus GPUs H100 y A100 son los aceleradores preferidos para entrenar modelos de lenguaje de gran escala como GPT-4, Gemini y LLaMA. La demanda supera estructuralmente la oferta desde 2023. NVIDIA pasó de ser una empresa de $300.000M a superar los $3.000.000M de capitalización en menos de dos años.',
    ],
    businessModel: 'NVIDIA opera con un modelo "fabless": diseña sus chips pero subcontrata la manufactura (principalmente a TSMC en Taiwán). Sus ingresos principales vienen de Data Center (GPUs para IA y HPC, ~80% de ingresos), Gaming (tarjetas GeForce), Professional Visualization (Quadro) y Automotive. El verdadero moat no está solo en el hardware sino en el ecosistema de software CUDA: con más de 4 millones de desarrolladores entrenados sobre esa plataforma, cambiar a un competidor requeriría reescribir cientos de miles de modelos y aplicaciones — un costo de cambio enorme que protege la posición de NVIDIA.',
    valueInvestorAngle: 'NVIDIA representa el debate más interesante en value investing contemporáneo: ¿es una empresa de semiconductores cíclica que cotiza con múltiplos de burbuja, o es la Microsoft de la era de la IA con un moat software duradero? Los bearish señalan el riesgo de competencia de AMD, los chips propios de Google (TPU), Apple y Amazon, y la eventual comoditización de la infraestructura de IA. Los bullish argumentan que el ecosistema CUDA es el Windows de la IA: difícilmente reemplazable aunque aparezcan alternativas técnicamente superiores. El análisis de largo plazo requiere tomar posición sobre esa pregunta estratégica, no solo sobre los múltiplos actuales.',
    risks: [
      'Concentración de clientes: un puñado de hyperscalers (Microsoft, Google, Amazon, Meta) representa una porción muy alta de los ingresos de centros de datos.',
      'Competencia creciente: los chips propios de los hyperscalers y AMD buscan reducir la dependencia de la industria respecto de NVIDIA.',
      'Riesgo geopolítico: las restricciones de exportación a China y la dependencia de TSMC en Taiwán exponen a la empresa a shocks regulatorios y geopolíticos.',
    ],
    catalysts: [
      'Ciclo de renovación de infraestructura de IA: cada nueva generación de chips genera un ciclo de reemplazo de la capacidad instalada en los centros de datos.',
      'Expansión más allá del entrenamiento: la demanda de inferencia de IA en producción podría superar en volumen a la demanda de entrenamiento de modelos.',
      'Nuevos verticales: robótica, vehículos autónomos e "IA física" son mercados incipientes donde NVIDIA busca replicar su dominio en centros de datos.',
    ],
  },

  TSLA: {
    founded: '2003',
    headquarters: 'Austin, Texas',
    sector: 'Vehículos eléctricos / Energía / Tecnología',
    intro: [
      'Tesla fue fundada en 2003 por Martin Eberhard y Marc Tarpenning (y no por Elon Musk, quien se unió como presidente del directorio e inversor en 2004). La misión declarada de la compañía es "acelerar la transición mundial hacia la energía sostenible". Tesla lanzó su primer vehículo, el Roadster, en 2008, y comenzó a producir masivamente con el Model S en 2012. La apertura de la Gigafábrica en Nevada (2016) y Shanghai (2019) fueron hitos productivos que le permitieron escalar sin depender exclusivamente de proveedores externos.',
      'Hoy Tesla es el mayor fabricante de vehículos eléctricos del mundo por ingresos, aunque su participación de mercado global está siendo presionada por competidores chinos (BYD especialmente) y por las grandes automotrices tradicionales que lanzaron sus propias líneas eléctricas. Además de vehículos, Tesla opera negocios de almacenamiento de energía (Powerwall, Megapack), generación solar, y el segmento de software y servicios que incluye el sistema de asistencia a la conducción Autopilot y Full Self-Driving.',
    ],
    businessModel: 'Tesla tiene un modelo de ingresos híbrido: la mayor parte proviene de ventas de vehículos (con márgenes brutos que bajaron del 29% en 2022 al ~18% en 2024 por la guerra de precios del mercado EV), y una parte creciente de servicios y software (FSD, insurance, servicios de carga, créditos regulatorios). La venta de créditos de carbono a fabricantes tradicionales ha sido históricamente una fuente de ingreso significativa pero no recurrente. El negocio de energía (Megapack) tiene crecimiento acelerado y márgenes en expansión.',
    valueInvestorAngle: 'Tesla es el activo más polarizante del mercado actual entre los inversores fundamentales. Los escépticos señalan la compresión de márgenes por la guerra de precios, la competencia creciente de BYD y otros fabricantes chinos, la volatilidad de las decisiones de Elon Musk y una valoración que históricamente ha descontado un crecimiento que no se ha materializado. Los creyentes valúan la optionalidad de los negocios de FSD (si logra autonomía completa), Megapack (almacenamiento energético), el Supercharger network (adoptado por Ford, GM y otros), y la posición como empresa tecnológica de energía más que como automotriz tradicional.',
    risks: [
      'Guerra de precios en EVs: la competencia de BYD y otros fabricantes chinos comprimió los márgenes brutos de vehículos de forma sostenida.',
      'Dependencia de la percepción de Elon Musk: decisiones y declaraciones del CEO generan volatilidad en la acción independiente de los fundamentales del negocio.',
      'Ejecución de Full Self-Driving: buena parte de la valoración descuenta un avance hacia la autonomía completa que todavía no está garantizado ni aprobado regulatoriamente a escala.',
    ],
    catalysts: [
      'Megapack y almacenamiento de energía: el negocio de baterías estacionarias crece con márgenes superiores a los de vehículos y menor competencia directa.',
      'Robotaxi y licenciamiento de FSD: si Tesla logra desplegar conducción autónoma comercialmente, podría abrir una fuente de ingresos de software de alto margen.',
      'Modelos más económicos: nuevos vehículos de menor precio podrían expandir el mercado direccionable en segmentos donde Tesla hoy tiene poca presencia.',
    ],
  },

  JPM: {
    founded: '1799',
    headquarters: 'Nueva York, Nueva York',
    sector: 'Servicios financieros / Banca',
    intro: [
      'JPMorgan Chase tiene raíces que se remontan a 1799, cuando The Manhattan Company fue fundada por Aaron Burr. La entidad actual es el resultado de múltiples fusiones a lo largo de dos siglos: Chase Manhattan con Chemical Bank (1996), con J.P. Morgan (2000), con Bank One (2004) y la adquisición de Bear Stearns y Washington Mutual durante la crisis de 2008. Este último evento fue decisivo: JPMorgan absorbió instituciones en dificultades a precio de saldo, consolidando su posición como el mayor banco de Estados Unidos.',
      'Bajo el liderazgo de Jamie Dimon (CEO desde 2006), JPMorgan se convirtió en el patrón de referencia de la banca norteamericana: la única institución sistémicamente importante que reportó ganancias en todos los trimestres de la crisis de 2008-2009. Hoy opera en más de 100 países con activos totales superiores a $3.7 billones, 290.000 empleados y negocios en banca de consumo, banca corporativa e institucional, gestión de activos y banca de inversión.',
    ],
    businessModel: 'JPMorgan genera ingresos a través de cuatro divisiones: Consumer & Community Banking (cuentas corrientes, tarjetas de crédito, hipotecas — el negocio más visible), Commercial Banking (préstamos y servicios a empresas medianas), Corporate & Investment Bank (trading, underwriting, M&A advisory — el más rentable) y Asset & Wealth Management (gestión de carteras institucionales y privadas). La diversificación entre negocios cíclicos (investment banking) y defensivos (retail banking) suaviza el resultado a lo largo del ciclo económico.',
    valueInvestorAngle: 'Buffett ha dicho que JPMorgan es el banco mejor gestionado del mundo, con Jamie Dimon como el mejor CEO bancario de su generación. La franquicia de depósitos a costo casi nulo, el ROIC consistentemente por encima del 15% y la disciplina de capital de Dimon (que preservó el balance sólido mientras otros bancos colapsaban en 2008 y 2023) lo hacen destacar entre los bancos globales. El inversor value considera a JPMorgan aceptable a P/B inferior a 2x y muy atractivo cerca de 1.2x, niveles que históricamente han marcado suelos durante ciclos bajistas.',
    risks: [
      'Sensibilidad a tasas de interés: cambios en la política monetaria de la Fed afectan directamente el margen de intermediación (net interest margin) del banco.',
      'Riesgo crediticio cíclico: una recesión incrementaría las provisiones por incobrabilidad en tarjetas de crédito y préstamos comerciales.',
      'Regulación de capital: nuevas exigencias como Basilea III Endgame podrían requerir que JPMorgan mantenga más capital, limitando el retorno sobre el equity.',
    ],
    catalysts: [
      'Banca de inversión: una reactivación de M&A y ofertas públicas tras años de actividad deprimida beneficiaría al segmento más rentable del banco.',
      'Ganancia de cuota de mercado: JPMorgan ganó depósitos y cuota de forma consistente tras las crisis bancarias regionales de 2023.',
      'Gestión de patrimonio: el crecimiento de Asset & Wealth Management aporta ingresos por comisiones menos sensibles al ciclo crediticio.',
    ],
  },

  V: {
    founded: '1958',
    headquarters: 'San Francisco, California',
    sector: 'Servicios financieros / Pagos digitales',
    intro: [
      'Visa tiene su origen en 1958, cuando Bank of America lanzó el BankAmericard en Fresno, California — la primera tarjeta de crédito disponible masivamente para el público general. En 1976, el sistema fue rebautizado como Visa y en 1970 se convirtió en una asociación de bancos independientes. Durante décadas operó como una cooperative bancaria hasta que en 2008 salió a bolsa en la mayor OPV de la historia hasta ese momento. Hoy Visa es la empresa de pagos más grande del mundo por capitalización.',
      'Visa no es un banco: no otorga créditos ni asume riesgo crediticio. Opera como la infraestructura de mensajería y liquidación entre bancos emisores (los que dan tarjetas a los clientes) y bancos adquirentes (los que procesan el pago para los comercios). Por cada transacción que fluye por su red — compras, pagos B2B, transferencias internacionales — Visa cobra una pequeña fracción. Con más de 200 países conectados, 3.8 mil millones de tarjetas activas y 100 millones de comercios que aceptan Visa globalmente, la escala de la red es prácticamente imposible de replicar.',
    ],
    businessModel: 'El modelo de negocio de Visa es casi puro margen: genera ingresos por tarifas de transacción (service fees, data processing fees, international transaction fees) y no tiene los costos de riesgo crediticio de un banco. Sus márgenes operativos superan el 65% — extraordinarios en cualquier industria. El crecimiento estructural proviene del desplazamiento del efectivo y los cheques hacia pagos digitales en todo el mundo: en muchos mercados emergentes, más del 80% de las transacciones todavía son en efectivo, lo que representa décadas de expansión del volumen transaccional.',
    valueInvestorAngle: 'Visa es considerada uno de los mejores negocios del mundo por su combinación de moat (efecto de red bilateral imposible de replicar sin décadas), márgenes (>65% operativo), escalabilidad (ingresos crecen con el volumen sin inversión proporcional de capital), y crecimiento secular (migración global del efectivo al pago digital). Buffett tiene posición en Visa y Mastercard simultáneamente, reconociendo que el duopolio de redes de pago no tiene equivalente en términos de calidad de negocio. El principal riesgo — regulación antimonopolio y disruption de pagos alternativos — debe monitorearse pero históricamente no ha erosionado los fundamentales.',
    risks: [
      'Regulación antimonopolio: el Departamento de Justicia de EE.UU. demandó a Visa por prácticas anticompetitivas en el mercado de débito, con riesgo de cambios forzados al modelo de tarifas.',
      'Disrupción de pagos alternativos: billeteras digitales, criptomonedas y sistemas de pago instantáneo entre cuentas bancarias podrían desintermediar a las redes tradicionales.',
      'Sensibilidad al consumo: el volumen de transacciones está correlacionado con el gasto de los consumidores, que se desacelera en recesiones.',
    ],
    catalysts: [
      'Migración global del efectivo: en mercados emergentes, la mayoría de las transacciones todavía son en efectivo, lo que representa años de crecimiento estructural del volumen.',
      'Pagos B2B y transferencias transfronterizas: Visa Direct y Visa B2B Connect atacan mercados nuevos más allá del consumo tradicional con tarjeta.',
      'Value-added services: servicios de prevención de fraude, analítica de datos y consultoría generan ingresos adicionales sobre la misma infraestructura de red.',
    ],
  },

  KO: {
    founded: '1886',
    headquarters: 'Atlanta, Georgia',
    sector: 'Consumo masivo / Bebidas',
    intro: [
      'The Coca-Cola Company fue fundada en 1886 por el farmacéutico John Pemberton en Atlanta, Georgia, quien originalmente comercializó su bebida como tónico medicinal. Asa Griggs Candler compró la fórmula en 1888 y construyó el sistema de distribución que convirtió a Coca-Cola en el producto más reconocido del planeta. En 1919, un grupo de inversores encabezado por Ernest Woodruff adquirió la compañía; en 1923 su hijo Robert Woodruff asumió como presidente e inició la expansión internacional que llevaría la marca a más de 200 países.',
      'Hoy Coca-Cola es la marca de bebidas más valiosa del mundo y opera como una empresa de concentrado y marketing más que de manufactura: vende el concentrado y los siropes a embotelladores independientes que producen, distribuyen y venden las bebidas finales en cada mercado local. Este modelo permite a Coca-Cola mantener control sobre la receta y el marketing global sin cargar con el capital intensivo de la producción y distribución. Su portafolio incluye más de 500 marcas y 3.900 productos entre bebidas carbonatadas, jugos, tés, aguas y bebidas energéticas.',
    ],
    businessModel: 'El modelo de concentrado es la clave de la rentabilidad de Coca-Cola: vende el ingrediente principal a los embotelladores con márgenes altísimos, mientras los embotelladores asumen el capex de plantas, maquinaria, flota y distribución. Los ingresos de Coca-Cola provienen de la venta de concentrados, siropes y bebidas terminadas (en los mercados donde opera directamente), más ingresos de licencias y royalties. Los márgenes brutos son del 60%+ y el ROIC supera consistentemente el 20% en un negocio que casi no requiere reinversión de capital para mantenerse.',
    valueInvestorAngle: 'Coca-Cola es la posición más famosa de Warren Buffett, comprada en 1988 después del crash del 87. Berkshire pagó aproximadamente $1.300M por una participación que hoy vale más de $25.000M sin contar dividendos recibidos. La tesis era simple: una marca global con pricing power en una categoría de bajo costo unitario, distribuida en cada rincón del planeta, con modelo de concentrado que no requiere capital para crecer. El moat de marca es tan profundo que ni la guerra de cola con Pepsi durante cuarenta años logró erosionar los fundamentos del negocio. Es el ejemplo canónico de la filosofía de Buffett: un gran negocio comprado a precio razonable y mantenido para siempre.',
    risks: [
      'Cambio en preferencias de consumo: la creciente preocupación por la salud y el azúcar presiona el volumen de bebidas carbonatadas tradicionales en mercados desarrollados.',
      'Exposición cambiaria: más del 60% de los ingresos provienen de fuera de EE.UU., generando volatilidad por movimientos del dólar.',
      'Costos de insumos: el precio del azúcar, el aluminio y otros commodities puede comprimir márgenes si no se traslada completamente a precios.',
    ],
    catalysts: [
      'Diversificación de portafolio: la expansión hacia aguas, tés y bebidas energéticas reduce la dependencia de las gaseosas clásicas.',
      'Poder de fijación de precios: la marca permite subir precios por encima de la inflación sin pérdida significativa de volumen en la mayoría de los mercados.',
      'Crecimiento en mercados emergentes: la penetración per cápita de Coca-Cola en India, África y el sudeste asiático todavía tiene amplio margen de expansión frente a mercados maduros.',
    ],
  },

}
