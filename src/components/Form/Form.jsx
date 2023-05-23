import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            pass: '123123'
        }
    })

    const onSubmit = (data) => {
        console.log(errors)
        console.log(data)
    }
    console.log(errors)
    const { name, pass } = watch()
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='userName'>Name</label>
            <input id='userName' type="text" placeholder='Name' {...register('name', { required: true })}
                aria-invalid={errors.name ? "true" : "false"} />
            <p>{errors?.name?.message}</p>
            <p>{name}</p>
            <br />
            <br />
            <label htmlFor='userPass'>Pass</label>
            <input id='userPass' type="text" placeholder='Pass' {...register('pass')} />
            <p>{pass}</p>
            <button type='submit'>send</button>
        </form>
    )
}
export default Form