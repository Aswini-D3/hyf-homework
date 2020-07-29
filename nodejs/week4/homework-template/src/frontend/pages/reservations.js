
function showAllReservations(reservations){
  
  return reservations.map((reservation) => {
    return`

    <li><img src="/images/${reservation.title}.jpg" alt="review title">
    <h5>${reservation.title}</h5>
    <p>${reservation.description}<br> Price:${reservation.price} <br>Number of Guests:${reservation.Total}</p>
    <a class="btn link-button" href="/meal/${reservation.id}" data-navigo>Book Seat</a>
    </li>`
   });
  }
window.handleReservationsRequest = async () => {
  //we are fetching the data from backend here
  const reservationsResponse = await fetch("/api/reservations");
  const getReservations = await reservationsResponse.json();
  
  document.body.innerHTML = `<body>
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
                  <a href="meals" data-navigo>Meals</a>
                </li>
                <li>
                  <a class="active" href="reservations" data-navigo>Reservations</a>
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

    <!-- page banner-->
    <div class="page-banner">
    <div class="background" style="background-image: url(images/home-banner3.jpg);"></div>
    <div class="container">
      <div class="banner-content">
        <h1>Flavors of Indian Food</h1>
        <p>Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.</p>
        <div class="botton-actions">
          <a href="reservationForm"><button class="btn btn-primary" data-navigo>Reserve here</button></a>
        </div>
      </div>
    </div>
  </div>

    <!-- page contetnt -->
    <div class="page-content">
      <div class="container">
        <!-- Our meals -->
        <section class="featured-meals">
          <h2>Available Reservations</h2>
          <ul class="products">
          ${showAllReservations(getReservations)}
          </ul>
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
};