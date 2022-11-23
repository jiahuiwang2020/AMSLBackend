module.exports = emailValidatorKIT = (email) => {
  const domain = email.substr(email.indexOf("@") + 1);
  return domain.includes("kit.edu");
};
