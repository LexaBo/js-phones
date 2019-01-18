import phones from '../../../phones/phones.js';

const PhoneService = {
    getPhones() {
        return phones;
    },

    getPhone(id) {
        return 'phone ' + id
    }
};

export default PhoneService;
