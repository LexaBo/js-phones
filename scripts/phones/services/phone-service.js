import phones from '../../../phones/phones.js';

const PhoneService = {
    getPhones(option) {
        if(option === 'name'){
           const arr = phones.slice();
           arr.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }

                return 0;
            });
           return arr;
        }
        if(option === 'age'){
            return phones;
        }
       return phones.filter(a => a.id.indexOf(option) + 1);
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
