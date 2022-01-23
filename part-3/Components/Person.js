const Person = ({name,age,hobbies}) => {
    const hobbyListItems = hobbies.map( (hobby) => {
        return <li key={hobby}>{hobby}</li>
    });
    
    return (
        <div style={
            {
                border: 'solid 2px black',
                margin: '5px',
                padding: '5px',
                width: '50vw',
            }
        }>
            <p>Learn some information about this person</p>
            <p>{name.slice(0,6)}</p>
            <h3> {age > 18 ? "please go vote!" : "you must be 18"} </h3>
            <h4>Hobbies:</h4>
            <ul>
                {hobbyListItems}
            </ul>
        </div>
    )
};