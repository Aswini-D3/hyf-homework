//Here I tried for drop down list to put with backend data
/*function bookReservation(meals){
  return meals.map((meal)=>{
    return`<div class="form-group">
    <label>Choose a Meal</label>
    <select id="meals" name="meals">
    <option value="meal">${meal.title}</option>
    </select>
     </div>`

    
   });
  }*/
  
  window.handleReservationFormRequest = async() => {
    /*const mealsResponse = await fetch("/api/meals");
    const getMeals = await mealsResponse.json();*/
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
            <h2>Make Reservation</h2>
            <div class="product-content">
              <div class="image-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bookatable_Logo.png/300px-Bookatable_Logo.png" alt="Book Table" />
                <a href="reservations"><button class="btn link-button" data-navigo>Reservations</button></a>
    
              </div>
              <div class="content-wrapper">
                <!--<h4>Meal Name</h4>
                <p>Description</p>-->
                <div class="web-form">
  
                 <form action="../../api/reservations" method="post">
                <div class="form-group">
              <label>Choose a Meal</label>
              <select id="meals" name="meals">
              <option value="Indian Breakfast">Indian Breakfast</option>
              <option value="Indian Lunch-2">Indian Lunch</option>
              <option value="Indian Dinner-3">Indian Dinner</option>
              <option value="Indian Dessert-4">Indian Dessert</option>
              <option value="Indian Snack-5">Indian Snack</option>
              <option value="Indian Drinks-6">Indian Drinks</option>
  
               </select>
               </div>
               <div class="form-group">
                    <label>meal_id</label>
                    <input class="form-control" type="number" name="meal_id" min="1" max="20" placeholder="Choose a number from list" />
                  </div>
                 
                  
                  <div class="form-group">
                  
                  <label>name</label>
                    <input class="form-control" type="text" name="name"  placeholder="Enter Your Name" />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="email" name="Email" placeholder="example@gmail.com" />
                  </div>
                  <div class="form-group">
                    <label>Phone</label>
                    <input class="form-control" type="tel" name="Phone" placeholder="0045-12345678" />
                  </div>
                  <div class="form-group">
                    <label>number_of_guests</label>
                    <input class="form-control" type="number" name="number_of_guests" min="1" max="20" placeholder="Choose a number from list" />
                  </div>
                  <div class="form-group">
                    <label>created_date</label>
                    <input class="form-control" type="text" name="created_date" placeholder="yyyy-mm-dd"/>
                    
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary">Submit</button>
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
    
      
    