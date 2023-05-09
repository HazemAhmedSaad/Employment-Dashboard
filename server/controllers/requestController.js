const connection = require("../db/connection")();

module.exports = {
  getRequests: (req, res) => {
    const sql = `SELECT * FROM request_job`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },

  getRequest: (req, res) => {
    const { user_id } = req.params;
    const sql = `SELECT * FROM request_job where user_id = ${user_id}`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },

  sendRequest: (req, res) => {
    const sql = `select * from request_job where user_id = ${req.body.user_id} and job_id = ${req.body.job_id}`;
    connection.query(sql, (err, result, fields) => {
      if (err) {
        return res.json(err);
      } else if (!result[0]) {
        const date = new Date();
        const sql =
          "INSERT INTO request_job (`user_id`,`job_id`,`response`,`date`) VALUES (?)";
        const values = [
          req.body.user_id,
          req.body.job_id,
          3,
          date.toISOString().slice(0, 10),
        ];
        connection.query(sql, [values], (err, data) => {
          if (err) return res.json(err);
          return res
            .status(201)
            .json({ msg: "The request has been sent successfully" });
        });
      } else {
        return res
          .status(400)
          .json({ msg: "you have already requested this job" });
      }
    });
  },

  respondToRequest: (req, res) => {
    const { user_id, job_id } = req.params;
    const newData = req.body;
    const sql = `update request_job set response = "${newData.response}" where user_id = ${user_id} and job_id = ${job_id}`;
    connection.query(sql, (err) => {
      if (err) {
        res.status(400).json({ msg: err.sqlMessage });
      } else {
        res.status(200).json({ msg: "updated successfully" });
      }
    });
  },

  deleteRequest: (req, res) => {
    const user_id = req.params.user_id;
    const job_id = req.params.job_id;
    const sql = `DELETE FROM request_job WHERE user_id = ${user_id} and job_id = ${job_id}`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },
};
