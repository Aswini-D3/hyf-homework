window.handleReviewFormRequest = async() => {
  document.body.innerHTML = `
  <div class="page-section">
  <!-- page header -->
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
                <a href="/" data-navigo>Home</a>
              </li>
              <li>
                <a  href="meals"  data-navigo>Meals</a>
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

  <!-- page banner -->
  <div class="page-banner">
    <div class="background" style="background-image: url(images/home-banner3.jpg);"></div>
    <div class="container">
      <div class="banner-content">
        <h1>Flavors of Indian Food</h1>
        <p>Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.</p>
      </div>
    </div>
  </div>    

  <!-- page contetnt -->
  <div class="page-content">
    <div class="container">
      <!-- Our Reservation -->
      <section class="product-details">
        <h2>Write a Review</h2>
        <div class="product-content">
          <div class="image-wrapper">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Review_%28TV_series%29.png/375px-Review_%28TV_series%29.png" alt="Write Review" />
            <a href="reviews"><button class="btn link-button" data-navigo>Reviews</button></a>

          </div>
          <div class="content-wrapper">
            <!--<h4>Meal Name</h4>
            <p>Description</p>-->
            <div class="web-form">
            <div class="form-group">
            <label>Choose a Meal</label>
            <select id="meals" name="meals">
            <option value="Indian Breakfast">Indian Breakfast</option>
            <option value="Indian Lunch">Indian Lunch</option>
            <option value="Indian Dinner">Indian Dinner</option>
            <option value="Indian Dessert">Indian Dessert</option>
            <option value="Indian Snack">Indian Snack</option>
            <option value="Indian Drinks">Indian Drinks</option>

             </select>
             </div>

            
              <div class="form-group">
                <label>Name</label>
                <input class="form-control" type="text" placeholder="Enter name" />
              </div>
             
              
              <div class="form-group">
              
              
                <!--<label>Id</label>
                <input class="form-control" type="number"/>-->
              </div>
              <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="email" placeholder="example@gmail.com" />
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input class="form-control" type="tel" placeholder="0045-12345678" />
              </div>
              <div class="form-group">
                  <label>Stars</label>
                  <input class="form-control" type="number" min="1" max="5" placeholder="Choose star from list" />
                </div>
              <div class="form-group">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- page footer -->
  <footer>
    <div class="container">
      <p>&copy; 2020 Indo Meal@Aswini Gundreddy.</p>
    </div>
  </footer>

</div>`
}

  

