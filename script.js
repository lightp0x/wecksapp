const excuseElements = {
    beginning: [
        "Due to an unexpected",
        "Because of a rare",
        "Following a bizarre",
        "After an unfortunate",
        "In light of a recent"
    ],
    middle: [
        "quantum physics anomaly",
        "time-zone synchronization issue",
        "coffee machine malfunction",
        "cryptocurrency fluctuation",
        "planetary alignment",
        "cat video marathon",
        "meditation session with my plants",
        "discussion with my pet goldfish"
    ],
    end: [
        "my productivity was temporarily dimension-shifted.",
        "my files achieved sentience and needed counseling.",
        "I had to recalibrate my workspace feng shui.",
        "I entered a temporary parallel universe.",
        "my keyboard needed emotional support.",
        "my internet was possessed by ancient memes."
    ]
};

function generateExcuse() {
    const beginning = excuseElements.beginning[Math.floor(Math.random() * excuseElements.beginning.length)];
    const middle = excuseElements.middle[Math.floor(Math.random() * excuseElements.middle.length)];
    const end = excuseElements.end[Math.floor(Math.random() * excuseElements.end.length)];
    
    return `${beginning} ${middle}, ${end}`;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const excuse = generateExcuse();
    document.getElementById('excuse').textContent = excuse;
}); 