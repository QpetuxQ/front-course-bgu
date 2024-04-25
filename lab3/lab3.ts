type Push<T extends any[], V> = [...T, V];

// Пример использования для проверки:
type InitialArray = [1, 2, 3];
type ExtendedArray = Push<InitialArray, 4>; // Должен быть типом [1, 2, 3, 4]
