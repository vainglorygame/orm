/* HOLY GODS OF SEMC PLEASE FIX THIS MESS */
module.exports = {
    /*
     * schema:
     *      *ItemName*, *1000_ItemName* -> "Item Name"
     *      *HeroName* -> "Heroname"
     *      Ability__Hero__foobar -> "Hero D"
     *      Buff_Hero_D_Bar -> "Hero perk"
     *      HERO_ABILITY_HERO_D_NAME -> "Hero D"
     *      FoobarMinion -> "Foobar something"
     *
     * =>
     *      item names are many:1 (mapped to ingame name)
     *      hero names are many:1 (mapped to ingame name)
     *      ability names are many:1 (strictly mapped to "Hero " + A/B/C/perk)
     *      NPC names are many:1 (hero specific or "Jungle/Lane Minion",
     *                            "Kraken", "Turret", …)
     *
     */

    "Ability__Grace__A": "Grace A",
    "Ability__Grace__AltAttack": "Grace AA",
    "Ability__Grace__CritAttack": "Grace AAcrit",
    "Ability__Grace__B": "Grace B",
    "Ability__Grace__DefaultAttack": "Grace AA",
    "Ability__Reza__DefaultAttack": "Reza AA",
    "Ability__Reza__AltAttack": "Reza AA",
    "Ability__Reza__CritAttack": "Reza AAcrit",
    "Ability__Reza__C_NetherformAttack": "Reza C",
    "Ability__Reza__C": "Reza C",
    "Ability__Baptiste__DefaultAttack": "Baptiste AA",
    "Ability__Baptiste__AltAttack": "Baptiste AA",
    "Ability__Baptiste__CritAttack": "Baptiste AAcrit",
    "Ability__Baptiste__EmpoweredDefaultAttack": "Baptiste perk",
    "Ability__Baptiste__EmpoweredAltAttack": "Baptiste perk",
    "Ability__Baptiste__EmpoweredCritAttack": "Baptiste perk",
    "Buff_Baptiste_B_TetherActor": "Baptiste B",
    "Buff_Baptiste_B_TetherTarget": "Baptiste B",
    "Buff_Baptiste_Ultimate_DOT": "Baptiste C",
    "Buff_Reza_B_EmpoweredAttack": "Reza B",
    "Buff_Reza_Perk_VolatileSparkControl": "Reza perk",
    "HERO_ABILITY_HERO042_A_NAME": "Grace A",
    "HERO_ABILITY_HERO042_B_NAME": "Grace B",
    "HERO_ABILITY_HERO042_C_NAME": "Grace C",
    "Ability__B_Bounce": "Ozo B",
    "AbilityB_Bounce": "Ozo B",
    "Ability__B_EndingAttack": "Ozo B",
    "AbilityCLeapOff": "Idris C",
    "Ability_Dash": "Vox A",
    "Ability_Grumpjaw_Eat": "Grumpjaw C",
    "Ability__Idris__A_Blink": "Idris A",
    "Ability__Idris__A_Dash": "Idris A",
    "Ability_Leap": "Idris C",  // TODO
    "Ability_SelfDestruct": "Alpha C",
    "Ability__Vox__DashAndFire__AnimateAndFire": "Vox A",
    "Ability__Vox__DashAndFire__Dash": "Vox A",
    "Ability__Vox__DashToLocation": "Vox A",
    "Aegis": "Aegis",
    "Atlas Pauldron": "Atlas Pauldron",
    "Candy - Kissy": "Kissy",
    "Candy - Pegasus Crash": "Pegasus Crash",  // TODO
    "Candy - Taunt": "Taunt",
    "Contraption": "Contraption",
    "Crucible": "Crucible",
    "Crystal Infusion": "Crystal Infusion",
    "C_SpitOut": "Grumpjaw C",
    "Dragonblood Contract": "Dragonblood Contract",
    "Echo": "Echo",
    "Emote_Taunt": "Taunt",
    "Flare": "Flare",
    "Flaregun": "Flare Gun",
    "Fountain of Renewal": "Fountain of Renewal",
    "Halcyon Chargers": "Halcyon Chargers",
    "Halcyon Potion": "Halcyon Potion",
    "HERO_ABILITY_ADAGIO_FORTUNES_SMILE_NAME": "Adagio A",
    "HERO_ABILITY_ADAGIO_FRIENDSHIP_NAME": "Adagio B",
    "HERO_ABILITY_ADAGIO_GASOLINE_SOAKED_NAME": "Adagio C",
    "HERO_ABILITY_ALPHA_A_NAME": "Alpha A",
    "HERO_ABILITY_ALPHA_B_NAME": "Alpha B",
    "HERO_ABILITY_ALPHA_C_NAME": "Alpha C",
    "HERO_ABILITY_ARDAN_A": "Ardan A",
    "HERO_ABILITY_ARDAN_B": "Ardan B",
    "HERO_ABILITY_ARDAN_C": "Ardan C",
    "HERO_ABILITY_BARON_A_NAME": "Baron A",
    "HERO_ABILITY_BARON_B_NAME": "Baron B",
    "HERO_ABILITY_BARON_C_NAME": "Baron C",
    "HERO_ABILITY_CATHERINE_ARCANE_SHIELD_NAME": "Catherine B",
    "HERO_ABILITY_CATHERINE_ASSASSINS_CHARGE_NAME": "Catherine A",
    "HERO_ABILITY_CATHERINE_DEADLY_GRACE_NAME": "Catherine C",
    "HERO_ABILITY_CELESTE_A_NAME": "Celeste A",
    "HERO_ABILITY_CELESTE_B_NAME": "Celeste B",
    "HERO_ABILITY_CELESTE_C_NAME": "Celeste C",
    "HERO_ABILITY_FORTRESS_A_NAME": "Fortress A",
    "HERO_ABILITY_FORTRESS_B_NAME": "Fortress B",
    "HERO_ABILITY_FORTRESS_C_NAME": "Fortress C",
    "HERO_ABILITY_GLAIVE_AFTERBURN_NAME": "Glaive A",
    "HERO_ABILITY_GLAIVE_BLOODSONG_NAME": "Glaive C",
    "HERO_ABILITY_GLAIVE_TWISTED_STROKE_NAME": "Glaive B",
    "HERO_ABILITY_GRUMPJAW_A_NAME": "Grumpjaw A",
    "HERO_ABILITY_GRUMPJAW_B_NAME": "Grumpjaw B",
    "HERO_ABILITY_GRUMPJAW_C_NAME": "Grumpjaw C",
    "HERO_ABILITY_GWEN_A_NAME": "Gwen A",
    "HERO_ABILITY_GWEN_B_NAME": "Gwen B",
    "HERO_ABILITY_GWEN_C_NAME": "Gwen C",
    "HERO_ABILITY_HERO009_BURNING_WOUNDS_NAME": "Krul A",
    "HERO_ABILITY_HERO009_LIFE_FROM_PAIN_NAME": "Krul B",
    "HERO_ABILITY_HERO009_SHIMMERHEART_NAME": "Krul C",
    "HERO_ABILITY_HERO021_A_NAME": "Blackfeather A",
    "HERO_ABILITY_HERO021_B_NAME": "Blackfeather B",
    "HERO_ABILITY_HERO021_C_NAME": "Blackfeather C",
    "HERO_ABILITY_HERO036_A_NAME": "Flicker A",
    "HERO_ABILITY_HERO036_B_NAME": "Flicker B",
    "HERO_ABILITY_HERO036_C_NAME": "Flicker C",
    "HERO_ABILITY_IDRIS_A_NAME": "Idris A",
    "HERO_ABILITY_IDRIS_B_NAME": "Idris B",
    "HERO_ABILITY_IDRIS_C_NAME": "Idris C",
    "HERO_ABILITY_JOULE_ORBITAL_NUKE": "Joule C",
    "HERO_ABILITY_JOULE_RHAPSODY_CANNONS": "Joule A",
    "HERO_ABILITY_JOULE_RHAPSODY_POWERSLIDE": "Joule B",
    "HERO_ABILITY_KESTREL_A_NAME": "Kestrel A",
    "HERO_ABILITY_KESTREL_B_NAME": "Kestrel B",
    "HERO_ABILITY_KESTREL_C_NAME": "Kestrel C",
    "HERO_ABILITY_KOSHKA_FRENZY_NAME": "Koshka C",
    "HERO_ABILITY_KOSHKA_POUNCE_NAME": "Koshka A",
    "HERO_ABILITY_KOSHKA_TWIRL_NAME": "Koshka B",
    "HERO_ABILITY_LANCE_A_NAME": "Lance A",
    "HERO_ABILITY_LANCE_B_NAME": "Lance B",
    "HERO_ABILITY_LANCE_C_NAME": "Lance C",
    "HERO_ABILITY_LYRA_A_NAME": "Lyra A",
    "HERO_ABILITY_LYRA_B_NAME": "Lyra B",
    "HERO_ABILITY_LYRA_C_NAME": "Lyra C",
    "HERO_ABILITY_OZO_A_NAME": "Ozo A",
    "HERO_ABILITY_OZO_B_NAME": "Ozo B",
    "HERO_ABILITY_OZO_C_NAME": "Ozo C",
    "HERO_ABILITY_PETAL_BRAMBLETHORN_SEED_NAME": "Petal A",
    "HERO_ABILITY_PETAL_SHOUT_OF_THE_ENTS_NAME": "Petal B",
    "HERO_ABILITY_PETAL_THORNSTORM_NAME": "Petal C",
    "HERO_ABILITY_PHINN_A_NAME": "Phinn A",
    "HERO_ABILITY_PHINN_B_NAME": "Phinn B",
    "HERO_ABILITY_PHINN_C_NAME": "Phinn C",
    "HERO_ABILITY_REIM_A_NAME": "Reim A",
    "HERO_ABILITY_REIM_B_NAME": "Reim B",
    "HERO_ABILITY_REIM_C_NAME": "Reim C",
    "HERO_ABILITY_REZA_A_NAME": "Reza A",
    "HERO_ABILITY_REZA_B_NAME": "Reza B",
    "HERO_ABILITY_REZA_C_NAME": "Reza C",
    "HERO_ABILITY_RINGO_HELLFIRE_SAKE_NAME": "Ringo C",
    "HERO_ABILITY_RINGO_TWIRLING_SILVER_NAME": "Ringo B",
    "HERO_ABILITY_RINGO_WING_CUT_NAME": "Ringo A",
    "HERO_ABILITY_RONA_A_NAME": "Rona A",
    "HERO_ABILITY_RONA_B_NAME": "Rona B",
    "HERO_ABILITY_RONA_C_NAME": "Rona C",
    "HERO_ABILITY_SAMUEL_A_NAME": "Samuel A",
    "HERO_ABILITY_SAMUEL_B_NAME": "Samuel B",
    "HERO_ABILITY_SAMUEL_C_NAME": "Samuel C",
    "HERO_ABILITY_SAW_EXPLOSIVE_TIPPED_SHELLS_NAME": "SAW C",
    "HERO_ABILITY_SAW_ROADIE_RUN_NAME": "SAW A",
    "HERO_ABILITY_SAW_SUPPRESSING_FIRE_NAME": "SAW B",
    "HERO_ABILITY_SAYOC_A": "Taka A",
    "HERO_ABILITY_SAYOC_B": "Taka B",
    "HERO_ABILITY_SAYOC_C": "Taka C",
    "HERO_ABILITY_SEBA_A_NAME": "Baptiste A",
    "HERO_ABILITY_SEBA_B_NAME": "Baptiste B",
    "HERO_ABILITY_SEBA_C_NAME": "Baptiste C",
    "HERO_ABILITY_SKAARF_A_SPITFIRE": "Skaarf A",
    "HERO_ABILITY_SKAARF_B_GOOP": "Skaarf B",
    "HERO_ABILITY_SKAARF_C_DRAGON_BREATH": "Skaarf C",
    "HERO_ABILITY_SKYE_A_NAME": "Skye A",
    "HERO_ABILITY_SKYE_B_NAME": "Skye B",
    "HERO_ABILITY_SKYE_C_NAME": "Skye C",
    "HERO_ABILITY_VOX_A_NAME": "Vox A",
    "HERO_ABILITY_VOX_B_NAME": "Vox B",
    "HERO_ABILITY_VOX_C_NAME": "Vox C",
    "Journey Boots": "Journey Boots",
    "Minion Candy": "Minion Candy",
    "Nullwave Gauntlet": "Nullwave Gauntlet",
    "Protector Contract": "Protector Contract",
    "*Reza*": "Reza",
    "Reflex Block": "Reflex Block",
    "Scout Trap": "Scout Trap",
    "Shank": "SAW A",
    "Shiversteel": "Shiversteel",
    "Sprint Boots": "Sprint Boots",
    "Travel Boots": "Travel Boots",
    "<Unset>": "unknown",
    "War Treads": "War Treads",
    "Weapon Infusion": "Weapon Infusion",
    "Withdraw": "backport",
    "Ability__Adagio__C": "Adagio C",
    "Ability__Alpha__AltAttack": "Alpha AA",
    "Ability__Alpha__B": "Alpha B",
    "Ability__Alpha__CritAttack": "Alpha AAcrit",
    "Ability__Alpha__Dash": "Alpha A",
    "Ability__Alpha__DefaultAttack": "Alpha AA",
    "Ability__Alpha__SelfDestruct": "Alpha C",
    "Ability__Ardan__A": "Ardan A",
    "Ability__Ardan__AltAttack": "Ardan AA",
    "Ability__Ardan__B": "Ardan B",
    "Ability__Ardan__C": "Ardan C",
    "Ability__Ardan__CritAttack": "Ardan AAcrit",
    "Ability__Ardan__DefaultAttack": "Ardan AA",
    "Ability__Blackfeather__A": "Blackfeather A",
    "Ability__Blackfeather__AltAttack": "Blackfeather AA",
    "Ability__Blackfeather__B": "Blackfeather B",
    "Ability__Blackfeather__CritAttack": "Blackfeather AAcrit",
    "Ability__Blackfeather__DefaultAttack": "Blackfeather AA",
    "Ability__Catherine__A_DefaultAttack": "Catherine A",
    "Ability__Catherine__AltAttack": "Catherine AA",
    "Ability__Catherine__C": "Catherine C",
    "Ability__Catherine__CritAttack": "Catherine AAcrit",
    "Ability__Catherine__DefaultAttack": "Catherine AA",
    "Ability__Flicker__AltAttack": "Flicker AA",
    "Ability__Flicker__DefaultAttack": "Flicker AA",
    "Ability__Flicker__CritAttack": "Flicker AAcrit",
    "Ability__Fortress__AltAttack": "Fortress AA",
    "Ability__Fortress__B": "Fortress B",
    "Ability__Fortress__CritAttack": "Fortress AAcrit",
    "Ability__Fortress__DefaultAttack": "Fortress AA",
    "Ability__Fortress__LungeAttack": "Fortress A",
    "Ability__FortressMinion__AltAttack": "Fortress AA",
    "Ability__FortressMinion__DefaultAttack": "Fortress AA",
    "Ability__Glaive__A_KnockbackDefAttack": "Glaive A",
    "Ability__Glaive__AltAttack": "Glaive AA",
    "Ability__Glaive__B": "Glaive B",
    "Ability__Glaive__C": "Glaive C",
    "Ability__Glaive__CritAttack": "Glaive AAcrit",
    "Ability__Glaive__DefaultAttack": "Glaive AA",
    "Ability__Grumpjaw__A": "Grumpjaw A",
    "Ability__Grumpjaw__AltAttack": "Grumpjaw AA",
    "Ability__Grumpjaw__B": "Grumpjaw B",
    "Ability__Grumpjaw__B_FrenzyAttack": "Grumpjaw B",
    "Ability__Grumpjaw__CritAttack": "Grumpjaw AAcrit",
    "Ability__Grumpjaw__DefaultAttack": "Grumpjaw AA",
    "Ability__Gwen__A": "Gwen A",
    "Ability__Idris__AltAttack": "Idris AA",
    "Ability__Idris__C_LeapOff": "Idris C",
    "Ability__Idris__CritAttack": "Idris AAcrit",
    "Ability__Idris__DefaultAttack": "Idris AA",
    "Ability__Idris__EmpoweredAttack": "Idris AA",
    "Ability__Item__ScoutTrap_Explode": "Scout Trap",
    "Ability__Joule__A": "Joule A",
    "Ability__Joule__AltAttack": "Joule AA",
    "Ability__Joule__C": "Joule C",
    "Ability__Joule__CritAttack": "Joule AAcrit",
    "Ability__Joule__DefaultAttack": "Joule AA",
    "Ability__Kestrel__C": "Kestrel C",
    "Ability__Kestrel__Trap_Detonate": "Kestrel B",
    "Ability__Koshka__A": "Koshka A",
    "Ability__Koshka__AltAttack": "Koshka AA",
    "Ability__Koshka__B": "Koshka B",
    "Ability__Koshka__C": "Koshka C",
    "Ability__Koshka__CritAttack": "Koshka AAcrit",
    "Ability__Koshka__DefaultAttack": "Koshka AA",
    "Ability__Koshka__TwirlEmpoweredAttack": "Koshka B",
    "Ability__Krul__A": "Krul A",
    "Ability__Krul__AltAttack": "Krul AA",
    "Ability__Krul__B": "Krul B",
    "Ability__Krul__CritAttack": "Krul AAcrit",
    "Ability__Krul__DefaultAttack": "Krul AA",
    "Ability__Lance__A": "Lance A",
    "Ability__Lance__AltAttack": "Lance AA",
    "Ability__Lance__B": "Lance B",
    "Ability__Lance__CritAttack": "Lance AAcrit",
    "Ability__Lance__DefaultAttack": "Lance AA",
    "Ability__Lance__EmpoweredAttack": "Lance C",
    "Ability__Ozo__A1": "Ozo A",
    "Ability__Ozo__A2": "Ozo A",
    "Ability__Ozo__A3": "Ozo A",
    "Ability__Ozo__AltAttack": "Ozo AA",
    "Ability__Ozo__B_EndingAttack": "Ozo B",
    "Ability__Ozo__B_FinalBounce": "Ozo B",
    "Ability__Ozo__B_IntermediateBounce": "Ozo B",
    "Ability__Ozo__C_Finisher": "Ozo C",
    "Ability__Ozo__CritAttack": "Ozo AAcrit",
    "Ability__Ozo__DefaultAttack": "Ozo AA",
    "Ability__PetalMinion__AltAttack": "Petal AA",
    "Ability__PetalMinion__DefaultAttack": "Petal AA",
    "Ability__PetalMinion__DefaultAttack_FuseLit": "Petal AA",
    "Ability__PetalMinion__Explode": "Petal C",
    "Ability__PetalSeed__Explode": "Petal A",
    "Ability__Phinn__A": "Phinn A",
    "Ability__Phinn__AltAttack": "Phinn AA",
    "Ability__Phinn__B": "Phinn B",
    "Ability__Phinn__CritAttack": "Phinn AAcrit",
    "Ability__Phinn__DefaultAttack": "Phinn AA",
    "Ability__Reim__AltAttack": "Reim AA",
    "Ability__Reim__DefaultAttack": "Reim AA",
    "Ability__Reim__CritAttack": "Reim AAcrit",
    "Ability__Rona__A": "Rona A",
    "Ability__Rona__AltAttack": "Rona AA",
    "Ability__Rona__B": "Rona B",
    "Ability__Rona__BAttackOverride": "Rona B",
    "Ability__Rona__B_FollowUp": "Rona B",
    "Ability__Rona__CritAttack": "Rona AAcrit",
    "Ability__Rona__DefaultAttack": "Rona AA",
    "Ability__Samuel__EmpoweredAttack": "Samuel AA",
    "Ability__SAW__B": "SAW B",
    "Ability__SAW__Shank": "SAW A",
    "Ability__Taka__A": "Taka A",
    "Ability__Taka__AltAttack": "Taka AA",
    "Ability__Taka__C": "Taka C",
    "Ability__Taka__C_Talent": "Taka C Legendary",
    "Ability__Taka__C_TalentB": "Taka C Legendary",
    "Ability__Taka__C_TalentC": "Taka C Legendary",
    "Ability__Taka__CritAttack": "Taka AAcrit",
    "Ability__Taka__DefaultAttack": "Taka AA",
    "Ability__Taka__MortalStrike": "Taka perk",
    "Ability__Taka__MortalStrike_Crit": "Taka perk",
    "*Adagio*": "Adagio",
    "*Alpha*": "Alpha",
    "*Ardan*": "Ardan",
    "*Baron*": "Baron",
    "*Blackfeather*": "Blackfeather",
    "Buff_Adagio_AgentOfWrath": "Adagio B",
    "Buff_Adagio_ArcaneFire": "Adagio perk",
    "Buff_Ardan_Arena": "Ardan C",
    "Buff_Baron_C_Warning_Everybody": "Baron C",
    "Buff_Blackfeather_HeartThrob": "Blackfeather perk",
    "Buff_Catherine_Stormguard": "Catherine perk",
    "Buff_CelesteCore_Collapse": "Celeste B",
    "Buff_Celeste_Star": "Celeste A",
    "Buff_CelesteStar_Supernova": "Celeste A",
    "Buff_Flicker_A_FairyTrap": "Flicker A",
    "Buff_Flicker_B_Field": "Flicker B",
    "Buff_Fortress_Bleeding": "Fortress perk",
    "Buff_Grumpjaw_B_Frenzy": "Grumpjaw B",
    "Buff_Idris_C_AttachedEnemy": "Idris C",
    "Buff_Item_Aftershock_attackBuff": "Aftershock",
    "Buff_Item_AlternatingCurrent": "Alternating Current",
    "Buff_Item_DragonbloodContract": "Dragonblood Contract",
    "Buff_Item_EMP_Countdown": "Nullwave Gauntlet",
    "Buff_Item_HitByStormguardBanner": "Stormguard Banner",
    "Buff_Joule_Thunderstrike": "Joule B",
    "Buff_Lyra_ImmuneToWall": "Lyra B",
    "Buff_Lyra_SpiritFlame": "Lyra AA",  // TODO
    "Buff_Reim_B": "Reim B",
    "Buff_Reim_FrostDoT": "Reim perk",
    "Buff_ReimSpawn_A": "Reim A",
    "Buff_ReimSpawn_C": "Reim C",
    "Buff_Ringo_HellfireBrew_Burn": "Ringo C",
    "Buff_Ringo_TwirlingSilver": "Ringo B",
    "Buff_Rona_RupturedGround": "Rona A",
    "Buff_Rona_Whirlwind": "Rona C",
    "Buff_Samuel_B_DarkField": "Samuel B",
    "Buff_Skaarf_Blow": "Skaarf C",
    "Buff_Skaarf_Burn": "Skaarf C",
    "Buff_Skaarf_GoopPoolOnFire": "Skaarf B",
    "Buff_Skye_ClusterMissileVolley_Exploding": "Skye C",
    "Buff_Skye_HitBy_B_Missiles": "Skye B",
    "Buff_Skye_LineMissileVolley_Exploding": "Skye C",
    "Buff_Taka_MortalWound": "Taka perk",
    "*Catherine*": "Catherine",
    "*Celeste*": "Celeste",
    "*Flicker*": "Flicker",
    "*Fortress*": "Fortress",
    "*FortressMinion*": "Fortress Wolf",
    "*Glaive*": "Glaive",
    "*Grace*": "Grace",
    "*Grumpjaw*": "Grumpjaw",
    "*Gwen*": "Gwen",
    "*Hero009*": "Krul",
    "*Hero010*": "Skaarf",
    "*Hero016*": "Rona",
    "*Idris*": "Idris",
    "*Joule*": "Joule",
    "*JungleMinion_CrystalMiner*": "Crystal Sentry",
    "*JungleMinion_ElderTreeEnt*": "Shop Treant",
    "*JungleMinion_GoldMiner*": "Gold Miner",
    "*JungleMinion_TreeEnt*": "Treant",
    "*Kestrel*": "Kestrel",
    "*Koshka*": "Koshka",
    "*Kraken_Captured*": "Kraken",
    "*Kraken_Jungle*": "Kraken",
    "*Krul*": "Krul",
    "*Lance*": "Lance",
    "*LeadMinion*": "Lane Minion",
    "*Lyra*": "Lyra",
    "*Neutral_JungleMinion_DefaultBig*": "Jungle Minion",
    "*Neutral_JungleMinion_DefaultSmall*": "Jungle Minion",
    "*Ozo*": "Ozo",
    "*Petal*": "Petal",
    "*PetalMinion*": "Petal",
    "*PetalSeed*": "Petal",
    "*Phinn*": "Phinn",
    "*RangedMinion*": "Lane Minion",
    "*Reim*": "Reim",
    "*Ringo*": "Ringo",
    "*Rona*": "Rona",
    "*Samuel*": "Samuel",
    "*SAW*": "SAW",
    "*Sayoc*": "Taka",
    "*Skaarf*": "Skaarf",
    "*Skye*": "Skye",
    "*Taka*": "Taka",
    "*TankMinion*": "Lane Minion",
    "*Turret*": "Turret",
    "Unknown": "unknown",
    "*VainCrystalAway*": "Vain Crystal",
    "*VainCrystalHome*": "Vain Crystal",
    "*VainTurret*": "Vain Turret",
    "*Vox*": "Vox",
    "*Baptiste*": "Baptiste",
    "*1000_Item_HalcyonPotion*": "Halcyon Potion",
    "*1002_Item_WeaponBlade*": "Weapon Blade",
    "*1003_Item_CrystalBit*": "Crystal Bit",
    "*1004_Item_SwiftShooter*": "Swift Shooter",
    "*1005_Item_SixSins*": "Six Sins",
    "*1009_Item_EclipsePrism*": "Eclipse Prism",
    "*1010_Item_BlazingSalvo*": "Blazing Salvo",
    "*1012_Item_Sorrowblade*": "Sorrowblade",
    "*1013_Item_Shatterglass*": "Shatterglass",
    "*1014_Item_TornadoTrigger*": "Tornado Trigger",
    "*1015_Item_Oakheart*": "Oakheart",
    "*1016_Item_Dragonheart*": "Dragonheart",
    "*1017_Item_LightArmor*": "Light Armor",
    "*1022_Item_CoatOfPlates*": "Coat of Plates",
    "*1024_Item_MetalJacket*": "Metal Jacket",
    "*1025_Item_EnergyBattery*": "Energy Battery",
    "*1026_Item_Hourglass*": "Hourglass",
    "*1027_Item_VoidBattery*": "Void Battery",
    "*1028_Item_Chronograph*": "Chronograph",
    "*1029_Item_Clockwork*": "Clockwork",
    "*1030_Item_SprintBoots*": "Sprint Boots",
    "*1032_Item_TravelBoots*": "Travel Boots",
    "*1034_Item_SerpentMask*": "Serpent Mask",
    "*1035_Item_TensionBow*": "Tension Bow",
    "*1038_Item_Flare*": "Flare",
    "*1039_Item_Bonesaw*": "Bonesaw",
    "*1041_Item_MinionCandy*": "Minion Candy",
    "*1042_Item_Shiversteel*": "Shiversteel",
    "*1043_Item_ReflexBlock*": "Reflex Block",
    "*1044_Item_Frostburn*": "Frostburn",
    "*1045_Item_FountainOfRenewal*": "Fountain of Renewal",
    "*1046_Item_Crucible*": "Crucible",
    "*1047_Item_JourneyBoots*": "Journey Boots",
    "*1049_Item_TyrantsMonocle*": "Tyrant's Monocle",
    "*1050_Item_Aftershock*": "Aftershock",
    "*1052_Item_WeaponInfusion*": "Weapon Infusion",
    "*1053_Item_CrystalInfusion*": "Crystal Infusion",
    "*1054_Item_ScoutTrap*": "Scout Trap",
    "*1055_Item_BrokenMyth*": "Broken Myth",
    "*1056_Item_WarTreads*": "War Treads",
    "*1057_Item_AtlasPauldron*": "Atlas Pauldron",
    "*1059_Item_BookOfEulogies*": "Book of Eulogies",
    "*1060_Item_BarbedNeedle*": "Barbed Needle",
    "*1061_Item_LightShield*": "Light Shield",
    "*1062_Item_KineticShield*": "Kinetic Shield",
    "*1063_Item_Aegis*": "Aegis",
    "*1064_Item_Lifespring*": "Lifespring",
    "*1065_Item_HeavySteel*": "Heavy Steel",
    "*1066_Item_PiercingSpear*": "Piercing Spear",
    "*1067_Item_BreakingPoint*": "Breaking Point",
    "*1068_Item_LuckyStrike*": "Lucky Strike",
    "*1069_Item_AlternatingCurrent*": "Alternating Current",
    "*1070_Item_PiercingShard*": "Piercing Shard",
    "*1071_Item_EveOfHarvest*": "Eve of Harvest",
    "*1072_Item_HeavyPrism*": "Heavy Prism",
    "*1073_Item_IronguardContract*": "Ironguard Contract",
    "*1085_Item_DragonbloodContract*": "Dragonblood Contract",
    "*1074_Item_StormguardBanner*": "Stormguard Banner",
    "*1079_Item_Contraption*": "Contraption",
    "*1080_Item_MinionsFoot*": "Minion's Foot",
    "*1084_Item_ProtectorContract*": "Protector Contract",
    "*1087_Item_HalcyonChargers*": "Halcyon Chargers",
    "*1088_Item_Flaregun*": "Flare Gun",
    "*1090_Item_Stormcrown*": "Stormcrown",
    "*1092_Item_PoisonedShiv*": "Poisoned Shiv",
    "*1095_Item_NullwaveGauntlet*": "Nullwave Gauntlet",
    "*1097_Item_Echo*": "Echo",
    "*1105_Item_SlumberingHusk*": "Slumbering Husk",
    "*1002_Item_CandyShop_Kissy*": "Kissy",
    "*1005_Item_CandyShop_Taunt*": "Taunt",
    "*1007_Item_CandyShop_VOTaunt*": "Voice over Taunt",
    "*Item_HalcyonPotion*": "Halcyon Potion",
    "*Item_HealingFlask*": "Healing Flask",
    "Healing Flask": "Healing Flask",
    "Halcyon Rapier": "Spellsword",
    "Spellsword": "Spellsword",
    "*Item_Spellsword*": "Spellsword",
    "*Item_WeaponBlade*": "Weapon Blade",
    "*Item_CrystalBit*": "Crystal Bit",
    "*Item_SwiftShooter*": "Swift Shooter",
    "*Item_SixSins*": "Six Sins",
    "*Item_EclipsePrism*": "Eclipse Prism",
    "*Item_BlazingSalvo*": "Blazing Salvo",
    "*Item_Sorrowblade*": "Sorrowblade",
    "*Item_Shatterglass*": "Shatterglass",
    "*Item_TornadoTrigger*": "Tornado Trigger",
    "*Item_Oakheart*": "Oakheart",
    "*Item_Dragonheart*": "Dragonheart",
    "*Item_LightArmor*": "Light Armor",
    "*Item_CoatOfPlates*": "Coat of Plates",
    "*Item_MetalJacket*": "Metal Jacket",
    "*Item_EnergyBattery*": "Energy Battery",
    "*Item_Hourglass*": "Hourglass",
    "*Item_VoidBattery*": "Void Battery",
    "*Item_Chronograph*": "Chronograph",
    "*Item_Clockwork*": "Clockwork",
    "*Item_SprintBoots*": "Sprint Boots",
    "*Item_TravelBoots*": "Travel Boots",
    "*Item_SerpentMask*": "Serpent Mask",
    "*Item_TensionBow*": "Tension Bow",
    "*Item_Flare*": "Flare",
    "*Item_Bonesaw*": "Bonesaw",
    "*Item_MinionCandy*": "Minion Candy",
    "*Item_Shiversteel*": "Shiversteel",
    "*Item_ReflexBlock*": "Reflex Block",
    "*Item_Frostburn*": "Frostburn",
    "*Item_FountainOfRenewal*": "Fountain of Renewal",
    "*Item_Crucible*": "Crucible",
    "*Item_JourneyBoots*": "Journey Boots",
    "*Item_TyrantsMonocle*": "Tyrant's Monocle",
    "*Item_Aftershock*": "Aftershock",
    "*Item_WeaponInfusion*": "Weapon Infusion",
    "*Item_CrystalInfusion*": "Crystal Infusion",
    "*Item_ScoutTrap*": "Scout Trap",
    "*Item_BrokenMyth*": "Broken Myth",
    "*Item_WarTreads*": "War Treads",
    "*Item_AtlasPauldron*": "Atlas Pauldron",
    "*Item_BookOfEulogies*": "Book of Eulogies",
    "*Item_BarbedNeedle*": "Barbed Needle",
    "*Item_LightShield*": "Light Shield",
    "*Item_KineticShield*": "Kinetic Shield",
    "*Item_Aegis*": "Aegis",
    "*Item_Lifespring*": "Lifespring",
    "*Item_HeavySteel*": "Heavy Steel",
    "*Item_PiercingSpear*": "Piercing Spear",
    "*Item_BreakingPoint*": "Breaking Point",
    "*Item_LuckyStrike*": "Lucky Strike",
    "*Item_AlternatingCurrent*": "Alternating Current",
    "*Item_PiercingShard*": "Piercing Shard",
    "*Item_EveOfHarvest*": "Eve of Harvest",
    "*Item_HeavyPrism*": "Heavy Prism",
    "*Item_IronguardContract*": "Ironguard Contract",
    "*Item_DragonbloodContract*": "Dragonblood Contract",
    "*Item_StormguardBanner*": "Stormguard Banner",
    "*Item_Contraption*": "Contraption",
    "*Item_MinionsFoot*": "Minion's Foot",
    "*Item_ProtectorContract*": "Protector Contract",
    "*Item_HalcyonChargers*": "Halcyon Chargers",
    "*Item_Flaregun*": "Flare Gun",
    "*Item_Stormcrown*": "Stormcrown",
    "*Item_PoisonedShiv*": "Poisoned Shiv",
    "*Item_NullwaveGauntlet*": "Nullwave Gauntlet",
    "*Item_Echo*": "Echo",
    "*Item_SlumberingHusk*": "Slumbering Husk",
    "*Item_CandyShop_Kissy*": "Kissy",
    "*Item_CandyShop_Taunt*": "Taunt",
    "*Item_CandyShop_VOTaunt*": "Voice over Taunt",
    "Aftershock": "Aftershock",
    "Armor Shredder": "Bonesaw",
    "Armor2": "Coat of Plates",
    "Armor3": "Metal Jacket",
    "AttackSpeed1": "Swift Shooter",
    "AttackSpeed2": "Blazing Salvo",
    "BarbedNeedle": "Barbed Needle",
    "Boots1": "Sprint Boots",
    "Boots2": "Travel Boots",
    "Boots3": "Journey Boots",
    "BreakingPoint": "Breaking Point",
    "Broken Myth": "Broken Myth",
    "Clockwork": "Clockwork",
    "Cogwheel": "Chronograph",
    "Cooldown1": "Hourglass",
    "Critical": "Tyrant's Monocle",
    "Tyrants Monocle": "Tyrant's Monocle",
    "Crystal Matrix": "Aegis",
    "Crystal1": "Crystal Bit",
    "Crystal2": "Eclipse Prism",
    "Crystal3": "Shatterglass",
    "EveOfHarvest": "Eve of Harvest",
    "Frostburn": "Frostburn",
    "Health2": "Dragonheart",
    "Heavy Prism": "Heavy Prism",
    "Heavy Steel": "Heavy Steel",
    "IronguardContract": "Ironguard Contract",
    "Lifewell": "Lifespring",
    "Light Armor": "Light Armor",
    "Light Shield": "Light Shield",
    "LuckyStrike": "Lucky Strike",
    "MinionsFoot": "Minion's Foot",
    "Minions Foot": "Minion's Foot",
    "Mulled Wine": "Halcyon Potion",
    "NullwaveGauntlet": "Nullwave Gauntlet",
    "Oakheart": "Oakheart",
    "PiercingShard": "Piercing Shard",
    "PiercingSpear": "Piercing Spear",
    "PoisonedShiv": "Poisoned Shiv",
    "Serpent Mask": "Serpent Mask",
    "Shield 2": "Kinetic Shield",
    "Six Sins": "Six Sins",
    "SlumberingHusk": "Slumbering Husk",
    "Steam Battery": "Energy Battery",
    "Stormcrown": "Stormcrown",
    "StormguardBanner": "Stormguard Banner",
    "Tension Bow": "Tension Bow",
    "Tornado Trigger": "Tornado Trigger",
    "Void Battery": "Void Battery",
    "Weapon Blade": "Weapon Blade",
    "Weapon3": "Sorrowblade",
    "Coat Of Plates": "Coat of Plates",
    "BookOfEulogies": "Book of Eulogies",
    "Book Of Eulogies": "Book of Eulogies",
    "Eve Of Harvest": "Eve of Harvest",
    "Candy - VO Taunt": "Voice over Taunt",
    "": " ",
    "*Churnwalker*": "Churnwalker",
    "HERO_ABILITY_CHURNWALKER_A_NAME": "Churnwalker A",
    "HERO_ABILITY_CHURNWALKER_B_NAME": "Churnwalker B",
    "HERO_ABILITY_CHURNWALKER_C_NAME": "Churnwalker C",
    "Ability__Churnwalker__DefaultAttack": "Churnwalker AA",
    "Ability__Churnwalker__AltAttack": "Churnwalker AA",
    "Ability__Churnwalker__CritAttack": "Churnwalker AA crit",
    "Ability__Churnwalker__A": "Churnwalker A",
    "Ability__Churnwalker__B": "Churnwalker B",
    "Ability__Churnwalker__C": "Churnwalker C",
    "Buff_Churnwalker_ChainTether": "Churnwalker perk",
    "*Item_DragonsEye*": "Dragon's Eye",
    "DragonsEye": "Dragon's Eye",
    "*Item_Spellfire*": "Spellfire",
    "Spellfire": "Spellfire",
    "Ability__FortressMinion__CritAttack": "Fortress AA",
    "*Lorelai*": "Lorelai",
    "HERO_ABILITY_LORELAI_A_NAME": "Lorelai A",
    "HERO_ABILITY_LORELAI_B_NAME": "Lorelai B",
    "HERO_ABILITY_LORELAI_C_NAME": "Lorelai C",
    "Buff_Item_StormguardBanner_Damage": "Stormguard Banner",
    "Buff_Item_Spellfire_Damage": "Spellfire",
    "Buff_Lorelai_FishFoodDamagePerSecond": "Lorelai A",
    "Buff_Lorelai_FishFoodDelay": "Lorelai A",
    "Buff_Reza_C_DamagePostTeleport": "Reza C",
    "*Varya*": "Varya",
    "casual": "casual",
    "ranked": "ranked",
    "private": "priv_blind",
    "private_party_draft_match": "priv_draft",
    "blitz_pvp_ranked": "blitz",
    "private_party_blitz_match": "priv_blitz",
    "casual_aral": "br",
    "private_party_aral_match": "priv_br",
    "blitz_rounds_pvp_casual": "onslaught",
    "private_party_blitz_rounds_match": "priv_onslaught",
    "*Item_VisionTotem*": "Scout Cam",
    "*Item_TotemMultiplier*": "ScoutPak",
    "*Item_TotemEnhancer*": "SuperScout 2000",
    "*Item_TotemBuffer*": "ScoutTuff",
    "*Item_FlareGun_Beta*": "Flare Loader",
    "*Item_WarpGenerator*": "Teleporter Boots",
    "Vision Totem": "Scout Cam",
    "Totem Multiplier": "ScoutPak",
    "Totem Enhancer": "SuperScout 2000",
    "Totem Buffer": "ScoutTuff",
    "Flaregun_Beta": "Flare Loader",
    "Warp Generator": "Teleport Boots",
    "5v5_pvp_casual": "5v5_casual",
    "5v5_pvp_ranked": "5v5_ranked",
    "private_party_vg_5v5": "priv_5v5_blind"
}
