/* jshint esnext:true */
'use strict';

module.exports = (seq, Seq) => {
    let Match = seq.import("./models/match.js"),
        Asset = seq.import("./models/asset.js"),
        Roster = seq.import("./models/roster.js"),
        Participant = seq.import("./models/participant.js"),
        ParticipantExt = seq.import("./models/participant_ext.js"),
        ItemParticipant = seq.import("./models/item_participant.js"),
        Player = seq.import("./models/player.js"),
        PlayerExt = seq.import("./models/player_ext.js"),
        Item = seq.import("./models/item.js");

    Roster.belongsTo(Match, { foreignKey: "match_api_id", targetKey: "api_id" });
    Participant.belongsTo(Roster, { foreignKey: "roster_api_id", targetKey: "api_id" });

    return {Match, Roster, Participant, ParticipantExt, ItemParticipant, Player, PlayerExt, Asset, Item};
};
