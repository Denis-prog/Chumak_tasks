export const ACTION_CONSTANTS = {
    SHOW_CONTROL_DETAILS: 'showControldetails',
    COUNTER_REPEAT: 'counter',
    EAT: 'eat',
    DRINK: 'drink',
    REST: 'rest',
    SPORT: 'sport',
}

const { SHOW_CONTROL_DETAILS, COUNTER_REPEAT, EAT, DRINK, REST, SPORT } = ACTION_CONSTANTS;

export const showControldetailsAC = (type) => ({ type: SHOW_CONTROL_DETAILS, payload: type });
export const counterRepeatAC = () => ({ type: COUNTER_REPEAT });
export const eatAC = (id) => ({ type: EAT, payload: id });
export const drinkAC = (id) => ({ type: DRINK, payload: id });
export const restAC = (id) => ({ type: REST, payload: id });
export const sportAC = (id) => ({ type: SPORT, payload: id });

export const handlerActionCreators = {
    eat: (value) => eatAC(value),
    drink: (value) => drinkAC(value),
    rest: (value) => restAC(value),
    sport: (value) => sportAC(value),
};
