import bzUtil from './bz-util';
import axios from "axios";

export default function getMessages(deps, globals, actionName, data, authenticationType, logger, done) {
    const url = "https://www.yammer.com/api/v1/messages.json";
    const headers = {
        Accept: "*/*",
        Authorization: "Bearer "+globals.authdata.token,
        "accept-encoding": "gzip, deflate"
    }
    axios.get(url, {
        headers
    }).then(({ data }) => {
        done(bzUtil.getResponse(data, null, 200, null));
    })
    .catch((err) => {
        const errorMessage = bzUtil.error('GLB.EXCEPTION', [ {
            error: 'descripcion o mensaje',
            status: 500,
            success: false
        }, 500, 'Donde fallo esta cosa' ]);

        done(bzUtil.getResponse(null, {
            error: 'descripcion o mensaje',
            status: 500,
            success: false
        }, 500, errorMessage));
    });
};


//