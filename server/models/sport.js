const express = require('express');
const mongoose = require('mongoose');

const sportSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('Sports', sportSchema);