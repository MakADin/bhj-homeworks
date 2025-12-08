document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form').addEventListener('submit', function (event) {
    event.preventDefault();
    const progress = document.querySelector('#progress');

    const xhr = new XMLHttpRequest();
    const formData = new FormData(this);

    xhr.open('POST', this.action);

    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        let percentComplete = Number((e.loaded / e.total).toFixed(2));
        progress.setAttribute('value', percentComplete);
      }
    };

    xhr.onload = function () {
      switch (xhr.status) {
        case 200:
        case 201:
          console.log('File upload successful');
        default:
          break;
      }
    };

    xhr.send(formData);
  });
});
