##Some practical example of combining Union (|) and Intersection (&) types in TypeScript.


type TUser = {
  id: string;
  name: string;
};

type TAdmin = {
  role: "admin";
  isActive: boolean;
};

type TStudent = {
  role: "student";
  courses: string[];
};

type TAdminUser = TUser & TAdmin; // TAdminUser must contain all properties of TUser and TAdmin, No extra property  can be added here.....

const admin: TAdminUser = {
  id: "1",
  name: "Ekhlas",
  role: "admin",
  isActive: true,
};

type TStudentUser = TUser & TStudent; // TStudentUser must contain all properties of TUser and TStudent, No extra property  can be added here.....

const student: TStudentUser = {
  id: "2",
  name: "Ekhlas",
  role: "student",
  courses: ["Contract Law", "React.js"],
};

type TAnyUser = TAdmin | TUser; // TAnyUser must contain all properties of Either TAdmin or  TUser

const user1: TAnyUser = {
  id: "123",
  name: "Belal",
};
const user2: TAnyUser = {
  role: "admin",
  isActive: false,
};

function printUser(user: TUser | TStudentUser) {
  if ("role" in user) {
    console.log("User is  StudentUser");
  } else {
    console.log("User is Normal User");
  }
}

printUser(user1);

printUser(student);
