module.exports.healthCheck = async (event) => {
  return {
    status: 200,
    body: JSON.stringify(
      {
        message: "Server is ok",
        input: event,
      },
      null,
      2
    ),
  };
};
