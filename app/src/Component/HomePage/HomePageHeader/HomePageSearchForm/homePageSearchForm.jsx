import React, { useState } from 'react';

const HomePageSearchForm = () => {
    const [text, setText] = useState();

    return (
        <form action="">
            <input type="text" value={text} onChange={setText} />
        </form>
    );
};

return HomePageSearchForm;
