function beratBesi(diameter, panjang) {
  const beratPerMeter = 0.00617 * Math.pow(diameter, 2);
  return beratPerMeter * panjang;
}

// Tabel bobot besi (kg/m)
const tabelBobotBesi = {
  6: 0.222,
  8: 0.395,
  10: 0.617,
  12: 0.888,
  16: 1.578,
  20: 2.466,
  22: 2.986,
  25: 3.856,
  28: 4.837,
  32: 6.318,
};

function hitungBesi() {
  const jumlahKolom = parseInt(document.getElementById('jumlahKolom').value);
  const tinggiKolom = parseFloat(document.getElementById('tinggiKolom').value);
  const besiPokok = parseInt(document.getElementById('besiPokok').value);
  const kait = parseFloat(document.getElementById('kait').value);
  const diameterPokok = parseFloat(document.getElementById('diameterPokok').value);
  const diameterBeugel = parseFloat(document.getElementById('diameterBeugel').value);
  const jarakBeugelRapat = parseFloat(document.getElementById('jarakBeugelRapat').value);
  const jarakBeugelRenggang = parseFloat(document.getElementById('jarakBeugelRenggang').value);
  const kelilingBeugel = parseFloat(document.getElementById('kelilingBeugel').value);

  // Besi Pokok
  const panjangPerBatangPokok = tinggiKolom + kait;
  const totalPanjangPokok = panjangPerBatangPokok * besiPokok * jumlahKolom;
  const batangPokok = Math.ceil(totalPanjangPokok / 12);
  const beratPokok = totalPanjangPokok * tabelBobotBesi[diameterPokok];

  // Beugel rapat & renggang
  const panjangRapat = Math.min(0.5, tinggiKolom / 6);
  const panjangRenggang = tinggiKolom - (2 * panjangRapat);

  const beugelRapat = panjangRapat / jarakBeugelRapat;
  const beugelRenggang = panjangRenggang / jarakBeugelRenggang;

  const beugelRapatBulat = Math.ceil(beugelRapat);
  const beugelRenggangBulat = Math.ceil(beugelRenggang);

  const totalBeugelPerKolom = (2 * beugelRapatBulat) + beugelRenggangBulat;
  const totalBeugel = totalBeugelPerKolom * jumlahKolom;

 const totalPanjangBeugel = totalBeugel * kelilingBeugel;
  const batangBeugel = Math.ceil(totalPanjangBeugel / 12);
  const beratBeugel = totalPanjangBeugel * tabelBobotBesi[diameterBeugel];

  // Output
  document.getElementById('hasil').innerHTML = `
    <strong>Hasil Perhitungan:</strong><br><br>

    <u><strong>Besi Pokok:</strong></u><br>
    Total panjang: ${totalPanjangPokok.toFixed(2)} m<br>
    Jumlah lonjor (12m): <strong>${batangPokok} batang</strong> (${(totalPanjangPokok / 12).toFixed(2)})<br>
    Berat total: <strong>${beratPokok.toFixed(2)} kg</strong><br><br>

    <u><strong>Besi Beugel:</strong></u><br>
    Total panjang: ${totalPanjangBeugel.toFixed(2)} m<br>
    Jumlah lonjor (12m): <strong>${batangBeugel} batang</strong> (${(totalPanjangBeugel / 12).toFixed(2)})<br>
    Jumlah total beugel: <strong>${totalBeugel} buah</strong><br>
    Per kolom: ${totalBeugelPerKolom} buah (${(2 * beugelRapatBulat)} rapat, ${beugelRenggangBulat} renggang)<br>
    Berat total: <strong>${beratBeugel.toFixed(2)} kg</strong><br><br>

    <u><strong>Hasil Asli (sebelum dibulatkan):</strong></u><br>
    Beugel rapat: ${(beugelRapat * 2).toFixed(2)}<br>
    Beugel renggang: ${beugelRenggang.toFixed(2)}<br>
  `;
}
