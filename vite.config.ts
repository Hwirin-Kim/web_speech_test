import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    host: true, // 0.0.0.0 으로 개방
    port: 5174, // ngrok과 동일한 포트 사용
    strictPort: true, // 포트 강제 지정
    cors: true, // CORS 허용
    origin: "*", // 모든 출처 허용 (보안상 주의 필요)
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  },
});
