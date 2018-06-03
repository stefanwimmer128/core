/* @flow */

export default function jsonp(callback: string) {
    return function (res) {
        return new Promise(resolve => 
            res.text()
                .then(body =>
                    (new Function(callback, body))(resolve),
                ),
        );
    }
}
