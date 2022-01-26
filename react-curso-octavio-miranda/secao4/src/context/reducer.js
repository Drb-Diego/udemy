export const globalState = {
  name: 'Diego Ramos Brito',
}

export const reducer = (state, {type, name}) => {
  switch(type) {
    case 'CHANGE_NAME': return {...state, name }

    default: return { ...state }
  }
}