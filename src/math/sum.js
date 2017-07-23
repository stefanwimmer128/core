/* @flow */

import reduce from "../array/reduce";

export default function sum(...numbers : number[]) : number
{
    return reduce((r, t) => r + t, 0)(numbers);
}
