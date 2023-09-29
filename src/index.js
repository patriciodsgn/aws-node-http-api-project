module.exports.index = async (event) => {
  return {
    status: 200,
    body: JSON.stringify(
      {
        message: "Server is ok"
      },
      null,
      2
    ),
  };
};
