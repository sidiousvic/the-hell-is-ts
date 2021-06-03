import skullVertexShader from "./skullVertexShader.glsl"; // 🛑 No declaration

/* ↯
Importing modules that are not .ts files, or that don't have declarations, can be tricky. While @ts-ignore is a fallback, there's a better way to inform TS about foreign modules.
↯ */

const skull: Model3D = {
  file: "../skull.glb",
  material: {
    shader: skullVertexShader,
    // 🛑 Cannot find module X or its corresponding type declarations. Uncomment the module declaration in types.d.ts.
    // ✅ The skullVertexShader label should be now correctly typed as a string.
  },
};
