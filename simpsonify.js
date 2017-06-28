var Users = require('./users');

const getRandomUsers = (count) => {
    const shuffled = Users;
    let i = shuffled.length;
    const min = i - count;
    let temp;
    let index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

const addCustomProps = (user, customProps) => {
    customProps.map(prop => {
        const value = prop.values[Math.floor(Math.random()*prop.values.length)];
        user[prop.name] = value;
    });
    return user;
}

module.exports = {
    getUsers: (count, customProps) => {
        const users = getRandomUsers(count);
        if (customProps) {
            users.map(user => addCustomProps(user, customProps));
        }
        return users;
    }
};
