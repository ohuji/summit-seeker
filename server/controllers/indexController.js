"use strict";

const indexModel = require("../models/indexModel");

const get_popular_journeys = async (req, res) => {
    const journeys = await indexModel.getPopularJourneys(res);

    res.json(journeys);
};

const get_latest_journeys = async (req, res) => {
    const journeys = await indexModel.getLatestJourneys(res);

    res.json(journeys);
};

module.exports = {
    get_popular_journeys,
    get_latest_journeys,
};