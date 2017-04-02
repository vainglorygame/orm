/* jshint esnext:true */
'use strict';

module.exports = (seq, Seq) => {
    let Match = seq.import("./models/match.js"),
        Asset = seq.import("./models/asset.js"),
        Roster = seq.import("./models/roster.js"),
        Participant = seq.import("./models/participant.js"),
        ParticipantExt = seq.import("./models/participant_ext.js"),
        ParticipantItemUse = seq.import("./models/participant_item_use.js"),
        Player = seq.import("./models/player.js"),
        PlayerExt = seq.import("./models/player_ext.js"),
        Item = seq.import("./models/item.js");

    Match.hasMany(Asset, {as: "Assets"});
    Asset.belongsTo(Match);
    Roster.belongsTo(Match, { foreignKey: "match_api_id", targetKey: "api_id" });
    Participant.belongsTo(Roster, { foreignKey: "roster_api_id", targetKey: "api_id" });
    Participant.belongsTo(Player, { foreignKey: "player_api_id", targetKey: "api_id" });
    ParticipantItemUse.belongsTo(Participant, { foreignKey: "participant_api_id", targetKey: "api_id" });
    PlayerExt.belongsTo(Player, { foreignKey: "player_api_id", targetKey: "api_id" });

    return {Match, Roster, Participant, ParticipantExt, ParticipantItemUse, Player, PlayerExt, Asset, Item};
};
