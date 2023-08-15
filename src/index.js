const messages = [
  "Believe you can, and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future depends on what you do today. - Mahatma Gandhi",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The harder the conflict, the greater the triumph. - George Washington",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only person you should try to be better than is the person you were yesterday. - Unknown",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
  "The only thing standing between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
  "Every day may not be good, but there's something good in every day. - Unknown",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "You are the artist of your own life. Don't hand the paintbrush to anyone else. - Unknown",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
];

const commitMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  commitMessage,
};
