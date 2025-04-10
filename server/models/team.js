const express = require('express');
const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    sport: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);