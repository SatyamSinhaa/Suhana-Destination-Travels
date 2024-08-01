import React from 'react'

const ContentTitlesTurkey = () => {
    const [search, setSearch] = useState('');

    const titlesTurkey = [
        {
            title: "Ephesus",
            link: "ephesus",
        },
        {
            title: "Laodicea",
            link: "laodicea",
        },
        {
            title: "Pergamon",
            link: "pergamon",
        },
        {
            title: "Philadelpha",
            link: "philadelpha",
        },
        {
            title: "SardisSart",
            link: "sardisSart",
        },
        {
            title: "Smyrnalzmir",
            link: "smyrnalzmir",
        },
        {
            title: "ThyatiraAkhisar",
            link: "thyatiraAkhisar",
        },
    ]

    const sortedTitles = titlesTurkey.sort((a, b) => a.titlesTurkey.localeCompare(b.titlesTurkey));

    return (
        <div className='title'>
            <div className='searchinput'>
                <input
                    placeholder='Search for the Holy Destination'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className='searchedlist'>
        {
          sortedTitles.filter(Title => Title.title.toLowerCase().includes(search.toLowerCase())).map((Title,index) => {
            return (
            <NavLink key={index}  to={Title.link}>{Title.title}</NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default ContentTitlesTurkey