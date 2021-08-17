export const Header=({theme,handelTheme})=>{
    return(
        <header className={theme}>
            <h1>seleccionando tema oscuro sin Context API</h1>
            <label htmlFor='light'>Light</label>
            <label htmlFor='dark'>Dark</label>
            <input type='radio' name='theme' value='light' id='light' onClick={handelTheme}/>
            <input type='radio'name='theme' value='dark' id='dark' onClick={handelTheme}/>
        </header>

    )
}