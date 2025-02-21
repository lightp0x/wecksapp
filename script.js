const excuseElements = {
    beginning: [
        "Valitettavasti johtuen",
        "En voinut voittaa, koska",
        "Häviö johtui siitä, että",
        "Olisin kyllä voittanut, mutta",
        "Et uskokkaan, mutta"
    ],
    middle: [
        "Iron Manin repulsorit",
        "Hulkin thunderclapit",
        "Doctor Strangen portaalit",
        "Magneton metallin hallinta",
        "Spider-Manin verkot",
        "Black Pantherin vibranium-varusteet",
        "Thorin Mjolnir",
        "Wolverinen adamantium-kynnet"
    ],
    end: [
        "eivät toimineet niin kuin piti lag-piikin takia.",
        "olivat selvästi ylibufattuja tässä patchissa.",
        "tarvitsevat ehdottomasti nerffiä seuraavassa päivityksessä.",
        "olivat buggisia juuri tässä matsissa.",
        "kärsivät serverin viiveestä.",
        "eivät rekisteröineet osumia kunnolla.",
        "olivat epäreiluja juuri minun hahmojani vastaan.",
        "olivat aivan rikki tässä pelissä."
    ]
};

function generateExcuse() {
    const beginning = excuseElements.beginning[Math.floor(Math.random() * excuseElements.beginning.length)];
    const middle = excuseElements.middle[Math.floor(Math.random() * excuseElements.middle.length)];
    const end = excuseElements.end[Math.floor(Math.random() * excuseElements.end.length)];
    
    return `${beginning} ${middle} ${end}`;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const excuse = generateExcuse();
    document.getElementById('excuse').textContent = excuse;
}); 