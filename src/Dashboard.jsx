import React, { useState } from 'react'
import ProfileCard from './Componets/ProfileCard'
import Header from './Componets/Header'
import users from './assets/data.json'



const Dashboard = () => {
    const [search, setSearch] = useState('');

    function filterItems(items, query) {
        query = query.trim().toLowerCase();
        return items.filter(item =>
          item.FullName.split(' ').some(word =>
            word.toLowerCase().includes(query)
          )
        );
      }
    
    const result = filterItems(users, search)
  return (
    <div>
        <Header value={search} onChange={(e) => setSearch(e.target.value)} />
        <main className='mx-28 my-10'>
            <ProfileCard profiles={result} />
        </main>
    </div>
  )
}

export default Dashboard