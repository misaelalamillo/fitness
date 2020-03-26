const path = require("path")
const db = require("../models")

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise/:id", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
};