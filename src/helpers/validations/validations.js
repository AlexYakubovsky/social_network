export const required = value => !value ? 'Field is required' : undefined

export const maxLengthCreator = maxLength => value => value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined