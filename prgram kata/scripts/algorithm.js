function WORD(data) {



  var data2 = data.split('.\n\n').join("")
  var data2 = data.split('\n').join("")
  var data2 = data2.split(/[.?!&'*^#@\"()]/).join("")
  var data2 = data2.toLowerCase()
  var data2 = data2.split(/[,]/)

  
  
  // var dkjoin = daftarkata.join("|")
  // var regex = /[dkjoin]/gi
  // var mathces = data.match(/dkjoin/gi)
  var hasil = ["kosong"]
  var count = 1
  var angkaid = 0
 // for (var i = 0 ; i < data2.length; i=i+2) {
 // 		if(i=0){
 // 			angkaid = data2[i]
 // 		}
 // 		else if(angkaid==data2[i]&&count<4){
 // 			data2[i] = ","
 // 			count = count+1
 // 		}
 // 		else if(angkaid==data2[i]&&count>3){
 // 			data2.splice(i,1)
 // 			data2.splice(i+1,1)
 // 			count = count+1
 // 		}
 // 		else if(angkaid!=data2[i]&&count!=1){
 // 			angkaid = data2[i]
 // 			count = 1
 // 		}
 		
 // 	}
 	console.log(data2)
//  if( (new RegExp( '\\b' + daftarkata.join('\\b|\\b') + '\\b') ).test(data2) ) {
  
// }

  // console.log(data2)
  // console.log(hasil)
  // console.log(kataPositif)
  // console.log(jumlahKP)
// var rows = "";
//   rows +=
//     "<tr><td>" +
//     "Artikel ini memiliki " + banyakKata + " kata positif" +
//     "</td></tr>" ;
  

//   for (var i = 0 ; i < kataPositif.length; i++) {
//  	rows+=
//  	"<tr><td>" +
//      kataPositif[i] + " : " + jumlahKP[i] +
//     "</td></tr>" ;
//  }

//  $(rows).appendTo("#list tbody");
}

