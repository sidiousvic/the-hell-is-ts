/* This is a type declaration file.

Type declarations in a d.ts file are by default accesible globally in a TS project.

These cease to be type declaration files if the import/export keywords are used. That means types here would not be automatically accessible to the TS service

In a case where symbols are exported/imported, the file will act as a common module
and other .ts files will have to import these individually to access them.
*/

/* ↯
This is a type declaration
↯ */
type Model3D = {
  file: string;
  material: {
    shader: string;
  };
};

/* ↯
Below is a module declaration block.
Uncomment it to fix the no declaration error in src/module.ts.
Specifies to the TS compiler how to import and type this module.
↯ */
// declare module "*.glsl" {
//   const value: string;
//   export default value;
// }
