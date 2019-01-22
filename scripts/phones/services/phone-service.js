import phones from '../../../phones/phones.js';

const PhoneService = {
    getPhones() {
        return phones;
    },

    getPhone(id) {
        return new Promise((resolve, reject) => {
            let method = 'GET';
            let xhr = new XMLHttpRequest();

            xhr.open(method, `http://localhost:3000/phones/${id}.json`, true);

            xhr.send();

            xhr.onload = () => {
                if (xhr.status !== 200) {
                    reject(xhr.status + ': ' + xhr.statusText);
                } else {
                    let phone = JSON.parse(xhr.responseText);
                    resolve(phone);

                }
            }
        })
    }
};

export default PhoneService;
