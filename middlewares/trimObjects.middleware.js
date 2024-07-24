/** __________ Trim Objects Middleware __________ */
export const trimObjects = (req, res, next) => {
  const obj = req.body;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
    } else if (typeof obj[key] === "object") {
      trimObjects(obj[key]);
    }
  }
  next();
};
