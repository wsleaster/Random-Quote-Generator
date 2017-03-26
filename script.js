var quotes = ["One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever. -unknown",
  "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him - Ralph Emerson",
  "Moments of complete apathy are the best for new creations.-Philip Breedveld",
  "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.-Sarah Breathnach",
  "Growth begins when we begin to accept our own weakness.-Jean Vanier",
  "Don't wait. The time will never be just right.-Napoleon Hill",
  "The world doesn’t happen to you it happens from you.- unknown",
  "Happiness does not come from having much, but from being attached to little.-Cheng Yen",
  "You are doomed to make choices. This is life's greatest paradox.-Wayne Dyer",
  "The truth of the matter is that you always know the right thing to do. The hard part is doing it.-Norman Schwarzkopf Jr."
];

var nowQuote = '';

function newQuote(quotes) {
  randNum = Math.floor(Math.random() * quotes.length);
  nowQuote = quotes[randNum];
  document.getElementById("quote").innerHTML = nowQuote;
}