Cover Note
==========

Approach
---------
For this task I decided to take a modular approach to the problem, separating the tasks into multiple components, and placing them on different pages to separate their function.

I first replicated the design features from the supplied image. Then I implemented a routing system to load article content onto the page. I did this so that I could easily change the content of the page later, which I ended up doing for the comments page.

Once I built the article page, I needed a way to display a comment field for each article. Though the task states the field should be at the bottom, I took it upon myself to create an extra page for each article that could display the comments for each article, as well as the associated comment field.

Technology
----------
For this application, I used the `React.js` framework as instructed, as well as the `materialize-css` framework for design, and the `react-router` module for page routing with URL parameters.

Page Interaction
----------------
The application starts on the news page, loading the instructed top 9 articles from the hackernews API. It renders them as cards in their own elements, and displays them in a grid using the materialize grid helper.

Each card handles its own data modularly, being passed only the `articleId`, and for this example case, an image URL to use as a placeholder. Upon mounting, the ArticleCard element loads its content from the API, and updates the state of the element with the contents, which in turn triggers a new render event, displaying the article title and other information.

Each article card on the home page has a small 3 dot icon, which when clicked, opens the article page. The article page displays nested comments for each article, an addition I made to the requirement, as I wanted to see how React handles recursion.

Each comment on the comment page features a reply button, which when clicked, opens a small form where the user can type a comment. When the user presses enter, they are given a small green message to confirm that the comment was sent successfully. Per the requirements, a serialized version of the form is also printed to the browser console.

To the client
-------------
Dear <Client name>,

Find attached a URL to a GitHub repository containing the requested work. The page takes the top 9 posts from the HackerNews API, and displays them in a Material Design compliant grid. The article comments can also be displayed surplus to the requirements, by clicking the three dot icon next to each article title. There you will find a nested array of comments, along with the ability to submit a comment to each, with each comment submitting the data to the browser console as requested.

Install instructions are provided in the readme of the repository. For all intents and purposes, the project is a compliant React application, and can therefore be installed, built, and run as per the React documentation.

If you have any questions about the work, need help or further instruction; please don't hesitate to respond.

Tyler