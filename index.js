var table;

$(function() {
    document.getElementById('show-datatables').innerHTML = "<table id='show-datatablesTable' class='display nowrap' style='width:100%'></table>";
    table = $('#show-datatablesTable').DataTable({
         "columnDefs": columnDefs,
         "data" : data,
         "scrollX": true,        
         "select": {
            "style": "multi", // 単一選択の場合はOS 複数選択の場合がmulti
            "selector": "td:nth-child(2)", // 選択したい列 今回は2列目をクリックすることでチェックマークをつけることができる
            "blurable": false, // table外をクリックしたときに、チェックマークが反応するかどうか
          }
       });

       for (var i = 0; i < table.rows().data().length; i++) {
          // チェック選択されていない行にはクラスを追加しておく
          $(table.row(i).node()).addClass('deselect');
        }
       table
        .on( 'select', function ( e, dt, type, indexes ) {
            $(table.row(indexes).node()).removeClass('deselect');
        } )
        .on( 'deselect', function ( e, dt, type, indexes ) {
            $(table.row(indexes).node()).addClass('deselect');
        } );
});

var columnDefs= [
    {targets: 0, title: "No", data: "no"},
    {targets: 1, title: "チェック", defaultContent: "", "className": "select-checkbox"},
    {targets: 2, title: "Name", data: "name"},
    {targets: 3, title: "Age", data: "age"},
    {targets: 4, title: "Address", data: "address"},
    {targets: 5, title: "Phone Number", data: "number"}
  ];

var data = [{
        "no": 1,
        "name": "田中",
        "age": 18,
        "address": "東京",
        "number": "08011111111"
    },
    {
        "no": 2,
        "name": "佐藤",
        "age": 20,
        "address": "神奈川",
        "number": "08022222222"
    },
    {
        "no": 3,
        "name": "鈴木",
        "age": 22,
        "address": "埼玉",
        "number": "08033333333"
    },
    {
        "no": 4,
        "name": "前田",
        "age": 25,
        "address": "群馬",
        "number": "08044444444"
    },
    {
        "no": 5,
        "name": "小島",
        "age": 30,
        "address": "栃木",
        "number": "08055555555"
    }
]
    