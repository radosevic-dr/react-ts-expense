import { useFormContext } from 'react-hook-form';

interface Props {
    categories: string[],
    isFilter?: boolean
}

export const Select = (props: Props) => {
    const { categories, isFilter=false} = props;
  
    const formContext = useFormContext();
    const { register } = formContext || {};

  return (
    <div className="mt-3">
        <label htmlFor="category" className="form-label">{isFilter ? "Filter by category" : "Select"}</label>
        <select id="category" className="form-select" {...(isFilter ? {} : register("category"))}>
            <option value="">{isFilter ? "Filter by category" : "All"}</option>
            {
                categories.map((category: string) => {
                    return(
                        <option key={`${Math.random()}-${category}`} 
                        value={category.toLowerCase()} >
                            {`${category[0].toUpperCase()}${category.slice(1)}`}
                        </option>
                    )
                })
            }
        </select>

      </div>
  )
}
