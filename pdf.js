

function btn3() {

    let name=prompt( " Enter file name ( it should start with alphabet letters only and dont use any special characters) :")

   

let data=document.getElementById('data');
console.log(data);
console.log(window);

var opt = {
  margin:       1,
  filename:     name,
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

    html2pdf().from(data).set(opt).save();

}
 
function export_data() {

    let name=prompt( " Enter file name ( it should start with alphabet letters only and dont use any special characters) :")
    let name2=name+".xlsx"
    
    let data=document.getElementById('data');
    var fp=XLSX.utils.table_to_book(data,{sheet:'jayaraj'});
    XLSX.write(fp,{
        bookType:'xlsx',
        type: 'base64'
    });

    XLSX.writeFile(fp, name2);
    
}
