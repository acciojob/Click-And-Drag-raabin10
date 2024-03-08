let draggedItem = null;

    document.addEventListener('dragstart', function (event) {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', ''); // required for Firefox
    });

    document.addEventListener('dragover', function (event) {
      event.preventDefault();
    });

    document.addEventListener('drop', function (event) {
      event.preventDefault();
      if (event.target.classList.contains('item')) {
        const targetItem = event.target;
        swapItems(draggedItem, targetItem);
      }
    });

    function swapItems(item1, item2) {
      const temp = document.createElement('div');
      item1.parentNode.insertBefore(temp, item1);
      item2.parentNode.insertBefore(item1, item2);
      temp.parentNode.insertBefore(item2, temp);
      temp.parentNode.removeChild(temp);
    }