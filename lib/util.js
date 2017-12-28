
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