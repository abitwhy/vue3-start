module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\js$': 'babel-jest',
    // '^.+\\.vue$': 'vue-jest',
  },
  // 支持引入到测试文件中的文件类型
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx' /*, 'vue' */],
  // 仅测试符合规则（路径、文件名及后缀）的测试文件（相当于其它配置中的 includes）。默认规则为 `**/*.test.js`
  testMatch: ['**/tests/**/*.test.js', '**/__tests__/**/*.test.js'],
  // 测试文件文件中引入模块的路径映射（相当于其它配置中的 alias）
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
