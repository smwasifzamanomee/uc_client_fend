const EmailValidationHelper = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
        console.log("Valid email");
      return true;
    } else {
      return false;
    }
}
export default EmailValidationHelper