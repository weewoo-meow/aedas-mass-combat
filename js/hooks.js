Hooks.once("init", function() {
    console.log("AMC : Init");
});

Hooks.once("ready", function() {
    console.log("AMC : Ready");
});

Hooks.on("aedas-mass-combat-build-army", function() {
    if (game.user.isGM) {
        let actorObj = game.actors.get(game.tokenActionHUD.getData().actions.actorId);
        if (actorObj === undefined) {
            ui.notifications.error("Error at execution. No TokenActionHUD found to retrieve active Actor ID.");
            return;
        }
        bs = new BaseSheet(actorObj, {template: 'modules/aedas-mass-combat/template/buildarmy.html'});
        bs.render(true);
    } else {
        ui.notifications.error("You are not a GM.");
    }
});