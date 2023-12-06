import {
    initializeBlock,
    useBase,
    useRecords,
} from '@airtable/blocks/ui';
import React from 'react';

function TodoExtension() {
    const base = useBase();
    const table = base.getTableByName('Tasks');
    const records = useRecords(table);

    return (
        <div>Number of tasks: {records.length}</div>
    );
}

initializeBlock(() => <TodoExtension />);
