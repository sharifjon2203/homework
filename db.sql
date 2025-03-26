CREATE ROLE sharifjon SUPERUSER LOGIN PASSWORD '70719505';

\du sharifjon

\c postgres sharifjon

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    phone_number VARCHAR,
    address VARCHAR(50)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    content TEXT,
    slug VARCHAR(50),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


INSERT INTO users(first_name,last_name, email, password,phone_number,address) 
VALUES('Sharifjon','Minavarov', 'sharifjonmunavarov@gmail.com', 'password12354352','+998780097667','Addresss .... ...'),
('Sherzod', 'Norqobilov', 'sherzod.norqobilov@gmail.com', 'Parol123456', '+998901234567', 'Toshkent, Chilonzor tumani'),
('Olimjon', 'Rustamov', 'olimjon.rustamov@mail.com', 'QattiqParol456', '+998933214567', 'Samarqand, Registon ko''chasi'),
('Malika', 'Hamidova', 'malika.hamidova@gmail.com', 'XavfsizParol!789', '+998991112233', 'Farg''ona, Marg''ilon shahar');


SELECT * FROM users;


INSERT INTO posts (title, content, user_id) VALUES
('Yangi texnologiyalar haqida', 'Bugungi kunda sunʼiy intellekt va avtomatlashtirish dolzarb mavzulardan biri hisoblanadi.', 2),
('O''zbekistonning sayyohlik maskanlari', 'Samarqand, Buxoro va Xiva shaharlari tarixiy obidalarga boy.', 3),
('Kitob o''qishning foydalari', 'Kitob mutolaasi inson tafakkurini rivojlantiradi va bilim darajasini oshiradi.', 4);

INSERT INTO posts (title, content, slug, user_id) 
VALUES ('Kitob o''qishning foydalari', 'Kitob mutolaasi inson tafakkurini kengaytiradi.', 'reading-habits', 4);



INSERT INTO comments (content, post_id, user_id) VALUES
('Haqiqatan ham, AI rivojlanishi hayotni osonlashtirmoqda.', 2, 1),
('Men AI bilan ishlashga qiziqaman. Qaysi dasturlash tillari foydali?', 2, 3),
('Samarqandga borish niyatim bor edi. Sayohat qilish uchun eng yaxshi oy qaysi?', 3, 4),
('Xivaga borganman, juda chiroyli shahar!', 3, 2),
('Qaysi kitoblarni tavsiya qilasiz? Menga motivatsion kitoblar yoqadi.', 4, 1),
('Ha, men har kuni 30 daqiqa kitob o''qiyman, juda foydali!', 4, 3);




SELECT 
    u.id AS user_id,
    u.first_name || ' ' || u.last_name AS full_name,
    u.email,
    p.id AS post_id,
    p.title AS post_title,
    p.content AS post_content,
    p.slug,
    c.id AS comment_id,
    c.content AS comment_text,
    c.created_at
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
LEFT JOIN comments c ON p.id = c.post_id
ORDER BY p.id, c.created_at;




