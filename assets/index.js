// copy to clipboard
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}



function clearAll() {
    const memeContainer = document.querySelector('.meme-content');
    const jokeContainer = document.querySelector('.joke-content');
    const quoteContainer = document.querySelector('.quote-content');
    const riddleContainer = document.querySelector('.riddle-content');
    
    memeContainer.innerHTML = '';
    jokeContainer.innerHTML = '';
    quoteContainer.innerHTML = '';
    riddleContainer.innerHTML = '';
  }
  
  function showMeme() {
    // Value is a string representing image URL
    const randomMemeUrl = getRandomData('memes');
    const container = document.querySelector('.meme-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomMemeUrl);
    
    clearAll();
    
    container.appendChild(newImg);
  }
  
  function showJoke() {
    // Value is a string representing the joke
    const randomJokeText = getRandomData('jokes');
    
    const newP = document.createElement('p');
    newP.textContent = randomJokeText;
    
    clearAll();
    
    document.querySelector('.joke-content').appendChild(newP);
  }
  
  function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData('quotes');
    
    const quote = document.createElement('p');
    const author = document.createElement('p');
    quote.textContent = randomQuote.quote;
    author.textContent = "- " + randomQuote.author;
    
    clearAll();
    
    const container = document.querySelector('.quote-content'); 
    container.appendChild(quote);
    container.appendChild(author);
  }
  
  
  function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData('riddles');
    
    const { question, answer } = randomRiddle;
    
    const questionElem = document.createElement('p');
    questionElem.textContent = question;
    
    const answerElem = document.createElement('p');
    answerElem.textContent = 'The answer is: ' + answer;
    answerElem.setAttribute('id', 'riddle-answer');
    answerElem.hidden = true;
    
    const container = document.querySelector('.riddle-content');
    
    clearAll();
    
    container.appendChild(questionElem);
    container.appendChild(answerElem);
  }
  
  /**
  * TODO: Unhide the riddle's answer
  * - If there is no riddle shown, alert the user that there is no riddle
  * - If there is a riddle shown and an answer shown, alert the user
  *   that the answer is already revealed
  * - If there is a riddle shown but no answer, unhide the answer!
  */
  function revealAnswers() {
    const riddleContainer = document.querySelector('.riddle-content');
    const riddle = riddleContainer.querySelector('p');
    const answer = document.querySelector('#riddle-answer');
    
    // console.log(answer.hidden);
    if (riddle && answer.hidden) {
      answer.hidden = false;
    } else if (riddle) {
      alert('The answer is already revealed!')
    } else {
      alert('There is no riddle to reveal the answer to!')
    }
    
  }
  
  /**
  * This function is used to get random data.  Don't worry about how it works, just know how to use it.  Usage is pre-filled in the functions above already, but here's an explanation of the function anyways.
  * 
  * Valid arguments:
  *
  * 'memes', 'jokes', 'quotes', 'riddles'
  *
  * Return values:
  * 
  * For meme data: 
  * A string representing an image url
  * 
  * For joke data: 
  * A string representing the joke
  * 
  * For quote data:
  * An object - { quote: '', author: '' }
  * 
  * For riddle data:
  * An object - { question: '', answer: '' }
  *
  * Example usage: getRandomData('quotes');
  */
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  // ----------------------------------------------------
  // NO NEED TO CHANGE ANYTHING BELOW but...
  // feel free to add/remove items from these lists to customize
  // your results
  // ----------------------------------------------------
  
  // Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
  const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];
  
  // Sourced from: http://www.devtopics.com/best-programming-jokes/
  const jokes = ['This statement', 'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”', 'There are only 10 kinds of people in this world: those who know binary and those who don’t.', 'All programmers are playwrights, and all computers are lousy actors.', 'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.', 'The generation of random numbers is too important to be left to chance.', 'Debugging: Removing the needles from the haystack.', '“Debugging” is like being the detective in a crime drama where you are also the murderer.', 'There are two ways to write error-free programs; only the third one works.', 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.'];
  
  // source: https://www.goodreads.com/quotes/tag/programming
  const quotes = [
    { quote: 'Are you Aisha? Because you are entering my eyes sha😎 '},
    { quote: 'We are asked to lower our gaze but when I look down I found my kids jannah at feet' },
    { quote: 'Are you Isha? because my day does not seems to end without you.' },
    { quote: 'Is your heart wudu, Because I never want to break it' },
  ];
  
  // Source: https://www.rd.com/list/challenging-riddles/
  const riddles = [
    { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'An echo' },
    { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
    { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
    { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
    { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
    { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' }
  ];
  
  // Just a little helper function
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    memes,
    jokes,
    quotes,
    riddles
  };
  
  