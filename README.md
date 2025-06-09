# 💡 BMI Calculator (React)

A **beginner-friendly Body Mass Index (BMI) Calculator** built using **React**. This project helped me practice functional components, state management with `useState`, form handling, conditional rendering, and clean CSS-based UI styling.

---

## 📌 What I Did

### ✅ App.jsx
- Serves as the root component.
- Imports and renders the `Calc` component from `bmi.jsx`.

### ✅ bmi.jsx
- Built as a functional component using React hooks (`useState`).
- Includes form fields for **weight** and **height**.
- Performs BMI calculation using the imperial formula:  
  *(weight in lbs / (height in inches)^2) × 703*
- Classifies the result into:
  - **Underweight** (BMI < 25)
  - **Healthy** (25 ≤ BMI < 30)
  - **Overweight** (BMI ≥ 30)
- Displays a **custom popup modal** instead of default browser alerts for invalid input.
- Provides a **Reload** button to reset the app state using `window.location.reload()`.

### ✅ bmi.css
- Minimal and clean styling using custom CSS.
- Centers the form layout with flexbox.
- Applies soft gray background for input fields (`#f7f7f7`).
- Aligns buttons and BMI result text centrally.
- Styles the popup modal with shadow, padding, and close functionality.

---

## 🎯 Key Concepts Practiced

- `useState` for managing multiple UI states
- Controlled components in forms
- Conditional rendering (popup logic)
- Clean and responsive UI using CSS
- Component-based structuring in React

---

## 🚀 Tech Stack

- React (with Hooks)
- JavaScript (ES6+)
- HTML5 & CSS3 (no frameworks used)

---

## 📷 Preview

> ![Untitled design](https://github.com/user-attachments/assets/b8344072-b51e-45a6-a501-0823311dc8a2)


---

## 📁 How to Run Locally

```bash
git https://github.com/DevBehindYou/BMI_Calculator_using_React.git
cd BMI_Calculator_using_React
npm install
npm start
