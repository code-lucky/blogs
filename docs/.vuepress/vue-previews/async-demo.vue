// 简单的demo
async function fetchData() {
    try {
        const response = await fetch('https://www.api.com/api');
        if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Fetch failed:', error);
    }
}


// 并行执行多个异步操作
async function fetchData() {
    const [data1, data2] = await Promise.all([fetch('url1'), fetch('url2')]);
}