// console.log('hi');

const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

// リストアイテムを抽出
for (let i = 0; i < list_items.length; i++){
  const item = list_items[i];
  // console.log(item);
  
  // dragstart
  item.addEventListener('dragstart', function () {
    // item.addEventListener('dragstart', function (e) {
    // console.log('dragstart',e);
    console.log('dragstart');
    draggedItem = item;
    // console.log(this);
    setTimeout(function () {
      item.style.display = 'none';
    },0)
  });

  // dragend
  item.addEventListener('dragend', function () {
    console.log('dragend');
    setTimeout(function () {
      // ここで終わりのポイントでblockにする
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });
  
  // drag先になる箱の抽出
  for (let j = 0; j < lists.length; j++){
    const list = lists[j];

    // start
    list.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    // 交差点
    list.addEventListener('dragenter', function (e) {
      e.preventDefault();
      this.style.backgroundColor = 'rgba(0,0,0,0.2)';
    });
    // 通り過ぎる
    list.addEventListener('dragleave', function (e) {
      this.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
    // ターゲット
    list.addEventListener('drop', function (e) {
      console.log('drop');
      this.append(draggedItem);
      this.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });

  }
}