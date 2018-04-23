/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import api from './api'
import store from './store'
import router from './router'
import * as types from './store/types'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = api;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;
