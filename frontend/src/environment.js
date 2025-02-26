let IS_PROD = true;
const server = IS_PROD
  ? "https://videobackend-zeta.vercel.app/"
  : "http://localhost:8000/";

export default server;
