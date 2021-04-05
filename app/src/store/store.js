import {
    getCountOverestimationIndicators,
    getControlDetailsiItem,
    getControlDetail,
    checkOutBoundsMinValue,
    checkOutBoundsMaxValue,
} from '../helper';
import { ACTION_CONSTANTS } from "./actionCreators";

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
    maxValueIndicator: 100,
    minValueIndicator: 0,
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
            const { maxValueIndicator, minValueIndicator } = state;
            const count = getCountOverestimationIndicators(state);

            let newCountHealth = state.health - state.healthStepUnit - count * 10; //count равен количеству индикаторов, которые имеют максимальное значение
            newCountHealth = checkOutBoundsMinValue(newCountHealth, minValueIndicator);

            let newCountThirst = state.thirst + state.thirstStepUnit;
            newCountThirst = checkOutBoundsMaxValue(newCountThirst, maxValueIndicator);

            let newCountHunger = state.hunger + state.hungerStepUnit;
            newCountHunger = checkOutBoundsMaxValue(newCountHunger, maxValueIndicator);

            let newCountFatigue = state.fatigue + state.fatigueStepUnit;
            newCountFatigue = checkOutBoundsMaxValue(newCountFatigue, maxValueIndicator);

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
            const { payload: id } = action;
            const { сontrolDetails, minValueIndicator, maxValueIndicator } = state;
            const controlDetailsiItem = getControlDetailsiItem(сontrolDetails, 'eat');
            const { value, title } = getControlDetail(controlDetailsiItem, id);
            const { hunger: costHunger } = value;

            let newValueHunger = state.hunger - costHunger;
            newValueHunger = checkOutBoundsMinValue(newValueHunger, minValueIndicator);

            let newValueHealth = state.health + costHunger * 0.5;
            newValueHealth = checkOutBoundsMaxValue(newValueHealth, maxValueIndicator);

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
            const { payload: id } = action;
            const { сontrolDetails, minValueIndicator, maxValueIndicator } = state;
            const controlDetailsiItem = getControlDetailsiItem(сontrolDetails, 'drink');
            const { value, title } = getControlDetail(controlDetailsiItem, id);
            const { thirst: costThirst } = value;

            let newValueThirst = state.thirst - costThirst;
            newValueThirst = checkOutBoundsMinValue(newValueThirst, minValueIndicator);

            let newValueHealth = state.health + costThirst * 0.5;
            newValueHealth = checkOutBoundsMaxValue(newValueHealth, maxValueIndicator);

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
            const { payload: id } = action;
            const { сontrolDetails, minValueIndicator, maxValueIndicator } = state;
            const controlDetailsiItem = getControlDetailsiItem(сontrolDetails, 'rest');
            const { value, title } = getControlDetail(controlDetailsiItem, id);
            const { fatigue: costFatigue } = value;

            let newValueFatigue = state.fatigue - costFatigue;
            newValueFatigue = checkOutBoundsMinValue(newValueFatigue, minValueIndicator);

            let newValueHealth = state.health + costFatigue * 0.75;
            newValueHealth = checkOutBoundsMaxValue(newValueHealth, maxValueIndicator);

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
            const { payload: id } = action;
            const { сontrolDetails, maxValueIndicator } = state;
            const controlDetailsiItem = getControlDetailsiItem(сontrolDetails, 'sport');
            const { value, title } = getControlDetail(controlDetailsiItem, id);
            const { thirst: costThirst, hunger: costHunger, fatigue: costFatigue } = value;

            let newValueFatigue = state.fatigue + costFatigue;
            newValueFatigue = checkOutBoundsMaxValue(newValueFatigue, maxValueIndicator);

            let newValueThirst = state.thirst + costThirst;
            newValueThirst = checkOutBoundsMaxValue(newValueThirst, maxValueIndicator);

            let newValueHunger = state.hunger + costHunger;
            newValueHunger = checkOutBoundsMaxValue(newValueHunger, maxValueIndicator);

            let newValueHealth = state.health + costFatigue * 0.75;
            newValueHealth = checkOutBoundsMaxValue(newValueHealth, maxValueIndicator);

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
        case RESTART: {

            return (
                {
                    ...state,
                    currentControlDetails: null,
                    health: 100,
                    thirst: 0,
                    hunger: 0,
                    fatigue: 0,
                    history: [],
                }
            );
        }
        default: return state;
    }
}
