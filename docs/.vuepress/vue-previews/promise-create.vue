const myPromise = new Promise((resolve, reject) => {
    // 异步操作
    if (/* 操作成功 */) {
        resolve('Success');
    } else {
        reject('Error');
    }
});
  