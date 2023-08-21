const INSERT_NEW_USER = `
  INSERT INTO 
    Users 
  VALUES(:email, :password, :firstName, :lastName, :address, :phone, :birthday, :role)
  RETURN *
`;

module.exports = {
  INSERT_NEW_USER,
};
