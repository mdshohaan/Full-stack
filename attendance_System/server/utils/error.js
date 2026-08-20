export function error(msg = "Something went Wrong", status = 500) {
  const e = new Error(msg);
  e.status = 400;
  return e;
}
