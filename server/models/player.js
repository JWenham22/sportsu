const express = require('express');
const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    dateBorn: {
        type: Date,
        required: true
    }
})