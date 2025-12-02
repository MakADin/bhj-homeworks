document.addEventListener('DOMContentLoaded', function () {
  const itemsValute = document.querySelector('#items');
  const loaderImage = document.querySelector('#loader');

  const xhr = new XMLHttpRequest();

  const createItem = function (code, value) {
    return `
      <div class="item">
        <div class="item__code">
                ${code}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
          </div>
      </div>
    `;
  };

  xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      loaderImage.classList.remove('loader_active');

      const data = JSON.parse(xhr.responseText);
      const valutes = data.response.Valute;

      for (let currency in valutes) {
        const charCode = valutes[currency].CharCode;
        const value = valutes[currency].Value;

        const item = createItem(charCode, value);
        itemsValute.insertAdjacentHTML('beforeend', item);
      }
    }
  });

  xhr.open(
    'GET',
    'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
  );
  xhr.send();
});
