# 🍔 Foodie-React-App

**Foodie-React-App** is a modern, responsive React-based food delivery application that allows users to explore restaurants, search meals, and manage a shopping cart with ease.

---

## 🧠 Overview

Foodie-React-App is a frontend food delivery platform built using React, Redux, Parcel, and Tailwind CSS. The project demonstrates modern React practices such as functional components, hooks, global state management, and clean architecture.

---

## ✨ Features

- 🔍 Search restaurants by name or category  
- 🎚️ Filter restaurants by rating and popularity  
- 🛒 Add, remove, and update items in the cart  
- 📱 Fully responsive design  
- ⚡ Dynamic data rendering  
- 🧪 Test-ready setup  

---

## ⚛️ React Features Used

| Feature | Purpose |
|-------|--------|
| Functional Components | Modular and reusable UI |
| useState | Local state management |
| useEffect | Data fetching and lifecycle handling |
| Redux | Global state (cart, restaurant data) |
| Conditional Rendering | UI updates based on state |
| Custom Hooks | Logic reuse |

---

## 🛠️ Technologies Used

- React
- Redux
- Parcel
- Tailwind CSS
- Jest
- Babel
- PostCSS

---

## 🏗️ Project Architecture

~~~text
foodie-react-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/                # Static files
│   ├── components/            # Reusable components
│   ├── pages/                 # Page-level components
│   ├── redux/                 # Redux store & slices
│   │   ├── store.js
│   │   └── features/
│   ├── services/              # API services
│   ├── utils/                 # Helper functions
│   ├── styles/                # Tailwind styles
│   ├── App.jsx
│   └── index.jsx
├── .babelrc
├── jest.config.js
├── parcel.config.js
├── tailwind.config.js
├── package.json
└── README.md
~~~

---

## 🧪 Testing

This project uses **Jest** for unit testing.

~~~bash
npm test
~~~

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

~~~bash
git clone https://github.com/kavita-mahato/foodie-react-app.git
cd foodie-react-app
~~~

### 2️⃣ Install Dependencies

~~~bash
npm install
~~~

### 3️⃣ Start Development Server

~~~bash
npm start
~~~

App runs at:

~~~text
http://localhost:1234
~~~

---

## 📌 Future Enhancements

- Authentication
- Backend integration
- Checkout flow
- Improved test coverage

---

## 🤝 Contributing

Contributions are welcome:
1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push and open a PR

---

## 📄 License

Licensed under the **MIT License**.

---

## 🙌 Acknowledgements

- React Community
- Tailwind CSS
- Open-source contributors

---

**Built with ❤️ using React**
