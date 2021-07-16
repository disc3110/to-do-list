/* eslint-disable  no-restricted-syntax */

import { setStorage } from './index.js'; // eslint-disable-line

function checkboxesUpdate(currArr) {
  const checkbox = document.querySelectorAll('.checkbox');

  for (const box of checkbox) {
    box.addEventListener('change', () => {
      const currentIndex = box.dataset.index;

      if (box.checked) {
        currArr[currentIndex - 1].completed = true;
        setStorage(currArr);
      } else {
        currArr[currentIndex - 1].completed = false;
        setStorage(currArr);
      }
    });
  }
}

export { checkboxesUpdate }; // eslint-disable-line