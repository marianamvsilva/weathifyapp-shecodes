/*return (
    <div className="weather-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-md-4">
            <img
              src="https://lh3.googleusercontent.com/wwZVWEfk0Tr26J2G7P_z9BWKIt7K3Z5WxQA2vPdq3JdmDajdyA7OjILtxuCeWjnXfIDlDDpugpml1EhjdYt5uB4sAYtJniw9DAlO3kP0RvNsR7KKXZJuA_TMvYKwY2zbz483Q7eICjcytzTFLjLtTc1TE7_uWS_aXo6WdxDWsbabYNK9pDyQo1Ly582oUf5veQnWgggsiklXp4FmufxP2kvUhmFakkh9vzfhdD2UVY-AZ5Ex-anXV2eHQOb6iBlzd6tT5ryi8Vd0u26W37eHAC_ajAi1oCFFEkdjjhMCePg7QtSW50TcsELdbdVGQ23ucNDd5Lh0dfbnsOGVAQDk81A_nntFWV9_V3xMDoZp4mCbSXw8z1UAQI0b9sqgPlnWg3kTILdYhCtJOPhEBOD6khUo7LYxiDwT6Zh6Bx0RaweWCadNIQrwdXGirPdKYhAl6QRKMU4NexBkuzNKZgycYr_Wh9M9GcXi8HdBiPiztNaXjnb8ljpQ8dCOfwKTIEmh8klNhPO27xIfCvxIGVpTMn98jF568j8SWApSbNZyzV1Xg98Ps1jpuzvVesF_ZeoACNA-uQ4OQ7HsWYxPBgOluyLi-491wcxbPMYdpHqsjl1ShrJr0UOtJLTqH1h8le3e6YmW43th1-a0rOIHE8ojlZanAHEXCh0=w222-h438-no"
              class="img-fluid"
              alt="iphone with illustration of weather in the place"
            />
          </div>
          <div className="col col-md-8">
            <div className="row">
              <div className="col-md-4">
                <span>City</span>
                <div className="temperature">25ºC</div>
                <p id="timestamp" className="weatheritems">
                  Saturday, 13:05
                </p>
                <p className="weatheritems">
                  Humidity: <span id="weather-humidity">10</span>%
                </p>
                <p className="weatheritems">
                  Wind Speed: <span id="weather-windspeed">27</span>km/h
                </p>
              </div>
              <div class="col-md-8">
                <Slogan />
                <p id="weather-description">Who knows.</p>
              </div>
              <Forecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/


  if (submitted) {
    return (
      <div className="Search">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="city"
            placeholder="I feel like going to..."
            autofocus="on"
            size="30"
            onChange={updateCity}
          />
          <div className="btn">
            <button>Take me there!</button>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>{city}</h1>
            <h2>{Math.round(temperature)}°C</h2>
            <p id="timestamp" className="weatheritems">
              Saturday, 13:05
            </p>
            <ul className="weather-details">
              <li>
                <strong>Humidity:</strong> {Math.round(humidity)}%
              </li>
              <li>
                <strong>Wind:</strong> {wind}km/h
              </li>
            </ul>
          </div>
          <div className="col-6">
            <Slogan />
            <img src={icon} alt={description} /> {description}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="city"
            placeholder="I feel like going to..."
            autofocus="on"
            size="30"
            onChange={updateCity}
          />
          <div className="btn">
            <button>Take me there!</button>
          </div>
        </form>
      </div>
    );
  }
}