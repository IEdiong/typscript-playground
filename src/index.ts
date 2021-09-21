// The Basics

// The primitives: string, number, and boolean
let fname: string = "Joe";
let age: number = 23;
let isSaved: boolean = true;
// The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.

// Arrays
const telNumber: number[] = [8012334444, 8112223222, 9012221212];
const customer: string[] = ["Joe", "Jill", "Susan"];
// You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.
// Note that [number] is a different thing; refer to the section on Tuples.

// any
let userId: any = "justus24";
// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

// noImplicitAny
// const fn1 = (username) => {
//   console.log(`Hello ${username}`);
//   console.log(
//     "The compiler flag 'noImplicitAny' is flagging 'username' as an error because the type is set implicitly to 'any'."
//   );
// };

const fn2 = (username: string) => {
  console.log(`Hello ${username}`);
};
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
// fn1("Joe");

// Type Annotations on Variables
// TypeScript doesn’t use “types on the left”-style declarations like int x = 0; Type annotations will always go after the thing being typed.
let myName: string = "Ediongsenyene";

// Functions
const url = "https://www.g-lh.org/lh-02";
const regexpTest = /\b^w+\b/g;
console.log(url.match(regexpTest));
