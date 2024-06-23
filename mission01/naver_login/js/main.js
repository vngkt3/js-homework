/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const emailInput = document.querySelector("#userEmail");
  const passwordInput = document.querySelector("#userPassword");

  // 정의된 유효한 자격 증명
  const validCredentials = {
    email: "user@example.com",
    password: "password123!",
  };

  // 사용자 객체
  const user = {
    id: "user@example.com",
    pw: "password123!",
  };

  // 정규 표현식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    // 이메일 유효성 검사
    const isEmailValid = emailRegex.test(enteredEmail);

    if (isEmailValid) {
      emailInput.classList.remove("is--invalid");
    } else {
      emailInput.classList.add("is--invalid");
    }

    // 비밀번호 유효성 검사
    const isPasswordValid = passwordRegex.test(enteredPassword);

    if (isPasswordValid) {
      passwordInput.classList.remove("is--invalid");
    } else {
      passwordInput.classList.add("is--invalid");
    }

    // 입력된 이메일과 비밀번호가 user 객체의 값과 일치하는지 확인
    const isIdValid = enteredEmail === user.id;
    const isPwValid = enteredPassword === user.pw;

    // 유효성 검사 및 일치 여부 확인
    if (isEmailValid && isPasswordValid && isIdValid && isPwValid) {
      // 모든 조건을 만족하면 welcome 페이지로 이동
      window.location.href = "welcome.html";
    } else {
      if (!isEmailValid || !isIdValid) {
        document.querySelector("#userEmailError").style.display = "block";
        emailInput.setAttribute("aria-invalid", "true");
      } else {
        document.querySelector("#userEmailError").style.display = "none";
        emailInput.setAttribute("aria-invalid", "false");
      }

      if (!isPasswordValid || !isPwValid) {
        document.querySelector("#userPasswordError").style.display = "block";
        passwordInput.setAttribute("aria-invalid", "true");
      } else {
        document.querySelector("#userPasswordError").style.display = "none";
        passwordInput.setAttribute("aria-invalid", "false");
      }
    }
  });
});
