window.handleCreateMealRequest = async() => {
  fetch("/api/meals")
    .then(res=>res.json())
    .then(meals=>console.log(meals));
  
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
          <h2>Create your Meal</h2>
          <div class="product-content">
            <div class="image-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/363px-Vegetarian_Curry.jpeg" alt="create meal" />
              <!--<button class="btn link-button" href="meals" data-navigo>Available Reservations</button>-->
  
            </div>
            <div class="content-wrapper">
              <!--<h4>Meal Name</h4>
              <p>Description</p>-->
              <div class="web-form">
              <form action="../../api/meals" method="post">
                <div class="form-group">
                  <label>title</label>
                  <input class="form-control" type="text" name="title" placeholder="Enter meal name" />
                </div>
                <div class="form-group">
                  <label>description</label>
                  <input class="form-control" type="Text" name="description" placeholder="Enter meal description" />
                </div>
                <div class="form-group">
                  <label>location</label>
                  <input class="form-control" type="text" name="location" placeholder="Enter place Name" />
                </div>
                <div class="form-group">
                  <label>price</label>
                  <input class="form-control" type="number" name="price" min="1" max="100" placeholder="Choose price from list" />
                </div>
                <div class="form-group">
                  <label>max_reservations</label>
                  <input class="form-control" type="number" name="max_reservations" min="1" max="100" placeholder="Choose a number from list" />
                </div>
                <div class="form-group">
                  <label>when</label>
                  <input class="form-control" type="text" name="when" placeholder="yyyy/mm/dd"/>
                </div>
                <div class="form-group">
                  <label>created_date</label>
                  <input class="form-control" type="text" name="created_date" placeholder="yyyy-mm-dd"/>
                  
                </div>
                  <div class="form-group">
                  <input type="submit" class="btn btn-primary" value="Add Meal">
                </div>
                </form>
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
  
    
  
  