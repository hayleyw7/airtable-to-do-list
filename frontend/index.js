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

    const tasks = records.map(record => {
        return (
            <div key={record.id}>
+               {record.name || 'Unnamed record'}
+           </div>
        );
    });

    return (
        <div>{tasks}</div>
    );
}

initializeBlock(() => <TodoExtension />);
