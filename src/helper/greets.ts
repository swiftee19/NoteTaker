const greetings = [
    'Hello',
    'Hi',
    'Hey',
    'Hola',
    'Bonjour',
    'Ciao',
    'Namaste',
    'Salaam',
    'Konnichiwa',
    'Guten Tag',
    'Olá',
    'Aloha',
    'Shalom',
    'Hej',
    'Merhaba',
    'Salut',
    'Nǐ hǎo',
    'Anyoung haseyo',
    'Kamusta',
    'Hallo',
    'Hei',
    'Ahoj',
    'Kumusta'
];

export function getRandomGreetings() {
    return greetings[Math.floor(Math.random() * greetings.length)];
}