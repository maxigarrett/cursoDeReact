export const Main=({theme,texts,autentication})=>{
    return(
        <main className={theme}>
            {autentication
            ?
                <p>{texts.mainHello}</p>
            :
                <p>{texts.mainWelcome}</p>
            }
            <p>{texts.mainContent}</p>
        </main>

    )
}