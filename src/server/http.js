/**
 * @file axios
 */

import Vue from 'vue';
import axios from 'axios';
import {Message} from 'element-ui';

const global = {
    BASE_URL: 'http://localhost:3008/'
};

Vue.prototype.GLOBAL = global;
axios.defaults.baseURL = global.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.response.use(function (response) {
    if (response.data.status === '301233') {
        Message.warning({
            message: '未登陆,请登陆!'
        });
        return false;
    }

    return response;
}, function (error) {
    return Promise.reject(error);
});

export { axios };
