/* jshint esnext:true */
"use strict";

module.exports = (seq, Seq) => {
    let // core data
        Match = seq.import("./models/match.js"),
        Asset = seq.import("./models/asset.js"),
        Roster = seq.import("./models/roster.js"),
        Participant = seq.import("./models/participant.js"),
        Player = seq.import("./models/player.js"),

        // Guilds
        Team = seq.import("./models/team.js"),
        TeamMembership = seq.import("./models/team_membership.js"),
        User = seq.import("./models/users.js"),

        // Tournament
        Tournament = seq.import("./models/tournament.js"),
        TournamentParticipants = seq.import("./models/tournament_participants.js"),

        // mappings
        Item = seq.import("./models/item.js"),
        Hero = seq.import("./models/hero.js"),
        Series = seq.import("./models/series.js"),
        GameMode = seq.import("./models/game_mode.js"),
        Role = seq.import("./models/role.js"),
        Filter = seq.import("./models/filter.js"),
        Skilltier = seq.import("./models/skill_tier.js"),
        Build = seq.import("./models/build.js"),
        Region = seq.import("./models/region.js"),

        // data stats
        ParticipantStats = seq.import("./models/participant_stats.js"),
        ParticipantPhases = seq.import("./models/participant_phases.js"),

        // stats aggregations
        PlayerPoint = seq.import("./models/player_point.js"),
        GlobalPoint = seq.import("./models/global_point.js"),

        // registered special users
        Gamer = seq.import("./models/gamer.js"),

        // misc
        Keys = seq.import("./models/keys.js");


    Roster.belongsTo(Match, { foreignKey: "match_api_id", targetKey: "api_id" });
    Participant.belongsTo(Roster, { foreignKey: "roster_api_id", targetKey: "api_id" });
    Participant.hasMany(ParticipantStats, { as: "participant_stats", foreignKey: "participant_api_id", sourceKey: "api_id" });
    /*
    Participant.belongsTo(GameMode, { foreignKey: "game_mode_id" });
    Participant.belongsTo(Hero, { foreignKey: "hero_id" });
    Participant.belongsTo(Series, { foreignKey: "series_id" });
    Participant.belongsTo(Role, { foreignKey: "role_id" });
    Participant.belongsTo(Region, { foreignKey: "shard_id", targetKey: "name" });
    */
    ParticipantStats.belongsTo(Participant, { foreignKey: "participant_api_id", targetKey: "api_id" });

    return {
        Match, Roster, Participant, Player, Asset,
        Team, TeamMembership, User,
        Tournament, TournamentParticipants,
        Item, Hero, Series, GameMode, Role, Filter, Skilltier, Build, Region,
        ParticipantStats, ParticipantPhases,
        PlayerPoint, GlobalPoint,
        Gamer,
        Keys
    };
};
