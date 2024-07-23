import { SimpleForm, required, TextInput, Edit, NumberInput } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="id" />
        <TextInput source="title" validate={[required()]} label="title" />
        <TextInput source="imageSrc" validate={[required()]} label="image" />
      </SimpleForm>
    </Edit>
  );
};
