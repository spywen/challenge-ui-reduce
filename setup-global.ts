// My testing helpers
export async function it(title, callback) {
  try {
    await callback();
    console.log(`✔ ${title}`);
  } catch (error) {
    console.error(`× ${title}`);
    console.error(error);
  }
}

export async function describe(title, callback) {
  try {
    console.log(`${title}`);
    await callback();
  } catch (error) {}
}

export function expect(actual) {
  return {
    toBe(expected) {
      switch (typeof expected) {
        case 'object':
          if (JSON.stringify(actual) !== JSON.stringify(expected)) {
            throw new Error(
              `${JSON.stringify(actual)} is not equal to ${JSON.stringify(
                expected
              )}`
            );
          }
          break;
        default:
          if (actual !== expected) {
            throw new Error(`${actual} is not equal to ${expected}`);
          }
          break;
      }
    },
    toBeTruthy() {
      if (actual !== true) {
        throw new Error(`Current value is not true`);
      }
    },
    toBeFalsy() {
      if (actual !== false) {
        throw new Error(`Current value is not false`);
      }
    },
  };
}
