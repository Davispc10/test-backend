export default function CatchErrors(target: any, key, descriptor) {
  const originalMethod = descriptor.value;
  let response;

  descriptor.value = async function (...args: any[]) {
    response = args[1];
    try {
      return await originalMethod.apply(this, args);
    } catch (error) {
      response.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode,
      });
    }
  };
  return descriptor;
}
