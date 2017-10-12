module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格  
    "array-bracket-spacing": [2, "never"],
    // 在块级作用域外访问块内定义的变量是否报错提示  
    "block-scoped-var": 0,
    // if while function 后面的{必须与if在同一行，java风格。  
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    'comma-dangle': [2, 'never'],
    // 文件末尾强制换行  
    "eol-last": 2,
    // 使用 === 替代 ==  
    "eqeqeq": [2, "allow-null"],
    // 缩进采用2个空格
    indent: ['error', 2],
    'linebreak-style': 0,
    quotes: [2, 'single', 'avoid-escape'],
    // 行末尾不家分号
    semi: [2, 'never'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
  },
};