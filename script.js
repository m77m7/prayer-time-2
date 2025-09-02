// رابط API مباشر لمكة (method=5 = جامعة أم القرى)
const apiURL = "https://api.aladhan.com/v1/timingsByCity?city=Mecca&country=Saudi%20Arabia&method=5";

function getPrayerTimes() {
    fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            let t = data.data.timings;
            document.getElementById("times").innerHTML = `
                <strong>الفجر:</strong> ${t.Fajr} <br>
                <strong>الظهر:</strong> ${t.Dhuhr} <br>
                <strong>العصر:</strong> ${t.Asr} <br>
                <strong>المغرب:</strong> ${t.Maghrib} <br>
                <strong>العشاء:</strong> ${t.Isha}
            `;
        })
        .catch(err => {
            document.getElementById("times").innerHTML = "❌ خطأ في تحميل البيانات";
            console.error("خطأ:", err);
        });
}

window.onload = getPrayerTimes;