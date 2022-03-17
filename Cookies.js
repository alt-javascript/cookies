export default class Cookies {
  constructor(logger) {
    this.qualifier = '@alt-javascript/cookies';
    this.logger = logger;
  }

  setCookie(cname, cvalue, exdays, samesite) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    const cookie = `${cname}=${cvalue};${expires};path=/;SameSite=${samesite || 'Strict'}`;
    document.cookie = cookie;
    this.logger?.debug(`Set document.cookie as: ${cookie}`);
  }

  deleteCookie(cname) {
    const d = new Date();
    d.setTime(0);
    const expires = `expires=${d.toUTCString()}`;
    const cookie = `${cname}=;${expires};path=/`;
    document.cookie = cookie;
    this.logger?.debug(`Delete (expire) document.cookie as: ${cname}=${cookie}`);
  }

  getCookie(cname) {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        const cookie = c.substring(name.length, c.length);
        this.logger?.debug(`Found cookie: ${cname}=${cookie}`);
        return c.substring(name.length, c.length);
      }
    }
    this.logger?.debug(`Cookie not found: ${cname}`);
    return '';
  }

  getCookies() {
    const result = document.cookie.split(';').reduce((cookies, cookie) => {
      const [name, value] = cookie.split('=').map((c) => c.trim());
      // eslint-disable-next-line no-param-reassign
      cookies[name] = value;
      return cookies;
    }, {});
    this.logger?.debug(`Found cookies: ${result}`);
    return result;
  }
}
