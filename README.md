# TestLogiclike - Мобильное приложение

## 📌 Основные особенности
- Навигация с использованием `@react-navigation/native`  
- Анимации через `react-native-reanimated`  
- Поддержка SVG изображений  
- Кастомизация StatusBar и NavigationBar  
- Полная TypeScript-типизация  
- Модульная структура с алиасами путей  

## 🛠 Технологии
| Категория       | Технологии                          |
|-----------------|-------------------------------------|
| Ядро            | React Native 0.79.2, React 19       |
| Язык            | TypeScript 5.0.4                    |
| Навигация       | React Navigation 7.x                |
| Анимации        | Reanimated 3.x                      |
| HTTP-клиент     | axios                               |
| UI              | @shopify/flash-list                 |

## 🚀 Быстрый старт
```bash
# Установка зависимостей
yarn install

# Для iOS (требуется CocoaPods)
cd ios && pod install && cd ..

# Запуск
yarn android  # или yarn ios

# Metro сервер (отдельное окно терминала)
yarn start
```

## ⚙️ Конфигурация
### Алиасы путей
### Настроены в babel.config.js:
```bash
alias: {
  '@': './src',
  '@components': './src/components',
  // ... другие алиасы
}
```

# SVG
-Используется react-native-svg-transformer

-Конфиг: metro.config.js

-Типы: declarations.d.ts

## Шрифты
Размещаются в:

./assets/fonts/ (конфиг в react-native.config.js)

# 📂 Структура проекта
```bash
src/
├── components/    # Реиспользуемые компоненты
├── screens/       # Экраны приложения
├── constants/     # Цвета, строки и т.д.
├── types/         # Типы TypeScript
├── utils/         # Вспомогательные функции
├── hooks/         # Кастомные хуки
├── services/      # API и сервисы
└── store/         # Состояние (если используется)
```