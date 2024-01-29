/* global $ */

let characters = [];
let lastAlienAvatar = null;
let crewChart = null;
let classChart = null;
let attackRecruitChart = null;
let debugMode = false;
let settingsOverride = false;

/**
 * Check if elements need dark mode styling
 */
function respectDarkMode() {
    if($('body').hasClass('dark-mode')) {
    } else {
    }
}


function roundNumber(num) {
    return Math.round(num);
}


function getRandomItem(array, sets = [SET.BASE, SET.EXPANSION, SET.COVENANT]) {
    const possibleItems = array.filter(item => sets.includes(item.set));

    return possibleItems[getRandomNumber(possibleItems.length)];
}


function saveState() {
    if(!settingsOverride) {
        // Not grabbed from getOptions() so we have the raw values without effect of other selections
        const includeExpansion = $('#include-expansion-yes').is(':checked') ? "yes" : "no";
        const includeCovenant = $('#include-covenant-yes').is(':checked') ? "yes" : "no";
        const queenMode = $('#queen-mode-yes').is(':checked') ? "yes" : "no";

        localStorage.setItem('config', JSON.stringify({
            includeExpansion: includeExpansion,
            includeCovenant: includeCovenant,
            queenMode: queenMode
        }));
    }
}


function loadState() {
    if(!settingsOverride) {
        const options = JSON.parse(localStorage.getItem('config'));

        if(options !== null) {
            if(options.includeExpansion) {
                $('input[name="include-expansion"]').removeAttr('checked').parent().removeClass('active');
                $(`#include-expansion-${options.includeExpansion}`).prop('checked', true).parent().addClass('active');
            }

            if(options.includeCovenant) {
                $('input[name="include-covenant"]').removeAttr('checked').parent().removeClass('active');
                $(`#include-covenant-${options.includeCovenant}`).prop('checked', true).parent().addClass('active');
            }

            if(options.queenMode) {
                $('input[name="queen-mode"]').removeAttr('checked').parent().removeClass('active');
                $(`#queen-mode-${options.queenMode}`).prop('checked', true).parent().addClass('active');
            }

            updateOptionState();
        }
    }
}


function processURIParams() {
    const urlParams = new URLSearchParams(window.location.search);
    let settings = urlParams.get('s');
    let characters = urlParams.get('c');
    const debug = urlParams.get('debug');

    if(settings !== null) {
        settingsOverride = true;

        settings = parseInt(settings, 10);

        if((settings & 1) === 1) {
            $('input[name="include-expansion"]').removeAttr('checked').parent().removeClass('active');
            $(`#include-expansion-yes`).prop('checked', true).parent().addClass('active');
        }

        if((settings & 2) === 2) {
            $('input[name="include-covenant"]').removeAttr('checked').parent().removeClass('active');
            $(`#include-covenant-yes`).prop('checked', true).parent().addClass('active');
            }

        if((settings & 3) === 3) {
            $('input[name="include-fanmade"]').removeAttr('checked').parent().removeClass('active');
            $(`#include-fanmade-yes`).prop('checked', true).parent().addClass('active');
            }

        if((settings & 4) === 4) {
            $('input[name="queen-mode"]').removeAttr('checked').parent().removeClass('active');
            $(`#queen-mode-yes`).prop('checked', true).parent().addClass('active');
        }
    } else {
        loadState();
    }

    if(characters !== null) {
        characters = characters.split('|');

        characters.forEach(char => {
            $(`#character-${toSlug(char)}`).prop('checked', true).closest('.custom-multiselect-option').addClass('selected');
        });
    }

    if(debug !== null && debug === 'true') {
        debugMode = true;
    }

    updateOptionState();
}


function getOptions() {
    const includeExpansion = $('#include-expansion-yes').is(':checked');
    const includeCovenant = $('#include-covenant-yes').is(':checked');
    const includeFanmade = $('#include-fanmade-yes').is(':checked');
    const queenMode = $('#queen-mode-yes').is(':checked');

    return {
        includeExpansion: includeExpansion,
        includeCovenant: includeCovenant,
        includeFanmade: includeFanmade,
        queenMode: queenMode
    };
}


function deselectHiddenCharacters() {
    $('.custom-multiselect-checkbox:checked:not(:visible)').prop('checked', false).closest('.custom-multiselect-option').removeClass('selected');
}


function updateOptionState() {
    const options = getOptions();
    saveState();
    
    if(options.includeExpansion) {
        $('.expansion-only').removeClass('hidden');
    } else {
        $('.expansion-only').addClass('hidden');
    }

    if(options.includeCovenant) {
        $('.covenant-only').removeClass('hidden');
    } else {
        $('.covenant-only').addClass('hidden');
    }

    if(options.includeFanmade) {
        $('.fanmade-only').removeClass('hidden');
    } else {
        $('.fanmade-only').addClass('hidden');
    }

    if(options.queenMode) {
        $('#custom-multiselect').attr('data-required', 6);
    } else {
        $('#custom-multiselect').attr('data-required', 4);
    }

    deselectHiddenCharacters();
    checkMultiselectLimits();
}


function drawClassesChart() {
    if(classChart === null) {
        classChart = new google.visualization.PieChart(document.getElementById('piechart-classes'));
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

      classChart.draw(data, options);

}


function drawCrewsChart() {
    if(crewChart === null) {
        crewChart = new google.visualization.PieChart(document.getElementById('piechart-crews'));
    }

    const crews = {
        nostromo: 0,
        sulaco: 0,
        fury161: 0,
        theBetty: 0,
        covenant: 0
    };

    characters.forEach(char => {
        Object.keys(char.crew).forEach(thisCrew => {
            crews[thisCrew] += char.crew[thisCrew];
        });
    });

    
    const data = google.visualization.arrayToDataTable([
        ['Crew', 'Card count'],
        ['Nostromo', crews.nostromo],
        ['Sulaco', crews.sulaco],
        ['Fury 161', crews.fury161],
        ['The Betty', crews.theBetty],
        ['Covenant', crews.covenant]
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

      crewChart.draw(data, options);

}

function drawAttackRecruitChart() {
    if(attackRecruitChart === null) {
        attackRecruitChart = new google.visualization.PieChart(document.getElementById('piechart-attack-recruit'));
    }

    const totals = characters.reduce((totals, char) => {
        return {
            attack: totals.attack += char.attackCards,
            recruit: totals.recruit += char.recruitCards
        };
    }, {attack: 0, recruit: 0});


    
    const data = google.visualization.arrayToDataTable([
        ['Attack vs. Recruit', 'Card count'],
        ['Recruit', totals.recruit],
        ['Attack', totals.attack]
      ]);

      var options = {
        colors: [
            '#ffc300',
            '#cc0000'
        ]
      };

      attackRecruitChart.draw(data, options);
}


function filterCharacters() {
    let selectedCharacters = [];
    $('.custom-multiselect-checkbox:checked').each(function() {
        selectedCharacters.push($(this).val());
    });

    characters = data.characters.filter(char => selectedCharacters.includes(char.name));
}


function evaluateCrew() {
    $('#results').removeClass('hidden');
    filterCharacters();
    drawClassesChart();
    drawCrewsChart();
    drawAttackRecruitChart();

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

    const possibleCharacters = data.characters.filter(char => sets.includes(char.set));

    let totalAttackCards = 0;
    let totalRecruitCards = 0;
    let totalCoordinateAttackCards = 0;
    let totalCoordinateRecruitCards = 0;
    let totalStrikeMitigationCards = 0;
    let totalCrewCost = 0;


    possibleCharacters.forEach(char => {
        totalAttackCards += char.attackCards;
        totalRecruitCards += char.recruitCards;
        totalCoordinateAttackCards += char.coordinateAttackCards;
        totalCoordinateRecruitCards += char.coordinateRecruitCards;
        totalStrikeMitigationCards += char.strikeMitigationCards;
        totalCrewCost += char.totalCost;
    });

    let factor = 4;

    if(options.queenMode) {
        factor = 6;
    }

    let averageAttackCards = totalAttackCards / possibleCharacters.length * factor;
    let averageRecruitCards = totalRecruitCards / possibleCharacters.length * factor;
    let averageCoordinateAttackCards = totalCoordinateAttackCards / possibleCharacters.length * factor;
    let averageCoordinateRecruitCards = totalCoordinateRecruitCards / possibleCharacters.length * factor;
    let averageStrikeMitigationCards = totalStrikeMitigationCards / possibleCharacters.length * factor;
    let averageCrewCost = totalCrewCost / possibleCharacters.length * factor;

    let crewAttackCards = 0;
    let crewRecruitCards = 0;
    let crewCoordinateAttackCards = 0;
    let crewCoordinateRecruitCards = 0;
    let crewStrikeMitigationCards = 0;
    let crewCost = 0;

    let classes = {
        intel: 0,
        leadership: 0,
        strength: 0,
        survival: 0,
        tech: 0
    };

    let classSynergyRequirements = {
        intel: 0,
        leadership: 0,
        strength: 0,
        survival: 0,
        tech: 0
    };

    let crew = {
        nostromo: 0,
        sulaco: 0,
        fury161: 0,
        theBetty: 0,
        covenant: 0
    };

    let crewSynergyRequirements = {
        nostromo: 0,
        sulaco: 0,
        fury161: 0,
        theBetty: 0,
        covenant: 0
    };

    characters.forEach(char => {
        crewAttackCards += char.attackCards;
        crewRecruitCards += char.recruitCards;
        crewCoordinateAttackCards += char.coordinateAttackCards;
        crewCoordinateRecruitCards += char.coordinateRecruitCards;
        crewStrikeMitigationCards += char.strikeMitigationCards;
        crewCost += char.totalCost;
        classes.intel += char.classes.intel;
        classes.leadership += char.classes.leadership;
        classes.strength += char.classes.strength;
        classes.survival += char.classes.survival;
        classes.tech += char.classes.tech;

        classSynergyRequirements.intel += char.classSynergyCards.intel;
        classSynergyRequirements.leadership += char.classSynergyCards.leadership;
        classSynergyRequirements.strength += char.classSynergyCards.strength;
        classSynergyRequirements.survival += char.classSynergyCards.survival;
        classSynergyRequirements.tech += char.classSynergyCards.tech;

        crew.nostromo += char.crew.nostromo;
        crew.sulaco += char.crew.sulaco;
        crew.fury161 += char.crew.fury161;
        crew.theBetty += char.crew.theBetty;
        crew.covenant += char.crew.covenant;

        crewSynergyRequirements.nostromo += char.crewSynergyCards.nostromo;
        crewSynergyRequirements.sulaco += char.crewSynergyCards.sulaco;
        crewSynergyRequirements.fury161 += char.crewSynergyCards.fury161;
        crewSynergyRequirements.theBetty += char.crewSynergyCards.theBetty;
        crewSynergyRequirements.covenant += char.crewSynergyCards.covenant;
    });


    let ranking = 0;
    let strengths = [];
    let weaknesses = [];

    let attackCardsWarningDelta = (averageAttackCards * 20) / 100;
    let attackCardsErrorDelta = (averageAttackCards * 40) / 100;


    if(crewAttackCards > (averageAttackCards + attackCardsWarningDelta)) {
        ranking += 5;
        strengths.push(`<li>High number of attack cards (${crewAttackCards} in deck, average is ${roundNumber(averageAttackCards)})${debugMode ? ` [+5]` : ''}</li>`);
    }

    if(crewAttackCards < (averageAttackCards - attackCardsErrorDelta)) {
        ranking -= 5 + (averageAttackCards - crewAttackCards);
        weaknesses.push(`<li>Extremely low number of attack cards - you will struggle to kill enemies (${crewAttackCards} in deck, average is ${roundNumber(averageAttackCards)})${debugMode ? ` [-${5 + (averageAttackCards - crewAttackCards)}]` : ''}</li>`);
    } else if(crewAttackCards < (averageAttackCards - attackCardsWarningDelta)) {
        ranking -= (averageAttackCards - crewAttackCards);
        weaknesses.push(`<li>Low number of attack cards - you may struggle to kill powerful enemies (${crewAttackCards} in deck, average is ${roundNumber(averageAttackCards)})${debugMode ? ` [-${averageAttackCards - crewAttackCards}]` : ''}</li>`);
    }

    let recruitCardsWarningDelta = (averageRecruitCards * 20) / 100;
    let recruitCardsErrorDelta = (averageRecruitCards * 40) / 100;

    let crewHighRecruit = false;

    if(crewRecruitCards > (averageRecruitCards + recruitCardsWarningDelta)) {
        ranking += 5;
        crewHighRecruit = true;
        strengths.push(`<li>High number of recruit cards (${crewRecruitCards} in deck, average is ${roundNumber(averageRecruitCards)})${debugMode ? ` [+5]` : ''}</li>`);
    }

    if(crewRecruitCards < (averageRecruitCards - recruitCardsErrorDelta)) {
        ranking -= 5 + (averageRecruitCards - crewRecruitCards);
        weaknesses.push(`<li>Extremely low number of recruit cards - you will struggle to recruit characters (${crewRecruitCards} in deck, average is ${roundNumber(averageRecruitCards)})${debugMode ? ` [-${5 + (averageRecruitCards - crewRecruitCards)}]` : ''}</li>`);
    } else if(crewRecruitCards < (averageRecruitCards - recruitCardsWarningDelta)) {
        ranking -= (averageRecruitCards - crewRecruitCards);
        weaknesses.push(`<li>Low number of recruit cards - you may struggle to recruit more powerful characters (${crewRecruitCards} in deck, average is ${roundNumber(averageRecruitCards)})${debugMode ? ` [-${averageRecruitCards - crewRecruitCards}]` : ''}</li>`);
    }

    let costWarningDelta = (averageCrewCost * 10) / 100;
    let costErrorDelta = (averageCrewCost * 20) / 100;

    let crewLowCost = false;

    if(crewCost < (averageCrewCost - costWarningDelta)) {
        ranking += 5;
        crewLowCost = true;
        strengths.push(`<li>Low cost - characters will be easier to recruit (${crewCost} total, average is ${roundNumber(averageCrewCost)})${debugMode ? ` [+5]` : ''}</li>`);
    }

    if(crewCost > (averageCrewCost + costErrorDelta)) {
        ranking -= 10;
        weaknesses.push(`<li>Extremely high character cost - you will struggle to recruit characters (${crewCost} total, average is ${roundNumber(averageCrewCost)})${debugMode ? ` [-10]` : ''}</li>`);
    } else if(crewCost > (averageCrewCost + costWarningDelta)) {
        ranking -= 5;
        weaknesses.push(`<li>High character cost - you may struggle to recruit more powerful characters (${crewCost} total, average is ${roundNumber(averageCrewCost)})${debugMode ? ` [-5]` : ''}</li>`);
    }

    //Extra bonus for synergy of low cost and high recruit deck
    if(crewHighRecruit && crewLowCost) {
        ranking += 10;

        if(debugMode) {
            strengths.push('<em>Additional bonus for high recruit card count and low overall crew cost</em> [+10]');
        }
    }

    let crewCoordinateCards = crewCoordinateAttackCards + crewCoordinateRecruitCards;
    let averageCoordinateCards = averageCoordinateAttackCards + averageCoordinateRecruitCards;
    let coordinateWarningDelta = (averageCoordinateCards * 25) / 100;
    let coordinateErrorDelta = (averageCoordinateCards * 50) / 100;

    if(crewCoordinateCards > (averageCoordinateCards + coordinateErrorDelta)) {
        ranking += 8;
        strengths.push(`<li>Many coordinate cards - teamwork potential is very high (${crewCoordinateCards} in deck, ${roundNumber(averageCoordinateCards)} is typical)${debugMode ? ` [+8]` : ''}</li>`);
    } else if(crewCoordinateCards > (averageCoordinateCards + coordinateWarningDelta)) {
        ranking += 4;
        strengths.push(`<li>Above average coordinate cards - teamwork potential is high (${crewCoordinateCards} in deck, ${roundNumber(averageCoordinateCards)} is typical)${debugMode ? ` [+4]` : ''}</li>`);
    }

    if(crewCoordinateCards === 0) {
        ranking -= 8;
        weaknesses.push(`<li>No coordinate cards - you will only have Sergeant cards to coordinate${debugMode ? ` [-8]` : ''}</li>`);
    } else if(crewCoordinateCards < (averageCoordinateCards - coordinateErrorDelta)) {
        ranking -= 5;
        weaknesses.push(`<li>Very few coordinate cards - teamwork potential is very low (${crewCoordinateCards} in deck, ${roundNumber(averageCoordinateCards)} is typical)${debugMode ? ` [-5]` : ''}</li>`);
    } else if(crewCoordinateCards < (averageCoordinateCards - coordinateWarningDelta)) {
        ranking -= 2;
        weaknesses.push(`<li>Few coordinate cards - teamwork potential is restricted (${crewCoordinateCards} in deck, ${roundNumber(averageCoordinateCards)} is typical)${debugMode ? ` [-2]` : ''}</li>`);
    }

    
    let strikeMitigationWarningDelta = (averageStrikeMitigationCards * 20) / 100;
    let strikeMitigationErrorDelta = (averageStrikeMitigationCards * 40) / 100;

    if(crewStrikeMitigationCards > (averageStrikeMitigationCards + strikeMitigationErrorDelta)) {
        ranking += 5 + (crewStrikeMitigationCards - averageStrikeMitigationCards);
        strengths.push(`<li>Healing and strike avoidance cards are very common (${crewStrikeMitigationCards} in deck, average is ${roundNumber(averageStrikeMitigationCards)})${debugMode ? ` [+${5 + (crewStrikeMitigationCards - averageStrikeMitigationCards)}]` : ''}</li>`);
    //} else if(crewStrikeMitigationCards > (averageStrikeMitigationCards + strikeMitigationWarningDelta)) {
        //ranking += 5;
        //strengths.push(`<li>Healing and strike avoidance cards are common (${crewStrikeMitigationCards} in deck, average is ${roundNumber(averageStrikeMitigationCards)})</li>`);
    }

    if(crewStrikeMitigationCards === 0) {
        ranking -= 10;
        weaknesses.push(`<li>No healing and strike avoidance cards - strikes cannot be prevented or healed${debugMode ? ` [-10]` : ''}</li>`);
    } else if(crewStrikeMitigationCards < (averageStrikeMitigationCards - strikeMitigationErrorDelta)) {
        ranking -= 6;
        weaknesses.push(`<li>Very few healing and strike avoidance cards - losing health is likely (${crewStrikeMitigationCards} in deck, average is ${roundNumber(averageStrikeMitigationCards)})${debugMode ? ` [-6]` : ''}</li>`);
    } else if(crewStrikeMitigationCards < (averageStrikeMitigationCards - strikeMitigationWarningDelta)) {
        ranking -= 2;
        weaknesses.push(`<li>Few healing and strike avoidance cards - losing health is possible (${crewStrikeMitigationCards} in deck, average is ${roundNumber(averageStrikeMitigationCards)})${debugMode ? ` [-2]` : ''}</li>`);
    }


    if(classSynergyRequirements.intel > 0) {
        if(classes.intel < 10) {
            ranking -= classSynergyRequirements.intel;
            weaknesses.push(`<li>Intel synergy with very few Intel cards (${classSynergyRequirements.intel} needing synergy, ${classes.intel} in deck)${debugMode ? ` [-${classSynergyRequirements.intel}]` : ''}</li>`);
        } else if(classes.intel > 20) {
            ranking += classSynergyRequirements.intel;
            strengths.push(`<li>Good Intel synergy opportunities (${classSynergyRequirements.intel} needing synergy, ${classes.intel} in deck)${debugMode ? ` [+${classSynergyRequirements.intel}]` : ''}</li>`);
        }
    }

    if(classSynergyRequirements.leadership > 0) {
        if(classes.leadership < 10) {
            ranking -= classSynergyRequirements.leadership;
            weaknesses.push(`<li>Leadership synergy with very few Leadership cards (${classSynergyRequirements.leadership} needing synergy, ${classes.leadership} in deck)${debugMode ? ` [-${classSynergyRequirements.leadership}]` : ''}</li>`);
        } else if(classes.leadership > 20) {
            ranking += classSynergyRequirements.leadership;
            strengths.push(`<li>Good Leadership synergy opportunities (${classSynergyRequirements.leadership} needing synergy, ${classes.leadership} in deck)${debugMode ? ` [+${classSynergyRequirements.leadership}]` : ''}</li>`);
        }
    }

    if(classSynergyRequirements.strength > 0) {
        if(classes.strength < 10) {
            ranking -= classSynergyRequirements.strength;
            weaknesses.push(`<li>Strength synergy with very few Strength cards (${classSynergyRequirements.strength} needing synergy, ${classes.strength} in deck)${debugMode ? ` [-${classSynergyRequirements.strength}]` : ''}</li>`);
        } else if(classes.strength > 20) {
            ranking += classSynergyRequirements.strength;
            strengths.push(`<li>Good Strength synergy opportunities (${classSynergyRequirements.strength} needing synergy, ${classes.strength} in deck)${debugMode ? ` [+${classSynergyRequirements.strength}]` : ''}</li>`);
        }
    }

    if(classSynergyRequirements.survival > 0) {
        if(classes.survival < 10) {
            ranking -= classSynergyRequirements.survival;
            weaknesses.push(`<li>Survival synergy with very few Survival cards (${classSynergyRequirements.survival} needing synergy, ${classes.survival} in deck)${debugMode ? ` [-${classSynergyRequirements.survival}]` : ''}</li>`);
        } else if(classes.survival > 20) {
            ranking += classSynergyRequirements.survival;
            strengths.push(`<li>Good Survival synergy opportunities (${classSynergyRequirements.survival} needing synergy, ${classes.survival} in deck)${debugMode ? ` [+${classSynergyRequirements.survival}]` : ''}</li>`);
        }
    }

    if(classSynergyRequirements.tech > 0) {
        if(classes.tech < 10) {
            ranking -= classSynergyRequirements.tech;
            weaknesses.push(`<li>Tech synergy with very few Tech cards (${classSynergyRequirements.tech} needing synergy, ${classes.tech} in deck)${debugMode ? ` [-${classSynergyRequirements.tech}]` : ''}</li>`);
        } else if(classes.tech > 20) {
            ranking += classSynergyRequirements.tech;
            strengths.push(`<li>Good Tech synergy opportunities (${classSynergyRequirements.tech} needing synergy, ${classes.tech} in deck)${debugMode ? ` [+${classSynergyRequirements.tech}]` : ''}</li>`);
        }
    }


    if(crewSynergyRequirements.nostromo > 0) {
        if(crew.nostromo < 10) {
            ranking -= crewSynergyRequirements.nostromo;
            weaknesses.push(`<li>Nostromo synergy with very few Nostromo crew (${crewSynergyRequirements.nostromo} needing synergy, ${crew.nostromo} in deck)${debugMode ? ` [-${crewSynergyRequirements.nostromo}]` : ''}</li>`);
        } else if(crew.nostromo > 20) {
            ranking += crewSynergyRequirements.nostromo;
            strengths.push(`<li>Good Nostromo synergy opportunities (${crewSynergyRequirements.nostromo} needing synergy, ${crew.nostromo} in deck)${debugMode ? ` [+${crewSynergyRequirements.nostromo}]` : ''}</li>`);
        }
    }

    if(crewSynergyRequirements.sulaco > 0) {
        if(crew.sulaco < 10) {
            ranking -= crewSynergyRequirements.sulaco;
            weaknesses.push(`<li>Sulaco synergy with very few Sulaco crew (${crewSynergyRequirements.sulaco} needing synergy, ${crew.sulaco} in deck)${debugMode ? ` [-${crewSynergyRequirements.sulaco}]` : ''}</li>`);
        } else if(crew.sulaco > 20) {
            ranking += crewSynergyRequirements.sulaco;
            strengths.push(`<li>Good Sulaco synergy opportunities (${crewSynergyRequirements.sulaco} needing synergy, ${crew.sulaco} in deck)${debugMode ? ` [+${crewSynergyRequirements.sulaco}]` : ''}</li>`);
        }
    }

    if(crewSynergyRequirements.fury161 > 0) {
        if(crew.fury161 < 10) {
            ranking -= crewSynergyRequirements.fury161;
            weaknesses.push(`<li>Fury 161 synergy with very few Fury 161 crew (${crewSynergyRequirements.fury161} needing synergy, ${crew.fury161} in deck)${debugMode ? ` [-${crewSynergyRequirements.fury161}]` : ''}</li>`);
        } else if(crew.fury161 > 20) {
            ranking += crewSynergyRequirements.fury161;
            strengths.push(`<li>Good Fury 161 synergy opportunities (${crewSynergyRequirements.fury161} needing synergy, ${crew.fury161} in deck)${debugMode ? ` [+${crewSynergyRequirements.fury161}]` : ''}</li>`);
        }
    }

    if(crewSynergyRequirements.theBetty > 0) {
        if(crew.theBetty < 10) {
            ranking -= crewSynergyRequirements.theBetty;
            weaknesses.push(`<li>Betty synergy with very few Betty crew (${crewSynergyRequirements.theBetty} needing synergy, ${crew.theBetty} in deck)${debugMode ? ` [-${crewSynergyRequirements.theBetty}]` : ''}</li>`);
        } else if(crew.theBetty > 20) {
            ranking += crewSynergyRequirements.theBetty;
            strengths.push(`<li>Good Betty synergy opportunities (${crewSynergyRequirements.theBetty} needing synergy, ${crew.theBetty} in deck)${debugMode ? ` [+${crewSynergyRequirements.theBetty}]` : ''}</li>`);
        }
    }

    if(crewSynergyRequirements.covenant > 0) {
        if(crew.covenant < 10) {
            ranking -= crewSynergyRequirements.covenant;
            weaknesses.push(`<li>Covenant synergy with very few Covenant crew (${crewSynergyRequirements.covenant} needing synergy, ${crew.covenant} in deck)${debugMode ? ` [-${crewSynergyRequirements.covenant}]` : ''}</li>`);
        } else if(crew.covenant > 20) {
            ranking += crewSynergyRequirements.covenant;
            strengths.push(`<li>Good Covenant synergy opportunities (${crewSynergyRequirements.covenant} needing synergy, ${crew.covenant} in deck)${debugMode ? ` [+${crewSynergyRequirements.covenant}]` : ''}</li>`);
        }
    }

    if(strengths.length > 0) {
        $('#crew-strengths-content').html(strengths.join(''));
        $('#crew-strengths').removeClass('hidden');
    } else {
        $('#crew-strengths').addClass('hidden');
    }

    if(weaknesses.length > 0) {
        $('#crew-weaknesses-content').html(weaknesses.join(''));
        $('#crew-weaknesses').removeClass('hidden');
    } else {
        $('#crew-weaknesses').addClass('hidden');
    }

    let finalRanking = ranking;
    let rankScaled = false;

    if(options.queenMode) {
        finalRanking = (ranking - 10)
        if(finalRanking > 0) {
            finalRanking *= .6;
            rankScaled = true;
        }
    }

    let descriptiveRank = '';

    if(finalRanking >= 25) {
        descriptiveRank = 'Very strong';
    } else if(finalRanking >= 20) {
        descriptiveRank = 'Strong';
    } else if(finalRanking >= 10) {
        descriptiveRank = 'Above average';
    } else if(finalRanking >= 0) {
        descriptiveRank = 'Average';
    } else if(finalRanking >= -5) {
        descriptiveRank = 'Below average';
    } else if(finalRanking >= -10) {
        descriptiveRank = 'Challenging';
    } else if(finalRanking >= -20) {
        descriptiveRank = 'Very challenging';
    } else if(finalRanking < -20) {
        descriptiveRank = 'Unlikely to survive';
    }

    $('#crew-score-container').removeClass('hidden');

    if(rankScaled) {
        $('#crew-score').text(`${descriptiveRank}${debugMode ? ` [${finalRanking} (total ${ranking} - 10 * 0.6 due to queen mode)]` : ''}`);
    } else if(options.queenMode) {
        $('#crew-score').text(`${descriptiveRank}${debugMode ? ` [${finalRanking} (total ${ranking} - 10 due to queen mode)]` : ''}`);
    } else {
        $('#crew-score').text(`${descriptiveRank}${debugMode ? ` [${finalRanking}]` : ''}`);
    }
}


function toSlug(name) {
    return name.toLowerCase().replace(/\s/g, '-').replace(/\'/g, '').replace(/\./g, '');
}


function populateCharacters() {
    const options = getOptions();

    data.characters.forEach(char => {
        const $template = $('.character-template').clone();
        $template.removeClass('character-template');

        if(char.set === SET.BASE) {
            $template.removeClass('hidden');
        } else if(char.set === SET.EXPANSION) {
            $template.addClass('expansion-only');
        } else if(char.set === SET.COVENANT) {
            $template.addClass('covenant-only');
        } else if(char.set === SET.FANMADE) {
            $template.addClass('fanmade-only');
        }

        $template.find('.character-name').text(char.name);
        $template.find('label').attr('for', `character-${toSlug(char.name)}`);
        $template.find('input').val(char.name).attr('id', `character-${toSlug(char.name)}`);

        let classes = [];

        if(char.classes.intel > 0) {
            classes.push('<img src="https://www.kenherbert.dev/static/img/class-intel.png" title="Intel class" alt="Intel class">');
        }

        if(char.classes.leadership > 0) {
            classes.push('<img src="https://www.kenherbert.dev/static/img/class-leadership.png" title="Leadership class" alt="Leadership class">');
        }

        if(char.classes.strength > 0) {
            classes.push('<img src="https://www.kenherbert.dev/static/img/class-strength.png" title="Strength class" alt="Strength class">');
        }

        if(char.classes.survival > 0) {
            classes.push('<img src="https://www.kenherbert.dev/static/img/class-survival.png" title="Survival class" alt="Survival class">');
        }

        if(char.classes.tech > 0) {
            classes.push('<img src="https://www.kenherbert.dev/static/img/class-tech.png" title="Tech class" alt="Tech class">');
        }
        
        $template.find('.character-classes').html(classes.join(''));

        let crews = [];

        if(char.crew.nostromo > 0) {
            crews.push('<img src="https://www.kenherbert.dev/static/img/crew-nostromo.png" title="Nostromo Crew" alt="Nostromo crew">');
        }

        if(char.crew.sulaco > 0) {
            crews.push('<img src="https://www.kenherbert.dev/static/img/crew-sulaco.png" title="Sulaco Crew" alt="Sulaco crew">');
        }

        if(char.crew.fury161 > 0) {
            crews.push('<img src="https://www.kenherbert.dev/static/img/crew-fury-161.png" title="Fury 161 Crew" alt="Fury 161 crew">');
        }

        if(char.crew.theBetty > 0) {
            crews.push('<img src="https://www.kenherbert.dev/static/img/crew-betty.png" title="The Betty Crew" alt="The Betty crew">');
        }

        if(char.crew.covenant > 0) {
            crews.push('<img src="https://www.kenherbert.dev/static/img/crew-covenant.png" title="Covenant Crew" alt="Covenant crew">');
        }
        
        $template.find('.character-crews').html(crews.join(''));

        $('#custom-multiselect').append($template);
    });
}

function checkMultiselectLimits(evt) {
    let count = $('.custom-multiselect-checkbox:visible:checked').length;
    let max = parseInt($('#custom-multiselect').attr('data-required'), 10);

    if(max - count === 0) {
        $('.custom-multiselect-checkbox').not(':checked').prop('disabled', true);
        $('#custom-multiselect-indicator').addClass('hidden');
        $('#custom-multiselect-full').removeClass('hidden');
        evaluateCrew();
    } else {
        $('.custom-multiselect-checkbox').prop('disabled', false);
        $('#custom-multiselect-indicator').removeClass('hidden');
        $('#custom-multiselect-full').addClass('hidden');
        $('#results').addClass('hidden');
    }

    $('#custom-multiselect-total').text(max);
    $('#custom-multiselect-remaining').text(max - count);

    if(max - count === 1) {
        $('#custom-multiselect-remaining-plural').addClass('hidden');
    } else {
        $('#custom-multiselect-remaining-plural').removeClass('hidden');
    }
}


function checkboxOnChange(evt) {
    checkMultiselectLimits(evt);

    if($(evt.target).is(':checked')) {
        $(evt.target).closest('.custom-multiselect-option').addClass('selected');
    } else {
        $(evt.target).closest('.custom-multiselect-option').removeClass('selected');
    }
}

function toggleCheckbox(evt) {
    $(evt.target).closest('.custom-multiselect-option').find('.custom-multiselect-checkbox').trigger('click');
}

function showHoverState(evt) {
    $(evt.target).closest('.custom-multiselect-option').addClass('active');
}

function hideHoverState(evt) {
    $(evt.target).closest('.custom-multiselect-option').removeClass('active');
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
    
        populateCharacters();
        processURIParams();

        $('input[name="include-expansion"], input[name="include-covenant"], input[name="include-fanmade"], input[name="queen-mode"]').change(updateOptionState);
        $('#evaluate').click(evaluateCrew);
        $('.custom-multiselect-option').mouseover(showHoverState);
        $('.custom-multiselect-option').mouseout(hideHoverState);
        $('.custom-multiselect-infobox').click(toggleCheckbox);
        $('.custom-multiselect-checkbox').change(checkboxOnChange);

        populateChangelog($('#changelog-accordion'), $('#changelog-template'), $('#last-updated'), crewEvaluatorChangelog);
        setInterval(respectDarkMode, 1000);
    });
}

initialize();
