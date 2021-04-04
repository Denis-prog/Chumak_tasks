import { ACTION_CONSTANTS } from "./actionCreators";

const {
    SHOW_CONTROL_DETAILS,
    COUNTER_REPEAT,
    SAVE_WRONG_COMAND,
    EAT,
    DRINK,
    REST,
    SPORT,
} = ACTION_CONSTANTS;

const getCountOverestimationIndicators = (state, indicators = ['thirst', 'hunger', 'fatique']) => {
    let count = 0;

    indicators.forEach((item) => {
        if (state[item] === 100) {
            count += 1;
        }
    });

    return count;
};

export const initialState = {
    currentControlDetails: null,
    health: 100,
    thirst: 0,
    hunger: 0,
    fatigue: 0,
    history: [],
    healthStepUnit: 1,
    thirstStepUnit: 4,
    hungerStepUnit: 4,
    fatigueStepUnit: 1,
    сontrolDetails: [
        { id: 1, type: 'eat', elements: [{ id: 1, title: 'Яблоко', value: { hunger: 1 } }, { id: 2, title: 'Персик', value: { hunger: 5 } }, { id: 3, title: 'Колбаса', value: { hunger: 10 } }] },
        { id: 2, type: 'drink', elements: [{ id: 1, title: 'Вода', value: { thirst: 1 } }, { id: 2, title: 'Лимонад', value: { thirst: 5 } }, { id: 3, title: 'Квас', value: { thirst: 10 } }] },
        { id: 3, type: 'rest', elements: [{ id: 1, title: 'Сидение', value: { fatigue: 1 } }, { id: 2, title: 'Лежание ', value: { fatigue: 5 } }, { id: 3, title: 'Сон', value: { fatigue: 10 } }] },
        { id: 4, type: 'sport', elements: [{ id: 1, title: 'Ходьба', value: { fatigue: 1, hunger: 2, thirst: 2 } }, { id: 2, title: 'Прыжки', value: { fatigue: 5, hunger: 4, thirst: 4 } }, { id: 3, title: 'Бег', value: { fatigue: 10, hunger: 6, thirst: 6 } }] },
    ],
};

export function reducer(state, action) {
    const { type } = action;

    switch (type) {
        case COUNTER_REPEAT: {
            const count = getCountOverestimationIndicators(state);
            let newCountHealth = state.health - state.healthStepUnit - count * 10; //count равен количеству индикаторов, которые имеют максимальное значение
            newCountHealth = newCountHealth < 0 ? 0 : newCountHealth;

            let newCountThirst = state.thirst + state.thirstStepUnit;
            newCountThirst = newCountThirst > 100 ? 100 : newCountThirst;

            let newCountHunger = state.hunger + state.hungerStepUnit;
            newCountHunger = newCountHunger > 100 ? 100 : newCountHunger;

            let newCountFatigue = state.fatigue + state.fatigueStepUnit;
            newCountFatigue = newCountFatigue > 100 ? 100 : newCountFatigue

            const x = {
                ...state,
                health: newCountHealth,
                thirst: newCountThirst,
                hunger: newCountHunger,
                fatigue: newCountFatigue,
            };

            /*     console.log(x); */
            return x;

        }
        case SAVE_WRONG_COMAND: {
            const { payload } = action;
            console.log('payload: ', payload);

            return (
                {
                    ...state,
                    history: [...state.history, { title: payload, isError: true, }]
                }
            );
        }
        case SHOW_CONTROL_DETAILS: {
            const { payload } = action;

            if (payload === state.currentControlDetails) {
                return {
                    ...state,
                    currentControlDetails: null,
                }
            }

            return {
                ...state,
                currentControlDetails: payload,
            }
        }
        case EAT: {
            const { payload } = action;
            const { сontrolDetails } = state;
            const controlDetailsiItem = сontrolDetails
                .find((item) => item.type === 'eat');

            const { value, title } = controlDetailsiItem.elements.find((item) => item.id === payload);
            const { hunger: costHunger } = value;

            let newValueHunger = state.hunger - costHunger;
            newValueHunger = newValueHunger < 0 ? 0 : newValueHunger;

            let newValueHealth = state.health + costHunger * 0.5;
            newValueHealth = newValueHealth > 100 ? 100 : newValueHealth;

            return (
                {
                    ...state,
                    health: newValueHealth,
                    hunger: newValueHunger,
                    history: [...state.history, { title: `Есть. Еда: ${title}` }],
                }
            )
        }
        case DRINK: {
            const { payload } = action;
            const { сontrolDetails } = state;
            const controlDetailsiItem = сontrolDetails
                .find((item) => item.type === 'drink');

            const { value, title } = controlDetailsiItem.elements.find((item) => item.id === payload);
            const { thirst: costThirst } = value;

            let newValueThirst = state.thirst - costThirst;
            newValueThirst = newValueThirst < 0 ? 0 : newValueThirst;
            let newValueHealth = state.health + costThirst * 0.5;
            newValueHealth = newValueHealth > 100 ? 100 : newValueHealth;

            return (
                {
                    ...state,
                    health: newValueHealth,
                    thirst: newValueThirst,
                    history: [...state.history, { title: `Пить. Напиток: ${title}` }],
                }
            )
        }
        case REST: {
            const { payload } = action;
            const { сontrolDetails } = state;
            const controlDetailsiItem = сontrolDetails
                .find((item) => item.type === 'rest');

            const { value, title } = controlDetailsiItem.elements.find((item) => item.id === payload);
            const { fatigue: costFatigue } = value;

            let newValueFatigue = state.fatigue - costFatigue;
            newValueFatigue = newValueFatigue < 0 ? 0 : newValueFatigue;

            let newValueHealth = state.health + costFatigue * 0.75;
            newValueHealth = newValueHealth > 100 ? 100 : newValueHealth;

            return (
                {
                    ...state,
                    fatigue: newValueFatigue,
                    health: newValueHealth,
                    history: [...state.history, { title: `Отдыхать. Вид отдыха: ${title}` }],
                }
            )
        }
        case SPORT: {
            const { payload } = action;
            const { сontrolDetails } = state;
            const controlDetailsiItem = сontrolDetails
                .find((item) => item.type === 'sport');

            const { value, title } = controlDetailsiItem.elements.find((item) => item.id === payload);
            const { thirst: costThirst, hunger: costHunger, fatigue: costFatigue } = value;

            let newValueFatigue = state.fatigue + costFatigue;
            newValueFatigue = newValueFatigue > 100 ? 100 : newValueFatigue;

            let newValueThirst = state.thirst + costThirst;
            newValueThirst = newValueThirst > 100 ? 100 : newValueThirst;

            let newValueHunger = state.hunger + costHunger;
            newValueHunger = newValueHunger > 100 ? 100 : newValueHunger;

            let newValueHealth = state.health + costFatigue * 0.75;
            newValueHealth = newValueHealth > 100 ? 100 : newValueHealth;

            return (
                {
                    ...state,
                    fatigue: newValueFatigue,
                    hunger: newValueHunger,
                    thirst: newValueThirst,
                    health: newValueHealth,
                    history: [...state.history, { title: `Заниматься спортом. Вид спорта: ${title}` }],
                }
            );
        }

        default: return state;
    }
}
