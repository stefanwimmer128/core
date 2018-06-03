/* @flow */

export default function jsonp(callback: string) {
    return function (res: any) {
        return new Promise(resolve => 
            res.text()
                .then(body =>
                    (new Function(callback, body) : (resolve: any) => any)(resolve),
                ),
        );
    }
}
