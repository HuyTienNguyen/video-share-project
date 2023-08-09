import { Cookies } from "react-cookie";

const cookies = new Cookies();

const serviceUser = {
  getAccessToken: () => {
    const token = cookies.get("JWT_TOKEN");
    return token ? token : null;
  },

  storeAccessToken: (token: string | null) => {
    if (token) {
      cookies.set("JWT_TOKEN", token);
      return;
    }
    cookies.remove("JWT_TOKEN");
  },
};

export default serviceUser;
