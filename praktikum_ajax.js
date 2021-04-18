/**
 * AJAX
 * AJAX = Asynchronous JavaScript and XML
 * AJAX atau Asynchronous JavaScript and XML adalah teknik
 * yang digunakan untuk membuat website yang dinamis
 * Artinya website mampu mengupdate dan menampilkan
 * data baru dari server tanpa perlu melakukan reload.
 * 
 * Pada praktikum ini, kita akan menggunakan AJAX Jquery
 */

//Fungsi AJAX Jquery untuk meload isi file
$(function (){
    $("#nama").load("test.txt");
});

/**
 * Berikut merupakan fungsi untuj fetch data dari internet menggunakan AJAX Jquery
 * Kita menggunakan https://jsonplaceholder.typicode.com/photos sebagai urlnya,
 * Silakan dibuka dulu agar paham
 */
$(function (){
    let url = "https://jsonplaceholder.typicode.com/photos";
    //mengambil button untuk fetch data
    //boleh hilangkan line 26 dan 46 jika ingin data langsung terload saat membuka browser
    $("#getPost").on("click", function () {
        //Memanggil Jquery Ajax
        $.ajax({
            //memanggil variable url
            url: url,
            //menggunakan GET request
            type: 'GET',
            //jika sukses
            success: function (data) {
                let data_html = '';
                //loaping data (Ambil satu persatu data)
                $.each(data, function (i, item) {

                    //mengkonversi hasil loop tadi ke HTML
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '" alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'
                });

                //memasukkan hasil loop tadi ke div dengan id #data_hasil_dari_internet
                $("#data_hasil_dari_internet").html(data_html);
            },
            //jika error
            error: function (error) {
                //tampilkan console.log
                console.log(error);
            }
        })
    });
});