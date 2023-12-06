import {
    initializeBlock,
    useBase,
    useRecords,
    useGlobalConfig,
    expandRecord,
    TablePickerSynced,
    TextButton,
} from '@airtable/blocks/ui';
import React, {useState} from 'react';

function TodoExtension() {
    const base = useBase();
    const globalConfig = useGlobalConfig();
    const tableId = globalConfig.get('selectedTableId');
    const table = base.getTableByIdIfExists(tableId);
    const records = useRecords(table);

    const tasks = records ? records.map(record => (
        <Task key={record.id} record={record} />
    )) : null;

    return (
        <div>
            <TablePickerSynced globalConfigKey="selectedTableId" />
            {tasks}
        </div>
    );
}

function Task({record}) {
    return (
       <div
           style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 18,
                padding: 12,
                borderBottom: '1px solid #ddd',
            }}
       >
            {record.name || 'Unnamed record'}
            <TextButton
                icon="expand"
                aria-label="Expand record"
               variant="dark"
                onClick={() => {
                    expandRecord(record);
                }}
            />
        </div>
    );
}

initializeBlock(() => <TodoExtension />);
