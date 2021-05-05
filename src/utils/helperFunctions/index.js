import React from 'react';
import { useLocation } from 'react-router-dom';
import { Array } from '../../../src/__mocks__/matchMedia';
import { Api } from '../../services/config/request';
import { productConstants } from '../data/productContants';
import moment from 'moment';

export const get = (object, pathString, defaultValue) => {
  // Coerce pathString to a string (even it turns into "[object Object]").
  var parts = (pathString + '').split('.');
  var length = parts.length;
  var i = 0;

  // In case object isn't a real object, set it to undefined.
  var value = object === Object(object) ? object : undefined;

  while (value != null && i < length) {
    value = value[parts[i++]];
  }
  return i && i === length && value !== undefined && value !== null
    ? value
    : defaultValue;
};

export const deepClone = (src, refs = new WeakMap()) => {
  if (typeof src !== 'object' || src === null) {
    return src;
  }
  if (refs.has(src)) {
    return refs.get(src);
  }
  var result;
  if (Array.isArray(src)) {
    result = [];
    refs.set(src, result);
    src.forEach(function (d) {
      result.push(deepClone(d, refs));
    });
  } else if (src instanceof Date) {
    result = new Date(src.getTime());
    refs.set(src, result);
  } else if (src instanceof Node) {
    result = src.cloneNode(true);
    refs.set(src, result);
  } else if (
    src instanceof String ||
    src instanceof Boolean ||
    src instanceof Number
  ) {
    let Ctor = Object.getPrototypeOf(src).constructor;
    result = new Ctor(src);
    refs.set(src, result);
  } else {
    let Ctor = Object.getPrototypeOf(src).constructor;
    result = new Ctor();
    refs.set(src, result);
    Object.setPrototypeOf(result, Object.getPrototypeOf(src));
    var props = Object.getOwnPropertyNames(src);
    for (var i = 0, dtor, len = props.length; i < len; i++) {
      dtor = Object.getOwnPropertyDescriptor(src, props[i]);
      if ('value' in dtor) {
        dtor.value = deepClone(dtor.value, refs);
      }
      Object.defineProperty(result, props[i], dtor);
    }
  }
  return result;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const findStatus = (res, status) => {
  let found = res.find((item) => item.status === status);
  if (found) {
    return found.status;
  } else {
    return res[0].status;
  }
};

export const pluralize = (noun, suffix = 's') => {
  if (noun.includes('y')) {
    return `${noun.substr(0, noun.length - 1)}ies`;
  }
  return `${noun}${suffix}`;
};

const _headers = () => {
  return {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
    'x-rapidapi-key': '552cc4caa4msh2dab4ec0418077fp135beajsn6cead06a89aa',
    useQueryString: true,
  };
};

export const getAllCounties = () => {
  return Api.get(
    'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all',
    _headers(),
    'noBaseUrl'
  );
};

export const isFieldPresent = (field) => {
  let flag = 0;
  if (typeof field === 'object' && field !== null) {
    Object.keys(field).map((item, index) => {
      if (field[item]) {
        flag = 1;
      }
    });
  } else if (field === []) {
    return false;
  } else if (Array.isArray(field)) {
    field.map((key, idx) => {
      if (isFieldPresent(key)) {
        flag = 1;
      }
    });
  } else {
    if (field === undefined) flag = 0;
    else flag = 1;
  }
  if (flag) return true;
  return false;
};

export const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Method will return first character of Given String for English Language otherwise it will search for Name field for first index in descriptions Array(non-english object)
export const getInitial = (desc) => {
  if (!Array.isArray(desc)) {
    return desc.name ? desc.name.charAt(0).toUpperCase() : '';
  }
  const resultantObj = desc.find((ele) => ele.language === 'English');
  if (resultantObj) {
    return (
      resultantObj.name &&
      resultantObj.name.charAt(0) &&
      resultantObj.name.charAt(0).toUpperCase()
    );
  }
  // return 'N/A';
  return desc && desc[0].name && desc[0].name.charAt(0)
    ? desc[0].name.charAt(0).toUpperCase()
    : '';
};

export const processForecastList = (data) => {
  const active = [],
    inactive = [],
    forecastList = {},
    activeProductType = [];
  data.forEach((list) => {
    if (list[0] && productConstants.indexOf(list[0].productType) > -1) {
      active.push(list);
      activeProductType.push(list[0].productType);
    } else {
    }
  });

  const inactiveProductTypes = productConstants.filter(function (val) {
    return activeProductType.indexOf(val) === -1;
  });

  inactiveProductTypes.forEach((productType) => {
    inactive.push([
      {
        id: '',
        productType: capitalizeFirstLetter(productType),
        forecastUnit: null,
        year1: 0,
        year2: 0,
        year3: 0,
        totalNumberOfOverrides: 0,
        status: 'unset',
      },
    ]);
  });

  forecastList.active = active;
  forecastList.inactive = inactive;
  return { activeProductType, forecastList };
};

export const isReadOnlyMode = (status) => {
  return [
    'need-deactivation-approval',
    'need-publish-approval',
    'published',
    'deactivated',
    'deactivation-rejected',
  ].includes(status);
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const getDateFromMoment = (date) => {
  const m = moment('2020/06/01');
  if (date.value !== undefined) {
    if (date.value) {
      console.log('date.value', date.value);
      return moment(date.value).format('YYYY-MM-DD');
    }
  } else if (date) {
    return moment(date).format('YYYY-MM-DD');
  }
  return '';
};

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getVerifiedCheck = (
  <img className="ml-10" src="/img/green-check-mark.svg" alt="" />
);

export const mergeOptions = (
  options,
  alreadyPresentOptions,
  optionValueKey
) => {
  const optionCodes = options.map((apo) => apo[optionValueKey]);
  const newOptionsToKeep = alreadyPresentOptions.filter(
    (op) => !optionCodes.includes(op[optionValueKey])
  );
  return [...options, ...newOptionsToKeep];
};
