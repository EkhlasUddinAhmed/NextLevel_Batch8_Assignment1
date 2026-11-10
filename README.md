# TypeScript Assignment — Problem Solving Summary

This assignment contains **8 problems** designed to test core TypeScript concepts including optional/default parameters, union types, type narrowing, readonly tuples, generics, interfaces, OOP, and Promises.

---

## Problem 1: `multiplyValue` — Optional Parameter

I have created a function that accepts a number and an optional multiplier. If the multiplier is not provided, default to `2`.

---

## Problem 2: `processInput` — Union Type & Type Narrowing

I have created a function that accepts a value of type string, number, boolean value  and returns a formatted result based on the input type. Strings should be trimmed and lowercased, numbers multiplied by 10, and booleans converted to "Active" or "Inactive".
---

## Problem 3: `formatCoordinate` — Readonly Tuple

I have created a function that accepts a readonly tuple [latitude, longitude, locationName] and returns a formatted location string in the exact format "Location: [locationName] ([latitude], [longitude])" .

---

## Problem 4: `concatenateArrays` — Generics & Rest Parameters

I have created a generic function that accepts multiple arrays of the same type `T` using rest parameters (`...arrays: T[][]`) and returns a single combined array containing all elements in the order they were passed. I have not used type `any` in the code.

---

## Problem 5: `getPopularCourses` — Interface & Array Filter

I have defined a Course interface with title (string), students (number), and isPublished (boolean). I have Created a function also that accepts an array of Course objects and a minStudents number, returning a new array containing only published courses with students >= minStudents`.

---

## Problem 6: `pluckValues` — Generics with `keyof`

I have created a generic function that accepts an array of objects  and a valid property key name, returning a new array  containing the values of that specific property from each object in the same order.

---

## Problem 7: `Employee` & `Manager` — OOP with Access Modifiers

I have created an Employee class with a protected name and a private baseSalary, and a getDetails() method returning "Employee: [name], Base Salary: [baseSalary]". Create a Manager subclass extending Employee, adding a private department, and a getRoleInfo() method returning "Manager of [department]: [name].

---

## Problem 8: `validateAgeAsync` — Promise & Async

I have created an async function that accepts a number age and returns Promise<string>. If age is equal or more than 18 years, the function resolve after 1 second with "Access Granted". If age is less the 18, reject immediately with new Error("Access Denied: Must be 18 or older"). The return type have properly typed, and reject call use an Error instance.
