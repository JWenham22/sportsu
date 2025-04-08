const express = require('express');
const mongoose = require('monogoose');

const leagueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('League', leagueSchema);