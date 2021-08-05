import { UserConfigExport } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default ({
  mode,
}: {
  mode: 'development' | ' production'
}): UserConfigExport => {
  return {
    base: mode === 'development' ? 'https://localhost:3000/' : '',
    plugins: [reactRefresh(), tsconfigPaths(), svgr()],
  }
}
