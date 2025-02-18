# Home work

Quyida o‘quvchilarga topshiriq (“requirements”) ko‘rinishida shartlarni ketma-ket sanab o‘tamiz. Bu shartlarni bajarish orqali ular “tovuqli” va “qazili” pitsa turlarini ham qo‘shib, callback funksiyadan foydalangan holda pitsa buyurtma qilish dasturini yaratishlari kerak.

---

1. **Ma’lumotlar strukturasini tayyorlash**  
   - Bitta massiv (`pizzaOrders`) yarating.  
   - Ushbu massivda har bir pitsa obyekt (`{ id, type, size }`) shaklida saqlansin.  
   - `type` sifatida “pishloqli”, “pishloqsiz”, “tovuqli” yoki “qazili” qiymatlaridan foydalaning.  
   - `size` sifatida esa “small”, “medium” yoki “large” qiymatlaridan foydalaning.  
   - Kamida 4 ta turli pitsa buyurtmasi yarating (masalan, `id:1, type:'pishloqli', size:'large'`, `id:2, type:'tovuqli', size:'medium'`, va hokazo).

2. **Narx hisoblash funksiyasi (`calculatePrice`)**  
   - Argument sifatida bitta pitsa obyektini (`order`) qabul qilsin.  
   - Asosiy narxni, masalan, 10000 so‘m deb oling.  
   - `type`ga qarab qo‘shimcha narxlarni qo‘shing:  
     - “pishloqli” → +5000 so‘m  
     - “pishloqsiz” → +0 so‘m  
     - “tovuqli” → +7000 so‘m (yoki o‘zingiz xohlagan miqdorda)  
     - “qazili” → +10000 so‘m (yoki o‘zingiz xohlagan miqdorda)  
   - `size`ga qarab ham qo‘shimcha narxlarni qo‘shing:  
     - “small” → +1000 so‘m  
     - “medium” → +2000 so‘m  
     - “large” → +3000 so‘m  
   - Yakuniy hisoblangan qiymatni qaytaring (return).

3. **Callback funksiyasi (`pizzaReadyCallback`)**  
   - Argument sifatida pitsa obyektini (`order`) va yakuniy narxni (`totalPrice`) qabul qilsin.  
   - Konsolga quyidagicha xabar chiqarsin:  
     ```
     Pitsa #ID (TYPE, SIZE) tayyor! Narxi: TOTALPRICE so'm
     ```  
     (masalan: `Pitsa #1 (pishloqli, large) tayyor! Narxi: 18000 so'm`)

4. **Asosiy buyurtma funksiyasi (`orderPizza`)**  
   - Argument sifatida pitsa obyektini (`order`) va callback funksiyasini qabul qilsin.  
   - Konsolga “Pitsa #ID (TYPE, SIZE) buyurtma qilindi. Pishirish boshlandi...” kabi xabar chiqarsin.  
   - `setTimeout` yordamida 2 soniya kutgach:  
     - `calculatePrice(order)`ni chaqiring va olingan narxni saqlang.  
     - Saqlangan narx va pitsa obyektini callback funksiyasiga (ya’ni `pizzaReadyCallback`) argument sifatida uzating.  

5. **Massivni qayta ishlash**  
   - O‘zingizning `pizzaOrders` massivining har bir elementini (`order`) `orderPizza` funksiyasiga `forEach` yordamida uzating:  
     ```js
     pizzaOrders.forEach(function(order) {
       orderPizza(order, pizzaReadyCallback);
     });
     ```  

6. **Asinxron natijani tekshirish**  
   - Dastur ishga tushgandan so‘ng konsolda avval buyurtma berilgani, so‘ng 2 soniyadan keyin har bir pitsa “tayyor” bo‘lgani haqida xabarlar chiqishini tekshiring.  

7. **Kod tozaligi va dokumentatsiya**  
   - Har bir funksiyani izoh (`// koment`) bilan tushuntirib boring.  
   - Kodni qismlarga ajratib, oson o‘qiladigan shaklda yozing.

8. **Qo‘shimcha talab (ixtiyoriy)**  
   - Xohlovchilar narxlarni o‘zlari xohlagancha o‘zgartirishi yoki “type” va “size”dan tashqari qo‘shimcha xususiyatlar (`extraSauce`, `doubleCheese`, va hokazo) kiritib, narxni yanada aniqroq hisoblashlari mumkin.  
   - Xohlovchilar pishirish vaqtini har xil pitsa uchun turlicha belgilashi (masalan, `qazili` = 3000 ms, `tovuqli` = 2500 ms) va shunga mos ravishda `setTimeout` chaqirishi mumkin.

---

**Xulosa**: O‘quvchilar shu bosqichlarni bajarsalar, “pitsa buyurtma qilish”ni asinxron callback funksiyalari orqali ifodalovchi, turli `type` va `size`larga qarab narx belgilanadigan dasturni to‘liq yaratib olishadi. Bu dastur JavaScript’dagi **callback** mantig‘ini, massivni (`array`) qayta ishlash, obyektlar (`object`) bilan ishlash va **setTimeout** funksiyasini qo‘llash bo‘yicha yaxshi tajriba bo‘ladi.

----

# ***2 Project***

Quyida **“nasiya savdo”** bo‘yicha **texnik qurilmalar** (masalan, MacBook, telefon yoki boshqa gadjet) sotib olish jarayonini o‘quvchilar bajarishi uchun **requirements** shaklida tushuntirib beraman. Bu vazifada oldingi “callback” funksiyasi, `setTimeout`, massiv (array) va obyektlar (object) bilan ishlash amaliyotini davom ettirib, qo‘shimcha ravishda bo‘lib to‘lash mexanizmini ham qo‘llashadi.

---

## Nasiya savdo loyihasi (MacBook misolida) uchun talablar

1. **Ma’lumotlar strukturasini tayyorlash**  
   - Bitta massiv (`orders`) yarating.  
   - Ushbu massivda har bir texnik qurilma (obyekt) quyidagi shaklda saqlansin:
     ```js
     {
       id: 1,
       productName: "MacBook Pro 16-inch",
       basePrice: 30000000, // masalan, 30 million so‘m
       payInMonths: 6,      // qancha oyga bo‘lib to‘lash
       monthlyPayment: 0    // dastlab 0 qilib kiritiladi, keyinchalik hisoblanadi
     }
     ```
   - Hech bo‘lmasa 3-4 xil texnik qurilma obyektlarini massivga qo‘shing. (Masalan, `MacBook Air`, `iPhone`, `Samsung Galaxy`, `Dell XPS`, va hokazo.)

2. **Narxni qayta ishlash funksiyasi (`calculateFinalPrice`)**  
   - Kiritilgan `basePrice`ni qayta hisoblab, `finalPrice` sifatida qaytaradigan funksiya yozing. Agar qurilma turiga qarab chegirma yoki ustama (foiz) qo‘shmoqchi bo‘lsangiz, shu yerda amalga oshiring:
     - Masalan, **Apple** brendiga +5% ustama.  
     - Yoki ma’lum bir modelga chegirma (masalan, eski model bo‘lsa -10%).  
   - Agar soddalashtirmoqchi bo‘lsangiz, shu qadamni o‘tkazib, to‘g‘ridan-to‘g‘ri `basePrice`ni `finalPrice` sifatida olishingiz ham mumkin.

3. **Bo‘lib to‘lash hisoblash funksiyasi (`calculateInstallments`)**  
   - Argument sifatida `finalPrice` va `payInMonths`ni qabul qilsin.  
   - Agar `payInMonths` > 1 bo‘lsa, har oyga to‘lovni toping:
     \[
       \text{har oylik to‘lov} = \frac{\text{finalPrice}}{\text{payInMonths}}
     \]
     (istalgancha yaxlitlash usulidan foydalaning, masalan, `Math.round`).
   - Shuningdek, xohlasangiz, bo‘lib to‘lashga qo‘shimcha foiz ham qo‘shib ko‘rishingiz mumkin (masalan, 12 oyga bo‘lib to‘lashda +10% ustama).
   - Agar `payInMonths` = 1 bo‘lsa, demak to‘liq narx biryo‘la to‘lanadi, `monthlyPayment = finalPrice`.

4. **Callback funksiyasi (`deviceReadyCallback`)**  
   - Ushbu funksiya “qurilma ombordan keldi” yoki “tayyor bo‘ldi” degan ma’noda, kelgan obyekt (buyurtma ma’lumotlari) bo‘yicha xabar chiqarsin.
   - Masalan, konsolda quyidagicha xabar chiqaring:
     ``` 
     MacBook Pro 16-inch (#1) tayyor bo'ldi! 
     Agar payInMonths > 1 bo‘lsa: 
       "Har oy to'lash: MONTHLYPAYMENT so'm, jami: PAYINMONTHS oy" 
     Aks holda: 
       "Jami to'lov: FINALPRICE so'm, biryo'la to'lanadi." 
     ```

5. **Buyurtma funksiyasi (`orderDevice`)**  
   - Argument sifatida buyurtma obyektini (`order`) va callback funksiyasini (`deviceReadyCallback`) qabul qilsin.  
   - Boshlanishida “PRODUCTNAME (#ID) buyurtma qilindi. Ombordan yetkazib berilmoqda...” kabi xabar chiqarsin.  
   - `setTimeout` orqali, masalan, 2 soniya kutib turing (ombordan kelguncha simulyatsiya).  
   - 2 soniya tugagach:  
     - `finalPrice = calculateFinalPrice(order.basePrice, ...)` (agar kerak bo‘lsa, brend/modelga qarab).  
     - `monthlyPayment = calculateInstallments(finalPrice, order.payInMonths)`.  
     - `order` obyektining `finalPrice` va `monthlyPayment` xususiyatlarini yangilang.  
     - Yakunda callback funksiyasini (`deviceReadyCallback(order)`) chaqiring.

6. **Massivni qayta ishlash**  
   - `orders.forEach(order => orderDevice(order, deviceReadyCallback))` shaklida har bir buyurtmani qayta ishlang.  
   - Shu tariqa, barcha texnik qurilmalar 2 soniyadan keyin “tayyor” bo‘lib, nasiya yoki biryo‘la to‘lov shartlari konsolga chiqadi.

7. **Kodni tozaligi va izohlar**  
   - Har bir funksiyani alohida-alohida yozing (`calculateFinalPrice`, `calculateInstallments`, `deviceReadyCallback`, `orderDevice`).  
   - Kodni bosqichma-bosqich tushuntirib, izohlar (`// ...`) qo‘shing.

8. **Qo‘shimcha g‘oyalar (ixtiyoriy)**  
   - **Turli yetkazib berish vaqti**: brend yoki modelga qarab `setTimeout`ga turli vaqt berish (masalan, MacBook 3 soniya, iPhone 2 soniya, Dell XPS 2.5 soniya).  
   - **O‘zgaruvchan ustama**: oy soni oshgani sayin ustama ham oshishi.  
   - **Keshbek yoki bonus ballar**: agar `payInMonths` = 1 bo‘lsa, keshbek berish yoki chegirma qilish.  
   - **UI ko‘rinish**: agar xohlasangiz, oddiy HTML sahifa orqali foydalanuvchidan ma’lumotlarni kiritib, `prompt` yoki forma yordamida buyurtma parametrlarini qabul qilishingiz mumkin.

---

**Xulosa**: O‘quvchilar ushbu “nasiya savdo (MacBook yoki boshqa qurilmalar)” mini-loyihasini bajarar ekan, bir vaqtning o‘zida bir nechta **JavaScript** konsepsiyalarini mustahkamlab olishadi:
1. **Callback** funksiyalar (tayyor bo‘lgandan keyin xabar yoki natijani chiqarish).  
2. **Massiv** va **obyekt**lar ustida ishlash (har bir buyurtmada `id`, `productName`, `payInMonths`, `monthlyPayment`, va hokazo).  
3. **Asinxron** jarayon (`setTimeout` bilan yetkazib berish vaqtini simulyatsiya qilish).  
4. **Bo‘lib to‘lash** (nasiya) mexanizmi, ustama yoki chegirmalarni hisoblash.  

Mazkur **requirements** asosida JavaScript kodini yozib, o‘quvchilar dastur ishga tushganda har bir qurilma buyurtmasi qayta ishlanishini, 2 soniyadan so‘ng callback funksiyasi orqali “tayyor bo‘ldi” degan xabarlar chiqishini amaliy ko‘rib chiqishlari mumkin.