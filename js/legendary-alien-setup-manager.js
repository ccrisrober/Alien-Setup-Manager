/* global $ */

let characters = [];
let lastAlienAvatar = null;
let chart = null;


/**
 * Check if elements need dark mode styling
 */
function respectDarkMode() {
    if($('body').hasClass('dark-mode')) {
    } else {
    }
}


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);

}


function getRandomItem(array, sets = [SET.BASE, SET.EXPANSION, SET.COVENANT, SET.FANMADE]) {
    const possibleItems = array.filter(item => sets.includes(item.set));

    return possibleItems[getRandomNumber(possibleItems.length)];
}


function saveState() {
    // Not grabbed from getOptions() so we have the raw values without effect of other selections
    const playerCount = $('input[name="player-count"]:checked').val();
    const includeExpansion = $('#include-expansion-yes').is(':checked') ? "yes" : "no";
    const includeCovenant = $('#include-covenant-yes').is(':checked') ? "yes" : "no";
    const includeFanmade = $('#include-fanmade-yes').is(':checked') ? "yes" : "no";
    const hiddenAgendas = $('#hidden-agendas-yes').is(':checked') ? "yes" : "no";
    const queenMode = $('#queen-mode-yes').is(':checked') ? "yes" : "no";
    const hardMode = $('#hard-mode-yes').is(':checked') ? "yes" : "no";
    const matchScenario = $('#match-scenario').val();
    const limitLocation = $('#limit-location-yes').is(':checked') ? "yes" : "no";
    const limitObjectives = $('#limit-objectives-yes').is(':checked') ? "yes" : "no";
    const limitCharacters = $('#limit-characters-yes').is(':checked') ? "yes" : "no";
    const limitQueen = $('#limit-queen-yes').is(':checked') ? "yes" : "no";
    const limitRipleys = $('#limit-ripleys-yes').is(':checked') ? "yes" : "no";

    localStorage.setItem('config', JSON.stringify({
        playerCount: playerCount,
        includeExpansion: includeExpansion,
        includeCovenant: includeCovenant,
        includeFanmade: includeFanmade,
        hiddenAgendas: hiddenAgendas,
        queenMode: queenMode,
        hardMode: hardMode,
        matchScenario: matchScenario,
        limitLocation: limitLocation,
        limitObjectives: limitObjectives,
        limitCharacters: limitCharacters,
        limitQueen: limitQueen,
        limitRipleys: limitRipleys
    }));

    $('#save').removeClass('btn-dark').addClass('btn-success');

    setTimeout(() => {
        $('#save').removeClass('btn-success').addClass('btn-dark');
        $('#load').removeAttr('disabled');
    }, 600);
}


function loadState() {
    const options = JSON.parse(localStorage.getItem('config'));

    if(options !== null) {
        $('#load').removeAttr('disabled');

        if(options.playerCount) {
            $('input[name="player-count"]').removeAttr('checked').parent().removeClass('active');
            $(`input[name="player-count"][value="${options.playerCount}"]`).prop('checked', true).parent().addClass('active');
        }

        if(options.includeExpansion) {
            $('input[name="include-expansion"]').removeAttr('checked').parent().removeClass('active');
            $(`#include-expansion-${options.includeExpansion}`).prop('checked', true).parent().addClass('active');
        }

        if(options.includeCovenant) {
            $('input[name="include-covenant"]').removeAttr('checked').parent().removeClass('active');
            $(`#include-covenant-${options.includeCovenant}`).prop('checked', true).parent().addClass('active');
        }

        if(options.includeFanmade) {
            $('input[name="include-fanmade"]').removeAttr('checked').parent().removeClass('active');
            $(`#include-fanmade-${options.includeFanmade}`).prop('checked', true).parent().addClass('active');
        }

        if(options.hiddenAgendas) {
            $('input[name="hidden-agendas"]').removeAttr('checked').parent().removeClass('active');
            $(`#hidden-agendas-${options.hiddenAgendas}`).prop('checked', true).parent().addClass('active');
        }

        if(options.queenMode) {
            $('input[name="queen-mode"]').removeAttr('checked').parent().removeClass('active');
            $(`#queen-mode-${options.queenMode}`).prop('checked', true).parent().addClass('active');
        }

        if(options.hardMode) {
            $('input[name="hard-mode"]').removeAttr('checked').parent().removeClass('active');
            $(`#hard-mode-${options.hardMode}`).prop('checked', true).parent().addClass('active');
        }

        if(options.matchScenario) {
            $("#match-scenario").val(options.matchScenario);
        }

        if(options.limitLocation) {
            $('input[name="limit-location"]').removeAttr('checked').parent().removeClass('active');
            $(`#limit-location-${options.limitLocation}`).prop('checked', true).parent().addClass('active');
        }

        if(options.limitObjectives) {
            $('input[name="limit-objectives"]').removeAttr('checked').parent().removeClass('active');
            $(`#limit-objectives-${options.limitObjectives}`).prop('checked', true).parent().addClass('active');
        }

        if(options.limitCharacters) {
            $('input[name="limit-characters"]').removeAttr('checked').parent().removeClass('active');
            $(`#limit-characters-${options.limitCharacters}`).prop('checked', true).parent().addClass('active');
        }

        if(options.limitQueen) {
            $('input[name="limit-queen"]').removeAttr('checked').parent().removeClass('active');
            $(`#limit-queen-${options.limitQueen}`).prop('checked', true).parent().addClass('active');
        }

        if(options.limitRipleys) {
            $('input[name="limit-ripleys"]').removeAttr('checked').parent().removeClass('active');
            $(`#limit-ripleys-${options.limitRipleys}`).prop('checked', true).parent().addClass('active');
        }

        updateVisibilityState();
    }
}


function getOptions() {
    const playerCount = parseInt($('input[name="player-count"]:checked').val(), 10);
    const includeExpansion = $('#include-expansion-yes').is(':checked');
    const includeCovenant = $('#include-covenant-yes').is(':checked');
    const includeFanmade = $('#include-fanmade-yes').is(':checked');
    const queenMode = includeExpansion && playerCount > 1 && $('#queen-mode-yes').is(':checked');
    const hiddenAgendas = ((queenMode && playerCount > 2) || !queenMode && playerCount > 1) && $('#hidden-agendas-yes').is(':checked');
    const hardMode = includeExpansion && $('#hard-mode-yes').is(':checked');
    const addSoldiers = includeExpansion && $('#add-soldiers-yes').is(':checked');
    const matchScenario = parseInt($('#match-scenario').val(), 10);
    const limitLocation = (matchScenario >= 0) && $('#limit-location-yes').is(':checked');
    const limitObjectives = (matchScenario >= 0) && $('#limit-objectives-yes').is(':checked');
    const limitCharacters = (matchScenario >= 0) && $('#limit-characters-yes').is(':checked');
    const limitQueen = (matchScenario >= 0) && $('#limit-queen-yes').is(':checked');
    const limitRipleys = $('#limit-ripleys-yes').is(':checked');

    return {
        playerCount: playerCount,
        includeExpansion: includeExpansion,
        includeCovenant: includeCovenant,
        includeFanmade: includeFanmade,
        hiddenAgendas: hiddenAgendas,
        queenMode: queenMode,
        hardMode: hardMode,
        addSoldiers: addSoldiers,
        matchScenario: matchScenario,
        limitLocation: limitLocation,
        limitObjectives: limitObjectives,
        limitCharacters: limitCharacters,
        limitQueen: limitQueen,
        limitRipleys: limitRipleys
    };
}


function pickAlienAvatar() {
    const options = getOptions();

    const sets = [SET.BASE];

    if(options.includeExpansion) {
        sets.push(SET.EXPANSION);
    }

    const possibleAvatars = data.avatars.filter(avatar => avatar.race === RACE.ALIEN && sets.includes(avatar.set) && avatar !== lastAlienAvatar);

    let avatar = getRandomItem(possibleAvatars);
    lastAlienAvatar = avatar;

    $('#alien-avatar-modal').modal('show');
    $('#selected-alien-avatar').text(avatar.name);
}


function generateGame() {
    const options = getOptions();

    const sets = [SET.BASE];

    if(options.includeExpansion) {
        sets.push(SET.EXPANSION);
    }

    if(options.includeCovenant) {
        sets.push(SET.COVENANT);
    }

    if(options.includeFanmade) {
        sets.push(SET.FANMADE);
    }

    let location = null;
    let scenario = null;
    
    if(options.matchScenario === SCENARIO.RANDOM) {
        scenario = getRandomItem(data.scenarios.filter(scenario => sets.includes(scenario.set) && scenario.canPick === true));
    } else {
        scenario = data.scenarios.filter(scenario => scenario.id === options.matchScenario)[0];
    }

    if(options.limitLocation) {
        location = data.locations.filter(loc => loc.scenario === scenario.id)[0];
    } else {
        location = getRandomItem(data.locations);
    }

    $('#selected-theme').text(scenario.name);
    $('#selected-location').text(location.name);

    let objective1 = null
    let objective2 = null;
    let objective3 = null;

    if(options.limitObjectives) {
        objective1 = data.objectives.filter(obj => obj.stage === 1 && obj.scenario === scenario.id)[0];
        objective2 = data.objectives.filter(obj => obj.stage === 2 && obj.scenario === scenario.id)[0];
        objective3 = data.objectives.filter(obj => obj.stage === 3 && obj.scenario === scenario.id)[0];
    } else {
        objective1 = getRandomItem(data.objectives.filter(obj => obj.stage === 1));
        objective2 = getRandomItem(data.objectives.filter(obj => obj.stage === 2));
        objective3 = getRandomItem(data.objectives.filter(obj => obj.stage === 3));
    }

    $('.selected-objective-1').text(objective1.name);
    $('.selected-objective-2').text(objective2.name);
    $('.selected-objective-3').text(objective3.name);


    let objective1DroneCount = data.objectiveSetup[options.playerCount].objective1Drones;
    let objective2DroneCount = data.objectiveSetup[options.playerCount].objective2Drones;
    let objective3DroneCount = data.objectiveSetup[options.playerCount].objective3Drones;
    let prepRounds = data.objectiveSetup[options.playerCount].setupRounds;

    characters = [];

    let possibleCharacters = [];

    if(options.limitCharacters) {
        if(scenario.set === SET.EXPANSION) {
            const randomAffiliation = getRandomItem(data.characters, sets).scenario;
            possibleCharacters = data.characters.filter(char => sets.includes(char.set) && (char.scenario & randomAffiliation) === randomAffiliation);
        }
        else if( scenario.set === SET.COVENANT ) {
            possibleCharacters = data.characters.filter(char => (sets.includes(char.set) && char.scenario & scenario.id) === scenario.id);
        }
        else { // FANMADE
            possibleCharacters = data.characters.filter(char => sets.includes(char.set));
        }
    } else {
        //Still limit characters by selected expansions
        possibleCharacters = data.characters.filter(char => sets.includes(char.set));
    }


    let hasRipley = false;
    let characterCount = 4;

    if(options.queenMode) {
        characterCount = 6;

        objective1DroneCount = data.queenModeObjectiveSetup[options.playerCount].objective1Drones;
        objective2DroneCount = data.queenModeObjectiveSetup[options.playerCount].objective2Drones;
        objective3DroneCount = data.queenModeObjectiveSetup[options.playerCount].objective3Drones;
        prepRounds = data.queenModeObjectiveSetup[options.playerCount].setupRounds;
    }

    while(characters.length < characterCount) {
        let newCharacter = getRandomItem(possibleCharacters);

        if(!characters.includes(newCharacter)) {
            if(!options.limitRipleys || (options.limitRipleys && (!newCharacter.isRipley || (newCharacter.isRipley && !hasRipley)))) {
                characters.push(newCharacter);

                if(newCharacter && newCharacter.isRipley) {
                    hasRipley = true;
                }
            }
        }
    }

    $('#selected-characters').text(characters.map(char => char.name).sort().join(', '));

    $('#players').empty();
    
    const possibleAvatars = data.avatars.filter(avatar => sets.includes(avatar.set) && avatar.race === RACE.HUMAN);
    let avatars = [];

    while(avatars.length < options.playerCount) {
        let newAvatar = getRandomItem(possibleAvatars);

        if(!avatars.includes(newAvatar)) {
            newAvatar.firstPlayer = false;
            avatars.push(newAvatar);
        }
    }

    if(options.queenMode) {
        let queen = null;

        if(options.limitQueen) {
            if(scenario.id === SCENARIO.ALIEN_COVENANT) {
                queen = data.avatars.filter(avatar => avatar.set === SET.COVENANT && avatar.race === RACE.QUEEN)[0];
            } else {
                queen = data.avatars.filter(avatar => avatar.set === SET.EXPANSION && avatar.race === RACE.QUEEN)[0];
            }
        } else {
            const possibleQueens = data.avatars.filter(avatar => sets.includes(avatar.set) && avatar.race === RACE.QUEEN);
            queen = getRandomItem(possibleQueens);
        }

        const randomPlayer = getRandomNumber(options.playerCount);
        avatars[randomPlayer] = queen;
        $('.queen-player-number').text(randomPlayer + 1);

        if(randomPlayer === options.playerCount - 1) {
            avatars[0].firstPlayer = true;
        } else {
            avatars[randomPlayer + 1].firstPlayer = true;
        }
    } else {
        const randomPlayer = getRandomNumber(options.playerCount);
        avatars[randomPlayer].firstPlayer = true;
    }

    const $template = $('#player-template');

    avatars.forEach((avatar, index) => {
        let $character = $template.clone();

        $character.removeClass('hidden');
        $character.find('.player-number').text(index + 1);
        $character.find('.player-avatar').text(avatar.name);

        if(avatar.firstPlayer) {
            $character.find('.starting-player').removeClass('hidden');
        }

        if(avatar.race === RACE.HUMAN) {
            $character.find('.player-roles').text(avatar.roleCards.join(' & '));
            $character.find('.resource-card-count').text('7');
            $character.find('.resource-card-name').text('Specialists');
            $character.find('.combat-card-count').text('5');
            $character.find('.combat-card-name').text('Grunts');
        } else if(avatar.race === RACE.QUEEN) {
            $character.find('.player-avatar').addClass('player-queen');
            $character.find('.player-roles').text(avatar.roleCards[getRandomNumber(avatar.roleCards.length)]);
            $character.find('.resource-card-count').text(avatar.resourceCardCount);
            $character.find('.combat-card-count').text(avatar.combatCardCount);
            $character.find('.resource-card-name').text('Creates');
            $character.find('.combat-card-name').text('Destroys');
        }

        $('#players').append($character);
    });

    let humanPlayerCount = options.playerCount;

    if(options.queenMode) {
        const possibleNests = data.nests.filter(nest => sets.includes(nest.set));

        let nests = [];

        while(nests.length < 4) {
            let newNest = getRandomItem(possibleNests);

            if(!nests.includes(newNest)) {
                nests.push(newNest);
            }
        }

        $('#selected-nests').text(nests.map(nest => nest.name).sort().join(', '));
        $('.player-type').text(' Human');

        humanPlayerCount -= 1;
        $('.player-count').text(humanPlayerCount);
    } else {
        $('.player-type').text(' all');
        $('.player-count').text(humanPlayerCount);
    }

    if(prepRounds > 0) {
        $('#preparation-round-rules').removeClass('hidden');
        $('.prep-rounds-count').text(prepRounds);

        if(prepRounds === 1) {
            $('.prep-rounds-plural').addClass('hidden');
        } else {
            $('.prep-rounds-plural').removeClass('hidden');
        }
    } else {
        $('#preparation-round-rules').addClass('hidden');
    }

    let totalDroneCount = objective1DroneCount + objective2DroneCount + objective3DroneCount;

    if(totalDroneCount > 0) {
        $('.drone-rules-only').removeClass('hidden');
    } else {
        $('.drone-rules-only').addClass('hidden');
    }

    if(options.hiddenAgendas) {
        $('.hidden-agendas-only').removeClass('hidden');
    } else {
        $('.hidden-agendas-only').addClass('hidden');
    }

    if(objective1DroneCount > 0) {
        $('.objective-1-drones').removeClass('hidden');
        $('.objective-1-no-drones').addClass('hidden');

        if(objective1DroneCount > 1) {
            $('.objective-1-drone-plural').removeClass('hidden');
        } else {
            $('.objective-1-drone-plural').addClass('hidden');
        }
    } else {
        $('.objective-1-drones').addClass('hidden');
        $('.objective-1-no-drones').removeClass('hidden');
    }

    if(objective2DroneCount > 0) {
        $('.objective-2-drones').removeClass('hidden');
        $('.objective-2-no-drones').addClass('hidden');

        if(objective2DroneCount > 1) {
            $('.objective-2-drone-plural').removeClass('hidden');
        } else {
            $('.objective-2-drone-plural').addClass('hidden');
        }
    } else {
        $('.objective-2-drones').addClass('hidden');
        $('.objective-2-no-drones').removeClass('hidden');
    }

    if(objective3DroneCount > 0) {
        $('.objective-3-drones').removeClass('hidden');
        $('.objective-3-no-drones').addClass('hidden');

        if(objective3DroneCount > 1) {
            $('.objective-3-drone-plural').removeClass('hidden');
        } else {
            $('.objective-3-drone-plural').addClass('hidden');
        }
    } else {
        $('.objective-3-drones').addClass('hidden');
        $('.objective-3-no-drones').removeClass('hidden');
    }

    if(options.hardMode) {
        $('.hard-mode-only').removeClass('hidden');
    } else {
        $('.hard-mode-only').addClass('hidden');
    }

    if(options.addSoldiers) {
        $('.add-soldiers-only').removeClass('hidden');
    } else {
        $('.add-soldiers-only').addClass('hidden');
    }

    $('.objective-1-drone-count').text(objective1DroneCount);
    $('.objective-2-drone-count').text(objective2DroneCount);
    $('.objective-3-drone-count').text(objective3DroneCount);

    if(options.hiddenAgendas) {
        $('.drone-total-count').text(totalDroneCount - humanPlayerCount);

        if(totalDroneCount - options.playerCount > 1) {
            $('.drone-total-count-plural').removeClass('hidden');
        } else {
            $('.drone-total-count-plural').addClass('hidden');
        }
    } else {
        $('.drone-total-count').text(totalDroneCount);

        if(totalDroneCount > 1) {
            $('.drone-total-count-plural').removeClass('hidden');
        } else {
            $('.drone-total-count-plural').addClass('hidden');
        }
    }

    $('#output-game').removeClass('hidden');
}


function updateVisibilityState() {
    const options = getOptions();

    if(options.playerCount > 2 || (!options.queenMode && options.playerCount > 1)) {
        $('#hidden-agendas-container').removeClass('hidden');
    } else {
        $('#hidden-agendas-container').addClass('hidden');
    }

    if(options.playerCount === 1) {
        $('.player-count-1-only').addClass('d-lg-block');
        $('.player-count-2-plus-only').removeClass('d-lg-block');
    } else {
        $('.player-count-1-only').removeClass('d-lg-block');
        $('.player-count-2-plus-only').addClass('d-lg-block');
    }

    if(options.includeExpansion) {
        $('.expansion-only').removeClass('hidden');
    } else {
        $('.expansion-only').addClass('hidden');

        if(options.scenario === SCENARIO.ALIEN_INCURSION || options.scenario === SCENARIO.ALIEN_EVOLVED) {
            $('#match-scenario').val(SCENARIO.RANDOM);
        }
    }

    if(options.includeCovenant) {
        $('.covenant-only').removeClass('hidden');
    } else {
        $('.covenant-only').addClass('hidden');

        if(options.scenario === SCENARIO.ALIEN_COVENANT) {
            $('#match-scenario').val(SCENARIO.RANDOM);
        }
    }

    if(options.includeFanmade) {
        $('.fanmade-only').removeClass('hidden');
    } else {
        $('.fanmade-only').addClass('hidden');

        if(options.scenario === SCENARIO.ALIEN_PROMETHEUS || options.scenario === SCENARIO.ALIEN_DEEPSPACE) {
            $('#match-scenario').val(SCENARIO.RANDOM);
        }
    }

    if(options.matchScenario === SCENARIO.NONE) {
        $('.theme-only').addClass('hidden');
    } else {
        $('.theme-only').removeClass('hidden');
    }

    // Limit to Covenant only since without it there is only a single choice for Queen
    if(options.matchScenario !== SCENARIO.NONE && options.queenMode && options.includeCovenant) {
        $('.queen-theme-only').removeClass('hidden');
    } else {
        $('.queen-theme-only').addClass('hidden');
    }

    if(options.queenMode) {
        $('.queen-mode-only').removeClass('hidden');
    } else {
        $('.queen-mode-only').addClass('hidden');
    }

    if(options.playerCount > 1 && options.includeExpansion) {
        $('.expansion-multiplayer-only').removeClass('hidden');
    } else {
        $('.expansion-multiplayer-only').addClass('hidden');
    }
}


function drawChart() {
    if(chart === null) {
        chart = new google.visualization.PieChart(document.getElementById('piechart'));
    }

    const classes = {
        intel: 0,
        leadership: 0,
        strength: 0,
        survival: 0,
        tech: 0
    };

    characters.forEach(char => {
        Object.keys(char.classes).forEach(thisClass => {
            classes[thisClass] += char.classes[thisClass];
        });
    });

    
    const data = google.visualization.arrayToDataTable([
        ['Clase', 'Número cartas'],
        ['Inteligencia', classes.intel],
        ['Liderazgo', classes.leadership],
        ['Fuerza', classes.strength],
        ['Supervivencia', classes.survival],
        ['Tecnología', classes.tech]
      ]);

      var options = {
        colors: [
            '#ffc300',
            '#00aaff',
            '#00aa00',
            '#cc0000',
            '#aaaaaa'
        ]
      };

      chart.draw(data, options);

}


function showClassDistribution() {
    $('#class-distribution-modal').modal('show');
    drawChart();
}


function showEvaluateCrew() {
    const options = getOptions();
    let names = characters.map(char => char.name).join('|');
    let settings = (options.includeExpansion ? 1 : 0) + (options.includeCovenant ? 2 : 0) + (options.queenMode ? 4 : 0);

    let URI = `https://www.kenherbert.dev/legendary-alien-crew-evaluator/?s=${settings}&c=${names}`;

    window.open(URI);
}


/**
 * Initialize the state of inputs
 */
function initialize() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(() => {
        respectDarkMode();
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        $('#save').click(saveState);
        $('#load').click(loadState);
        $('#generate').click(generateGame);
        $('#pick-alien-avatar, #randomize-alien-avatar').click(pickAlienAvatar);
        $('#view-classes').click(showClassDistribution);
        $('#evaluate-crew').click(showEvaluateCrew);
        $('#match-scenario, input[name="player-count"], input[name="include-expansion"], input[name="include-covenant"], input[name="include-fanmade"], input[name="queen-mode"]').change(updateVisibilityState);

        loadState();
        setInterval(respectDarkMode, 1000);
    });
}

initialize();
