const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Bellatrix"/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));