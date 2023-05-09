const connection = require("../db/connection")();

module.exports = {
  logOut: (req, res) => {
    const { user_id } = req.body;
    req.session.destroy();
    connection.query(
      `update user set status = "in-active" where user_id = ${user_id}`,
      (err) => {
        if (err) console.log(err);
      }
    );
    return res.status(200).send();
  },
};
