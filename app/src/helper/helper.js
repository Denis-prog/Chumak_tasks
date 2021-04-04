const translateAction = (comand) => {
    switch (comand) {
        case 'есть': {
            return 'eat';
        }
        case 'пить': {
            return 'drink';
        }
        case 'отдыхать': {
            return 'rest';
        }
        case 'заниматься спортом': {
            return 'sport';
        }
        default: return '';
    }
};

const getControlDetailId = (controlDetailsList, action, title) => {
    const controlDetailsItem = controlDetailsList.find(item => item.type === action);

    if (!controlDetailsItem) {
        return;
    }

    const controlDetail = controlDetailsItem.elements
        .find(item => item.title.toLowerCase() === title.toLowerCase());

    return controlDetail && controlDetail.id;
};

export const transformComand = (controlDetailsList, comand) => {
    const result = [];
    const separateComand = comand.split(/\s{0,},\s{0,}/ig); //разделение по ','. до и после запятой любые количества пробелов

    separateComand.forEach((item, index) => {
        if (!item) {
            return;
        }

        const [action, title] = item.split(/\s+(?=[а-я]{1,}$)/ig); //разделить по последнему пробелу в строке
        const actionTranslated = translateAction(action.trim());

        if (!actionTranslated) {
            result.push({ action: separateComand[index], isError: true, });
            return;
        }

        const id = getControlDetailId(controlDetailsList, actionTranslated, title.trim());

        if (!id) {
            result.push({ action: separateComand[index], isError: true, });
            return;
        }

        result.push({ action:actionTranslated, id, isError: false, });
    });

    return result;
};

