Hooks.once("init", function() {
    console.log("AMC : Init");
});

Hooks.once("ready", function() {
    console.log("AMC : Ready");
});

Hooks.on("aedas-mass-combat-build-army", function() {
    console.log(game.user.isGM);
});