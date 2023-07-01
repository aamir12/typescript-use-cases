//Question 1
// How to create Typescript interface?
// export interface IUser {
//   id: string;
//   name: string;
//   age: number;
//   getMessage(): string;
// }

// const user: IUser = {
//   id: '11',
//   name: 'aamir',
//   age: 30,
//   getMessage() {
//     return self.name;
//   },
// };

//Question 2
//How to define Typescript array?
// const info: string[] = []; //normal way
// const info1: Array<string> = []; //generic way

// const info3: (number | string)[] = ([] = ['string', 33]);
// const info4: Array<number | string> = ['string', 45];

//Question 3
//What is Assertion

//Bad Way
// const getItem = (item: number | undefined) => {
//   //return (item as number).toString();
//   return (<number>item).toString(); //generic
// };

// //Good Way
// const getItemBetter = (item: number | undefined) => {
//   if (!item) {
//     return null;
//   }

//   return item.toString();
// };

//Question 4

//What is Void and Unkwnon
// when we create function and do not return anything. Typescript by default set it return type void.

//Unknow

// //any mean disable typescript support
// const vAny: any = 10;
// const vUnknown: unknown = 'string';

// const str1: string = vAny; // not getting error

// //const str4: string = vUnknown;
// //we alway need to define type by using type assertion
// const str2: string = vUnknown as string;
// const str3: string = <string>vUnknown;

// //console.log(vAny.foo())
// //console.log(vUnknown.foo())
// interface FooObj {
//   foo(): void;
// }

// //console.log((vUnknown as FooObj).foo())

//Question 5

// interface UserInterface {
//   id: string;
//   name: string;
//   age: number;
//   getMessage(): string;
// }

// interface ProfileInterface {
//   name: string;
//   isActive?: boolean;
//   profileUrl: string;
// }

// function transform(
//   user: UserInterface,
//   status: boolean = true
// ): ProfileInterface {
//   const profileUser: ProfileInterface = {
//     name: user.name,
//     profileUrl: `profiles/${user.name}`,
//     isActive: status,
//   };

//   return profileUser;
// }

//Question 6
//Elvis operator;

//it just checks the nesting of the property without breaking the code.
// interface User {
//   id: string;
//   name: string;
// }

// const getName = (user?: User): string => {
//   return user?.name ?? 'Not Set';
// };

// getName();

//Question 7
//What is enum
//it is a way defining list of constant at single place.
//it allows us to define hardcoded value at one place and reuse it mulitple places.
//It acts as both value and type

// enum StatusEnum {
//   PENDING = 'pending',
//   SUCCESS = 'success',
//   REFUND = 'refund',
//   FAIL = 'fail',
// }

// //type in paramer
// const isSuccessed = (status: StatusEnum) => {
//   return status === StatusEnum.SUCCESS; //compare in value
// };

// const user = {
//   status: 'success',
// };

// isSuccessed(StatusEnum.SUCCESS);
// //need to use assertion type;
// isSuccessed(user.status as StatusEnum);

//Question 8

//How to create custom type and when does it make sense

//it is used for increasing type readibility
// export type USERID = string;
// const userId: USERID = 'PM343';

// //we can also create type from interface;
// export interface UserInterface {
//   firstName: string;
//   lastName: string;
//   age: number;
//   address: string;
//   id: string;
// }

// type fullName = Pick<UserInterface, 'firstName' | 'lastName'>;

// type userProfile = Omit<UserInterface, 'firstName' | 'lastName'>;

//Question 9
//what is generic type;
//we can create resuseable type

// interface IResponse<T> {
//   status: boolean;
//   statusCode: number;
//   data: T;
// }

// const result: IResponse<number[]> = {
//   status: true,
//   statusCode: 200,
//   data: [1, 2, 3],
// };
