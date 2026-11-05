import Constants from "expo-constants";

const ENV = {
  development: {
    GRAPHQL_URL: "https://tarkari-backend-production.up.railway.app/graphql",
    WS_GRAPHQL_URL: "wss://tarkari-backend-production.up.railway.app/graphql",
    SERVER_URL: "https://tarkari-backend-production.up.railway.app/",
    GOOGLE_MAPS_API_KEY: "YOUR_GOOGLE_MAPS_API_KEY",
    
    AMPLITUDE_API_KEY: "",
    STRIPE_PUBLIC_KEY: "",
    STRIPE_IMAGE_URL: "https://tarkari-backend-production.up.railway.app/assets/images/logo.png",
    STRIPE_STORE_NAME: "Tarkari Express",
    
    APP_NAME: "Tarkari Express",
    APP_TAGLINE: "Fresh vegetables in 20 minutes",
    PRIMARY_COLOR: "#0C831F",
    SECONDARY_COLOR: "#FFD24A",
    
    DEFAULT_CITY: "Trichy",
    DEFAULT_STATE: "Tamil Nadu",
    DEFAULT_COUNTRY: "India",
    DEFAULT_CURRENCY: "INR",
    DEFAULT_LANGUAGE: "en",
  },
  production: {
    GRAPHQL_URL: "https://tarkari-backend-production.up.railway.app/graphql",
    WS_GRAPHQL_URL: "wss://tarkari-backend-production.up.railway.app/graphql",
    SERVER_URL: "https://tarkari-backend-production.up.railway.app/",
    GOOGLE_MAPS_API_KEY: "YOUR_GOOGLE_MAPS_API_KEY",
    
    AMPLITUDE_API_KEY: "",
    STRIPE_PUBLIC_KEY: "",
    STRIPE_IMAGE_URL: "https://tarkari-backend-production.up.railway.app/assets/images/logo.png",
    STRIPE_STORE_NAME: "Tarkari Express",
    
    APP_NAME: "Tarkari Express",
    APP_TAGLINE: "Fresh vegetables in 20 minutes",
    PRIMARY_COLOR: "#0C831F",
    SECONDARY_COLOR: "#FFD24A",
    
    DEFAULT_CITY: "Trichy",
    DEFAULT_STATE: "Tamil Nadu",
    DEFAULT_COUNTRY: "India",
    DEFAULT_CURRENCY: "INR",
    DEFAULT_LANGUAGE: "en",
  },
};

const getEnvVars = (env = Constants.manifest?.releaseChannel) => {
  if (__DEV__) {
    return ENV.development;
  } else if (env === "production") {
    return ENV.production;
  } else {
    return ENV.production;
  }
};

export default getEnvVars;