import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
    name: string,
    type: 'text' | 'number',
    isNumber?: boolean
}

export const Input = (props: Props) => {
    const { name, type, isNumber = false } = props;
    const { register, formState: { errors } } = useFormContext();

    const considerAsNumber = isNumber ? { valueAsNumber: true } : {};
    
  return (
    <div className="mt-3">
      <label htmlFor={name.toLowerCase()} className="form-label">{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
      <input id={name.toLowerCase()} type={type} className="form-control" {...register(name.toLowerCase(), considerAsNumber)}/>
      <ErrorMessage errors={errors} name={name} render={({ message }) => <p className="fs-4 text-danger text-start">{ message }</p>} />
    </div>
  )
}
