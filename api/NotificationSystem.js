const path = require('path');

module.exports = {
    sendNotification: (title, body) => {
        callNotif(title, body);
    }
}

const callNotif = (title, body) => { 
    console.log(`Title: ${title} \n Body: ${body}`);
    const options = {
        title: title,
        body: body,
        silent: false,
        icon: path.join(__dirname, '../resources/icon.png'),
        hasReply: true
    };

    const notif = new window.Notification(options.title, options);
};