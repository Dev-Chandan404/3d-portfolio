const originalWarn = console.warn;
const originalError = console.error;

console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (
      args[0].includes('THREE.Clock') ||
      args[0].includes('OTS parsing error') ||
      args[0].includes('invalid sfntVersion') ||
      args[0].includes('WebGLProgram') ||
      args[0].includes('warning X4122')
    )
  ) return;
  originalWarn(...args);
};

console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (
      args[0].includes('OTS parsing error') ||
      args[0].includes('Failed to decode') ||
      args[0].includes('invalid sfntVersion')
    )
  ) return;
  originalError(...args);
};