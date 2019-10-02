function vkInit() {
  return new Promise((resolve, rejects) => {
    VK.init({
      apiId:6789124
    });

    VK.Auth.login(data => {
      if (data.session) {
        resolve();
      } else {
        reject(new Error('Не удалось авторизоваться'));
      }
    }, 2);
  });
}

function vkApi(method, options) {
  if (!options.v) {
    options.v = '5.86';
  }

  return new Promise((resolve, reject) => {
    VK.api(method, options, data => {
      if (data.error) {
        reject(new Error(data.error.error_msq));
      } else {
        resolve(data.response);
      }
    });
  });
}

const cache = new Map();

function geocode(address) {}

let myMap;
let clusterer;

ymaps.ready(async () => {
  await vkInit();

  const [me] = await vkApi('users.get', { fields: 'city,country' });
  const friends = await vkApi('friends.get', { fields: 'city.country'});

  friends.items.push(me);

  myMap = 
})