// script hitung luas persegi
function hitungluas (){
    var S = document.getElementById("sisi-luas").value;
    var hasil = Number(S) * Number(S);
    document.getElementById("output_luas").innerHTML = hasil;
}

// script hitung keliling persegi
function hitungkeliling (){
    var S2 = document.getElementById("sisi-keliling").value;
    var hasil2 = (Number(S2) * 4);
    document.getElementById("output_keliling").innerHTML = hasil2;
}

// script reset untuk bagian luas persegi
function reset(){
    document.getElementById("sisi-luas").value="";
    }


// script reset untuk bagian keliling persegi
function reset2(){
    document.getElementById("sisi-keliling").value="";
    }
    
