import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  NumberInput,
} from "react-admin";

export const UnitsEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="id" />
        <TextInput source="title" validate={[required()]} label="title" />
        <TextInput
          source="description"
          validate={[required()]}
          label="description"
        />
        <NumberInput source="order" validate={[required()]} label="order" />
      </SimpleForm>
    </Edit>
  );
};
