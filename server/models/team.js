const express = require('express');
const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {
        type: string,
        required: true 
    },
    stadium: {
        type: string,
        required: true
    },
    league: {
        type: string,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);