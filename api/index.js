console.log("This is my index js file"); 
//6c926abe348743debd393db7020b6f2a
//Initialize the news api parameters
source = 'the-times-of-india';
let apiKey='6c926abe348743debd393db7020b6f2a';
//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
//What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            //console.log(element,index);
            let news=`<div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse${index}"
              aria-expanded="false"
              aria-controls="collapse${index}"
            >
            <b><i>Breaking News ${index+1}</i></b> ${element["title"]}
            </button>
          </h2>
          <div
            id="collapse${index}"
            class="accordion-collapse collapse"
            aria-labelledby="heading${index}"
            data-bs-parent="#newsAccordion"
          >
            <div class="accordion-body">${element["content"]}.<a href="${element[`url`]}" target="_blank">Read more here </a></div>
          </div>
        </div>` 
            newsHtml += news;    
        });
        newsAccordion.innerHTML=newsHtml;
    }
    else {
        console.log("Some erroe occupied");
    }
}
xhr.send();

