import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import state from '../../../../State';
import Form from '../Form';
import FormItem from '../FormItem';
import './searchForm.scss';

const SearchForm = observer(() => {
    const [text, setText] = useState('');
    const { setFilter } = state;

    useEffect(() => {
        setFilter(text);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    return (
        <Form className="search-form">
            <FormItem className="search-form__item">
                <input className="search-form__item-field" type="text"
                    value={text} onChange={({ target: { value } }) => setText(value)}
                    placeholder="Search for any training you want" />
            </FormItem>
        </Form>
    );
});

export default SearchForm;

