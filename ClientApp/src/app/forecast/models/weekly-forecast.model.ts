interface WeeklyForecast {
    cod: string;
    message: number;
    city: City;
    cnt: number;
    list: List[];
  }
  
  interface List {
    dt: number;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
    snow?: number;
  }
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }
  
  interface City {
    geoname_id: number;
    name: string;
    lat: number;
    lon: number;
    country: string;
    iso2: string;
    type: string;
    population: number;
  }