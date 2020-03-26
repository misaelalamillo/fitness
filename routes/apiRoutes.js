const db = require("../models")

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
    db.create(req.body).then(function(Workout) {
        res.json(Workout)
    })
})

app.put("/api/workouts/:WorkoutId", function(req, res) {
    db.findOne({where: {id: req.params.id }})
    .then(function(response) {
        res.json(response.dataValues)
        })
    })
}