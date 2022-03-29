import { call, takeEvery, takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../actions';
import actionsReducers from '../reducers/actions';

// function data( pars ) {
//     const options = {
//         method: 'GET',
//         url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//         params: { q: 'London,uk' },
//         headers: {
//           'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
//           'X-RapidAPI-Key': '573bc962acmsheafdfc22464aa1fp18bff7jsna3160e411265'
//         }
//       };
      
//       axios.request(options).then(function (response) {
//         console.log(response.data);
//         // return response.data;
//       }).catch(function (error) {
//         console.log(error)
//         return error;
//       });
// }

const data = async (pattern, param) => {
  try{
    const request = await axios.get(`https://community-open-weather-map.p.rapidapi.com/${pattern}`, {
      params: {...param},
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '573bc962acmsheafdfc22464aa1fp18bff7jsna3160e411265'
      }
    })
    const result = await request.data;
    
    return result;
  } catch (e) {
    return e;
  }
  
}

export function* getCurrentDailyWeather() {
    const weatherInfo = yield call(data, 'weather', { q: 'London,uk' });
    console.log("saga was conneted")
    console.log('weather info', weatherInfo);
}

export function* getForecastDailyWeather() {
    try {
        const weatherInfo = yield call(data, 'forecast/daily', { q: 'London,uk', units: "metric" });
        yield put({type: actionsReducers.LOAD_DAILY_FORECAST, payload: weatherInfo.list });
    } catch (e) {
        console.log(e);
    }
    
}

export function* watcherSaga() {
    yield takeLatest(actions.DAILY_FORECAST.REQUEST, getForecastDailyWeather);
    yield takeLatest("LOAD_DATA", getCurrentDailyWeather);
}

export default function* rootSaga() {
    yield watcherSaga();
}

// q: 'London,uk',
// lat: '0',
// lon: '0',
// callback: 'test',
// id: '2172797',
// lang: 'null',
// units: 'imperial',
// mode: 'xml'