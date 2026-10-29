import { useState } from 'react'

/* =========================
   LOAD PHOTOS FROM FOLDERS
   ========================= */


const batticoaloaPhotos = Object.values(
  import.meta.glob('../assets/gallery/Batticoaloa/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })
).filter((photo) => /\.(jpg|jpeg|png|webp)$/i.test(photo));

const bennyPhotos = Object.values(
  import.meta.glob('../assets/gallery/benny/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const colomboPhotos = Object.values(
  import.meta.glob('../assets/gallery/colombo/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const eastLankaPhotos = Object.values(
  import.meta.glob('../assets/gallery/east-lanka/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
const gethsemanePhotos = Object.values(
  import.meta.glob('../assets/gallery/getsemane/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })
).filter((photo) => /\.(jpg|jpeg|png|webp)$/i.test(photo));

const jesusLivesPhotos = Object.values(
  import.meta.glob('../assets/gallery/jesus lives/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const joelThomasrajPhotos = Object.values(
  import.meta.glob('../assets/gallery/joel thomasraj/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const parisZionPhotos = Object.values(
  import.meta.glob('../assets/gallery/paris-zion/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const roshanPhotos = Object.values(
  import.meta.glob('../assets/gallery/roshan/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const sarangapanyPhotos = Object.values(
  import.meta.glob('../assets/gallery/sarangapany/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const smyrnaPhotos = Object.values(
  import.meta.glob('../assets/gallery/smyrna/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const zionPhotos = Object.values(
  import.meta.glob('../assets/gallery/zion/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
const churchFellowshipPhotos = Object.values(
  import.meta.glob(
    '../assets/gallery/church fellowship/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
)


const robertRoyPhotos = Object.values(
  import.meta.glob('../assets/gallery/robert roy/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const christmasCarolsPhotos = Object.values(
  import.meta.glob('../assets/gallery/christmas carols/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const baptismCeremonyPhotos = Object.values(
  import.meta.glob('../assets/gallery/baptism ceremony/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const mizpahChurchPhotos = Object.values(
  import.meta.glob('../assets/gallery/mizpah church/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const terrencePaulPhotos = Object.values(
  import.meta.glob('../assets/gallery/terrence paul/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const emmanuelGollarPhotos = Object.values(
  import.meta.glob('../assets/gallery/emmanuel gollar/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const ranjithJebaPhotos = Object.values(
  import.meta.glob('../assets/gallery/ranjith jeba/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const jublinJosephPhotos = Object.values(
  import.meta.glob('../assets/gallery/jublin joseph/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const samRajasuriarPhotos = Object.values(
  import.meta.glob('../assets/gallery/sam rajasuriar/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const drPaulAngPhotos = Object.values(
  import.meta.glob('../assets/gallery/dr paul ang/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const streetOutreachPhotos = Object.values(
  import.meta.glob('../assets/gallery/street outreach/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)


/* =========================
   ALBUMS
   ========================= */

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  const albums = [
    {
      title:
        'Ministering at East Lanka Evangelical Mission in Batticaloa, Sri Lanka',
      name: 'East Lanka Evangelical Mission',
      location: 'Batticaloa, Sri Lanka',
      photoCount: eastLankaPhotos.length,
      cover: eastLankaPhotos[0],
      photos: eastLankaPhotos,
    },

    {
      title:
        'Ministering at Evangelical Church of Zion Ministry in Paris, France',
      name: 'Evangelical Church of Zion Ministry',
      location: 'Paris, France',
      photoCount: parisZionPhotos.length,
      cover: parisZionPhotos[0],
      photos: parisZionPhotos,
    },

    {
      title:
        'Ministering at Gethsemane Gospel Church in Batticaloa, Sri Lanka',
      name: 'Gethsemane Gospel Church',
      location: 'Batticaloa, Sri Lanka',
      photoCount: gethsemanePhotos.length,
     
   cover: new URL(
  '../assets/gallery/getsemane/gethsemane2.webp',
  import.meta.url
).href,

     coverClass: 'gethsemane-cover',
      photos: gethsemanePhotos,
    },

    {
      title:
        'Ministering at Jesus Hand Revival Ministries in Colombo, Sri Lanka',
      name: 'Jesus Hand Revival Ministries',
      location: 'Colombo, Sri Lanka',
      photoCount: colomboPhotos.length,
      cover: colomboPhotos[0],
      photos: colomboPhotos,
    },

    {
      title: 'Ministering at Jesus Lives in Colombo, Sri Lanka',
      name: 'Jesus Lives Ministry',
      location: 'Colombo, Sri Lanka',
      photoCount: jesusLivesPhotos.length,
     cover: new URL(
  '../assets/gallery/jesus lives/jesus lives7.jpg',
  import.meta.url
).href,
      photos: jesusLivesPhotos,
    },

    {
      title:
        'Ministering at Prayer House in Batticaloa, Sri Lanka',
      name: 'Prayer House Ministry',
      location: 'Batticaloa, Sri Lanka',
      photoCount: batticoaloaPhotos.length,
      cover: batticoaloaPhotos[0],
      photos: batticoaloaPhotos,
    },

    {
      title:
        'Ministering at Smyrna Church in Galle, Sri Lanka',
      name: 'Smyrna Church',
      location: 'Galle, Sri Lanka',
      photoCount: smyrnaPhotos.length,
      cover: smyrnaPhotos[0],
      photos: smyrnaPhotos,
    },

    {
      title:
        'Ministering at Zion Church in Jaffna, Sri Lanka',
      name: 'Zion Church',
      location: 'Jaffna, Sri Lanka',
      photoCount: zionPhotos.length,
     cover: new URL(
  '../assets/gallery/zion/zion7.webp',
  import.meta.url
).href,

      photos: zionPhotos,
    },

    {
      title:
        'Revival Meeting with Pastor Joel Thomasraj',
      name: 'Revival Meeting with Pastor Joel Thomasraj',
      location: 'Jesus Family Church Australia',
      photoCount: joelThomasrajPhotos.length,
      cover: new URL(
  '../assets/gallery/joel thomasraj/joel9.jpg',
  import.meta.url
).href,
      photos: joelThomasrajPhotos,
    },

    {
      title:
        'Revival Meeting with Pastor Roshan Mahesan',
      name: 'Revival Meeting with Pastor Roshan Mahesan',
      location: 'Jesus Family Church Australia',
      photoCount: roshanPhotos.length,
      cover: new URL(
  '../assets/gallery/roshan/roshan8.jpg',
  import.meta.url
).href,
      photos: roshanPhotos,
    },

    {
      title:
        'Revival Meeting with Pastor Benny Joshua',
      name: 'Revival Meeting with Pastor Benny Joshua',
      location: 'Jesus Family Church Australia',
      photoCount: bennyPhotos.length,
      cover: bennyPhotos[0],
      photos: bennyPhotos,
    },

    {
      title:
        'Revival Meeting with Rev. J. J. Sarangapany',
      name: 'Revival Meeting with Rev. J. J. Sarangapany',
      location: 'Jesus Family Church Australia',
      photoCount: sarangapanyPhotos.length,
      cover: sarangapanyPhotos[0],
      photos: sarangapanyPhotos,
    },
     {
      title: 'Church Fellowship Gathering',
      name: 'Church Fellowship Gathering',
      location: 'Jesus Family Church Australia',
      photoCount: churchFellowshipPhotos.length,
     cover: new URL('../assets/gallery/church fellowship/XVNW8056.JPG', import.meta.url).href,
      photos: churchFellowshipPhotos,
    },
     {
      title: 'Revival Meeting with Pastor Robert Roy at Jesus Family Church Australia',
      name: 'Revival Meeting with Pastor Robert Roy',
      location: 'Jesus Family Church Australia',
      photoCount: robertRoyPhotos.length,
    cover: new URL(
  '../assets/gallery/robert roy/IMG_2262.JPG',
  import.meta.url
).href,
      photos: robertRoyPhotos,
    },

    {
      title: '2025 Christmas Carols Service',
      name: '2025 Christmas Carols Service',
      location: 'Jesus Family Church Australia',
      photoCount: christmasCarolsPhotos.length,
      cover: new URL(
  '../assets/gallery/christmas carols/IMG_E9401.JPG',
  import.meta.url
).href,
      photos: christmasCarolsPhotos,
    },

    {
      title: 'Baptism Ceremony',
      name: 'Baptism Ceremony',
      location: 'Jesus Family Church Australia',
      photoCount: baptismCeremonyPhotos.length,
      cover: baptismCeremonyPhotos[0],
      photos: baptismCeremonyPhotos,
    },

    {
      title: 'Ministering at Mizpah Church in Colombo, Sri Lanka',
      name: 'Ministering at Mizpah Church',
      location: 'Colombo, Sri Lanka',
      photoCount: mizpahChurchPhotos.length,
      cover: mizpahChurchPhotos[0],
      photos: mizpahChurchPhotos,
    },

    {
      title: 'Revival Meeting with Bro Terrence Paul from Touch Ministries Global India',
      name: 'Revival Meeting with Bro Terrence Paul',
      location: 'Jesus Family Church Australia',
      photoCount: terrencePaulPhotos.length,
      cover: terrencePaulPhotos.find((photo) => photo.toLowerCase().includes('img_1277.jpg')) || terrencePaulPhotos[0],
      photos: terrencePaulPhotos,
    },

    {
      title: 'Revival Meeting with Pastor Emmanuel Gollar from Hosana Church Ministries India',
      name: 'Revival Meeting with Pastor Emmanuel Gollar',
      location: 'Jesus Family Church Australia',
      photoCount: emmanuelGollarPhotos.length,
     cover: emmanuelGollarPhotos.find((photo) => photo.toLowerCase().includes('img_2106.jpg')) || emmanuelGollarPhotos[0],

      photos: emmanuelGollarPhotos,
    },

    {
      title: 'Revival Meeting with Pastor Ranjith Jeba from Blaze Evangelical Ministries India',
      name: 'Revival Meeting with Pastor Ranjith Jeba',
      location: 'Jesus Family Church Australia',
      photoCount: ranjithJebaPhotos.length,
      cover: ranjithJebaPhotos[0],
      photos: ranjithJebaPhotos,
    },

    {
      title: 'Revival Meeting with Ps Jublin Joseph from Shenayim Ministries India',
      name: 'Revival Meeting with Ps Jublin Joseph',
      location: 'Jesus Family Church Australia',
      photoCount: jublinJosephPhotos.length,
      cover: jublinJosephPhotos.find((photo) => photo.toLowerCase().includes('front pic.jpg')) || jublinJosephPhotos[0],
      photos: jublinJosephPhotos,
    },

    {
      title: 'Revival Meeting with Ps Sam Rajasuriar from AOG Jaffna Sri Lanka',
      name: 'Revival Meeting with Ps Sam Rajasuriar',
      location: 'Jesus Family Church Australia',
      photoCount: samRajasuriarPhotos.length,
      cover: new URL(
  '../assets/gallery/sam rajasuriar/Front Pic.JPG',
  import.meta.url
).href,
      photos: samRajasuriarPhotos,
    },

    {
      title: 'Revival Meeting with Dr Paul Ang from Paul Ang Global Vision Malaysia',
      name: 'Revival Meeting with Dr Paul Ang',
      location: 'Jesus Family Church Australia',
      photoCount: drPaulAngPhotos.length,
      cover: new URL(
  '../assets/gallery/dr paul ang/Front Pic.JPG',
  import.meta.url
).href,
      photos: drPaulAngPhotos,
    },

    {
      title: 'Street Outreach Evangelism',
      name: 'Street Outreach Evangelism',
      location: 'Jesus Family Church Australia',
      photoCount: streetOutreachPhotos.length,
      cover: new URL(
  '../assets/gallery/street outreach/IMG_6792.JPG',
  import.meta.url
).href,
      photos: streetOutreachPhotos,
    },

  ];
  

  /* =========================
     SELECTED ALBUM
     ========================= */

  if (selectedAlbum) {
    return (
      <div className="gallery-page">

        <section className="gallery-hero">
          <div className="gallery-hero-overlay">
            <div className="gallery-hero-content">
              <p>JESUS FAMILY CHURCH AUSTRALIA</p>
              <h1>Gallery</h1>
            </div>
          </div>
        </section>

        <main>
          <section className="gallery-album-view">

            <button
              className="gallery-back-button"
              onClick={() => setSelectedAlbum(null)}
            >
              ← Back to Gallery
            </button>

            <div className="gallery-album-heading">

              <span className="gallery-section-label">
                {selectedAlbum.photoCount} PHOTOS
              </span>

              <h2>{selectedAlbum.name}</h2>

              <p>{selectedAlbum.title}</p>

              <div className="gallery-location">
                📍 {selectedAlbum.location}
              </div>

            </div>

            <div className="gallery-grid">

              {selectedAlbum.photos.map((photo, index) => (
                <div
  className={`gallery-grid-item ${
    selectedAlbum.name === 'Gethsemane Gospel Church'
      ? 'gethsemane-photo'
      : ''
  }`}
  key={index}
>
  <img
    src={photo}
    alt={`${selectedAlbum.name} - Photo ${index + 1}`}
  />
</div>
              ))}

            </div>

            <div className="gallery-more-moments">

              <span>MORE MINISTRY MOMENTS</span>

              <h3>
                Thank You for Being Part of Our Journey
              </h3>

              <button
                onClick={() => setSelectedAlbum(null)}
                className="gallery-back-button"
              >
                ← View All Albums
              </button>

            </div>

          </section>
        </main>

      </div>
    )
  }

  /* =========================
     MAIN GALLERY
     ========================= */

  return (
    <div className="gallery-page">

      <section className="gallery-hero">

        <div className="gallery-hero-overlay">

          <div className="gallery-hero-content">

            <p>JESUS FAMILY CHURCH AUSTRALIA</p>

            <h1>Gallery</h1>

          </div>

        </div>

      </section>

      <section className="gallery-intro">

        <div className="gallery-intro-content">

          <span className="gallery-section-label">
            OUR MINISTRY JOURNEY
          </span>

          <h2>
            Moments We <span>Share Together</span>
          </h2>

          <p>
            From worship services and revival meetings to ministry journeys
            around the world, these moments reflect God's faithfulness and
            the beautiful fellowship we share as a church family.
          </p>

        </div>

      </section>

      <section className="gallery-albums">

        <div className="gallery-albums-grid">

          {albums.map((album, index) => (

            <article
              className="gallery-album-card"
              key={index}
            >

              <div className="gallery-album-image">

                {album.cover ? (
                  <img
  src={album.cover}
  alt={album.name}
  className={album.coverClass || ''}
/>
                ) : (
                  <div className="gallery-image-placeholder">
                    <span>
                      Jesus Family Church Australia
                    </span>
                  </div>
                )}

                <div className="gallery-photo-count">
                  {album.photoCount} Photos
                </div>

              </div>

              <div className="gallery-album-content">

                <span className="gallery-album-location">
                  {album.location}
                </span>

                <h3>{album.name}</h3>

                <p>{album.title}</p>

                <button
                  onClick={() => setSelectedAlbum(album)}
                  className="gallery-view-button"
                >
                  View Gallery →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="gallery-bottom">

        <span>YOU ARE WELCOME</span>

        <h2>
          Come and Be Part of Our Story
        </h2>

        <p>
          We would love to welcome you into our church family.
          Come worship, fellowship and grow with us.
        </p>

        
<a href="/ministries" className="primary-button">
  Explore Our Ministries →
</a>


      </section>

    </div>
  )
}

export default Gallery