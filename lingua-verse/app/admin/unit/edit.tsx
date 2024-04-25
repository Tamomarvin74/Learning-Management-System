import { Edit,   NumberInput,   ReferenceInput,   SimpleForm, TextInput, required } from "react-admin"

export const UnitEdit = () => {
    return(
    <Edit>
        <SimpleForm>
        <NumberInput 
        source="id" 
        validate={[required()]} 
        label="Id"/>
        <TextInput 
        source="description" 
        validate={[required()]} 
        label="description"/>
        <ReferenceInput
        source="courseId"
        reference="courses"
         />
         <NumberInput 
           source="order"
           validate={[required()]}
           label ="order"
         />
        </SimpleForm>
    </Edit>
    );
};