import React from 'react'
import { Link } from 'react-router'
import UserDetails from '../Pages/UserDetails'

// const users = [
//     {
//         id: 1,
//         ProfilePic: 'unsplash_images/alexander-krivitskiy-VfjbH7PlWRk-unsplash.jpg',
//         FullName: 'Liam Smith',
//         location: 'Toronto, Canada',
//         hobbies: ['Skiing', 'Video Games', 'Stealing', 'Reading']
//     },
//     {
//         id: 2,
//         ProfilePic: 'unsplash_images/anthony-tran-3B6RfJQKBEM-unsplash.jpg',
//         FullName: 'Aisha Bello',
//         location: 'Abuja, Nigeria',
//         hobbies: ['Cooking', 'Dancing']
//     },
//     {
//         id: 3,
//         ProfilePic: 'unsplash_images/dmitry-ganin-JRa8lCQQhSs-unsplash.jpg',
//         FullName: 'Mateo Fernandez',
//         location: 'Buenos Aires, Argentina',
//         hobbies: ['Soccer', 'Guitar']
//     },
//     {
//         id: 4,
//         ProfilePic: 'unsplash_images/freestocks-RQ2dvd2FUV4-unsplash.jpg',
//         FullName: 'Sakura Tanaka',
//         location: 'Kyoto, Japan',
//         hobbies: ['Origami', 'Reading manga']
//     },
//     {
//         id: 5,
//         ProfilePic: 'unsplash_images/gift-habeshaw-0nNOc6OAwLI-unsplash.jpg',
//         FullName: 'Zanele Khumalo',
//         location: 'Cape Town, South Africa',
//         hobbies: ['Hiking', 'Photography']
//     },
//     {
//         id: 6,
//         ProfilePic: 'unsplash_images/gift-habeshaw-w1XuHvzcWoI-unsplash.jpg',
//         FullName: 'Noah Johnson',
//         location: 'New York, USA',
//         hobbies: ['Basketball', 'Blogging']
//     },
//     {
//         id: 7,
//         ProfilePic: 'unsplash_images/laurence-cruz-P7yvmajPvkM-unsplash.jpg',
//         FullName: 'Chloe Dubois',
//         location: 'Paris, France',
//         hobbies: ['Baking', 'Painting']
//     },
//     {
//         id: 8,
//         ProfilePic: 'unsplash_images/markus-spiske-Skf7HxARcoc-unsplash.jpg',
//         FullName: 'Ravi Kumar',
//         location: 'Mumbai, India',
//         hobbies: ['Cricket', 'Coding', 'Sleeping']
//     },
//     {
//         id: 9,
//         ProfilePic: 'unsplash_images/mike-santos-50zPBYowVAE-unsplash.jpg',
//         FullName: 'Sofia Rossi',
//         location: 'Rome, Italy',
//         hobbies: ['Singing', 'Cycling', 'Football']
//     },
//     {
//         id: 10,
//         ProfilePic: 'unsplash_images/mike-santos-50zPBYowVAE-unsplash.jpg',
//         FullName: 'Ethan Brown',
//         location: 'Auckland, New Zealand',
//         hobbies: ['Surfing', 'Reading']
//     },
//     {
//         id: 11,
//         ProfilePic: 'unsplash_images/samuel-dixon--fQ5XNOcqFQ-unsplash.jpg',
//         FullName: 'Lina Müller',
//         location: 'Berlin, Germany',
//         hobbies: ['Photography', 'Yoga']
//     },
//     {
//         id: 12,
//         ProfilePic: 'unsplash_images/taylor-wright-g0pb9aXpbgQ-unsplash.jpg',
//         FullName: 'Ahmed Al-Farsi',
//         location: 'Dubai, UAE',
//         hobbies: ['Driving', 'Chess']
//     },
//     {
//         id: 13,
//         ProfilePic: '',
//         FullName: 'Yuki Nakamura',
//         location: 'Osaka, Japan',
//         hobbies: ['Gaming', 'Calligraphy']
//     },
//     {
//         id: 14,
//         ProfilePic: '',
//         FullName: 'Anna Kowalska',
//         location: 'Warsaw, Poland',
//         hobbies: ['Gardening', 'Knitting']
//     },
//     {
//         id: 15,
//         ProfilePic: '',
//         FullName: 'Pedro Silva',
//         location: 'Lisbon, Portugal',
//         hobbies: ['Fishing', 'Biking']
//     },
//     {
//         id: 16,
//         ProfilePic: '',
//         FullName: 'Maya Singh',
//         location: 'Delhi, India',
//         hobbies: ['Cooking', 'Dancing']
//     },
//     {
//         id: 17,
//         ProfilePic: '',
//         FullName: 'Carlos Mendez',
//         location: 'Mexico City, Mexico',
//         hobbies: ['Playing guitar', 'Traveling']
//     },
//     {
//         id: 18,
//         ProfilePic: '',
//         FullName: 'Emily Wilson',
//         location: 'Sydney, Australia',
//         hobbies: ['Rock climbing', 'Reading novels']
//     },
// ]

const ProfileCard = ({profiles}) => {
  return (
    <section className='grid gap-3 cursor-default lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-7 my-3'>
        {
            profiles.map(use => (
                <Link key={use.id} to={`/${use.id}`} className='bg-[#fbfcff] px-7 py-4 rounded-xl flex md:flex-row flex-col items-center gap-7 hover:border hover:border-[#bfc8e5] hover:shadow-xl transition-all duration-100 ease-in-out md:max-h-39 md:max-w-90'>
                    <img src={use.ProfilePic} alt="" className={use.ProfilePic ? 'md:w-20 md:h-20 md:rounded-full w-50 h-50  rounded-2xl' : ''} />
                    <div className='flex flex-col items-start gap-2'>
                        <h2 className='text-[#151b32] font-medium'>{use.FullName}</h2>
                        <p className='text-[#151b32] font-light text-sm'>{use.location}</p>
                        <ul className='flex items-center flex-wrap gap-2 gap-x-1'>
                            {
                                use.hobbies.map((hobby, i) => (
                                    <li key={i} className='border  border-[#bcf8e6] text-sm px-2 rounded-xl text-[#516fd4]'>{hobby}</li>
                                ))
                            }
                        </ul>
                    </div>
                </Link>
            ))
        }

    </section>
  )
}

export default ProfileCard