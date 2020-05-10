'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      level: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    {}
  )
  return User
}
