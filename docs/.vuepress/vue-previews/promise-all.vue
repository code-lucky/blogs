const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.all([promise1, promise2]).then((results) => {
    console.log(results); // 输出 [1, 2]
});
