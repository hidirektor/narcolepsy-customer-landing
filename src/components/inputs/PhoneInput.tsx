import {
    Control,
    FieldValues,
    Controller,
    FieldErrors,
    UseFormSetValue,
} from 'react-hook-form';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// @ts-ignore
import libphonenumber from 'google-libphonenumber';
import { useState } from 'react';

interface PhoneInputProps {
    id: string;
    control: Control<FieldValues, any>;
    errors: FieldErrors;
    setValue: UseFormSetValue<FieldValues>;
    isSubmitted: boolean;
}

const PhoneNumberInput: React.FC<PhoneInputProps> = ({
                                                         control,
                                                         id,
                                                         errors,
                                                         setValue,
                                                         isSubmitted,
                                                     }) => {
    const [phoneNumberData, setPhoneNumberData] = useState<CountryData>({
        name: 'TURKEY',
        dialCode: '+90',
        countryCode: 'tr',
        format: '+.. ...-...-..-',
    });

    const validatePhoneNumber = (value: string, inputInformation: CountryData) => {
        const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
        const phoneNumber = value.substring(inputInformation.dialCode.length);
        const exampleNumberLength = phoneUtil
            .getExampleNumber(inputInformation.countryCode)
            .getNationalNumber()
            ?.toString().length;

        return phoneNumber.length === exampleNumberLength || 'Phone Number is not valid!';
    };

    const handleOnChange = (value: string, inputData: CountryData) => {
        setValue(id, value, { shouldValidate: isSubmitted });
        setPhoneNumberData(inputData);
    };

    return (
        <Controller
            name={id}
            control={control}
            rules={{
                required: 'Phone number is required!',
                validate: (fieldValue) =>
                    validatePhoneNumber(fieldValue, phoneNumberData),
            }}
            render={({ field }) => (
                <div className="flex flex-col mb-6">
                    <PhoneInput
                        onChange={(value, inputData) =>
                            handleOnChange(value, inputData as CountryData)
                        }
                        value={field.value}
                        country="tr"
                        inputStyle={{ width: '100%' }}
                        inputProps={{
                            className: `
                                form-input
                                py-3
                                pr-4
                                pl-[45px]
                                border-0
                                border-solid
                                border
                                rounded-0
                                text-gray-900
                                shadow-sm ring-1
                                ring-inset
                                sm:text-[1.4rem]
                                focus:ring-1
                                focus:ring-inset
                                focus:ring-emerald-600
                                ${errors[id] && 'focus:ring-red-500'}
                            `,
                            style: {
                                backgroundColor: '#141314', // Arka plan rengini değiştir
                                backgroundSize: '20px 20px', // Bayrağın boyutunu ayarlayın
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '10px center', // Bayrağın konumunu ayarlayın
                                paddingLeft: '45px',
                                width: '100%',
                            },
                            "&.react-tel-input .selected-flag": {
                                borderColor: "#141314",
                            }
                        }}
                        placeholder="Enter your phone number"
                        enableSearch
                        countryCodeEditable={false}
                        autoFormat
                    />
                    {errors[id] && errors[id]?.message && (
                        <span className="text-red-500 text-lg mt-1.5">
              {errors[id]?.message as React.ReactNode}
            </span>
                    )}
                </div>
            )}
        />
    );
};

export default PhoneNumberInput;