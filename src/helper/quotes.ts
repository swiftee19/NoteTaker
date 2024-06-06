const quotes = [
    "Capture the moment.",
    "Ideas worth saving.",
    "Notes for tomorrow.",
    "Write it down.",
    "Think it. Ink it.",
    "Your thoughts, organized.",
    "Noteworthy ideas.",
    "Remember this.",
    "Note to self.",
    "Brain dump.",
    "Save your thoughts.",
    "Keep it noted.",
    "Thoughts on paper.",
    "Jot it down.",
    "Memories in the making.",
    "Inspiration strikes.",
    "Notes for success.",
    "Plan and prosper.",
    "Scribble your ideas.",
    "Thoughts made tangible."
];

export function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}