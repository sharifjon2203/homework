## 1)  Write a function removeDuplicates(arr) that takes an array and returns a new array without duplicate elements.
```js
 console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); // Output: [1, 2, 3, 4]
```

## 2) Write a function generatePassword(length) that generates a random alphanumeric password of a given length.
```js
 console.log(generatePassword(8)); // Output: 2w4g23fs
```

## 3) Write a function capitalizeWords(str) that capitalizes the first letter of each word in a string.



## 4) piramida chiqarish kerak, function son qabul qiladi
```txt
 Output:
    *
   ***
  *****
 *******
```
## 5) harflarni nechamarotaba uchraganini sanaberish :
// example: hello world
// h - 1
// e - 1
// l - 3
// o - 1
// w - 1
// r - 1
// d - 1


// home work

// 1)
// Write a function that takes an array of user objects and returns a new array with users whose ages are between 18 and 35.
const users = [
  { name: "Alice", year: 2002 },
  { name: "Bob", year: 1990 },
  { name: "Charlie", year: 2008 },
  { name: "David", year: 2010 },
];

function filterUsersByAge(users) {
  // Your code here
}

console.log(filterUsersByAge(users));
// Output: [ { name: 'Alice', age: 22 }, { name: 'Charlie', age: 28 } ]

// 2)
// Write a function that takes a sentence and returns a new string where each word is reversed, but the order of words remains the same.

function reverseWords(sentence) {
  // Your code here
}

console.log(reverseWords("Hello World"));
// Output: "olleH dlroW"

// 3)
// Write a function that takes an array of numbers and returns an array of duplicate numbers (only once).
function findDuplicates(arr) {
  // Your code here
}

console.log(findDuplicates([1, 2, 3, 4, 2, 1, 9, 1, 5, 6, 3, 7]));
// Output: [2, 3]

// 4)
// Write a function that finds the longest word in a sentence and returns it.
function findLongestWord(sentence) {
  // Your code here
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// Output: "jumped"


    Otasi va farzandining yoshini argument sifatida qabul qilib necha yildan keyin yoki necha yil avval ularning yoshi 2 marta farq qilishini aniqlovchi funksiya yozing.
        Berilgan sonning barcha faktorlarini hisoblab qaytaradigan findFactors nomli funksiya yozing. Masalan, faktorlar sonni bo'lishi mumkin bo'lgan sonlar bo'lsin: findFactors(12); // 1, 2, 3, 4, 6, 12.
        Berilgan son tub yoki yo‘qligini tekshiradigan isPrime nomli funksiya yozing.
        Berilgan ikkita son uchun birinchi sonni ikkinchisiga darajaga ko'tarib qaytaradigan power nomli funksiya yozing. Masalani yechishda Math.pow funksiyasidan foydalanilmasin power(2, 3);



1. product nomli object yarating (nomi, miqdori, narxi) -
  product to'g'risida ma'lumot beruvchi productInfo
  nomli metod qo'shing - product narxini o'zgartirish
  uchun setPrice nomli metod qo'shing - productdan
  tovar nomli objectga nusxa oling - tovarning narxini
  setPrice orqali o'zgartiring - ekranga product va
  tovar objectlari to'g'risidagi ma'lumotni productInfo orqali chiqaring

2. doira nomli ob'ekti yarating va unga  foydalanuvchi tomonidan
  kiritilgan qiymatni radius nomli xususiyat sifatida kiriting.
  Ob'ekt ichiga doiraning yuzini hisoblovchi metod qo'shing.

3. Unga uzatilgan objectdagi key va valuelar oâ€™rnini almashtiruvchi
  InvertKeyValue(obj) funksiyasini yozing.
				Input: InvertKeyValue({red: Â«qizilÂ», green: Â«yashilÂ»})
				Output:{Â«qizilÂ»: Â«redÂ», Â«yashilÂ»: Â«greenÂ»}
