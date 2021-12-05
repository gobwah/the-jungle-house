import '../styles/Categories.css'

function Categories({ categories, categoryFilter, setCategoryFilter }) {
    return (
        <div className='tjh-categories'>
            <select className='tjh-categories-select' value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value=''>Select a category</option>
                {categories.sort().map((category, index) => (
                    <option key={`${category}-${index}`} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setCategoryFilter('')}>Reset</button>
        </div>
    );
}

export default Categories;