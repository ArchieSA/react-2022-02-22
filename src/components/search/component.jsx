export const Search = ({ value, onChange, className }) => {
    return (
        <div>
            <label htmlFor="search">Search for menu</label>
            <input
                    id="search"
                    value={value}
                    className={className}
                    onChange={(event) => onChange(event.currentTarget.value)} />
        </div>
        
    )
}