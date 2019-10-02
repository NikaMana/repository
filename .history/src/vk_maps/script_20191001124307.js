import { resolve } from "path";
import { rejects } from "assert";

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