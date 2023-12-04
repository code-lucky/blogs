Promise.resolve('Success').then((result) => {
    return result + ' - Step 1';
}).then((result) => {
    console.log(result); // 输出 'Success - Step 1'
});
