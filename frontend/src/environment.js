let IS_PROD = true;
const server = IS_PROD
  ? "https://nebuliix-back.onrender.com/api/v1/users"
  : "http://localhost:8000/api/v1/users";

export default server;
