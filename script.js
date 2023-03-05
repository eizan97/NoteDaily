// Membuat function untuk menambahkan items
function addItems() {
    // Mengambil nilai inputData pada HTML
    let data = document.getElementById('inputData').value;

    // Membuat list items baru
    let li = document.createElement('li');
    let text = document.createTextNode(data);
    li.appendChild(text)
    
    // Menambahkan item baru ke dalam list
    let ul = document.getElementById('list');
    ul.appendChild(li);

    // Menghapus kolom input
    document.getElementById('inputData').value = ""; 
}

//* cara pertama
// Membuat function menghapus list data
// function deleteItems() {
//     // Mengambil seluruh list
//     let list = document.getElementById('list');

//     // Menghapus seluruh item yang ada pada list
//     let child = list.firstElementChild;
//     for(let i = 0; i < list.children.length; i++){
//         list.removeChild(child);
//         child = list.firstElementChild
//     }
// }

//* cara kedua

function deleteItems() {
    // Mengambil item pada list
    let list = document.getElementById('list')

    // Menghapus seluruh item dari list
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild)
    }
}