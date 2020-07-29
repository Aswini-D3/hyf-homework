

window.handleHomeRequest = () => {
  
  document.body.innerHTML = 
  
  `<div class="page-section">
  
    <header>
      <div class="container">
        <div class="header-group">
          <div class="logo">
            <a><span>Indo</span> Meal</span></a>
          </div>
          <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
              aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              &#9776;
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
              <ul>
                <li>
                  <a class="active" href="/" data-navigo >Home</a>
                </li>
                <li>
                  <a href="meals" data-navigo>Meals</a>
                </li>
                <li>
                  <a href="reservations" data-navigo>Reservations</a>
                </li>
                <li>
                  <a href="reviews" data-navigo>Reviews</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="page-banner">
    <div class="background" style="background-image: url(images/home-banner3.jpg);"></div>
    <div class="container">
      <div class="banner-content">
        <h1>Flavors of Indian Food</h1>
        <p>Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.</p>
        <div class="botton-actions">
          <button class="btn btn-primary" href="/meals" data-navigo>View our Meals</button>
        </div>
      </div>
    </div>
  </div>
  <div class="page-content">
      <div class="container">

        <!-- our services -->
        <div class="our-services">
          <h2>How it works</h2>
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="feature-item-wrap text-center">
                <figure>
                  <img src="images/meal.svg" alt="Choose Your Favorite">
                </figure>
                <h5><a href="#">Choose Your Favorite</a></h5>
                <p>The secret of success in life is to eat what you like and let the food fight it out inside.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="feature-item-wrap text-center">
                <figure>
                  <img src="images/delivery.svg" alt="We Deliver Your Meals">
                </figure>
                <h5><a href="#">We Deliver Your Meals</a></h5>
                <p>You are what you eat so don’t be fast, cheap, easy, or fake.</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="feature-item-wrap text-center">
                <figure>
                  <img src="images/eat-enjoy.svg" alt="Eat and Enjoy">
                </figure>
                <h5><a href="#">Eat and Enjoy</a></h5>
                <p>To eat is a necessity, but to eat intelligently is an art.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Our meals -->
       <!-- <section class="featured-meals">
          <h2>Our Featured Meal</h2>
          <ul class="products">
          
          </ul>
          <div class="bottom-actions">
            <a class="btn btn-primary" href="meals" data-navigo>View All Meals</a>
          </div>
        </section>
      </div>
    </div>-->

    <!-- page footer -->
    <footer>
      <div class="container">
        <p>&copy; 2020 Indo Meal@Aswini Gundreddy.</p>
      </div>
    </footer>

  </div>`
  

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
