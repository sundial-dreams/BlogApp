import cookies from "react-cookies";

export const mergeClassName = (...className) => className.filter(v => v).join(" ");

export function convertTime (longNumber) {
  let number = Number(longNumber);
  number = parseInt(number / 1000);
  if (number > 0 && number < 60) {
    return number + " sec"
  } else {
    number = parseInt(number / 60);
    if (number > 0 && number < 60) {
      return number + " min"
    } else {
      number = parseInt(number / 60);
      if (number > 0 && number < 24) {
        return number + " hour"
      } else {
        number = parseInt(number / 24);
        if (number > 0 && number < 30) {
          return number + " day"
        } else {
          number = parseInt(number / 30);
          if (number > 0 && number < 12) {
            return number + " mouth"
          } else {
            number = parseInt(number / 12);
            return number + " year"
          }
        }
      }
    }
  }
}


export function validateEmail (email) {
  const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  if (!email) {
    return {
      err: true,
      message: "未输入邮箱"
    }
  }
  if (!reg.test(email)) {
    return {
      err: true,
      message: "邮箱格式错误"
    }
  }
  return {
    err: false
  }
}

export function validatePassword (password) {
  const reg = /[A-Za-z0-9]{6,15}/;
  if (!password) {
    return {
      err: true,
      message: "未输入密码"
    }
  }
  if (!reg.test(password)) {
    return {
      err: true,
      message: "密码格式错误，请输入A~Z,a~z,0~9，且长度为6-15的密码"
    }
  }
  return {
    err: false
  }
}

export function validateNickname (nickname) {
  const reg = /[a-zA-Z0-9\-_.]{5,10}/;
  if (!nickname) {
    return {
      err: true,
      message: "未输入昵称"
    }
  }
  if (!reg.test(nickname)) {
    return {
      err: true,
      message: "昵称格式错误，请输入a~z,A~Z,0~9,特殊字符_-.的昵称"
    }
  }
  return {
    err: false
  }
}

export const setCookies = id => {
  const expires = new Date(Date.now());
  expires.setDate(expires.getDate() + 2);
  return cookies.save("userId", id, {
    path: "/",
    maxAge: 3600 * 2,
  });
};
export const loadCookies = key => cookies.load(key);

export const removeCookies = key => cookies.remove(key);