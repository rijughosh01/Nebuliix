let IS_PROD = true;
const server = IS_PROD
  ? "http://localhost:8000"
  : "https://nebuliix-backend.vercel.app";

export default server;
