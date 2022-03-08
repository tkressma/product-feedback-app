import jwt from "jsonwebtoken";

/* Checks for a user token to confirm or deny any actions within the application (like, comment, post) */

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // Check to see if the token is not from google auth

    let decodedData;

    if (token && isCustomAuth) {
      // Custom Auth
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      // Google Auth
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next(); // Proceed to perform the action in the user controller
  } catch (error) {
    console.log(error.message);
  }
};

export default auth;
