/* @flow */

export default function jsonp(callback: string) {
    return function (response: any) {
        return response.text().then(body =>
            new Promise(resolve => {
                // $FlowFixMe
                (new Function(callback, body))(resolve);
            }),
        );
    }
}
