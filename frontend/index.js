import {
    initializeBlock,
    useBase,
} from '@airtable/blocks/ui';
import React from 'react';

function TodoExtension() {
    const base = useBase();

    return (
        <div>{base.name}</div>
    );
}

initializeBlock(() => <TodoExtension />);
