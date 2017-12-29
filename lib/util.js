
import bzUtil from './bz-util';

export const error = (done) => (err) => {
    const errorMessage = bzUtil.error('GLB.EXCEPTION', [{
        error: err.message,
        status: 500,
        success: false
    }, 500, err.message]);

    done(bzUtil.getResponse(null, {
        error: err.message,
        status: 500,
        success: false
    }, 500, errorMessage));
}

export const connect = (MongoClient, { url = 'mongodb://localhost:27017' }) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            if (err) {
                reject(err);
                return
            }
            resolve(client);
        });
    })
}