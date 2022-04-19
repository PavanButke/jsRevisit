async function sendRequest() {
  try {
    const response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json',
      {}
    );
    console.log('Got response!');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Got an error.');
  }

  // .then(function(response) {
  //   console.log('First then');
  //   return response.json();
  // })
  // .catch(function(err) {
  //   console.log('Failed!');
  // })
  // .then(function(data) {
  //   console.log(data);
  // });
}

sendRequest();
