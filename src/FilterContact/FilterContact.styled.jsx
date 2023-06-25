import { Box, FindContact, InputFilter } from "./FilterContact";

export const FilterContact = ({filter, onChange}) => { 
    return (
        <Box>
            <FindContact>Find contacts by name</FindContact>
            <InputFilter
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </Box>
    );
};