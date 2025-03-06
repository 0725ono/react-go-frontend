import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  // `mode` に基づいて `.env` ファイルを読み込みます
  // 第3引数に空文字列を指定して、`VITE_` プレフィックスなしで環境変数を取得
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    server: {
      port: Number.parseInt(env.PORT || '5173'), // 環境変数PORTを使用
    },
  };
});