// @desc Get all goals
// @route GET /api/goals
// @access Public
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goals
// @route POST /api/goals
// @access Public
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a text");
  }
  res.status(200).json({ message: "Post goals" });
};

// @desc Update goals
// @route PUT /api/goals/:id
// @access Public
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal with id ${req.params.id}` });
};
// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Public

const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal with id ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
