const Tweet = ({username, name, date, message}) => {
    return (
        <div style={
            {
                backgroundColor: 'grey',
                border: 'solid 1px black',
                padding: '2px',
                width: '50vw',
                margin: '5px',
            }
        }>
            <h3 style={
                {
                    margin: '2px',
                }
            }>{message}</h3>
            <p style={
                {
                    color: 'lightblue',
                    borderRadius: '2px',
                    margin: '1px',
                }
            }>{name} aka {username}</p>
            <p style={
                {
                    font: '0.8em',
                    color: 'darkgrey',
                    margin: '1px',
                }
            }>{date}</p>
        </div>
    )
};