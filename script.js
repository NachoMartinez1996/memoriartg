const logoSources = ["logo.png", "Logo.png"];

const memoryData = [
    { imagen: "castagnino.jpg", referencia: "Museo Municipal de Bellas Artes 'Juan B. Castagnino'" },
    { imagen: "catedral.jpg", referencia: "Catedral Basílica Santuario 'Nuestra Señora del Rosario'" },
    { imagen: "escarapela.png", referencia: "Cuna de la Escarapela" },
    { imagen: "estevez.jpg", referencia: "Museo de Arte Decorativo 'Firma y Odilo Estévez'" },
    { imagen: "helado.jpg", referencia: "Capital Nacional del Helado Artesanal" },
    { imagen: "independencia.jpg", referencia: "Parque Independencia" },
    { imagen: "monumento.jpg", referencia: "Monumento Histórico Nacional a la Bandera" },
    { imagen: "puente.jpg", referencia: "Puente 'Nuestra Señora del Rosario'" },
    { imagen: "urquiza.jpg", referencia: "Parque Urquiza" },
    { imagen: "gigante.png", referencia: "Estadio Mundialista 'Gigante de Arroyito'" },
    { imagen: "coloso.jpg", referencia: "Estadio 'Marcelo A. Bielsa'" },
    { imagen: "elcirculo.png", referencia: "Teatro El Círculo" }
];

const challengeWordSequence = ["Rosario", "Te", "Guío"];

const challengeTriviaDecks = [
    {
        title: "Tarjeta 1",
        questions: [
            {
                prompt: "¿Cuál fue el primer club deportivo de Rosario?",
                options: ["Rosario Cricket Club", "Jockey Club de Rosario", "Club Gimnasia y Esgrima"],
                correctIndex: 0,
                reference: "El Rosario Cricket Club fue creado en 1867 por un grupo de inmigrantes ingleses. En 1884 cambia su nombre por el de Atlético del Rosario que conserva en nuestros días.",
                sources: ["Andrés Bossio, Revista Rosario Historias de Aquí a la Vuelta, Nº 9. Pág. 3."]
            },
            {
                prompt: "¿Cuál es el nombre oficial del barrio Arroyito?",
                options: ["Cañada de Salinas", "Lisandro de la Torre", "General Sarmiento"],
                correctIndex: 1,
                reference: "",
                sources: ["Capitel en Barrio Arroyito, Diario La Capital, 1/06/1997. Pág. 8."]
            },
            {
                prompt: "¿Quién fue Teófilo Zeballos?",
                options: [
                    "El primer bombero que realizó un salvataje de un edificio en llamas",
                    "El primero que hizo una ascensión en globo aerostático en nuestra ciudad",
                    "El primer ordenanza que tuvo la Municipalidad de Rosario"
                ],
                correctIndex: 1,
                reference: "El 22 de febrero de 1874, Teófilo Zeballos, mejicano, se elevaba en el cielo rosarino, dando lugar a la primera ascensión en globo aerostático en nuestra ciudad; lo llevó a cabo en la actual Plaza López.",
                sources: ['Revista "Una Mano de su Mutual", Asociación Médica de Rosario, Año 2, Nº 9, marzo de 1996. Pág. 34-36.']
            }
        ]
    },
    {
        title: "Tarjeta 2",
        questions: [
            {
                prompt: "¿Cuál era el nombre de la primera fábrica de acero que se instaló en Rosario, generando un importante núcleo de concentración fabril?",
                options: ["Aceros Rosario, 1991", "Acerera del Paraná, 1850", "Acindar S.A., 1942"],
                correctIndex: 2,
                reference: "Acindar Industria de Acero S.A. instaló en Rosario su primera fábrica de acero. Contaba con un Horno Siemens Martin de 30 toneladas de capacidad y un pequeño tren laminador de origen nacional.",
                sources: ['Carlos del Frade, "Postales del ex cordón industrial del Gran Rosario". Pág. 92. Ediciones Fantasía Industrial, 1994.']
            },
            {
                prompt: "¿Quién fue el escritor y poeta español que llegó a Rosario, a fines de 1935 para protagonizar un recital poético y dar una conferencia?",
                options: ["Federico García Lorca", "Miguel Hernández", "Rafael Alberti"],
                correctIndex: 0,
                reference: "",
                sources: ["Revista Historias de Aquí a la Vuelta, Nº 13, Año 1991."]
            },
            {
                prompt: "¿Quién expresó estas palabras enviadas desde París, donde estaba cumpliendo una misión diplomática: \"...Por mi parte, mi sueño dorado es habitar en algún lugar de nuestras campañas de América. Ojalá pudiera tener una bonita quinta cerca del Paraná o en el Rosario...\"?",
                options: ["Justo José de Urquiza", "Juan Manuel de Rosas", "Juan Bautista Alberdi"],
                correctIndex: 2,
                reference: "Si bien Alberdi jamás residió en nuestra ciudad, José Nicolás Puccio, influido por el espíritu de la Generación del 80, rendiría homenaje al autor de \"Las Bases\", fundando un pueblo con el nombre de Alberdi.",
                sources: ['Revista "Una Mano de su Mutual", Asociación Médica de Rosario, Año 2, Nº 5, marzo de 1995. Pág. 28.']
            }
        ]
    },
    {
        title: "Tarjeta 3",
        questions: [
            {
                prompt: "¿En qué año y dónde fueron ubicadas definitivamente las esculturas de Lola Mora?",
                options: [
                    'En 1990, en la Terminal de Ómnibus "Mariano Moreno"',
                    "En 1997, en el Pasaje Juramento (Buenos Aires entre Santa Fe y Córdoba)",
                    "En 1993, en la Plaza Pringles (Córdoba entre Presidente Roca y Paraguay)"
                ],
                correctIndex: 1,
                reference: "",
                sources: []
            },
            {
                prompt: "¿Cuál fue el origen del actual Centro Cultural 'Roberto Fontanarrosa' (ex Bernardino Rivadavia), situado en la Plaza Montenegro?",
                options: ["El Hotel Gran Rosario", "La vieja Escuela de Señoritas", "El Centro de Prensa del Mundial de Fútbol de 1978"],
                correctIndex: 2,
                reference: "",
                sources: ['Miguel A. de Marco y Oscar Ensinck, en Historia de Rosario, Asociación Amigos del Museo Histórico "Dr. Julio Marc". Pág. 356.']
            },
            {
                prompt: "El Centro Municipal de Distrito Noroeste lleva el nombre de “Olga y Leticia Cossettini”. ¿En qué se destacaron Olga y Leticia?",
                options: ["En teatro", "En educación", "En política"],
                correctIndex: 1,
                reference: "",
                sources: []
            }
        ]
    },
    {
        title: "Tarjeta 4",
        questions: [
            {
                prompt: "Un gran naturalista del siglo XIX estuvo en Rosario en los años treinta y realizó investigaciones en las barrancas del Arroyo Saladillo. ¿De quién se trata?",
                options: ["Charles Darwin", "Alfred Wallace", "Ernst Haeckel"],
                correctIndex: 0,
                reference: "",
                sources: []
            },
            {
                prompt: "¿Quién fue el presidente argentino que visitó el Hipódromo Independencia el 26 de octubre de 1902, a casi un año de su inauguración?",
                options: ["Julio A. Roca", "Hipólito Yrigoyen", "José Félix Uriburu"],
                correctIndex: 0,
                reference: "",
                sources: []
            },
            {
                prompt: "El segundo Centro de Distrito que se inauguró en el año 1999 en el marco del proceso de descentralización y modernización del Estado municipal lleva el nombre de Felipe Moré. ¿A qué se dedicaba Felipe Moré?",
                options: ["Al periodismo", "A las artes plásticas", "Al remo"],
                correctIndex: 0,
                reference: 'Su nombre resultó de una votación en la que participaron los alumnos de las escuelas primarias del distrito. Felipe Moré nació en 1852, fue periodista, fundó el diario "El Mensajero" y ocupó altas posiciones públicas en el gobierno. El 25 de junio de 1890 fue designado Comisario Municipal para la Villa San Francisquito y luego cónsul argentino en Portugal. Fue gran propulsor del progreso de Rosario, al que mucho contribuyó con su pluma ágil y valiente. Falleció en la ciudad de Lisboa el 3 de abril de 1905. Sus restos fueron repatriados en 1906.',
                sources: ["Municipalidad de Rosario - www.rosario.gov.ar"]
            }
        ]
    },
    {
        title: "Tarjeta 5",
        questions: [
            {
                prompt: "¿Quién es el prestigioso arquitecto que diseñó el Distrito Sudoeste “Emilia Bertolé”, ubicado en Av. Francia 4435 e inaugurado en septiembre de 2009?",
                options: ["César Pelli", "Clorindo Testa", "Amancio Williams"],
                correctIndex: 0,
                reference: "El edificio, inaugurado en septiembre de 2009, se encuentra enclavado en un terreno de 15.000 m2 y cuenta con 6.900 m2 de espacio cubierto. Es la primera obra del prestigioso arquitecto César Pelli en el interior del país y de carácter público en la Argentina. César Pelli es un arquitecto argentino, nacido el 12 de octubre de 1926 en la provincia de Tucumán. Estudió arquitectura y se graduó en la Universidad Nacional de Tucumán. Posteriormente comenzó a trabajar en su país, hasta que en 1952 se trasladó a los Estados Unidos, donde finalmente se nacionalizó estadounidense. Fue decano de la Facultad de Arquitectura de la Universidad de Yale. Ha sido distinguido con la medalla de oro del American Architect Institute. Las Torres Petronas, en Kuala Lumpur, fueron los edificios más altos del mundo entre 1998 y 2003.",
                sources: [
                    "http://es.wikipedia.org/wiki/César_Pelli",
                    "http://es.wikipedia.org/wiki/Torres_Petronas",
                    "Municipalidad de Rosario - www.rosario.gov.ar"
                ]
            },
            {
                prompt: "La primera ciudad en hermanarse con Rosario, de acuerdo con un convenio propulsado por nuestro municipio, fue la ciudad italiana llamada Imperia. ¿Qué particularidad tiene esta ciudad en relación con la historia de Rosario?",
                options: [
                    "Desde allí trajeron a los leones de mármol que se encuentran en la entrada del Palacio Municipal.",
                    "Es la ciudad donde nació el padre de Manuel Belgrano.",
                    "Es la ciudad donde en 1986 se construyó un barrio llamado Rosario, ideado por un arquitecto rosarino que reside hace 30 años en Imperia."
                ],
                correctIndex: 1,
                reference: "Rosario e Imperia se hermanaron el 3 de octubre de 1987. El objetivo principal de este convenio es el intercambio cultural y de experiencias técnicas en las pequeñas y medianas empresas; también se busca afianzar el sistema democrático y acordar proyectos entre ciudades de distintos países que de esta manera puedan crecer más allá de las políticas estatales.",
                sources: ["Diario La Capital, 11/6/1998, 1ra. pág., 2da. sección."]
            },
            {
                prompt: "¿Quién fue Juanito Laguna?",
                options: [
                    "Un escritor famoso de la década del 30",
                    "Un personaje de la obra del artista plástico Antonio Berni",
                    "El primer pasajero que subió al tranvía cuando este se inauguró"
                ],
                correctIndex: 1,
                reference: "",
                sources: ["Revista La Maga Nº 27, 1997. Pág. 13."]
            }
        ]
    },
    {
        title: "Tarjeta 6",
        questions: [
            {
                prompt: "El edificio donde se emplaza la sede central de la Municipalidad de Rosario es conocido como el Palacio de los Leones, por las dos esculturas de leones idénticos y simétricos que están junto a la escalinata principal. Estas son réplicas a menor escala de originales que actualmente existen. ¿De qué lugar fueron traídos?",
                options: [
                    "Desde Roma (de un palacio en la Vía Veneto)",
                    "Desde Génova (de la Iglesia de San Lorenzo)",
                    "Desde Buenos Aires (del Congreso Nacional)"
                ],
                correctIndex: 1,
                reference: "",
                sources: ["Capitel en Zona Centro, Diario La Capital, 17/11/1996."]
            },
            {
                prompt: "¿Cuándo nevó por última vez en Rosario?",
                options: ["En 1973", "En 1963", "En 1995"],
                correctIndex: 0,
                reference: "",
                sources: ["Archivo Periodístico de Canal 5 de Rosario."]
            },
            {
                prompt: "¿Qué personalidad del ámbito de la educación fue declarada Ciudadana Ilustre en el año 1993?",
                options: ["Leticia Cossettini", "Rosa Ziperovich", "Mercedes Sánchez Negrete"],
                correctIndex: 1,
                reference: "En el año 1993 el Honorable Concejo Municipal la declaró Ciudadana Ilustre, rindiendo homenaje a sus ochenta años de lucha por la educación pública y su compromiso con los derechos humanos.",
                sources: ["Municipalidad de Rosario - www.rosario.gov.ar"]
            }
        ]
    }
];

const viewElements = document.querySelectorAll(".view");
const navigationButtons = document.querySelectorAll("[data-open-view]");

const memoryBoard = document.getElementById("memory-board");
const memoryTime = document.getElementById("memory-time");
const memoryProgress = document.getElementById("memory-progress");
const memoryFeedback = document.getElementById("memory-feedback");
const memoryStartButton = document.getElementById("memory-start-btn");
const memoryResetButton = document.getElementById("memory-reset-btn");
const clearCacheButton = document.getElementById("clear-cache-btn");
const cacheFeedback = document.getElementById("cache-feedback");

const challengeBoard = document.getElementById("challenge-board");
const challengeFeedback = document.getElementById("challenge-feedback");
const challengeWordCount = document.getElementById("challenge-word-count");
const challengeResetButton = document.getElementById("challenge-reset-btn");
const challengeOverlay = document.getElementById("challenge-overlay");
const challengeQuizCard = document.getElementById("challenge-quiz-card");
const challengeQuizTitle = document.getElementById("challenge-quiz-title");
const challengeQuizProgress = document.getElementById("challenge-quiz-progress");
const challengeQuestion = document.getElementById("challenge-question");
const challengeOptions = document.getElementById("challenge-options");
const challengeAnswerFeedback = document.getElementById("challenge-answer-feedback");
const challengeQuestionMeta = document.getElementById("challenge-question-meta");
const challengeReferenceBlock = document.getElementById("challenge-reference-block");
const challengeReferenceText = document.getElementById("challenge-reference-text");
const challengeSourcesBlock = document.getElementById("challenge-sources-block");
const challengeSourcesLabel = document.getElementById("challenge-sources-label");
const challengeSourcesList = document.getElementById("challenge-sources-list");
const challengeContinueButton = document.getElementById("challenge-continue-btn");
const challengeResultCard = document.getElementById("challenge-result-card");
const challengeResultTag = document.getElementById("challenge-result-tag");
const challengeResultTitle = document.getElementById("challenge-result-title");
const challengeResultText = document.getElementById("challenge-result-text");
const challengeOverlayResetButton = document.getElementById("challenge-overlay-reset-btn");
const challengeWordLabel = document.getElementById("challenge-word-label");

const memoryState = {
    cards: [],
    selected: [],
    lockBoard: false,
    started: false,
    matchedPairs: 0,
    timeRemaining: 120,
    timerId: null,
    resolveTimeoutId: null
};

const challengeState = {
    cards: [],
    phase: "board",
    selectedWords: [],
    selectedIds: new Set(),
    activeDeck: null,
    questionIndex: 0,
    score: 0,
    answerLocked: false
};

navigationButtons.forEach((button) => {
    button.addEventListener("click", () => openView(button.dataset.openView));
});

memoryStartButton.addEventListener("click", startMemoryGame);
memoryResetButton.addEventListener("click", resetMemoryGame);
challengeResetButton.addEventListener("click", resetChallengeGame);
challengeContinueButton.addEventListener("click", continueChallengeQuiz);
challengeOverlayResetButton.addEventListener("click", resetChallengeGame);
clearCacheButton.addEventListener("click", clearClientCache);

initializeApp();

function initializeApp() {
    resetMemoryGame();
    resetChallengeGame();
}

async function clearClientCache() {
    clearCacheButton.disabled = true;
    cacheFeedback.textContent = "Limpiando caché y recargando...";

    try {
        if ("caches" in window) {
            const cacheKeys = await caches.keys();
            await Promise.all(cacheKeys.map((cacheKey) => caches.delete(cacheKey)));
        }

        if ("serviceWorker" in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registrations.map((registration) => registration.unregister()));
        }

        try {
            window.localStorage.clear();
        } catch (error) {
            console.warn("No se pudo limpiar localStorage.", error);
        }

        try {
            window.sessionStorage.clear();
        } catch (error) {
            console.warn("No se pudo limpiar sessionStorage.", error);
        }
    } catch (error) {
        console.warn("No se pudo limpiar toda la caché del navegador.", error);
    }

    const refreshedUrl = new URL(window.location.href);
    refreshedUrl.searchParams.set("nocache", Date.now().toString());
    window.location.replace(refreshedUrl.toString());
}

function openView(viewId) {
    stopMemoryTimer();
    clearMemoryResolveTimeout();

    viewElements.forEach((view) => {
        view.classList.toggle("view--active", view.id === viewId);
    });

    if (viewId === "memory-view") {
        resetMemoryGame();
    }

    if (viewId === "challenge-view") {
        resetChallengeGame();
    }
}

function startMemoryGame() {
    stopMemoryTimer();
    clearMemoryResolveTimeout();
    memoryState.started = true;
    memoryState.lockBoard = false;
    memoryState.selected = [];
    memoryState.matchedPairs = 0;
    memoryState.timeRemaining = 120;
    buildMemoryBoard();
    updateMemoryTime();
    updateMemoryProgress();
    setNotice(memoryFeedback, "El tablero está activo. Buscá cada pareja antes de que se agote el tiempo.", "warning");

    memoryState.timerId = window.setInterval(() => {
        memoryState.timeRemaining -= 1;
        updateMemoryTime();

        if (memoryState.timeRemaining <= 0) {
            endMemoryGame(false);
        }
    }, 1000);
}

function resetMemoryGame() {
    stopMemoryTimer();
    clearMemoryResolveTimeout();
    memoryState.started = false;
    memoryState.lockBoard = false;
    memoryState.selected = [];
    memoryState.matchedPairs = 0;
    memoryState.timeRemaining = 120;
    buildMemoryBoard();
    updateMemoryTime();
    updateMemoryProgress();
    setNotice(memoryFeedback, "Presioná iniciar para comenzar una nueva ronda de memoria.", "neutral");
}

function endMemoryGame(hasWon) {
    stopMemoryTimer();
    clearMemoryResolveTimeout();
    memoryState.started = false;
    memoryState.lockBoard = true;
    memoryBoard.classList.add("is-locked");

    if (hasWon) {
        setNotice(memoryFeedback, "¡Excelente! Encontraste las 12 parejas antes de que terminara el tiempo.", "success");
        return;
    }

    setNotice(memoryFeedback, "Se terminó el tiempo. Reiniciá la ronda para volver a intentarlo.", "danger");
}

function buildMemoryBoard() {
    const cards = memoryData.flatMap((item, index) => ([
        {
            id: `image-${index}`,
            pairId: index,
            type: "image",
            imagen: item.imagen,
            referencia: item.referencia
        },
        {
            id: `text-${index}`,
            pairId: index,
            type: "text",
            imagen: item.imagen,
            referencia: item.referencia
        }
    ]));

    memoryState.cards = shuffle(cards);
    memoryBoard.innerHTML = "";
    memoryBoard.classList.remove("is-locked");

    memoryState.cards.forEach((cardData) => {
        const cardElement = createGameCard({
            frontBuilder: (frontFace) => {
                if (cardData.type === "image") {
                    frontFace.classList.add("memory-face--image");
                    const image = document.createElement("img");
                    image.src = cardData.imagen;
                    image.alt = cardData.referencia;
                    frontFace.appendChild(image);
                    return;
                }

                frontFace.classList.add("memory-face--text");
                const text = document.createElement("span");
                text.textContent = cardData.referencia;
                frontFace.appendChild(text);
            },
            onClick: () => handleMemoryCardClick(cardElement, cardData)
        });

        memoryBoard.appendChild(cardElement);
    });
}

function handleMemoryCardClick(cardElement, cardData) {
    if (!memoryState.started || memoryState.lockBoard) {
        return;
    }

    if (cardElement.classList.contains("is-flipped") || cardElement.classList.contains("is-hidden")) {
        return;
    }

    flipCard(cardElement, true);
    memoryState.selected.push({ element: cardElement, data: cardData });

    if (memoryState.selected.length < 2) {
        return;
    }

    memoryState.lockBoard = true;

    memoryState.resolveTimeoutId = window.setTimeout(() => {
        const [firstCard, secondCard] = memoryState.selected;

        if (!firstCard || !secondCard) {
            memoryState.lockBoard = false;
            memoryState.resolveTimeoutId = null;
            return;
        }

        const isMatch = firstCard.data.pairId === secondCard.data.pairId;

        if (isMatch) {
            setTimeout(() => {
                firstCard.element.classList.add("is-hidden");
                secondCard.element.classList.add("is-hidden");
                memoryState.matchedPairs += 1;
                updateMemoryProgress();
                setNotice(memoryFeedback, "Pareja encontrada. Seguí así.", "success");

                if (memoryState.matchedPairs === memoryData.length) {
                    endMemoryGame(true);
                }
                
                memoryState.selected = [];
                memoryState.lockBoard = false;
                memoryState.resolveTimeoutId = null;
            }, 600);
        } else {
            setTimeout(() => {
                flipCard(firstCard.element, false);
                flipCard(secondCard.element, false);
                setNotice(memoryFeedback, "No coinciden. Probá otra combinación.", "danger");
                memoryState.selected = [];
                memoryState.lockBoard = false;
                memoryState.resolveTimeoutId = null;
            }, 600);
        }
    }, 1000);
}

function updateMemoryTime() {
    memoryTime.textContent = `${Math.max(memoryState.timeRemaining, 0)} s`;
}

function updateMemoryProgress() {
    memoryProgress.textContent = `${memoryState.matchedPairs} / ${memoryData.length}`;
}

function stopMemoryTimer() {
    if (memoryState.timerId) {
        clearInterval(memoryState.timerId);
        memoryState.timerId = null;
    }
}

function clearMemoryResolveTimeout() {
    if (memoryState.resolveTimeoutId) {
        clearTimeout(memoryState.resolveTimeoutId);
        memoryState.resolveTimeoutId = null;
    }
}

function resetChallengeGame() {
    challengeState.cards = buildChallengeCards();
    challengeState.phase = "board";
    challengeState.selectedWords = [];
    challengeState.selectedIds = new Set();
    challengeState.activeDeck = null;
    challengeState.questionIndex = 0;
    challengeState.score = 0;
    challengeState.answerLocked = false;

    challengeBoard.innerHTML = "";
    challengeBoard.classList.remove("is-locked");
    challengeWordLabel.textContent = "Ruta de palabras";
    challengeWordCount.textContent = "0 / 3";
    challengeOptions.innerHTML = "";
    challengeQuestion.textContent = "";
    challengeAnswerFeedback.textContent = "";
    challengeAnswerFeedback.style.color = "";
    challengeContinueButton.classList.add("is-hidden");
    clearQuestionMeta();
    hideChallengeOverlay();

    setNotice(
        challengeFeedback,
        "Elegí tarjetas sobre el tablero. Si encontrás las tres palabras, ganás; si abrís una trivia, respondés tres preguntas consecutivas.",
        "neutral"
    );

    challengeState.cards.forEach((cardData) => {
        const cardElement = createGameCard({
            frontBuilder: (frontFace) => buildChallengeFront(frontFace, cardData),
            onClick: () => handleChallengeCardClick(cardElement, cardData)
        });

        challengeBoard.appendChild(cardElement);
    });
}

function buildChallengeCards() {
    const wordCards = challengeWordSequence.map((word, index) => ({
        id: `word-${index}`,
        type: "word",
        label: word
    }));

    const triviaCards = challengeTriviaDecks.map((deck, index) => ({
        id: `trivia-${index}`,
        type: "trivia",
        title: deck.title,
        questions: deck.questions
    }));

    return shuffle([...wordCards, ...triviaCards]);
}

function buildChallengeFront(frontFace, cardData) {
    if (cardData.type === "word") {
        frontFace.classList.add("word-face");

        const tag = document.createElement("p");
        tag.className = "word-face__tag";
        tag.textContent = "Palabra";

        const label = document.createElement("p");
        label.className = "word-face__label";
        label.textContent = cardData.label;

        frontFace.append(tag, label);
        return;
    }

    frontFace.classList.add("trivia-face");

    const badge = document.createElement("span");
    badge.className = "trivia-face__badge";
    badge.textContent = "?";

    const title = document.createElement("span");
    title.className = "trivia-face__title";
    title.textContent = cardData.title;

    const meta = document.createElement("p");
    meta.className = "trivia-face__meta";
    meta.textContent = "3 preguntas de opción múltiple";

    frontFace.append(badge, title, meta);
}

function handleChallengeCardClick(cardElement, cardData) {
    if (challengeState.phase !== "board" || challengeState.selectedIds.has(cardData.id)) {
        return;
    }

    challengeState.selectedIds.add(cardData.id);
    flipCard(cardElement, true);

    if (cardData.type === "word") {
        challengeState.selectedWords.push(cardData.label);
        challengeWordLabel.textContent = "Ruta actual";
        challengeWordCount.textContent = challengeState.selectedWords.join(" → ");

        if (challengeState.selectedWords.length === 3) {
            finishChallengeWithWords();
        }

        return;
    }

    startTriviaFlow(cardData);
}

function finishChallengeWithWords() {
    challengeState.phase = "result";
    challengeBoard.classList.add("is-locked");

    const isSuperior = challengeWordSequence.every(
        (word, index) => challengeState.selectedWords[index] === word
    );

    if (isSuperior) {
        challengeResultTag.textContent = "Victoria superior";
        challengeResultTitle.textContent = "Secuencia perfecta";
        challengeResultText.textContent = "Encontraste Rosario, Te y Guío en el orden exacto de la marca.";
        setNotice(challengeFeedback, "Lograste la secuencia oficial Rosario → Te → Guío.", "success");
    } else {
        challengeResultTag.textContent = "Victoria estándar";
        challengeResultTitle.textContent = "Palabras descubiertas";
        challengeResultText.textContent = `Encontraste las tres palabras en este orden: ${challengeState.selectedWords.join(" → ")}.`;
        setNotice(challengeFeedback, "Hallaste las tres palabras de marca y cerraste la partida.", "success");
    }

    showChallengeOverlay("result");
}

function startTriviaFlow(cardData) {
    challengeState.phase = "quiz";
    challengeState.activeDeck = cardData;
    challengeState.questionIndex = 0;
    challengeState.score = 0;
    challengeState.answerLocked = false;

    challengeBoard.classList.add("is-locked");
    setNotice(challengeFeedback, `${cardData.title} activada. Respondé las tres preguntas desde el tablero.`, "warning");
    showChallengeOverlay("quiz");
    renderChallengeQuestion();
}

function renderChallengeQuestion() {
    const currentQuestion = challengeState.activeDeck.questions[challengeState.questionIndex];

    challengeQuizTitle.textContent = challengeState.activeDeck.title;
    challengeQuizProgress.textContent = `Pregunta ${challengeState.questionIndex + 1} de ${challengeState.activeDeck.questions.length}`;
    challengeQuestion.textContent = currentQuestion.prompt;
    challengeOptions.innerHTML = "";
    challengeAnswerFeedback.textContent = "";
    challengeAnswerFeedback.style.color = "";
    challengeContinueButton.classList.add("is-hidden");
    clearQuestionMeta();
    challengeState.answerLocked = false;

    currentQuestion.options.forEach((optionText, optionIndex) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "quiz-option";
        optionButton.textContent = optionText;
        optionButton.addEventListener("click", () => handleChallengeAnswer(optionIndex));
        challengeOptions.appendChild(optionButton);
    });
}

function handleChallengeAnswer(selectedIndex) {
    if (challengeState.answerLocked) {
        return;
    }

    const currentQuestion = challengeState.activeDeck.questions[challengeState.questionIndex];
    const optionButtons = Array.from(challengeOptions.querySelectorAll(".quiz-option"));
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    const isLastQuestion = challengeState.questionIndex === challengeState.activeDeck.questions.length - 1;

    challengeState.answerLocked = true;

    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === currentQuestion.correctIndex) {
            button.classList.add(isCorrect ? "is-correct" : "is-revealed");
        }

        if (!isCorrect && index === selectedIndex) {
            button.classList.add("is-wrong");
        }
    });

    if (isCorrect) {
        challengeState.score += 1;
        challengeAnswerFeedback.textContent = "Respuesta correcta.";
        challengeAnswerFeedback.style.color = "#2f8f4e";
    } else {
        challengeAnswerFeedback.textContent = "Respuesta incorrecta. La opción correcta quedó marcada.";
        challengeAnswerFeedback.style.color = "#d74d39";
    }

    showQuestionMeta(currentQuestion);
    challengeContinueButton.textContent = isLastQuestion ? "Ver resultado" : "Siguiente pregunta";
    challengeContinueButton.classList.remove("is-hidden");
}

function continueChallengeQuiz() {
    if (!challengeState.answerLocked) {
        return;
    }

    const isLastQuestion = challengeState.questionIndex === challengeState.activeDeck.questions.length - 1;

    if (isLastQuestion) {
        finishTriviaFlow();
        return;
    }

    challengeState.questionIndex += 1;
    renderChallengeQuestion();
}

function finishTriviaFlow() {
    challengeState.phase = "result";
    challengeResultTag.textContent = "Resultado final";
    challengeResultTitle.textContent = `Aciertos: ${challengeState.score} de ${challengeState.activeDeck.questions.length}`;
    challengeResultText.textContent = "La partida terminó al completar la tercera pregunta de la trivia seleccionada.";

    setNotice(
        challengeFeedback,
        `Trivia finalizada con ${challengeState.score} acierto${challengeState.score === 1 ? "" : "s"} sobre ${challengeState.activeDeck.questions.length}.`,
        challengeState.score >= 2 ? "success" : "danger"
    );

    showChallengeOverlay("result");
}

function showQuestionMeta(question) {
    const hasReference = Boolean(question.reference);
    const hasSources = Array.isArray(question.sources) && question.sources.length > 0;

    challengeQuestionMeta.classList.toggle("is-hidden", !hasReference && !hasSources);
    challengeReferenceBlock.classList.toggle("is-hidden", !hasReference);
    challengeSourcesBlock.classList.toggle("is-hidden", !hasSources);

    challengeReferenceText.textContent = hasReference ? question.reference : "";
    challengeSourcesLabel.textContent = question.sources.length > 1 ? "Fuentes" : "Fuente";
    challengeSourcesList.innerHTML = "";

    if (hasSources) {
        question.sources.forEach((source) => {
            const sourceText = document.createElement("p");
            sourceText.className = "quiz-meta__text";
            sourceText.textContent = source;
            challengeSourcesList.appendChild(sourceText);
        });
    }
}

function clearQuestionMeta() {
    challengeQuestionMeta.classList.add("is-hidden");
    challengeReferenceBlock.classList.add("is-hidden");
    challengeSourcesBlock.classList.add("is-hidden");
    challengeReferenceText.textContent = "";
    challengeSourcesList.innerHTML = "";
}

function showChallengeOverlay(mode) {
    challengeOverlay.classList.remove("is-hidden");
    challengeQuizCard.classList.toggle("is-hidden", mode !== "quiz");
    challengeResultCard.classList.toggle("is-hidden", mode !== "result");
}

function hideChallengeOverlay() {
    challengeOverlay.classList.add("is-hidden");
    challengeQuizCard.classList.add("is-hidden");
    challengeResultCard.classList.add("is-hidden");
}

function createGameCard({ frontBuilder, onClick }) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "game-card";

    const inner = document.createElement("span");
    inner.className = "game-card__inner";

    const backFace = document.createElement("span");
    backFace.className = "game-card__face game-card__face--back";
    backFace.appendChild(createBackLogo());

    const frontFace = document.createElement("span");
    frontFace.className = "game-card__face game-card__face--front";
    frontBuilder(frontFace);

    inner.append(backFace, frontFace);
    button.appendChild(inner);
    button.addEventListener("click", onClick);

    return button;
}

function createBackLogo() {
    const wrapper = document.createElement("span");
    wrapper.className = "game-card__brand";

    const image = document.createElement("img");
    image.className = "game-card__back-logo";
    image.alt = "Rosario Te Guío";

    const fallback = document.createElement("span");
    fallback.className = "game-card__back-fallback";
    fallback.textContent = "Rosario Te Guío";
    fallback.hidden = true;

    let logoIndex = 0;

    const loadLogo = () => {
        image.src = logoSources[logoIndex];
    };

    image.addEventListener("error", () => {
        logoIndex += 1;

        if (logoIndex < logoSources.length) {
            loadLogo();
            return;
        }

        image.remove();
        fallback.hidden = false;
    });

    loadLogo();
    wrapper.append(image, fallback);
    return wrapper;
}

function flipCard(cardElement, shouldFlip) {
    cardElement.classList.toggle("is-flipped", shouldFlip);
}

function setNotice(element, message, tone) {
    element.textContent = message;
    element.className = `notice notice--${tone}`;
}

function shuffle(items) {
    const clonedItems = [...items];

    for (let index = clonedItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [clonedItems[index], clonedItems[randomIndex]] = [clonedItems[randomIndex], clonedItems[index]];
    }

    return clonedItems;
}
