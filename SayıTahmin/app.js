let rastgaleSayi;
let tahmin;
let kalanTahmin = 7;
let oyunBitti = false;

// 1. sayiUret() Fonksiyonu:
function sayiUret() {
    rastgeleSayi = Math.floor(Math.random() * 20) + 1; // 1-20 arası rastgele sayı
    console.log("Psst, ben bir sayı tuttum:", rastgeleSayi); // Test için konsola yazdır (isteğe bağlı)
}

// 2. tahminKontrol()
function tahminKontrol() {
    tahmin = parseInt(document.getElementById("tahminInput").value);

    if (oyunBitti){
        document.getElementById("sonuc").textContent = "Oyun bitti! Yeni oyun için sayfa yenileyin";
        return; // Oyun bittiyse fonksiyondan çık
    }

    if (isNaN(tahmin) || tahmin < 1 || tahmin > 20) {
        document.getElementById("sonuc").textContent = "Lütfen 1 ile 20 arasında bir sayı tutunuz.";
    }else {
        kalanTahmin--;

        if (tahmin === rastgaleSayi) {
            document.getElementById("sonuc").textContent = "Tebrikler, bildiniz!";
            oyunBitti = true; 
        }else if (kalanTahmin === 0 ) {
            document.getElementById("sonuc").textContent = `Oyun bitti! Tuttuğum sayı ${rastgeleSayi} idi.`;
            oyunBitti = true;
        }else if (tahmin < rastgaleSayi) {
            document.getElementById("sonuc").textContent = "Daha yüksek bir sayı deneyin.";
        }else{
            document.getElementById("sonuc").textContent = "Daha düşük bir sayı deneyin";
        }

        document.getElementById("kalanTahmin").textContent = kalanTahmin; // kalan tahmin sayısını günceller
    }
}

// 3. oyunSifirla()
function oyunSifirla() {
    sayiUret();
    tahmin = null;
    kalanTahmin = 7;
    oyunBitti = false;
    document.getElementById("tahminInput").value = ""; // Giriş alanını temizle
    document.getElementById("sonuc").textContent = "";
    document.getElementById("kalanTahmin").textContent = kalanTahmin;
}