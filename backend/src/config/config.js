module.exports = {
  dialect: "mysql",
  host: "containers-us-west-90.railway.app",
  username: "root",
  password: "CVDrk4dp5MT78DAUUtzW",
  database: "railway",
  port: "5812",
  dialectModule: require('mysql2'),
  define: {
    timestamp: true,
    underscored: true,
  },
};