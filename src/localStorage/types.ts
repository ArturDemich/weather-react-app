export type Weather = {
  id: number,
    main: {
      temp: number,
      feels_like: number,
      temp_max: number,
      temp_min: number,
      humidity: number,
    },
    name: string,
    timezone: number,  
    weather: [{
      description: string,
      main: string,
    }]
  }

  export type HourlyWeather = {
    hourly: [
      {
        dt: number,
        temp: number,
      }
    ]
  }