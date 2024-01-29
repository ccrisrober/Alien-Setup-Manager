const SET = {
    BASE: 0,
    EXPANSION: 1,
    COVENANT: 2,
    FANMADE: 3
};


const RACE = {
    HUMAN: 1,
    ALIEN: 4,
    QUEEN: 8
};


const SCENARIO = {
    NONE: -1,
    RANDOM: 0,
    ALIEN: 1,
    ALIENS: 2,
    ALIEN3: 4,
    ALIEN_RESURRECTION: 8,
    ALIEN_INCURSION: 16,
    ALIEN_EVOLVED: 32,
    ALIEN_COVENANT: 64,
    ALIEN_PROMETHEUS: 128,
    ALIEN_DEEPSPACE: 256
};


const data = {
    scenarios: [
        {
            name: 'None',
            set: SET.BASE,
            id: SCENARIO.NONE,
            canPick: false
        },
         {
            name: 'Alien',
            set: SET.BASE,
            id: SCENARIO.ALIEN,
            objectives: [
                'The S.O.S.',
                'No One Can Hear You Scream',
                'A Perfect Organism'
            ],
            canPick: true
        },
        {
            name: 'Aliens',
            set: SET.BASE,
            id: SCENARIO.ALIENS,
            objectives: [
                'The Lost Colony',
                'They Mostly Come At Night',
                'Who\'s Laying The Eggs?'
            ],
            canPick: true
        },
        {
            name: 'Alien 3',
            set: SET.BASE,
            id: SCENARIO.ALIEN3,
            objectives: [
                'Where Are The Brothers?',
                'The Beast Is Out There',
                'Nobody Can Stop It'
            ],
            canPick: true
        },
        {
            name: 'Alien Resurrection',
            set: SET.BASE,
            id: SCENARIO.ALIEN_RESURRECTION,
            objectives: [
                'Breakout',
                'You\'re A Thing. A Construct.',
                'She\'ll Breed. You\'ll Die.'
            ],
            canPick: true
        },
        {
            name: 'Alien Incursion',
            set: SET.EXPANSION,
            id: SCENARIO.ALIEN_INCURSION,
            objectives: [
                'Strange Behaviour',
                'New Residents',
                'Ruler Of The Roost'
            ],
            canPick: true
        },
        {
            name: 'Alien Evolved',
            set: SET.EXPANSION,
            id: SCENARIO.ALIEN_EVOLVED,
            objectives: [
                'Incubators',
                'Release The Hounds',
                'The Final Creation'
            ],
            canPick: true
        },
        {
            name: 'Alien: Covenant',
            set: SET.COVENANT,
            id: SCENARIO.ALIEN_COVENANT,
            objectives: [
                'Rogue Transmission',
                'Do Make Yourselves At Home',
                'The Lonely Perfection Of My Dreams'
            ],
            canPick: true
        },
        {
            name: 'Alien: Prometheus',
            set: SET.FANMADE,
            id: SCENARIO.ALIEN_PROMETHEUS,
            objectives: [
                'Misión de reconocimiento',
                'Ataque de Fifield',
                '¿Por qué nos odian?'
            ],
            canPick: true
        },
        {
            name: 'Deep Space',
            set: SET.FANMADE,
            id: SCENARIO.ALIEN_DEEPSPACE,
            objectives: [
                "Where's that damn maps?",
                'Oh. I see. You just broke it, hm?',
                "We're gonna blow up the ship!"
            ],
            canPick: true
        }
    ],
    objectives: [
        {
            name: 'The S.O.S.',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            stage: 1
        },
        {
            name: 'No One Can Hear You Scream',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            stage: 2
        },
        {
            name: 'A Perfect Organism',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            stage: 3
        },
        {
            name: 'The Lost Colony',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            stage: 1
        },
        {
            name: 'They Mostly Come At Night',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            stage: 2
        },
        {
            name: 'Who\'s Laying The Eggs?',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            stage: 3
        },
        {
            name: 'Where Are The Brothers?',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            stage: 1
        },
        {
            name: 'The Beast Is Out There',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            stage: 2
        },
        {
            name: 'Nobody Can Stop It',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            stage: 3
        },
        {
            name: 'Breakout',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            stage: 1
        },
        {
            name: 'You\'re A Thing. A Construct.',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            stage: 2
        },
        {
            name: 'She\'ll Breed. You\'ll Die.',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            stage: 3
        },
        {
            name: 'Strange Behaviour',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_INCURSION,
            stage: 1
        },
        {
            name: 'New Residents',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_INCURSION,
            stage: 2
        },
        {
            name: 'Ruler Of The Roost',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_INCURSION,
            stage: 3
        },
        {
            name: 'Incubators',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_EVOLVED,
            stage: 1
        },
        {
            name: 'Release The Hounds',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_EVOLVED,
            stage: 2
        },
        {
            name: 'The Final Creation',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_EVOLVED,
            stage: 3
        },
        {
            name: 'Rogue Transmission',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            stage: 1
        },
        {
            name: 'Do Make Yourselves At Home',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            stage: 2
        },
        {
            name: 'The Lonely Perfection Of My Dreams',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            stage: 3
        },


        {
            name: 'Misión de reconocimiento',
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_PROMETHEUS,
            stage: 1
        },
        {
            name: 'Ataque de Fifield',
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_PROMETHEUS,
            stage: 2
        },
        {
            name: '¿Por qué nos odian?',
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_PROMETHEUS,
            stage: 3
        },

        {
            name: "Where's that damn maps?",
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_DEEPSPACE,
            stage: 1
        },
        {
            name: 'Oh. I see. You just broke it, hm?',
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_DEEPSPACE,
            stage: 2
        },
        {
            name: "We're gonna blow up the ship!",
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_DEEPSPACE,
            stage: 3
        }
    ],
    locations: [
        {
            name: 'The Nostromo',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN
        },
        {
            name: 'Hadley\'s Hope',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS
        },
        {
            name: 'Fiorina "Fury" 161',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3
        },
        {
            name: 'The Auriga',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION
        },
        {
            name: 'The Aviary',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_INCURSION
        },
        {
            name: 'Science Station Echidna',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_EVOLVED
        },
        {
            name: 'Planet 4',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT
        },




        {
            name: 'LV-223',
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_PROMETHEUS
        }, 
        {
            name: 'Deep Space',
            set: SET.FANMADE,
            scenario: SCENARIO.ALIEN_DEEPSPACE
        }
    ],
    characters: [
        {
            name: 'Captain Dallas',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            isRipley: false,
            classes: {
                intel: 5,
                leadership: 9,
                strength: 0,
                survival: 0,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 8,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 54,
            classSynergyCards: {
                intel: 0,
                leadership: 5,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 14,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 3,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Chief Engineer Parker',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 5,
                tech: 9
            },
            recruitCards: 0,
            attackCards: 14,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 6,
            strikeMitigationCards: 0,
            totalCost: 62,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 14,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 3,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Engineer Brett',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 8,
                tech: 9
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 5,
            strikeMitigationCards: 0,
            totalCost: 56,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 3,
                tech: 3
            },
            crew: {
                nostromo: 14,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 5,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Executive Officer Kane',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN,
            isRipley: false,
            classes: {
                intel: 9,
                leadership: 8,
                strength: 0,
                survival: 0,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 57,
            classSynergyCards: {
                intel: 3,
                leadership: 3,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 14,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Navigator Lambert',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            isRipley: false,
            classes: {
                intel: 9,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 5
            },
            recruitCards: 5,
            attackCards: 8,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 3,
            strikeMitigationCards: 0,
            totalCost: 55,
            classSynergyCards: {
                intel: 5,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 5
            },
            crew: {
                nostromo: 14,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Warrant Officer Ripley',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN,
            isRipley: true,
            classes: {
                intel: 0,
                leadership: 5,
                strength: 0,
                survival: 9,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 9,
            totalCost: 51,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 5,
                tech: 0
            },
            crew: {
                nostromo: 14,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 3,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Bishop',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 8,
                tech: 6
            },
            recruitCards: 10,
            attackCards: 3,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 5,
            totalCost: 44,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 3,
                tech: 5
            },
            crew: {
                nostromo: 0,
                sulaco: 14,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Corporal Hicks',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 9,
                strength: 0,
                survival: 5,
                tech: 0
            },
            recruitCards: 3,
            attackCards: 10,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 3,
            strikeMitigationCards: 0,
            totalCost: 65,
            classSynergyCards: {
                intel: 0,
                leadership: 5,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 14,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Lieutenant Gorman',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIENS,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 9,
                strength: 0,
                survival: 8,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 14,
            coordinateRecruitCards: 5,
            coordinateAttackCards: 5,
            strikeMitigationCards: 8,
            totalCost: 66,
            classSynergyCards: {
                intel: 0,
                leadership: 3,
                strength: 0,
                survival: 3,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 14,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Lieutenant Ripley',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            isRipley: true,
            classes: {
                intel: 0,
                leadership: 5,
                strength: 9,
                survival: 0,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 54,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 3,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 14,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Private Drake',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIENS,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 9,
                survival: 0,
                tech: 8
            },
            recruitCards: 0,
            attackCards: 14,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 57,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 3,
                survival: 0,
                tech: 3
            },
            crew: {
                nostromo: 0,
                sulaco: 14,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 5,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Private Hudson',
            set: SET.BASE,
            scenario: SCENARIO.ALIENS,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 5,
                survival: 1,
                tech: 8
            },
            recruitCards: 0,
            attackCards: 10,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 5,
            strikeMitigationCards: 3,
            totalCost: 49,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 14,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 5,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Brother Dillon',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 6,
                strength: 8,
                survival: 0,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 47,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 5,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 14,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Brother Morse',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN3,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 8,
                survival: 9,
                tech: 0
            },
            recruitCards: 0,
            attackCards: 14,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 8,
            totalCost: 60,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 3,
                survival: 3,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 14,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'CMO Clemens',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            isRipley: false,
            classes: {
                intel: 8,
                leadership: 0,
                strength: 0,
                survival: 6,
                tech: 0
            },
            recruitCards: 6,
            attackCards: 8,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 6,
            totalCost: 62,
            classSynergyCards: {
                intel: 5,
                leadership: 0,
                strength: 0,
                survival: 5,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 14,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Francis \'85\' Aaron',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            isRipley: false,
            classes: {
                intel: 6,
                leadership: 8,
                strength: 0,
                survival: 0,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 5,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 51,
            classSynergyCards: {
                intel: 0,
                leadership: 5,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 14,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 3,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Sister Ripley',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN3,
            isRipley: true,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 6,
                survival: 8,
                tech: 0
            },
            recruitCards: 3,
            attackCards: 14,
            coordinateRecruitCards: 3,
            coordinateAttackCards: 4,
            strikeMitigationCards: 6,
            totalCost: 62,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 14,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 5,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Superintendent Andrews',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN3,
            isRipley: false,
            classes: {
                intel: 8,
                leadership: 9,
                strength: 0,
                survival: 0,
                tech: 0
            },
            recruitCards: 10,
            attackCards: 4,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 53,
            classSynergyCards: {
                intel: 3,
                leadership: 3,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 14,
                theBetty: 0,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 5,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Call',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            isRipley: false,
            classes: {
                intel: 9,
                leadership: 0,
                strength: 0,
                survival: 5,
                tech: 0
            },
            recruitCards: 10,
            attackCards: 4,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 5,
            totalCost: 62,
            classSynergyCards: {
                intel: 5,
                leadership: 0,
                strength: 0,
                survival: 5,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 14,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Christie',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 6,
                survival: 0,
                tech: 8
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 3,
            strikeMitigationCards: 0,
            totalCost: 52,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 5,
                survival: 0,
                tech: 5
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 14,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Elgyn',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            isRipley: false,
            classes: {
                intel: 9,
                leadership: 0,
                strength: 0,
                survival: 8,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 5,
            strikeMitigationCards: 5,
            totalCost: 62,
            classSynergyCards: {
                intel: 3,
                leadership: 0,
                strength: 0,
                survival: 3,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 14,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 5,
                covenant: 0
            }
        },
        {
            name: 'Johner',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 9,
                survival: 0,
                tech: 5
            },
            recruitCards: 5,
            attackCards: 14,
            coordinateRecruitCards: 5,
            coordinateAttackCards: 5,
            strikeMitigationCards: 0,
            totalCost: 51,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 14,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 3,
                covenant: 0
            }
        },
        {
            name: 'Ripley No. 8',
            set: SET.BASE,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            isRipley: true,
            classes: {
                intel: 5,
                leadership: 0,
                strength: 0,
                survival: 9,
                tech: 0
            },
            recruitCards: 0,
            attackCards: 11,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 57,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 14,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Vriess',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN_RESURRECTION,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 9,
                survival: 0,
                tech: 8
            },
            recruitCards: 3,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 47,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 3,
                survival: 0,
                tech: 3
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 14,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Ellen Ripley',
            set: SET.EXPANSION,
            scenario: SCENARIO.ALIEN | SCENARIO.ALIENS | SCENARIO.ALIEN3 | SCENARIO.ALIEN_RESURRECTION | SCENARIO.ALIEN_INCURSION | SCENARIO.ALIEN_EVOLVED,
            isRipley: true,
            classes: {
                intel: 5,
                leadership: 5,
                strength: 0,
                survival: 3,
                tech: 1
            },
            recruitCards: 10,
            attackCards: 8,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 52,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 1,
                sulaco: 5,
                fury161: 3,
                theBetty: 5,
                covenant: 0
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Biologist Karine',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            isRipley: false,
            classes: {
                intel: 8,
                leadership: 0,
                strength: 6,
                survival: 0,
                tech: 0
            },
            recruitCards: 8,
            attackCards: 5,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 5,
            strikeMitigationCards: 8,
            totalCost: 40,
            classSynergyCards: {
                intel: 5,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 14
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Captain Oram',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            isRipley: false,
            classes: {
                intel: 6,
                leadership: 8,
                strength: 0,
                survival: 0,
                tech: 0
            },
            recruitCards: 5,
            attackCards: 4,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 3,
            strikeMitigationCards: 0,
            totalCost: 42,
            classSynergyCards: {
                intel: 0,
                leadership: 5,
                strength: 0,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 14
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Chief Terraformist Daniels',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 6,
                strength: 0,
                survival: 0,
                tech: 8
            },
            recruitCards: 0,
            attackCards: 14,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 5,
            totalCost: 53,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 5
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 14
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        },
        {
            name: 'Pilot Tennessee',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            isRipley: false,
            classes: {
                intel: 8,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 9
            },
            recruitCards: 1,
            attackCards: 8,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 5,
            strikeMitigationCards: 8,
            totalCost: 47,
            classSynergyCards: {
                intel: 3,
                leadership: 0,
                strength: 0,
                survival: 0,
                tech: 3
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 14
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 5
            }
        },
        {
            name: 'Sergeant Lope',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 8,
                strength: 9,
                survival: 0,
                tech: 0
            },
            recruitCards: 10,
            attackCards: 14,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 5,
            totalCost: 56,
            classSynergyCards: {
                intel: 0,
                leadership: 3,
                strength: 3,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 14
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 5
            }
        },
        {
            name: 'Walter 1',
            set: SET.COVENANT,
            scenario: SCENARIO.ALIEN_COVENANT,
            isRipley: false,
            classes: {
                intel: 0,
                leadership: 0,
                strength: 8,
                survival: 0,
                tech: 6
            },
            recruitCards: 5,
            attackCards: 9,
            coordinateRecruitCards: 0,
            coordinateAttackCards: 0,
            strikeMitigationCards: 0,
            totalCost: 56,
            classSynergyCards: {
                intel: 0,
                leadership: 0,
                strength: 5,
                survival: 0,
                tech: 0
            },
            crew: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 14
            },
            crewSynergyCards: {
                nostromo: 0,
                sulaco: 0,
                fury161: 0,
                theBetty: 0,
                covenant: 0
            }
        }
    ],
    avatars: [
        {
            name: 'Administrator',
            set: SET.EXPANSION,
            roleCards: ['We\'ve Gotta Dig Deep'],
            race: RACE.HUMAN
        },
        {
            name: 'Animal Handler',
            set: SET.EXPANSION,
            roleCards: ['Get a Move On!'],
            race: RACE.HUMAN
        },
        {
            name: 'Biologist',
            set: SET.COVENANT,
            roleCards: ['I\'ve Never Seen Anything Like This'],
            race: RACE.HUMAN
        },
        {
            name: 'Clone ANS-435 "Aeneas"',
            set: SET.EXPANSION,
            roleCards: ['Let\'s Rest a Moment'],
            race: RACE.HUMAN
        },
        {
            name: 'Clone DAE-128 "Daedalus"',
            set: SET.EXPANSION,
            roleCards: ['I\'m Gonna Find Some Help'],
            race: RACE.HUMAN
        },
        {
            name: 'Clone HCL-981 "Heracles"',
            set: SET.EXPANSION,
            roleCards: ['I\'ll Kill Them All'],
            race: RACE.HUMAN
        },
        {
            name: 'Clone ODY-217 "Odysseus"',
            set: SET.EXPANSION,
            roleCards: ['I Have a Plan'],
            race: RACE.HUMAN
        },
        {
            name: 'Clone THS-563 "Theseus"',
            set: SET.EXPANSION,
            roleCards: ['We\'re Getting Out of Here Together'],
            race: RACE.HUMAN
        },
        {
            name: 'Commander',
            set: SET.BASE,
            roleCards: ['Report for Duty'],
            race: RACE.HUMAN
        },
        {
            name: 'Communications Officer',
            set: SET.COVENANT,
            roleCards: ['Lound And Clear'],
            race: RACE.HUMAN
        },
        {
            name: 'Executive',
            set: SET.BASE,
            roleCards: ['Welcome Aboard'],
            race: RACE.HUMAN
        },
        {
            name: 'Gunner',
            set: SET.BASE,
            roleCards: ['Let\'s Rock!'],
            race: RACE.HUMAN
        },
        {
            name: 'Medic',
            set: SET.BASE,
            roleCards: ['Battlefield Medicine'],
            race: RACE.HUMAN
        },
        {
            name: 'Mercenary',
            set: SET.BASE,
            roleCards: ['Ready for Anything'],
            race: RACE.HUMAN
        },
        {
            name: 'Navigator',
            set: SET.COVENANT,
            roleCards: ['Chart a Course'],
            race: RACE.HUMAN
        },
        {
            name: 'Pilot',
            set: SET.COVENANT,
            roleCards: ['I\'m Coming for You'],
            race: RACE.HUMAN
        },
        {
            name: 'Priest',
            set: SET.BASE,
            roleCards: ['Violence Isn\'t the Answer'],
            race: RACE.HUMAN
        },
        {
            name: 'Researcher',
            set: SET.BASE,
            roleCards: ['Thirst for Knowledge'],
            race: RACE.HUMAN
        },
        {
            name: 'Scout',
            set: SET.BASE,
            roleCards: ['Reconnaissance'],
            race: RACE.HUMAN
        },
        {
            name: 'Security Chief',
            set: SET.EXPANSION,
            roleCards: ['We Got a Situation Here', 'Gonna Need Some More Muscle'],
            race: RACE.HUMAN
        },
        {
            name: 'Synthetic',
            set: SET.BASE,
            roleCards: ['Versatile Programming'],
            race: RACE.HUMAN
        },
        {
            name: 'Technician',
            set: SET.BASE,
            roleCards: ['Right Tool For The Job'],
            race: RACE.HUMAN
        },
        {
            name: 'Terraformist',
            set: SET.COVENANT,
            roleCards: ['No Place Like Home'],
            race: RACE.HUMAN
        },
        {
            name: 'Veterinarian',
            set: SET.EXPANSION,
            roleCards: ['Let Me Take a Look at That'],
            race: RACE.HUMAN
        },
        {
            name: 'Zoologist',
            set: SET.EXPANSION,
            roleCards: ['Aren\'t They Fascinating?'],
            race: RACE.HUMAN
        },
        {
            name: 'Hunter Xenomorph',
            set: SET.BASE,
            roleCards: [],
            race: RACE.ALIEN
        },
        {
            name: 'Praetorian Xenomorph',
            set: SET.BASE,
            roleCards: [],
            race: RACE.ALIEN
        },
        {
            name: 'Warrior Xenomorph',
            set: SET.BASE,
            roleCards: [],
            race: RACE.ALIEN
        },
        {
            name: 'Xenomorph Taskmaster',
            set: SET.BASE,
            roleCards: [],
            race: RACE.ALIEN
        },
        {
            name: 'Queen Mother',
            set: SET.EXPANSION,
            roleCards: [
                'Bite',
                'Grab',
                'Hunt',
                'Rush'
            ],
            resourceCardCount: 7,
            combatCardCount: 5,
            enemyCards: [
                'Adaptable',
                'Berserk',
                'Cunning',
                'Defensive'
            ],
            race: RACE.QUEEN
        },
        {
            name: 'David',
            set: SET.COVENANT,
            roleCards: [
                'Do You Dream Of Me?',
                'I Found Perfection Here',
                'I Was Not Made To Serve',
                'You’re Such A Disappointment To Me'
            ],
            resourceCardCount: 9,
            combatCardCount: 3,
            enemyCards: [
                'Creative',
                'Deceitful',
                'Fatherly',
                'Murderous'
            ],
            race: RACE.QUEEN
        }
    ],
    nests: [
        {
            name: 'Life Cycle',
            set: SET.EXPANSION
        },
        {
            name: 'The Beast',
            set: SET.EXPANSION
        },
        {
            name: 'The Newborn',
            set: SET.EXPANSION
        },
        {
            name: 'The Perfect Organism',
            set: SET.EXPANSION
        },
        {
            name: 'Neomorph',
            set: SET.COVENANT
        }
    ],
    objectiveSetup: {
        1: {
            objective1Drones: 0,
            objective2Drones: 0,
            objective3Drones: 0,
            setupRounds: 0
        },
        2: {
            objective1Drones: 0,
            objective2Drones: 1,
            objective3Drones: 2,
            setupRounds: 0
        },
        3: {
            objective1Drones: 2,
            objective2Drones: 3,
            objective3Drones: 4,
            setupRounds: 0
        },
        4: {
            objective1Drones: 4,
            objective2Drones: 5,
            objective3Drones: 6,
            setupRounds: 0
        },
        5: {
            objective1Drones: 4,
            objective2Drones: 5,
            objective3Drones: 6,
            setupRounds: 1
        }
    },
    queenModeObjectiveSetup: {
        1: {
            objective1Drones: 0,
            objective2Drones: 0,
            objective3Drones: 0,
            setupRounds: 0
        },
        2: {
            objective1Drones: 2,
            objective2Drones: 3,
            objective3Drones: 4,
            setupRounds: 0
        },
        3: {
            objective1Drones: 4,
            objective2Drones: 5,
            objective3Drones: 6,
            setupRounds: 0
        },
        4: {
            objective1Drones: 4,
            objective2Drones: 5,
            objective3Drones: 6,
            setupRounds: 1
        },
        5: {
            objective1Drones: 4,
            objective2Drones: 5,
            objective3Drones: 6,
            setupRounds: 2
        }
    }
};

const setupManagerChangelog = [
    {
        date: '2023-07-04',
        items : [
            'Simplify UI adjustments at larger screen sizes',
            'Move addition of Soldiers to the Hive deck to a separate switch'
        ]
    },
    {
        date: '2023-06-14',
        items : [
            'Tooltip triggers now accept tab focus',
            'Modified changelog to be easier to maintain',
            'Added last updated date to page'
        ]
    },
    {
        date: '2023-06-05',
        items : [
            'Added link to crew evaluator next to barracks'
        ]
    },
    {
        date: '2023-05-28',
        items : [
            'Fixed issue where having <em>Thematic characters</em> option set to <strong>No</strong> ignores expansion limitations',
            'Added this changelog'
        ]
    },
    {
        date: '2023-05-08',
        items : [
            'Added class distribution graph and button to show it in Barracks section'
        ]
    },
    {
        date: '2023-05-04',
        items : [
            'Added Alien: Covenant expansion',
            'Added Queen Mother mode setup',
            'Improved Player section with deck setup details',
            'Automatically generate starting player',
            'Removed <em>Always use Ripley</em> option because it makes no sense with Covenant and increases complexity of game generation',
            'Added option to lock Queen to theme (only if Covenant expansion is selected)',
            'Improved Alien avatar generator so it never picks the same avatar twice in a row',
            'Improved layout and order of options'
        ]
    },
    {
        date: '2023-04-28',
        items : [
            'Initial release'
        ]
    }
];


const crewEvaluatorChangelog = [
    {
        date: '2023-07-04',
        items : [
            'Adjusted final ranking value down when queen mode is selected to account for more character cards in Barracks',
            'Fixed broken changelog and last updated date',
            'Fixed typo in debugging info showing Covenant synergy as a negative (but correctly calculated as a positive)'
        ]
    },
    {
        date: '2023-06-14',
        items : [
            'Fixed Elgyn counting 3 leadership synergy cards instead of 3 survival synergy cards',
            'Results are hidden when not enough characters are selected',
            'Tooltip triggers now accept tab focus',
            'Modified changelog to be easier to maintain',
            'Added last updated date to page'
        ]
    },
    {
        date: '2023-06-05',
        items : [
            'Initial release'
        ]
    }
];