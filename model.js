/* jshint esnext:true */
"use strict";

module.exports = (seq, Seq) => {
    let // core data
        Match = seq.import("./models/match.js"),
        Asset = seq.import("./models/asset.js"),
        Roster = seq.import("./models/roster.js"),
        Participant = seq.import("./models/participant.js"),
        Player = seq.import("./models/player.js"),

        // mappings
        Item = seq.import("./models/item.js"),

        // Telemetry
        ItemParticipant = seq.import("./models/item_participant.js"),

        // data stats
        ParticipantStats = seq.import("./models/participant_stats.js");


    Roster.belongsTo(Match, { foreignKey: "match_api_id", targetKey: "api_id" });
    Participant.belongsTo(Roster, { foreignKey: "roster_api_id", targetKey: "api_id" });
    //Participant.belongsTo(Heros, { foreignKey: "actor", targetKey: "api_name" });

    return {
        Match, Roster, Participant, Player, Asset,
        Item,
        ItemParticipant,
        ParticipantStats
    };
};
