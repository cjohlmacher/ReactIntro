const App = () => {
    return (
        <div>
            <Person key={1} name="Stella" age={23} hobbies={["surfing", "fishing", "botany"]}/>
            <Person key={2} name="Choelo" age={18} hobbies={["rock climbing", "fishing", "archery"]}/>
            <Person key={3} name="Dani" age={8} hobbies={["luge","snowboarding","ice fishing"]}/>
        </div>
    )
};