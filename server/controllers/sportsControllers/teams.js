const express = require('express');
const router = express.Router();

const Team = require('../../models/team');

const API_KEY = "3";

router.get('/search', async (req, res) => {
    const { teamName } = req.query;

    try {
        
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchteams.php?t=${teamName}`);
        const data = await response.json();

        if (!data.teams || data.teams.length === 0) {
            return res.status(404).json({ error: "Team not found" });
        }

        const teamData = data.teams[0];
        const newTeam = new Team({
            name: teamData.strTeam,
            sport: teamData.strSport,
            league: teamData.strLeague,
            stadium: teamData.strStadium
        });

        const savedTeam = await newTeam.save();
        res.status(200).json(savedTeam);

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

module.exports = router;