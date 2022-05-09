let realData = "";
let quotesData="";

const quotes = document.querySelector("#quotes");
const author=document.querySelector("#author");
const btn=document.getElementById("btn");
const tweetMe=document.getElementById("tweetMe");


const tweetNow=()=>{
   let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text } ${quotesData.author}`;
   window.open(tweetPost);
}
const getNewQuotes = () => {
    let rnum=Math.floor(Math.random()*1000);
    quotesData=realData[rnum];
    quotes.innerText=`${quotesData.text}`;
    quotesData.author==null 
    ?(author.innerText=="unKnown")
    :(  author.innerText=`${quotesData.author}`);
  
};


const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    // console.log(realData[i].text);
    getNewQuotes();
    //   console.log(realData[10].text);
    //   console.log(realData[10].author);
  } catch (error) {}
};

tweetMe.addEventListener("click",tweetNow);
btn.addEventListener("click",getNewQuotes);
getQuotes();