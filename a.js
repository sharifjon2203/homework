const database = {
  studentsList: {
    xamidullo: {
      name: "xamidullo",
      age: 33,
      id: 123,
      tolov: false,
    },
  },

  create(user) {
    const name = "johns";
    this.studentsList[name] = user;
  },

  read(name) {
    return this.studentsList[name] ?? "User not found";
  },

  update(name, user) {
    // studentsList dagi userni ichidagi ma'lumotlarini o'zgartiring va qaytaring!
    this.studentsList[name] = { ...this.studentsList[name], ...user };
  },

  delete(name) {
    // studentsList dan faqat bitta userni o'chiring! qaytarish ihtihoriy message qaytarish ihtiyoriy
    delete this.studentsList[name];
  },
};

database.create({
  name: "xamidullo",
  age: 33,
  id: 123,
  tolov: false, // yoki true
});

database.update("xamidullo", {
  name: "azizbek",
  age: 21,
  tolov: true,
});

database.delete("xamidullo");

console.log(database.studentsList);
