const express = require('express');
const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    homeTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    homeScore: {
        type: String,
        required: true
    },
    awayScore: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', eventSchema);