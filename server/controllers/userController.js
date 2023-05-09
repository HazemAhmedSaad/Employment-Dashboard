const connection = require("../db/connection")();
const bcrypt = require("bcrypt");

module.exports = {
  getApplicants: (req, res) => {
    connection.query("select * from user", (err, result) => {
      if (err) {
        console.log(err);
        res.status(404).json("failed to read files");
      } else {
        res.status(200).json(result);
      }
    });
  },

  getApplicant: (req, res) => {
    const { user_id } = req.params;
    connection.query(
      `select * from user where user_id = ${user_id}`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(404).json("failed to read files");
        } else {
          res.status(200).json(result);
        }
      }
    );
  },

  addNewUser: (req, res) => {
    const newData = req.body;
    let skill_ids = [];
    const skills = newData.skill.split(",");
    for (let i = 0; i < skills.length || i === 0; i++) {
      connection.query(
        `select skill_id from skill where skill = "${skills[i]}"`,
        async (err, result, fields) => {
          skill_ids[i] = result[0];
          skill_ids = skill_ids.filter((elem) => {
            return elem != null;
          });
          if (i >= skills.length - 1) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            connection.query(
              "insert into user set?",
              {
                name: newData.name,
                Email: newData.Email,
                password: hashedPassword,
                phone: newData.phone,
                status: newData.status,
                type: newData.type,
                bio: newData.bio,
              },
              (err, result, fields) => {
                if (err) {
                  return res.status(500).json(err);
                } else {
                  let id = result.insertId;
                  skill_ids.forEach((elem) => {
                    const sql = `insert into user_skills (skill_id, user_id) values (${elem.skill_id}, ${id})`;
                    connection.query(sql, (err, result) => {
                      if (err) {
                        return res.status(500).json(err);
                      }
                    });
                  });
                  return res
                    .status(201)
                    .json({ msg: "user successfully has been added" });
                }
              }
            );
          }
        }
      );
    }
  },

  updateUser: (req, res) => {
    const { user_id } = req.params;
    let skill_ids = [];
    const sql = `SELECT * FROM user where user_id = ${user_id}`;
    connection.query(sql, (err, result, fields) => {
      if (err) {
        return res.status(400).json(err);
      } else if (result[0]) {
        const newData = req.body;
        const skills = newData.skill.split(",");
        for (let i = 0; i < skills.length || i === 0; i++) {
          connection.query(
            `select skill_id from skill where skill = "${skills[i]}"`,
            async (err, result, fields) => {
              skill_ids[i] = result[0];
              skill_ids = skill_ids.filter((elem) => {
                return elem != null;
              });
            }
          );
          if (i >= skills.length - 1) {
            connection.query(
              `delete from user_skills where user_id in (${user_id})`,
              (err, result, fields) => {
                if (err) return res.status(500).send(err);
              }
            );
          }
        }
        connection.query(
          "update user set? where?",
          [
            {
              name: newData.name,
              Email: newData.Email,
              // password: newData.password,
              phone: newData.phone,
              status: newData.status,
              bio: newData.bio,
            },
            { user_id: user_id },
          ],
          (err) => {
            if (err) {
              return res.status(500).json(err);
            } else {
              skill_ids.forEach((elem) => {
                const sql = `insert into user_skills (skill_id, user_id) values (${elem.skill_id}, ${user_id})`;
                connection.query(sql, (err, result) => {
                  if (err) {
                    return res.status(500).json(err);
                  }
                });
              });
              return res
                .status(201)
                .json({ msg: "user has been updated successfully" });
            }
          }
        );
      } else {
        return res.status(404).json({ msg: "no user was found" });
      }
    });
  },

  deleteUser: (req, res) => {
    const { user_id } = req.params;
    connection.query(
      `delete from user_skills where user_id in (${user_id})`,
      (err, result, fields) => {
        if (err) throw res.status(500).send(err);
      }
    );
    connection.query(
      "delete from user where ?",
      { user_id: user_id },
      (err) => {
        if (err) {
          res.statusCode = 500;
          console.log(err);
          res.json({ msg: "failed to delete user" });
        } else {
          res.json({ msg: "successfully deleted" });
        }
      }
    );
  },

  getRequests: (req, res) => {
    const sql = `SELECT * FROM request_job`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },
};
