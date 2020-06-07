function parkingRates(jamMasuk, jamKeluar){
    let Jam = Math.abs(jamMasuk - jamKeluar);

    if (Jam <= 1.0){
        console.log(5000);
    }
    else if(Jam >= 1.0) {
        console.log((Math.floor(Jam) * 4000) + 1000)
    }

}

console.log(parkingRates("02.00","08.40"))