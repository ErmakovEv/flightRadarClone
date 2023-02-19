const airportsMap = new Map();
airportsMap.set('ULLI', {
  coord: [59.799934, 30.273386],
  nameCity: 'St.Petersburg',
  nameAirport: 'Pulkovo',
});
airportsMap.set('UUEE', {
  coord: [55.981456, 37.413735],
  nameCity: 'Moscow',
  nameAirport: 'Sheremetyevo',
});

import clearDay from '../img/weather/clear-day.svg';
import clearNight from '../img/weather/clear-night.svg';
import cloudy from '../img/weather/cloudy.svg';
import fog from '../img/weather/fog.svg';
import hail from '../img/weather/hail.svg';
import pcd from '../img/weather/partly-cloudy-day.svg';
import pcn from '../img/weather/partly-cloudy-night.svg';
import rssd from '../img/weather/rain-snow-showers-day.svg';
import rssn from '../img/weather/rain-snow-showers-night.svg';
import rs from '../img/weather/rain-snow.svg';
import rain from '../img/weather/rain.svg';
import sd from '../img/weather/showers-day.svg';
import sn from '../img/weather/showers-night.svg';
import sleet from '../img/weather/sleet.svg';
import ssd from '../img/weather/snow-showers-day.svg';
import ssn from '../img/weather/snow-showers-night.svg';
import snow from '../img/weather/snow.svg';
import thunderRain from '../img/weather/thunder-rain.svg';
import thunderShowersDay from '../img/weather/thunder-showers-day.svg';
import thunderShowersNight from '../img/weather/thunder-showers-night.svg';
import thunder from '../img/weather/thunder.svg';
import wind from '../img/weather/wind.svg';

export const iconsWeatherMap: Record<string, '*.svg'> = {
  'clear-day': clearDay,
  'clear-night': clearNight,
  cloudy: cloudy,
  fog: fog,
  hail: hail,
  'partly-cloudy-day': pcd,
  'partly-cloudy-night': pcn,
  'rain-snow-showers-day': rssd,
  'rain-snow-showers-night': rssn,
  'rain-snow': rs,
  rain: rain,
  snow: snow,
  'showers-day': sd,
  'showers-night': sn,
  sleet: sleet,
  'snow-showers-day': ssd,
  'snow-showers-night': ssn,
  'thunder-rain': thunderRain,
  'thunder-showers-day': thunderShowersDay,
  'thunder-showers-night': thunderShowersNight,
  thunder: thunder,
  wind: wind,
};

export default airportsMap;
