function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John" };
    callback(data);
  }, 1000);
}

const callbackFn = function (data) {
  console.log(`Message resived ${data.name} `);
};

fetchData(callbackFn);
