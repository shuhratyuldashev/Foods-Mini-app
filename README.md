# English Translator Bot

English Translator Bot - это веб-приложение, которое позволяет переводить текст с одного языка на другой с использованием бесплатного API.

## 🚀 Функционал

- Перевод текста между разными языками
- Автоматическое определение исходного языка
- Простая и удобная форма ввода
- Обратная связь в случае ошибки

## 🛠️ Установка и запуск

### 1. Клонирование репозитория

```sh
git clone https://github.com/shuhratyuldashev/Translater-English-bot
cd english-translator-bot
```

### 2. Установка зависимостей

#### 📌 Клиент (React)

```sh
cd client
npm install
```

#### 📌 Сервер (Node.js + Express)

```sh
cd server
npm install
```

### 3. Настройка переменных окружения

Создайте файл `.env` в корне серверной части и добавьте:

```sh
PORT=3000
TRANSLATE_API_KEY=your_api_key_here
```

> Если используете Vite, создайте `.env` в клиенте:

```sh
VITE_API_URL=http://localhost:3000
```

### 4. Запуск проекта

#### Запуск сервера

```sh
cd server
npm start
```

#### Запуск клиента

```sh
cd client
npm run dev
```

## 📌 Используемые технологии

### 🖥️ Frontend

- React
- TypeScript
- TailwindCSS
- React Hook Form

### 🌐 Backend

- Node.js
- Express
- @vitalets/google-translate-api
- CORS

## 🔥 API

### **Перевод текста**

- **Метод:** `POST /translate`
- **Тело запроса:**

```json
{
  "text": "Hello, world!",
  "from": "en",
  "to": "ru"
}
```

- **Ответ:**

```json
{
  "translatedText": "Привет, мир!"
}
```

## ❗ Возможные ошибки

- **Too Many Requests** — сервер Google заблокировал запросы, попробуйте позже.
- **Invalid API Key** — проверьте ваш API-ключ.

---

💡 Автор: **Шухрат Юлдашев** | [GitHub](https://github.com/YSH2009UZ)
