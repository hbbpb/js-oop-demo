/**
 * Created by pbli on 10/13/16.
 */
// Available in ES2015
var fns = [];
for (let i = 0; i < 5; i += 1) {
    fns.push(function () {
        console.log(i);
    })
}
fns.forEach(fn => fn());
