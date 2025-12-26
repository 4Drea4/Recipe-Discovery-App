import {useEffect, useState} from 'react';

export function useLocalStorage<StateType>(
    storageKey: string,
    initialValue:StateType
){
    const [value, setValue] = useState<StateType>(() => {
        try {
            const rawData = localStorage.getItem(storageKey);
            if (rawData === null) return initialValue;
            return JSON.parse(rawData) as StateType;

            } catch {
                return initialValue;
            }
        });
        useEffect(() => {
            try {
                localStorage.setItem(storageKey, JSON.stringify(value));

            } catch {

            }
        }, [storageKey, value]);
        return [value,setValue] as const;
    }
