const quotes = [
    {
        quote: "내가 산을 향하여 눈을 들리라 나의 도움이 어디서 올꼬 나의 도움이 천지를 지으신 여호와에게서로다",
        verse: "시편 121:1-2",
        type: "23년의 말씀",
    },
    {
        quote: "네 모든 자녀는 여호와의 교훈을 받을 것이니 네 자녀에게는 큰 평안이 있을 것이며",
        verse: "사 54:13",
        type: "자녀에 대한 약속의 말씀",
    },
    {
        quote: "네가 만일 내가 명령한 모든 일에 순종하고 내 길로 행하며 내 눈에 합당한 일을 하며 내 종 다윗이 행함 같이 내 율례와 명령을 지키면 내가 너와 함께 있어 내가 다윗을 위하여 세운 것 같이 너를 위하여 견고한 집을 세우고 이스라엘을 네게 주리라",
        verse: "왕상 11:38",
        type: "순종과 복"
    }
];

const quote = document.querySelector("#quote span:first-child");
const verse = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
verse.innerText = todaysQuote.verse;
