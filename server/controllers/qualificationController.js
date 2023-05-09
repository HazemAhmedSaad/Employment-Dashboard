const connection = require("../db/connection")();

module.exports = {
  getQualifications: (req, res) => {
    connection.query(
      "select * from qualification inner join job_qualifications on qualification.qualification_id = job_qualifications.qualification_id",
      (err, result, fields) => {
        if (err) console.log(err);
        return res.status(200).json(result);
      }
    );
  },

  createQualification: (req, res) => {
    const data = req.body;
    connection.query(
      "insert into qualification set ? ",
      {
        qualification: data.qualification,
        qualification_desc: data.qualification_desc,
      },
      (err, result, fields) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.json({
            msg: "qualification has been created successfully",
          });
        }
      }
    );
  },

  getQualification: (req, res) => {
    const { id } = req.params;
    connection.query(
      "select * from qualification where ? ",
      { qualification_id: id },
      (err, result, fields) => {
        if (result[0]) {
          return res.status(200).json(result[0]);
        } else {
          return res.status(404).json({
            msg: "qualification not found",
          });
        }
      }
    );
  },

  updateQualification: (req, res) => {
    const { id } = req.params;
    const data = req.body;

    connection.query(
      "update qualification set ? where ? ",
      [
        {
          qualification: data.qualification,
          qualification_desc: data.qualification_desc,
        },
        { qualification_id: id },
      ],
      (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ msg: "failed to update the qualification" });
        } else {
          return res.status(200).json("qualification updated");
        }
      }
    );
  },

  deleteQualification: (req, res) => {
    const { id } = req.params;
    connection.query(
      `delete from job_qualifications where qualification_id in (${id})`,
      (err, result, fields) => {
        if (err) throw res.status(500).send(err);
      }
    );
    connection.query(
      "delete from qualification where ?",
      { qualification_id: id },
      (err, result) => {
        if (err) {
          return res.status(500).json({
            err,
            msg: "failed to delete the qualification",
          });
        } else {
          return res
            .status(200)
            .json({ msg: "qualification has been deleted successfully" });
        }
      }
    );
  },
};
