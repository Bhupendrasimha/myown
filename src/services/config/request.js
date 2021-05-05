/* eslint-disable no-undef */
import Config from './apiUrl';
import {toast} from 'react-toastify'
import { storage } from '../../services/config/storage';
const token=storage.fetch.authToken()
//console.log(token.auth_token)
//const tok="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzNmE2OTMtODAyYS00NmRmLTk5N2UtOTdmN2M5ZWU1YWVhIiwidXNlcm5hbWUiOiI2MzM2YTY5MzgwMmE0NmRmOTk3ZTk3ZjdjOWVlNWFlYSIsImV4cCI6MTYyMjU1MjczNSwiZW1haWwiOiJzaWRkaGFudEBncmFwcHVzLmNvbSIsImRldmljZV9pZCI6bnVsbCwiZGV2aWNlX3R5cGUiOiJ3ZWIiLCJkZXZpY2VfdG9rZW4iOiIifQ.uwRBGKjBxIUt_7scX6O-AKOrRuZErnBtnwi_7el5Evs"

const _AuthHeaders =() => {
  //const currentSession = await Auth.currentSession();
  //const token = currentSession.getIdToken().getJwtToken();
  return {
   // 'Authorization': `JWT ${token.auth_token}`,
     'Content-Type': 'application/json',
  };
};

const connectionHandler = () => {
  return navigator.onLine ? true : false;
};

const errHandler = (res) => {
  if (res.status === 401) {
    // call for refresh token
    // refreshAuthToken();
    // > logout
  } else if (res.status === 400) {
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      res.json().then((res) => {
        if (
          res.error &&
          res.message &&
          (typeof res.message === 'string' || res.message instanceof String)
        ) {
          toast.error(`Opps! Error.. ${res.message}`);
        } else {
          toast.error(`Opps! Error`);
        }
      });
    } else {
      res.text().then((res) => {
        toast('error', `Opps! Error. ${res.error ? res.message : ''}`);
      });
    }
  }
};

export const get = async (url, headers) => {
  if (!!headers) {
    const data = await _AuthHeaders();
    headers = data;
  }
  if (connectionHandler()) {
    return new Promise(async (resolve, reject) => {
      // await checkExpiry();
      fetch(url, { headers })
        .then((res) => {
          if (res.status !== 200) {
            throw res;
          }
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return res.json();
          } else {
            return res.text();
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errHandler(err);
          reject(err);
        });
    });
  }
};

export const post = async (url, data = {}, headers) => {
  if (!!headers) {
    const data = await _AuthHeaders();
    headers = data;
  }
  if (connectionHandler()) {
    return new Promise(async (resolve, reject) => {
      // await checkExpiry();
      fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw res;
          }
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return res?.json();
          } else {
            return res?.text();
          }
        })
        .then((res) => {
          if (res.error) {
            reject(
              res?.errorData
                ? res.errorData.message
                : res.message
                  ? res.message
                  : res.error
            );
          } else {
            resolve(res.result ? res.result : res);
          }
        })
        .catch((err) => {
          errHandler(err);
          reject(err);
        });
    });
  }
};

export const put = async (url, data = {}, headers) => {
  if (!!headers) {
    const data = await _AuthHeaders();
    headers = data;
  }
  if (connectionHandler()) {
    return new Promise(async (resolve, reject) => {
      // await checkExpiry();
      fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw res;
          }
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return res.json();
          } else {
            return res.text();
          }
        })
        .then((res) => {
          if (res.error) {
            reject(res.message ? res.message : res.error);
          } else {
            resolve(res);
          }
        })
        .catch((err) => {
          window.err = err;
          reject(err);
        });
    });
  }
};

export const externalPut = async (url, data = {}, headers) => {
  if (!!headers) {
    const data = await _AuthHeaders();
    headers = data;
  }
  if (connectionHandler()) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers,
        body: data,
      })
        .then((res) => {
          if (res.error) {
            reject(res.error);
          } else {
            resolve(res);
          }
        })
        .catch((err) => {
          window.err = err;
          reject(err);
        });
    });
  }
};

export const patch = async (url, data = {}, headers) => {
  if (!!headers) {
    const data = await _AuthHeaders();
    headers = data;
  }
  if (connectionHandler()) {
    return new Promise(async (resolve, reject) => {
      // await checkExpiry();
      fetch(url, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw res;
          }
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            return res.json();
          } else {
            return res.text();
          }
        })
        .then((res) => {
          if (res.error) {
            reject(res.error);
          } else {
            resolve(res.result);
          }
        })
        .catch((err) => {
          window.err = err;
          reject(err);
        });
    });
  }
};

export const deleteCall = async (url, headers) => {
  if (!!headers) {
    const data = await _AuthHeaders();
    headers = data;
  }
  if (connectionHandler()) {
    return new Promise(async (resolve, reject) => {
      // await checkExpiry();
      fetch(url, {
        method: 'DELETE',
        headers,
      })
        .then((res) => {
          // (res)
          // res && res.json()) || {}
          return res;
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }
};

export const Api = {
  get: (url, headers = _AuthHeaders(), noBaseUrl) =>
    get(`${noBaseUrl ? url : Config.API_URL + url}`, headers),

  post: (url, data, headers = _AuthHeaders()) =>
    post(`${Config.API_URL}${url}`, data, headers),

  put: (url, data, headers = _AuthHeaders()) =>
    put(`${Config.API_URL}${url}`, data, headers),

  patch: (url, data, headers = _AuthHeaders()) =>
    patch(`${Config.API_URL}${url}`, data, headers),

  deleteCall: (url, headers = _AuthHeaders()) =>
    deleteCall(`${Config.API_URL}${url}`, headers),

  externalPutCall: (url, data, headers = _AuthHeaders()) =>
    externalPut(url, data, headers),

  url: () => Config.API_URL,
};
