const multiplyValue = (
  value: number,
  multiplier: number | undefined = 2,
): number => {
  return value * multiplier;
};

const processInput = (
  value: string | number | boolean,
): string | number | undefined => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean" && value) {
    return "Active";
  } else {
    return "Inactive";
  }
};

type TLocation = readonly [number, number, string];

const formatCoordinate = (locationTupple: TLocation): string => {
  return `Location:${locationTupple[2]} (${locationTupple[0]},${locationTupple[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const joinedArray = arrays.flat(Infinity) as T[];
  return joinedArray;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
const manager = new Manager("Alice", 50000, "Engineering");



const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

const isAccessOk = async () => {
  try {
    const result = await validateAgeAsync(2);
    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

isAccessOk();
