const data = await fetch("https://swapi.dev/api/people").then((res) =>
    res.json()
);
console.log(data);

export const Characters = () => {
    const name = "Julian"
    return (
        <>
        <div>
            <h1>Component Using React</h1>
            <h3>Hi {name}! How are you?</h3>
            <ul>
                {data.results.map((item: any, i: number) => (
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
        </div>
        </>
    )
}