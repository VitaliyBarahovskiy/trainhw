const initState = {
    themeId: 1,
}

type initStateType = {
    themeId: number
}

export const themeReducer = (state: initStateType = initState, action: changeThemeIdAcType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,
                themeId: action.id}

        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id } as const)// fix any

type changeThemeIdAcType = ReturnType<typeof changeThemeId>
