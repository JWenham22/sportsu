const express = require('express');
const mongoose = require('mongoose');

const sportSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sports', sportSchema);