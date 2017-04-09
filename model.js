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
        Hero = seq.import("./models/hero.js"),
        Series = seq.import("./models/series.js"),
        GameMode = seq.import("./models/game_mode.js"),
        Role = seq.import("./models/role.js"),
        Filter = seq.import("./models/filter.js"),

        // Telemetry
        ItemParticipant = seq.import("./models/item_participant.js"),

        // data stats
        ParticipantStats = seq.import("./models/participant_stats.js"),

        // stats aggregations
        PlayerPoint = seq.import("./models/player_point.js"),
        GlobalPoint = seq.import("./models/global_point.js");


    Roster.belongsTo(Match, { foreignKey: "match_api_id", targetKey: "api_id" });
    Participant.belongsTo(Roster, { foreignKey: "roster_api_id", targetKey: "api_id" });
    Participant.hasMany(ItemParticipant, { as: "items", foreignKey: "participant_api_id", sourceKey: "api_id" });
    Participant.hasMany(ParticipantStats, { as: "participant_stats", foreignKey: "participant_api_id", sourceKey: "api_id" });
    Participant.belongsTo(GameMode, { foreignKey: "game_mode_id" });
    Participant.belongsTo(Hero, { foreignKey: "hero_id" });
    Participant.belongsTo(Series, { foreignKey: "series_id" });
    Participant.belongsTo(Role, { foreignKey: "role_id" });
    Participant.belongsTo(Filter, { foreignKey: "filter_id" });
    ParticipantStats.belongsTo(Participant, { foreignKey: "participant_api_id", "targetKey": "api_id" });
    ItemParticipant.belongsTo(Item, { foreignKey: "item_id", targetKey: "id" });

    return {
        Match, Roster, Participant, Player, Asset,
        Item, Hero, Series, GameMode, Role, Filter,
        ItemParticipant,
        ParticipantStats,
        PlayerPoint, GlobalPoint
    };
};
