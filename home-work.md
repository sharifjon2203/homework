# home work

1. id, name va price xususiyatlariga ega Product deb
nomlangan class yozing. Har safar yangi product kiritilganda
qiymati bittaga oshib boruvchi static productCount xususiyatini qoâ€™shing.
Mahsulotlarning umumiy narxini hisoblab beruvchi totalPrice metodini yarating.
Product classidan CareProduct deb nomlangan voris class yarating
 va unga kafolat muddati uchun warrantyPeriod xususiyatini qo'shing.
 Voris class uchun kafolat muddatini hisobga oluvchi
 totalPrice metodini qayta yozing. Bunda agar kafolat muddatiga
 5 kun qolgan bo'lsa 10%,
 4 kun qolgan bo'lsa 20%,
 3 kun qolgan bo'lsa 30%,
 2 kun qolgan bo'lsa 40% va
 1 kun qolgan bo'lsa 50% narxda hisoblashni amalga oshiring.

 2. x va y koordinatalarni qabul qiluvchi Point nomli class yozing.
Shuningdek ushbu class ikki nuqta orasidagi masofani hisoblovchi
distance nomli static metodga ega bo'lsin.

```js
    Input:
      let p1 = new Point(5, 5);
      let p2 = new Point(9, 8);
      console.log(Point.distance(p1, p2));
```
3. name va departments (array) xususiyatlariga ega bo'lgan
Universitet nomli class yarating. Ushbu classga yangi
bo'lim(department) qo'shish, bo'limni olib tashlash va
barcha bo'limlarni ko'rsatish metodlarini yozing.
Universitet classidan object yarating, 5ta yangi bo'lim
qo'shing va 2 ta bo'limni olib tashlang.
 Qolgan bo'limlar ro'yxatini chiqaring.






# Bonus
1. Foydalanuvchi o'z ish kunining boshlanish va tugash vaqtini kiritadi.
Siz bu ma'lumotlardan foydalangan holda u qancha vaqt ishlaganini
(soat va daqiqalar ko'rinishida) hisoblaydigan funksiyani yozing.
Agar ishning tugash vaqti boshlanish vaqtidan oldin bo'lsa,
"Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas" matnini qaytaring.
	Kirish ma'lumotlari:
  Boshlanish va tugash vaqtlari formati: HH:MM
	Misol:
  console.log(calculateWorkingHours("09:00", "17:30")); // "Ish vaqti: 8 soat 30 daqiqa"
  console.log(calculateWorkingHours("10:00", "09:00")); // "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"

2.Foydalanuvchi prompt orqali  bank ish kuni kiritadi (masalan, 60).
Siz foydalanuvchi kiritgan bank ishkunidan kelib chiqib yilning
qaysi oy va qaysi sanasida aytilgan kun kelishini hisoblovchi funksiya yozing.
Bank ish kunida shanba va yakshanba dam olish kuni sifatida hisoblanmaydi.

3. Berilgan ikkita JSON obyektida bir xil kalit-qiymat juftliklarini topadigan
funksiyani yozing. Natijada umumiy qiymatlar bilan kalit-qiymat juftliklari
yangi obyekt shaklida qaytarilsin. Ikkala obyektning tuzilmalari turli darajada
 murakkab va ichma-ich bo'lishi mumkin.
```js
 const jsonData1 = {
    user: {
    name: "Ali",
    age: 25,
    address: {
      city: "Tashkent",
      zip: "100000"
    }
  },
  active: true
};

const jsonData2 = {
  user: {
  name: "Ali",
  age: 30,
      address: {
        city: "Tashkent",
        zip: "200000"
      }
    },
  active: true
};

console.log(findCommonPairs(jsonData1, jsonData2));
```js
Chiqish:
{
  user: {
    name: "Ali"
  },
  active: true
}
````
