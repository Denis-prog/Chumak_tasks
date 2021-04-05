export const ACTION_CONSTANTS = {
    SHOW_CONTROL_DETAILS: 'showControlDetails',
    COUNTER_REPEAT: 'counterRepeat',
    SAVE_WRONG_COMAND: 'saveWrongComand',
    EAT: 'eat',
    DRINK: 'drink',
    REST: 'rest',
    SPORT: 'sport',
    RESTART: 'restart',
}

const {
    SHOW_CONTROL_DETAILS,
    COUNTER_REPEAT,
    SAVE_WRONG_COMAND,
    EAT,
    DRINK,
    REST,
    SPORT,
    RESTART,
} = ACTION_CONSTANTS;

export const showControldetailsAC = (type) => ({ type: SHOW_CONTROL_DETAILS, payload: type });
export const counterRepeatAC = () => ({ type: COUNTER_REPEAT });
export const saveWrongComandAC = (comand) => ({ type: SAVE_WRONG_COMAND, payload: comand });
export const eatAC = (id) => ({ type: EAT, payload: id });
export const drinkAC = (id) => ({ type: DRINK, payload: id });
export const restAC = (id) => ({ type: REST, payload: id });
export const sportAC = (id) => ({ type: SPORT, payload: id });
export const restartAC = () => ({ type: RESTART });

export const handlerActionCreators = {
    eat: (value) => eatAC(value),
    drink: (value) => drinkAC(value),
    rest: (value) => restAC(value),
    sport: (value) => sportAC(value),
};
