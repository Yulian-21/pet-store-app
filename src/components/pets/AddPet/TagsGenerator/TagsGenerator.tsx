import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ITag } from '../../PetTypes/PetTypes';
import { Control, Controller, FieldValues } from 'react-hook-form';

type tGProps = {
    control: Control<FieldValues, any>
    name: string
    id: string
}

function TagsGenerator(props: tGProps) {

    const { control, name, id } = props


    return (
        <Stack spacing={3} sx={{ width: 400 }}>
            <Controller
                control={control}
                name={name}
                render={({
                    field: { onBlur, value, onChange, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                }) => (
                    <Autocomplete
                        multiple
                        limitTags={2}
                        id="tags-outlined"
                        options={tags}
                        getOptionLabel={(option) => option.name}
                        onChange={(_, value) => onChange(value)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Tags"
                                placeholder="Tags"
                                sx={{ backgroundColor: "white" }}
                            />
                        )}
                    />
                    
                )}
            />

        </Stack>
    );
}

export default TagsGenerator

const tags: ITag[] = [
    { id: 1, name: "hairy" },
    { id: 2, name: "red" },
    { id: 3, name: "curly" },
    { id: 4, name: "sweet" },
    { id: 5, name: "smart" },
    { id: 6, name: "big" },
    { id: 7, name: "fat" },
    { id: 8, name: "tall" },
    { id: 9, name: "beautiful" }]


    // function(event: React.SyntheticEvent, value: T | Array<T>, reason: string, details?: string) => void
    // <TextField
                    //     value={value}
                    //     type={type}
                    //      style={{backgroundColor: 'gold', marginTop: '10px'}}
                    //     onChange={onChange}
                    //     onBlur={onBlur}
                    //     name={name}
                    //     required
                    //     id={id}
                    //     label={name}
                    // />